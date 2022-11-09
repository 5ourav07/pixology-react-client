import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { AuthContext } from '../../Contexts/AuthProvider';
import MyReviewTable from './MyReviewTable';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this comment?');
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Comment deleted successfully');
                        const remaining = review.filter(r => r._id !== id);
                        setReview(remaining);
                    }
                })
        }
    }

    return (
        <div className='container mb-3'>
            <h2>Total Comment: {review.length}</h2>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Service Name</th>
                            <th>Reviewer Name</th>
                            <th>Reviewer Image</th>
                            <th>Reviewer Email</th>
                            <th>Comment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(r => <MyReviewTable
                                key={r._id}
                                r={r}
                                handleDelete={handleDelete}
                            ></MyReviewTable>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyReview;