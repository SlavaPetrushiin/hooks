import {IRepo, IUser, IUserProfile} from "./github/GitHubState";
import { InferActionsTypes } from "./types";

export type GithubActionTypes = InferActionsTypes<typeof actionsGit>

export const actionsGit = {
    searchUsersAC : (users: IUser[]) => ({type: 'SEARCH_USERS', payload: users} as const),
    setLoadingAC : () => ({type: 'SET_LOADING'} as const),
    clearUsersAC : () => ({type: 'CLEAR_USERS'} as const),
    getUserAC : (userProfile: IUserProfile) => ({type: 'GET_USER', payload: userProfile} as const),
    getReposAC : (repos: IRepo[]) => ({type: 'GET_REPOS', payload: repos} as const)
};


