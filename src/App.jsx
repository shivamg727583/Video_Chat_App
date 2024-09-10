import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import VideoPage from './Components/VideoPage';
import HomePage from './Components/HomePage';

function App() {
  const router = createBrowserRouter([
{
  path: '/',
  element: <HomePage />
},
{
  path:'/room/:id',
  element: <VideoPage />
}
  ])
  return (
    <div className='App w-full min-h-screen bg-gray-200 flex items-center justify-center'>
      <RouterProvider router={router} />

    </div>
  )
}

export default App