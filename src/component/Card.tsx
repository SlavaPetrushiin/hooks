import React from 'react';
import {Link} from "react-router-dom";

const Card = (props: {}) => {
    return (
        <div className="card">
            <img src={''} className="card-img-top" alt={''}/>
            <div className="card-body">
                <h5 className="card-title">Имя человека</h5>
                <Link to={'/profile/' + 'react'} className="btn btn-primary">Открыть</Link>
            </div>
        </div>
    )
};

export default Card;