import axios from 'axios';
import React, {  useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
const axiosInstance=axios.create({
    baseURL:'https://job-portal-server-six-theta.vercel.app',
    withCredentials:true
})

const useAxiosSecure = () => {
const navigate=useNavigate()
const {logout}=useContext(AuthContext)

    useEffect(()=>{
        axiosInstance.interceptors.response.use(response =>{
  return response
        },error=>{
   console.log("error caught in interceptor",error);
            if(error.status=== 401 || error.status=== 403){
                logout()
                .then(()=>navigate('/login'))  
                .catch(error=>{
                    console.log(error);
                })
            }

  return Promise.reject(error)

        })
    },[])


// useEffect(() => {
//   const interceptor = axiosInstance.interceptors.response.use(
//     res => res,
//     error => {
//       const status = error?.response?.status;

//       if (status === 401 || status === 403) {
//         logout().then(() => navigate('/login'));
//       }

//       return Promise.reject(error);
//     }
//   );

//   return () => {
//     axiosInstance.interceptors.response.eject(interceptor);
//   };
// }, [logout, navigate]);





    
return axiosInstance
};

export default useAxiosSecure;