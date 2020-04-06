import React, {useReducer} from 'react';
import GitHubContext from "./GitHubContext";
import {githubReducer} from "./githubReducer";
import {apiGithub} from "../../api/apiGithub";
import {clearUsersAC, getUserAC, searchUsersAC, setLoadingAC} from "../github";

interface IProps {
    children: React.ReactNode;
}

export interface IUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    score: number;
}

export interface IUserProfile {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: false
    name: string;
    company: null
    blog: string;
    location: string;
    email: null | string;
    hireable: null | string;
    bio: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}

export interface IInitialState {
    user: IUser | IUserProfile| {};
    users: IUser[] | [];
    loading: boolean;
    repos: [];
}

export const GitHubState = (props: IProps) => {
    const initialState: IInitialState = {
        user: {},
        users: [],
        loading: false,
        repos: []
    };
    const [state, dispatch] = useReducer(githubReducer, initialState);

    const searchUsers = async (value: string) => {
        setLoading();
        const users = await apiGithub.searchUsers(value);
        dispatch(searchUsersAC(users));
    };

    const getRepos = async (name: string) => {

        dispatch({})
    };

    const getUser = async (name: string) => {
        const userProfile = await apiGithub.getUser(name);
        dispatch(getUserAC(userProfile));
    };

    const {user, users, loading, repos} = state;

    const setLoading = () => dispatch(setLoadingAC());
    const clearUsers = () => dispatch(clearUsersAC());

    return (
        <GitHubContext.Provider value={{
            searchUsers, getRepos, getUser, setLoading, clearUsers,
            user, users, loading, repos
        }}>
            {props.children}
        </GitHubContext.Provider>
    )
};



