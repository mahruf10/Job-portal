import React from 'react';
import { easeOut, motion } from "motion/react"
import img_1 from "../src/assets/team/team1.jpg"
import img_2 from "../src/assets/team/team2.jpg"
const Header = () => {
    return (
        <div className="hero bg-base-200 min-h-80">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='w-1/2'>
 <motion.img
      src={img_1}
      animate={{y:[30,40,30]}}
      transition={{duration:5,repeat:Infinity}}
      className="max-w-sm  w-55 rounded-t-[30px] rounded-br-[30px] border-l-4 border-b-4 border-blue-500 shadow-2xl"
    />

    <motion.img
      src={img_2}
      animate={{x:[100,150,100]}}
      transition={{duration:10,repeat:Infinity}}
      className="max-w-sm  w-55 rounded-t-[30px] rounded-br-[30px] border-l-4 border-b-4 border-blue-500 shadow-2xl"
    />
    </div>
 
    
   
    <div className='w-1/2'>
      <motion.h1 
      animate={{x:30}}
      transition={{duration:2,delay:1,ease:easeOut,repeat:Infinity}}
      className="text-5xl font-bold">Latest <motion.span animate={{color:["#F54927","#F59F27","#046133"]}}
       transition={{duration:1.5,repeat:Infinity}}> Job</motion.span> for You!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Header;