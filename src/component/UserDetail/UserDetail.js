import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    }, []);
    return (
        <div>
            <h2>Here goes user detail of {id}</h2>
            <h3>{user.name}</h3>
        </div>
    );
};

export default UserDetail;