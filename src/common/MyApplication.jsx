import React, { useEffect, useState } from 'react';
import useAuth from '../hook/UserAuth';
import useAxiosSecure from './Context/useAxiosSecure';

const MyApplication = () => {
  const { User, loading } = useAuth(); // ✅ এক জায়গা থেকেই নাও
  const [jobs, setJob] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (loading) return;          // 🔥 JWT not ready
    if (!User?.email) return;

    axiosSecure
      .get(`/job-application?email=${User.email}`)
      .then(res => setJob(res.data))
      .catch(err => console.log(err));
  }, [User.email]);

  const handleDelete = (id) => {
    axiosSecure.delete(`/job-applications/${id}`)
      .then(res => {
        if (res.data.deletedCount) {
          alert('Delete done');
          setJob(jobs.filter(job => job._id !== id));
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto md:mb-20">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th className='text-xl font-bold'>Name</th>
              <th className='text-xl font-bold'>Industry</th>
              <th className='text-xl font-bold'>DeadLine</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(job => (
              <tr key={job._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={job.company_logo} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>{job.company}</td>
                <td className='text-red-600'>{job.applicationDeadline}</td>
                <td>
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
