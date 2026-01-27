import React from 'react';
import Navbar from './common/Navbar';
import Header from './Header';
import CategorySection from './common/CategorySection';

const Home = () => {
    return (
        <div>
            <Header></Header>
             <div className={'text-center my-10'}>
                           <h2 className='text-4xl font-bold'>Browse By Category</h2>
                        <p className='text-gray-400 text-[22px]'>Find the job that’s perfect for you. about 800+ new jobs everyday</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10 ml-10'>
                <CategorySection></CategorySection>
            <CategorySection></CategorySection>
            <CategorySection></CategorySection>
                    </div>
            
           
           
        </div>
    );
};

export default Home;