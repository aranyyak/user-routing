import React, { useState } from 'react';
import Card from '../Card/Card'

const User = () => {
    const [users, setUsers] = useState([])
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
    return (
        <div>
            {
                users.map(user => <Card user={user}></Card>)
            }
        </div>
    );
};

export default User;