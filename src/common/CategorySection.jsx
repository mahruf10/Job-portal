import React from 'react';
import paper from '../assets/paper.png'
import { NavLink } from 'react-router-dom';
const CategorySection = () => {
    return (
        <div>
          
           
          <div > 
           <NavLink to={'/hotjobs'}> <div className='flex gap-3 border border-gray-600 w-70 rounded-2xl p-5'>
                <img className='w-20' src={paper} alt="" />
          <div>  <h2 className='text-xl font-bold '>Content Writer</h2>
            <p className='text-gray-400'>140 jobs Available</p></div> 
          </div></NavLink>
             
          </div>
          
          
           
            
        </div>
    );
};

export default CategorySection;