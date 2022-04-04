import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = ({ review }) => {
    const { name, image, comment, ratings } = review;
    return (
        <div className='bg-[#fff6d8] p-4 rounded-lg'>
            <div className='flex items-center mb-4'>
                <div>
                    <img src={image} alt="" className='rounded-full w-2/4 mx-auto' />
                </div>
                <div>
                    <h5>{name}</h5>
                    <p className='text-center bg-black text-white rounded-2xl px-4'>Ratings: {ratings}
                        <span className='ml-2 text-[#ffd13c]'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                    </p>
                </div>
            </div>
            <article>
                <p className='text-gray-500'>{comment}</p>
            </article>
        </div>
    );
};

export default Review;