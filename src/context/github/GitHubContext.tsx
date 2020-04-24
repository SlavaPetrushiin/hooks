import React from 'react';
import {IRepo, IUser, IUserProfile} from "./GitHubState";

export interface IGitHubContext {
    searchUsers: (value: string) => void;
    getRepos: (name: string) => void;
    getUser: (name: string) => void;
    setLoading: () => void;
    clearUsers: () => void;
    user: IUser | IUserProfile;
    users: IUser[];
    loading: boolean;
    repos: IRepo[];
}

const  GitHubContext = React.createContext<IGitHubContext | null>(null);

export default GitHubContext;

