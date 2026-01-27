import {
  FaIndustry,
  FaUserTie,
  FaDollarSign,
  FaBriefcase,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
    const data=useLoaderData()
    console.log(data);
   const leftColumn = [
    {
      label: "Industry",
      value: data.company,
      icon: <FaIndustry />,
    },
    {
      label: "Salary",
      value: `${data.salaryRange.min} - ${data.salaryRange.max} ${data.salaryRange.currency}`,
      icon: <FaDollarSign />,
    },
  
    {
      label: "Job type",
      value: data.jobType,
      icon: <FaBriefcase />,
    },
    {
      label: "responsibilities",
      value: data.responsibilities.map(res=><p>{res}</p>),
      icon: <FaClock />,
    },
  ];

  const rightColumn = [
    {
      label: "Requirements",
      value: data.requirements.map(job=><p> {job}</p>),
      icon: <FaUserTie />,
    },
    {
      label: "Hr_Email",
      value: data.hr_email,
      icon: <FaUserTie />,
    },
    {
      label: "Deadline",
      value: data.applicationDeadline,
      icon: <FaCalendarAlt />,
    },
    {
      label: "Location",
      value: data.location,
      icon: <FaMapMarkerAlt />,
    },
  ];

  return (
    <div className="border rounded-lg p-6">
        <div className=" flex items-center gap-2">
   <img className="size-20" src={data.company_logo} alt="" />
      <h2 className="text-xl font-semibold mb-4">
         Information
      </h2>
        </div>
      

      <hr className="mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {leftColumn.map((item, idx) => (
            <InfoRow key={idx} {...item} />
          ))}
        </div>

        <div className="space-y-6">
          {rightColumn.map((item, idx) => (
            <InfoRow key={idx} {...item} />
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
 <Link to={`/applyjob/${data._id}`}> <button className="btn hover:bg-blue-700 " >Apply Now</button> </Link>    
      </div>
   
    </div>
  
);
};

const InfoRow = ({ icon, label, value }) => {
  return (
<div className="flex gap-4">
      <div className="text-primary text-lg mt-1">
        {icon}
      </div>
      <div>
        <p className="text-sm ">
          {label}
        </p>
        <p className="font-medium ">
          {value || "N/A"}
        </p>
      </div>
      
    </div>
    
  
    
  
  );
};
export default JobDetails;
