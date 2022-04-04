import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import hospital_dashboard from './hospital_dashboard.webp';

const Home = () => {
    const [reviews] = useReviews();
    return (
        <div className=''>
            <section className='flex lg:flex-row md:flex-row flex-col items-center justify-center my-8 bg-[#ffd13c] p-4 rounded-lg'>
                <article className='lg:w-2/4 md:w-2/4'>
                    <h1 className='text-5xl text-white'>Enhance Hospital work activity with <span className='text-[#00b838]'>Hospital Management System | HMS Software </span></h1>
                    <p className='text-white-500 mt-4'><span className='bg-[#002147] text-white'>Hospital - Hospital Management System or HMS Software is mainly a system that can help to maintain any hospital activities properly and easily. Moreover, the hospital management system can be used as clinical software.</span> Also, it helps to keep records and monitor the activities of any hospital. So, this is a complete HIMS software and the cheapest and easiest solution for managing any hospital activities.</p>
                </article>
                <div className='lg:w-2/4 md:w-2/4 lg:pt-0 md:pt-0 pt-4'>
                    <img src={hospital_dashboard} alt="" />
                </div>
            </section>
            <section className='flex items-center'>
                <div style={{ writingMode: 'tb-rl' }} className='mr-4 bg-[#fd627a] text-white p-4 rounded-[2rem]'>
                    <p className='text-3xl'>Brief Reviews</p>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-8'>
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </section >
            <div className='text-center'>
                <Link to={'/reviews'}>
                    <button className='bg-[#fd627a] px-4 py-2 text-white rounded-md hover:bg-[#ffd13c] hover:text-black transition-all duration-200'>See More</button>
                </Link>
            </div>
        </div >
    );
};

export default Home;