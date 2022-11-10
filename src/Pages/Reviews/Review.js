import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Review = ({ id }) => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`https://pixology-server.vercel.app/reviewServices?serviceID=${id}`)

            .then(res => res.json())
            .then(data => setReview(data))
    }, [id])

    return (
        <div>
            {
                review.map(r => <ReviewCard
                    key={r._id}
                    r={r}
                ></ReviewCard>)
            }
        </div>
    );
}

export default Review;