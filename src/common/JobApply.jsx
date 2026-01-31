import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import useAuth from '../hook/UserAuth';


const JobApply = () => {
     const {id}=useParams()
     const {User}=useAuth()
     const navigate=useNavigate()
     const [company,setcompany]=useState()
   
     useEffect(()=>{
      fetch(`https://job-portal-server-six-theta.vercel.app/jobs/${id}`)
      .then(res=>res.json())
      .then(data=>
      setcompany(data.company)
      )
     },[])
   
    const handleapplyform=e=>{
       
        e.preventDefault()
        const form=e.target
        const linkedin=form.linkedin.value
        const resume=form.resume.value
        const github=form.github.value
       
        const JobApplication={
       job_id:id,
       applicant_email:User.email,
       linkedin,
       resume,
       github,
       company:company
  }
        fetch('https://job-portal-server-six-theta.vercel.app/job-Applications',{
            method:'POST',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(JobApplication)
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.insertedId){
            navigate('/my-application')
           }
        })
    }
     
    return (
    
    <div className="card bg-base-100 mx-auto shadow-2xl w-3/4">
      <div className="card-body">
        <h1 className="text-4xl font-bold text-center">Apply now & get Your favourite Job!!</h1>
        <form onSubmit={handleapplyform} className="fieldset ">
             
          <label className="label">LinkedIn</label>
          <input name='linkedin' type="url" className="input w-full" placeholder="Enter Your LinkedIn URL" />
          <label  className="label">Github</label>
          <input name='github' type="url" className="input w-full" placeholder="Enter Your Github URL" />
          <label className="label">Resume</label>
          <input name='resume' type="url" className="input w-full" placeholder="Enter Your Resume URL" />
        
          <button className="btn btn-neutral mt-4">Apply</button>
        </form>
      </div>
    </div>

    );
};

export default JobApply;