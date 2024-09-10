import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function randomID(length) {
  return Math.random().toString(36).substring(2, length + 2);
}

function getUrlParams() {
  return new URLSearchParams(window.location.search);
}

function VideoPage() {
  const { id } = useParams();
  const AppId = Number(import.meta.env.VITE_APP_ID); // Ensure appID is a number
  const serverCode = import.meta.env.VITE_SERVER_SECRET;

  if (!AppId || !serverCode) {
    console.error('Environment variables are missing or invalid!');
    return <div>Error: Invalid AppID or Server Secret</div>;
  }

  const roomID = getUrlParams().get('roomID') || randomID(5);

  let myMeeting = async (element) => {
    try {
      // Generate Kit Token
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        AppId, // AppId must be a number
        serverCode,
        roomID,
        Date.now().toString(),
        randomID(5)
      );

      // Create instance from Kit Token
      const zp = ZegoUIKitPrebuilt.create(kitToken);

      // Ensure zp is defined before calling joinRoom
      if (zp) {
        zp.joinRoom({
          container: element,
          sharedLinks: [
            {
              name: 'Copy link',
              url:
                window.location.protocol +
                '//' +
                window.location.host +
                window.location.pathname +
                '?roomID=' +
                roomID,
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall, // 1-on-1 calls
          },
        });
      } else {
        console.error('Failed to initialize ZegoUIKitPrebuilt instance.');
      }
    } catch (error) {
      console.error('Error during meeting initialization:', error);
    }
  };

  return <div ref={myMeeting}></div>;
}

export default VideoPage;
