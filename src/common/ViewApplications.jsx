 import { useLoaderData } from 'react-router-dom';

const ViewApplications = () => {
    const data=useLoaderData()
    console.log(data);

    return (
        <div>
            <h2 className="text-2xl">Application for this job:{data.length}</h2>
            {
    <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Github</th>
                        <th>LinkedIn</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                     {
                        data.map((applicant,index) => <tr key={applicant._id}>
                        <th>{index+1}</th>
                        <td>{applicant.applicant_email}</td>
                        <td>{applicant.company}</td>

                        <td>{applicant.github}</td>
                      <td>
                             {applicant.linkedin}    
                        </td>
                      </tr>)
                     }
                    
                    </tbody>
                  </table>
            }
        </div>
    );
};

export default ViewApplications;