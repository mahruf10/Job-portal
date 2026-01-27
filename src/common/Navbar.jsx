import { Link, NavLink } from 'react-router-dom';
import  { useContext } from 'react';
import { AuthContext } from './Context/AuthProvider';
import logo from '../assets/icons8-permanent-job-96.png'
import { motion } from "motion/react"
const Navbar = () => {
  const {User,logout}=useContext(AuthContext)

   const handlelogout=()=>{
   logout()
   .then(()=>{
    alert('logout done');
   })
   .catch(error=>{
    alert(error.message)
   })
   }
    const links=
        <>
       <NavLink to={'/'} className={({isActive})=>isActive ? 'bg-gray-500 rounded xl ':''}> <li>Home </li></NavLink>
       <NavLink to={'/my-application'} className={({isActive})=>isActive ? 'bg-gray-500 rounded-[5px]':''}> <li>My Application </li></NavLink>
       <NavLink to={'/addJob'} className={({isActive})=>isActive ? 'bg-gray-500 rounded-[5px]':''}> <li>Add a Job </li></NavLink>
       <NavLink to={'/myJob'} className={({isActive})=>isActive ? 'bg-gray-500 rounded-[5px]':''}> <li>My Job </li></NavLink>
       
        </>
         
    
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow  gap-5">
       {links}
      </ul>
    </div>
    <img className='size-13' src={logo} alt="" />
    <a className="btn btn-ghost text-xl">Job Portal</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5">
     {links}
    </ul>
  </div>
  <div className="navbar-end gap-8 flex">
    {User ? <> <motion.button whileHover={{y:-3}} className='hover:text-blue-400 hover:underline' onClick={handlelogout}>Logout</motion.button></>: <>
    <Link className='hover:underline hover:text-blue-300' to={'/register'}> <motion.p whileHover={{y:-3}}> Register</motion.p></Link>
    <Link to={'/login'}> <button className="btn">SignIn</button> </Link>
    </> }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;