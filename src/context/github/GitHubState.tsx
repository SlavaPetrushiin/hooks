import React, {useReducer} from 'react';
import GitHubContext from "./GitHubContext";
import {githubReducer} from "./githubReducer";
import {apiGithub} from "../../api/apiGithub";
import {actionsGit} from "../github";

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

export interface IRepo {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: object;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url:string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: null
    size: number;
    stargazers_count: number;
    watchers_count: number
    language: string;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    forks_count: number;
    mirror_url: null
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: null;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
}

const initialState = {
    user: {} as IUser | IUserProfile,
    users: [] as IUser[],
    loading: false,
    repos: [] as IRepo[]
};
export  type IState = typeof initialState

export const GitHubState = (props: IProps) => {

    const [state, dispatch] = useReducer(githubReducer, initialState);

    const searchUsers = async (value: string) => {
        setLoading();
        const users = await apiGithub.searchUsers(value);
        const p = users as IUser[];
        dispatch(actionsGit.searchUsersAC(p));
    };

    const getRepos = async (name: string) => {
        setLoading();
        const repos = await apiGithub.getRepos(name);
        dispatch(actionsGit.getReposAC(repos))
    };

    const getUser = async (name: string) => {
        setLoading();
        const userProfile = await apiGithub.getUser(name);
        dispatch(actionsGit.getUserAC(userProfile));
    };

    const {user, users, loading, repos} = state;

    const setLoading = () => dispatch(actionsGit.setLoadingAC());
    const clearUsers = () => dispatch(actionsGit.clearUsersAC());

    return (
        <GitHubContext.Provider value={{
            searchUsers, getRepos, getUser, setLoading, clearUsers,
            user, users, loading, repos
        }}>
            {props.children}
        </GitHubContext.Provider>
    )
};


