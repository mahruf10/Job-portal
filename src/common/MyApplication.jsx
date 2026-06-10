import React, { useEffect, useState } from 'react';
import useAuth from '../hook/UserAuth';
import useAxiosSecure from './Context/useAxiosSecure';

const MyApplication = () => {
  const { User, loading } = useAuth();
  const [jobs, setJob] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (loading) return;
    if (!User?.email) return;

    axiosSecure
      .get(`/job-application?email=${User.email}`)
      .then(res => setJob(res.data))
      .catch(err => console.log(err));
  }, [User?.email, axiosSecure, loading]);

  const handleDelete = (id) => {
    axiosSecure.delete(`/job-applications/${id}`)
      .then(res => {
        if (res.data.deletedCount) {
          alert('Delete done');
          setJob(jobs.filter(job => job._id !== id));
        }
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!jobs.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] gap-3 text-base-content/50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p className="text-lg font-medium">No applications yet</p>
        <p className="text-sm">Jobs you apply to will appear here.</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Applications
        <span className="ml-2 badge badge-primary badge-lg">{jobs.length}</span>
      </h2>

      {/* ── Mobile: card list (< md) ── */}
      <div className="flex flex-col gap-4 md:hidden">
        {jobs.map(job => (
          <div key={job._id} className="card bg-base-100 shadow-md border border-base-200">
            <div className="card-body p-4 gap-3">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12 shrink-0">
                    <img src={job.company_logo} alt={job.company} />
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="font-bold truncate">{job.title}</p>
                 
                </div>
              </div>

           

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-base-content/50 text-xs uppercase tracking-wide">Company</span>
                  <p className="font-medium">{job.company}</p>
                </div>
                <div>
                  <span className="text-base-content/50 text-xs uppercase tracking-wide">Deadline</span>
                  <p className="font-medium text-error">{job.applicationDeadline}</p>
                </div>
              </div>

              <button
                onClick={() => handleDelete(job._id)}
                className="btn btn-error btn-outline btn-sm w-full mt-1"
              >
                Remove Application
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ── Tablet / Desktop: table (≥ md) ── */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-base-200 shadow-sm">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th className="text-sm font-semibold uppercase tracking-wide">Job</th>
              <th className="text-sm font-semibold uppercase tracking-wide">Company</th>
              <th className="text-sm font-semibold uppercase tracking-wide">Deadline</th>
              <th className="text-sm font-semibold uppercase tracking-wide text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(job => (
              <tr key={job._id} className="hover">
                {/* Job info */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-10 w-10 shrink-0">
                        <img src={job.company_logo} alt={job.company} />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold truncate max-w-[160px] lg:max-w-xs">{job.title}</p>
                     
                    </div>
                  </div>
                </td>

                {/* Company */}
                <td className="font-medium">{job.company}</td>

                {/* Deadline */}
                <td>
                  <span className="badge badge-error badge-outline font-medium whitespace-nowrap">
                    {job.applicationDeadline}
                  </span>
                </td>

                {/* Delete */}
                <td className="text-right">
                  <button
                    onClick={() => handleDelete(job._id)}
                    className="btn btn-error btn-outline btn-xs gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
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