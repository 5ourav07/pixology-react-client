import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { AuthContext } from '../../Contexts/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import MyReviewTable from './MyReviewTable';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [review, setReview] = useState([])
    useTitle('My Review');

    useEffect(() => {
        fetch(`https://pixology-server.vercel.app/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('pixology')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReview(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this comment?');
        if (proceed) {
            fetch(`https://pixology-server.vercel.app/review/${id}`, {
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
                {
                    review.length !== 0
                        ?
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
                        :
                        <h1>No Review Found</h1>

                }
            </div>
        </div>
    );
};

export default MyReview;