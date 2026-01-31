import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthProvider';
import { useNavigate} from 'react-router-dom';
const SocialLogin = () => {
    const {signwithgoogle}=useContext(AuthContext)
    const navigate=useNavigate()

    const handlegoogle=()=>{
     signwithgoogle()
     navigate('/')
    }
    return (
        <div>
            <button onClick={handlegoogle} className='btn w-60 hover:bg-blue-900 rounded-xl'>Sign With Google</button>
        </div>
    );
};

export default SocialLogin;