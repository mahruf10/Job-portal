import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout.jsx';
import Home from './Home.jsx';
import Navbar from './common/Navbar.jsx';
import Register from './common/pages/Register.jsx';
import Login from './common/pages/Login.jsx';
import AuthProvider from './common/Context/AuthProvider.jsx';

import HotJobs from './HotJobs.jsx';
import JobDetails from './common/JobDetails.jsx';
import PrivateRoute from './common/PrivateRoute.jsx';
import JobApply from './common/JobApply.jsx';
import MyApplication from './common/MyApplication.jsx';
import AddJob from './AddJob.jsx';
import Myjob from './common/Myjob.jsx';
import ViewApplications from './common/ViewApplications.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<p>route not found</p>,
    children:[
     {
      path:'/',
      element:<Home></Home>
     },
     {
    path:'/register',
    element:<Register></Register>
  },{
    path:'/login',
    element:<Login></Login>
  },{
    path:'/hotjobs',
    element:<HotJobs></HotJobs>
  },{
    path:'/applyjob/:id',
    element: <PrivateRoute><JobApply></JobApply></PrivateRoute>

  },{
    path:'/my-application',
    element:<PrivateRoute><MyApplication></MyApplication> </PrivateRoute>
  },{
    path:'addJob',
    element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
  }
  ,{
    path:'viewapplication/:job_id',
    element:<PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
    loader:({params})=>fetch(`http://localhost:3000/job-applications/jobs/${params.job_id}`)
  }
  ,{
    path:'myJob',
    element:<PrivateRoute><Myjob></Myjob></PrivateRoute>
  }
  ,{
    path:'/jobs/:id',
    element:<PrivateRoute> <JobDetails></JobDetails> </PrivateRoute> ,
    loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
  }
    ],
    
    
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
