import axios from 'axios';
import React, {  useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
const axiosInstance=axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:true
})

const useAxiosSecure = () => {
const navigate=useNavigate()
const {logout}=useContext(AuthContext)

    useEffect(()=>{
        axiosInstance.interceptors.response.use(response =>{
  return response
        },error=>{
   console.log(error);
            if(error.status == 401 || error.status== 403){
                logout()
                .then(()=>navigate('/login'))
                .catch(error=>{
                    console.log(error);
                })
            }
  return Promise.reject(error)

        })
    },[])
    
return axiosInstance
};

export default useAxiosSecure;