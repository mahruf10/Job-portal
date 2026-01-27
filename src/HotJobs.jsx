import React, { useEffect, useState } from 'react';
import CarthotJobs from './common/CarthotJobs';
import axios from 'axios';
const HotJobs = () => {
    const [jobs,setjobs]=useState([])

    useEffect(()=>{
//   fetch('http://localhost:3000/jobs')
//   .then(res=>res.json())
//   .then(data=>setjobs(data))
axios.get('http://localhost:3000/jobs')
.then(res=> setjobs(res.data))
    },[])
    console.log(jobs);
    return (
        <div className='grid grid-cols-1 md:grid grid-cols-3 lg:grid grid-cols-4 gap-3'>
            {
                jobs.map((job)=> <CarthotJobs key={job._id} jobs={job}></CarthotJobs>)
            }
        </div>
    );
};

export default HotJobs;