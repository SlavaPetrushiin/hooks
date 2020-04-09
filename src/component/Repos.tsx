import React from "react";
import {IRepo} from "../context/github/GitHubState";

type IProps = {
    repos: IRepo[]
}

const Repos = (props: IProps) => {
    return (
        <React.Fragment>
            {props.repos.map((repo: IRepo) => {
                return (
                    <div className={'card mb-3'} key={repo.id}>
                        <div className={'card-body'}>
                            <h5>
                                <a href={repo.html_url} target={'_blank'}>{repo.name}</a>
                            </h5>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )
};

export default Repos;