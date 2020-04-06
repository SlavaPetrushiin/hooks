import React, {useContext} from 'react';
import Search from '../component/Search';
import Card from '../component/Card';
import GitHubContext, {IGitHubContext} from "../context/github/GitHubContext";

import Loader from "../component/Loader";
import {IUser} from "../context/github/GitHubState";


const Home = (props: {}) => {
    const {users, loading, getUser} = useContext(GitHubContext) as IGitHubContext;
    console.log(users)

    return (
        <React.Fragment>
            <Search/>

            <div className={'row'}>
                {loading &&  <Loader/>}
                { users.length === 0
                    ? <p>Список пуст</p>
                    : users.map((user: IUser) => {
                        return (
                            <div className={'col-sm-4 mb-4'} key={user.id}>
                                <Card
                                    login={user.login}
                                    getUser={getUser}
                               />
                            </div>
                        )
                    })
                }

            </div>
        </React.Fragment>
    )
};

export default Home;