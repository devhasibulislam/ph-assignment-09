import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-8'>
            {reviews.map(review => <Review
                key={review.id}
                review={review}
            ></Review>)}
        </div>
    );
};

export default Reviews;