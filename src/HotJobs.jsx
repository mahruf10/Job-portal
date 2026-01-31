import React, { useContext, useEffect, useState } from 'react';
import CarthotJobs from './common/CarthotJobs';
import axios from 'axios';
import { AuthContext } from './common/Context/AuthProvider';

const HotJobs = () => {
    const [jobs,setjobs]=useState([])
  const {loading}=useContext(AuthContext)

    useEffect(()=>{
//   fetch('https://job-portal-server-six-theta.vercel.app/jobs')
//   .then(res=>res.json())
//   .then(data=>setjobs(data))
axios.get('https://job-portal-server-six-theta.vercel.app/jobs')
.then(res=> setjobs(res.data))
    },[])
    console.log(jobs);

      if(loading){
    return <h2 className='text-3xl text-center'>Loading Jobs...</h2>
}
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 p-5'>
            {
                jobs.map((job)=> <CarthotJobs key={job._id} jobs={job}></CarthotJobs>)
            }
        </div>
    );
};

export default HotJobs;