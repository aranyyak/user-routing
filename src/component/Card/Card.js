import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {name, username, email, id} = props.user;
    const cardStyle = {
        border: '1px solid gray',
        borderRadius: '5px',
        margin: '10px 200px',
        padding: '10px'

    }
    return (
        <div style={cardStyle}>
            <h2>Name: {name}</h2>
            <h4>Mail: {email}</h4>
            <Button variant="outlined" >
                <Link to={`/user/${id}`}>See Details</Link>
            </Button>
        </div>
    );
};

export default Card;