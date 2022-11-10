// import React, { useEffect, useState } from 'react';
// // import ReviewCard from './ReviewCard';

// const Extra = ({ service }) => {
//     const { serviceID } = service;
//     const [review, setReview] = useState([])
//     console.log(serviceID);

//     useEffect(() => {
//         fetch(`http://localhost:5000/reviewServices?serviceID=${serviceID}`)

//             .then(res => res.json())
//             .then(data => setReview(data))
//     }, [serviceID])

//     return (
//         <div>
//             {/* {
//                 review.map(r => <ReviewCard
//                     key={r._id}
//                     r={r}
//                 ></ReviewCard>)
//             } */}
//         </div>
//     );
// };

// export default Extra;