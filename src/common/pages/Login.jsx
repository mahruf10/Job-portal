import { useContext } from 'react';
import loginAnimation from '../../assets/login.json'
import { AuthContext } from '../Context/AuthProvider';
import SocialLogin from '../SocialLogin';
import { useLocation, useNavigate,} from 'react-router-dom';
// import axios from 'axios';
import Lottie from 'lottie-react';
const Login=()=>{
 const {loginUser}=useContext(AuthContext)
 const location=useLocation()
 console.log(location)
 const from=location.state || '/'
 const navigate=useNavigate()
 const handleform=(e)=>{
    e.preventDefault()
    const form=e.target
    const email=form.email.value 
    const password=form.password.value
     loginUser(email,password)
    .then(result=>{
      console.log(result.user);
      // navigate(from)
      // axios.post('http://localhost:3000/jwt',{ email },{ withCredentials:true })
      // .then(data=>{
      //   console.log(data.data)
      // })
    })
    .catch(error=>console.log(error.message))
  }
return (
   <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-70">
      
     <Lottie animationData={loginAnimation}>  </Lottie>
    </div>
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <div className="card-body">
      <div className="card-body">
        <form onSubmit={handleform} className="fieldset">
            <h1 className="text-5xl font-bold p-2 ml-10">Login now!</h1>
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <div className="divider">OR</div>
         
        </form>
         <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
</div>
</div>
</div>
        </div>
)
}
export default Login
