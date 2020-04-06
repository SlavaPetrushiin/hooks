import React from 'react';

export interface IGitHubContext {
    searchUsers: (value: string) => void;
    getRepos: (name: string) => void;
    getUser: (name: string) => void;
    setLoading: () => void;
    clearUsers: () => void;
    user: {};
    users: []
    loading: boolean
    repos: []
}

const  GitHubContext = React.createContext<IGitHubContext | null>(null);

export default GitHubContext;

