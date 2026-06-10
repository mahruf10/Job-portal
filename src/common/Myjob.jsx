import React, { useEffect, useState } from 'react';
import useAuth from '../hook/UserAuth';
import { Link } from 'react-router-dom';

const Myjob = () => {
  const [myJob, setMyjob] = useState([]);
  const [loading, setLoading] = useState(true);
  const { User } = useAuth();

  useEffect(() => {
    if (!User?.email) return;
    setLoading(true);
    fetch(`https://job-portal-server-six-theta.vercel.app/jobs?email=${User.email}`)
      .then(res => res.json())
      .then(data => {
        setMyjob(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [User?.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!myJob.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] gap-3 text-base-content/50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <p className="text-lg font-medium">No jobs posted yet</p>
        <p className="text-sm">Jobs you post will appear here.</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">
        My Posted Jobs
        <span className="ml-2 badge badge-primary badge-lg">{myJob.length}</span>
      </h2>

      {/* ── Mobile: card list (< md) ── */}
      <div className="flex flex-col gap-4 md:hidden">
        {myJob.map((job, index) => (
          <div key={job._id} className="card bg-base-100 shadow-md border border-base-200">
            <div className="card-body p-4 gap-3">
              {/* Title row */}
              <div className="flex items-center justify-between">
                <span className="badge badge-neutral badge-outline">#{index + 1}</span>
                <span className="badge badge-error badge-outline text-xs font-medium whitespace-nowrap">
                  {job.applicationDeadline}
                </span>
              </div>

              <div className="divider my-0"></div>

              <div className="grid grid-cols-1 gap-1 text-sm">
                <span className="text-base-content/50 text-xs uppercase tracking-wide">HR Email</span>
                <p className="font-medium break-all">{job.hr_email}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-base-content/50 text-xs uppercase tracking-wide">Applications</span>
                  <p className="font-bold text-lg text-primary">{job.applicationCount ?? 0}</p>
                </div>
              </div>

              <Link to={`/viewapplication/${job._id}`} className="w-full">
                <button className="btn btn-primary btn-sm w-full gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Applications
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ── Tablet / Desktop: table (≥ md) ── */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-base-200 shadow-sm">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th className="text-sm font-semibold uppercase tracking-wide w-12">#</th>
              <th className="text-sm font-semibold uppercase tracking-wide">HR Email</th>
              <th className="text-sm font-semibold uppercase tracking-wide">Deadline</th>
              <th className="text-sm font-semibold uppercase tracking-wide hidden lg:table-cell">Applications</th>
              <th className="text-sm font-semibold uppercase tracking-wide text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {myJob.map((job, index) => (
              <tr key={job._id} className="hover">
                <th className="text-base-content/50">{index + 1}</th>

                <td className="font-medium break-all max-w-[200px] lg:max-w-xs">{job.hr_email}</td>

                <td>
                  <span className="badge badge-error badge-outline font-medium whitespace-nowrap">
                    {job.applicationDeadline}
                  </span>
                </td>

                <td className="hidden lg:table-cell">
                  <span className="font-bold text-primary text-lg">{job.applicationCount ?? 0}</span>
                  <span className="text-base-content/50 text-xs ml-1">applicants</span>
                </td>

                <td className="text-right">
                  <Link to={`/viewapplication/${job._id}`}>
                    <button className="btn btn-primary btn-xs gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myjob;