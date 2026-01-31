import { useNavigate } from "react-router-dom"
import useAuth from './hook/UserAuth';
const AddJob = () => {
const navigate=useNavigate()

    const {User}=useAuth()
    const handleform=(e)=>{
     e.preventDefault()
    const formData=new FormData(e.target)
    // console.log(formData.entries());
    const initialData=Object.fromEntries(formData.entries())
    console.log(initialData);
    const{min,max,currency, ...newJob}=initialData
    console.log(min,max,currency,newJob);
    newJob.salaryRange= {min:parseInt(min),max:parseInt(max),currency}
    // eikhane split kortesi new line dhore.eitar mane holo eitar moddho joto newline thakbe shobgulare ekta array te ana
    newJob.requirements=newJob.requirements.split('\n') 
    newJob.responsibilities=newJob.responsibilities.split('\n')
    console.log(newJob)

     fetch('https://job-portal-server-six-theta.vercel.app/jobs',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(newJob)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
  })
  }
     navigate('/myJob')
  return (
    <div>

      <div className="card bg-base-100 mx-auto shadow-2xl w-11/12">
        <div className="card-body">
          <form onSubmit={handleform} className="fieldset">
            <legend className="fieldset-legend">Title</legend>
            <input type="text" name="title" className="input w-full" placeholder="Enter The job title " />
            <legend className="fieldset-legend">CompanyName</legend>
            <input type="text" name="company" className="input w-full" placeholder="Enter The companyName" />
            {/* company logo */}
            <legend className="fieldset-legend">Company logo</legend>
            <label className="input validator">
              <input
                name="company_logo"
                type="url"
                required
                placeholder="https://"

                pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
              // title="Must be valid URL"
              />
              <p className="validator-hint">Must be valid URL</p>

            </label>

            <legend className="fieldset-legend">Location</legend>
            <input type="text" name="location" className="input w-full" placeholder="Enter The Location" />
            {/* category */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Category</legend>
              <select defaultValue="Pick a Category" name="category" className="select">
                <option disabled={true}>Pick a Category</option>
                <option>Engineering</option>
                <option>Finance</option>
                <option>Teaching</option>
                <option>Marketing</option>
              </select>

            </fieldset>
            <legend className="fieldset-legend">DeadLine</legend>
            <input type="text" name="applicationDeadline" className="input w-full" placeholder="deadline" />
            {/* job Type */}

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Job Type</legend>
              <select defaultValue="Pick a job Type" name="jobType" className="select">
                <option disabled={true}>Pick a Job Type</option>
                <option>Full-time</option>
                <option>Intern</option>
                <option>Part-time</option>
                <option>Remote</option>
              </select>
            </fieldset>
             <legend className="fieldset-legend">HR_Email</legend>
            <input type="email" name="hr_email" className="input w-full" defaultValue={User?.email} placeholder="Enter The Email of HR" />
            {/* salaryRange */}
            <legend className="fieldset-legend">salaryRange</legend>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center">

              <div>

                <input type="text" name="min" className="input " placeholder="Min" />
              </div>
              <div>

                <input type="text" name="max" className="input" placeholder="Max" />
              </div>

              <div>
                <fieldset className="fieldset">
                  {/* <legend className="fieldset-legend">Currency</legend> */}
                  <select defaultValue="Put Your currency" name="currency" className="select">
                    <option disabled={true}>Put Your currency</option>
                    <option>BDT</option>
                    <option>USD</option>
                    <option>INR</option>
                  </select>
                </fieldset>
              </div>
            </div>
            <div>
              <legend className="fieldset-legend">Requirements</legend>
              <textarea className="textarea" name="requirements" placeholder="Put Your all requirements by a new line"></textarea>
              {/* <legend className="fieldset-legend">Description</legend>
              <textarea name="description" placeholder="Enter Your description" className="textarea textarea-primary"></textarea> */}
            </div>
            <div>
              <legend className="fieldset-legend">Responsibilities</legend>
              <textarea className="textarea" name="responsibilities" placeholder="Put Your all Responsibilities by a new line"></textarea>
              <legend className="fieldset-legend">Description</legend>
              <textarea name="description" placeholder="Enter Your description" className="textarea textarea-primary"></textarea>
            </div>

            <button className="btn btn-neutral mt-4">Post</button>
          </form>
        </div>
      </div>

    </div>
  );

}
export default AddJob;