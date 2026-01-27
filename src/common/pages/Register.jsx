import React, { useContext } from 'react';
import RegiterAnimation from '../../assets/register.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../Context/AuthProvider';
import SocialLogin from '../SocialLogin';
const Register = () => {
  const{CreateUser}=useContext(AuthContext)
  const handleform=(e)=>{
    e.preventDefault()
    const form=e.target
    const email=form.email.value 
    const password=form.password.value
     CreateUser(email,password)
    .then(result=>{
      console.log(result.user);
    })
    .catch(error=>console.log(error.message))
  }
  
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-80">
      
     <Lottie animationData={RegiterAnimation}>  </Lottie>
    </div>
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <div className="card-body">
      <div className="card-body">
        <form onSubmit={handleform} className="fieldset">
            <h1 className="text-5xl font-bold">Register now!</h1>
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
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
    );
};

export default Register;