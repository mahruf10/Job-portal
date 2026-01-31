import React, { useEffect, useState} from 'react';
import useAuth from '../hook/UserAuth';
import { Link } from 'react-router-dom';
const Myjob=()=>{
    const [myJob,setMyjob]=useState([])
    const {User}=useAuth()
    useEffect(()=>{
        fetch(`https://job-portal-server-six-theta.vercel.app/jobs?email=${User.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMyjob(data)
        })
    },[User.email])
  console.log(myJob);
    return (
        <div>
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Deadline</th>
        <th>Applications</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        myJob.map(job=> <tr key={job._id}>
        <th>1</th>
        <td>{job.hr_email}</td>
        <td>{job.applicationDeadline}</td>

<td>
            <Link to={`/viewapplication/${job._id}`}>
          
            <button className='btn btn-link'>View Application</button>
            </Link>
            
        </td>
      </tr>)
     }
    
    </tbody>
  </table>
</div>
   
        </div>
    )
}
export default Myjob