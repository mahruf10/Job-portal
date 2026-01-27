import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthProvider';

const SocialLogin = () => {
    const {signwithgoogle}=useContext(AuthContext)

    const handlegoogle=()=>{
     signwithgoogle()
    }
    return (
        <div>
            <button onClick={handlegoogle} className='btn w-60 hover:bg-blue-900 rounded-xl'>Sign With Google</button>
        </div>
    );
};

export default SocialLogin;