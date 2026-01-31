import React, { useContext } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";
import { NavLink,Link } from 'react-router-dom';
import { AuthContext } from './Context/AuthProvider';

const CarthotJobs = ({jobs}) => {
  const{loading}=useContext(AuthContext)
       if(loading){
      <p>loading</p>
    }
  const {_id,title,jobType,location,salaryRange,requirements,description,company,company_logo}=jobs
 
  return (
        <div>
           <div key={_id} className="card bg-base-100 shadow-sm h-full">
     <div className='flex gap-2'>
<figure>
    <img
    className='w-14'
      src={company_logo}
     />
  </figure>
  <div >
    <h2 className='text-xl'>{company}</h2>
    <p className='flex items-center gap-1'><FaLocationDot />{location}</p>
  </div>
 </div>

   <h2 className="card-title mt-3 md:ml-7 texl-xl font-bold">{title}</h2>
 <small className='md:ml-5 badge badge-neutral badge-outline text-white'>{jobType}</small>
  <div className="card-body">
  
    <p>{description}</p>
    <p className='flex flex-wrap gap-2'>
{
   requirements.map(req=><p className='badge badge-neutral badge-outline text-white hover:bg-gray-300 hover:text-blue-600'> {req}</p>)
    }
    </p>
    
    <div className="card-actions flex flex-nowrap justify-between items-center w-full mt-5">
     <p className='flex items-center whitespace-nowrap gap-1'>
     Salary:<FaDollarSign />{salaryRange.min}-{salaryRange.max} {salaryRange.currency}
    </p>
     <Link to={`/jobs/${_id}`}> <button className="btn btn-primary">Details</button></Link> 
    </div>
  </div>
</div>
        </div>
    );
};

export default CarthotJobs;