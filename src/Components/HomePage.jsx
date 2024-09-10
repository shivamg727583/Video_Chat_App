import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const [input,setInput] = useState('');
    const navigate = useNavigate();
const submitHandler = ()=>{
    if(input!==''){
        navigate(`/room/${input}`);
    }
   else {
    alert('Please enter a name');
   }
}

  return (
    <div className='max-w-screen-2xl mx-auto h-full bg-white p-10 flex items-center gap-4 rounded-2xl shadow-lg  '>
<input value={input} onChange={(e)=>setInput(e.target.value)} type='text' placeholder='Enter your name..'  className='p-3 rounded-lg border outline-none border-2 shadow-md border-zinc-200'/>
<button onClick={submitHandler} className='p-3 px-6 rounded-md bg-blue-600 text-white font-bold capitalize hover:bg-blue-800 shadow-md hover:shadow-sm' >Join</button>

    </div>
  )
}

export default HomePage



// {const result = await zg.loginRoom(roomID, token, {userID, userName});
// const stream = await zg.createStream(source);
// zg.startPublishingStream(streamID, localStream);
// const remoteStream = await zg.startPlayingStream(streamID);
// zg.logoutRoom(roomID);}