
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Inbox from './components/Inbox';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Mail from './components/Mail';
import SendEmail from './components/SendEmail';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {

  
  

  return (
    <div>
      <RouterProvider router = {appRouter}/>
      <div className='absolute w-[30% bottom-0 right-20 z-10'>
        <SendEmail/>
        <Toaster/>
      </div>
    </div>
  );
}

export default App
