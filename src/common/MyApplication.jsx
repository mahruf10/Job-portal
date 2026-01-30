import React, { useEffect, useState } from 'react';
import useAuth from '../hook/UserAuth';
import axios from 'axios';
import useAxiosSecure from './Context/useAxiosSecure';

const MyApplication = () => {

  const { User } = useAuth()
  const [jobs, setJob] = useState([])
  const axiosSecure=useAxiosSecure()

  useEffect(() => {
    // fetch(`http://localhost:3000/job-Application?email=${User.email}`)
    // .then(res=>res.json())
    // .then(data=>{
    //   setJob(data)
    // })
    // axios.get(`http://localhost:3000/job-Application?email=${User.email}`, { withCredentials: true })
    //   .then(res => setJob(res.data))

  axiosSecure.get(`/job-Application?email=${User.email}`)
  .then(res=>setJob(res.data))
  }, [User.email])



  const handleDelete = (id) => {
    fetch(`http://localhost:3000/job-Applications/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          alert('Delete done')
        }
        const current = jobs.filter(res => res._id != id)
        setJob(current)
      })
  }

  console.log(jobs);
  return (
    <div>

      <div className="overflow-x-auto md:mb-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>

                </label>
              </th>
              <th className='text-xl font-bold'>Name</th>
              <th className='text-xl font-bold'>Industry</th>
              <th className='text-xl font-bold'>DeadLine</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              jobs.map(job => <tr key={job._id}>
                <th>
                  <label>

                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.company}
                  <br />

                </td>
                <td className='text-red-600'>{job.applicationDeadline}</td>
                <th>
                  <button onClick={() => handleDelete(job._id)} className="btn btn-ghost btn-xs">Delete</button>
                </th>
              </tr>
              )
            }


          </tbody>

        </table>
      </div>
    </div>
  );
};

export default MyApplication;