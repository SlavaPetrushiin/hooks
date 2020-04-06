import React from 'react';
import {Link} from "react-router-dom";
import {IUser} from "../context/github/GitHubState";

interface IProps {
    user: IUser
}

const Card = (props: IProps) => {
    return (
        <div className="card">
            <img src={props.user.avatar_url} className="card-img-top" alt={props.user.login}/>
            <div className="card-body">
                <h5 className="card-title">{props.user.login}</h5>
                <Link to={`/profile/${props.user.login}`} className="btn btn-primary">Открыть</Link>
            </div>
        </div>
    )
};

export default Card;