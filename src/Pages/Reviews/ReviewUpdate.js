import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ReviewUpdate = () => {
    const storedUser = useLoaderData();

    const [user, setUser] = useState(storedUser);

    const handleUpdateUser = event => {
        event.preventDefault();
        fetch(`https://pixology-server.vercel.app/review/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Comment updated');
                }
            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...user }
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div>
            <form onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} defaultValue={storedUser.comment} type="text" name='comment' placeholder='comment' required />
                <br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default ReviewUpdate;