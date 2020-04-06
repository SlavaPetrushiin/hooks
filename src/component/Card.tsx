import React from 'react';
import {Link} from "react-router-dom";

interface IProps {
    login: string;
    getUser: (name: string) => void
}

const Card = (props: IProps) => {
    return (
        <div className="card">
            <img src={''} className="card-img-top" alt={''}/>
            <div className="card-body">
                <h5 className="card-title">{props.login}</h5>
                <Link to={'/profile/'} className="btn btn-primary">Открыть</Link>
            </div>
        </div>
    )
};

export default Card;