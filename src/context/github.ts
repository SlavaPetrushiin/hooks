import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "./types";
import {IRepo, IUser, IUserProfile} from "./github/GitHubState";


interface ISearchUsersAC {
    type: typeof SEARCH_USERS;
    payload: IUser[];
}

interface ISetLoadingAC {
    type: typeof SET_LOADING;
}

interface IClearUsersAC {
    type: typeof CLEAR_USERS;
}

interface IGetUserAC {
    type: typeof GET_USER;
    payload: IUserProfile;
}

interface IGetReposAC {
    type: typeof GET_REPOS;
    payload: IRepo[];
}

export type GithubActionTypes = ISearchUsersAC
    | ISetLoadingAC
    | IClearUsersAC
    | IGetUserAC
    | IGetReposAC

//actionCreator
export const searchUsersAC = (users: IUser[]): ISearchUsersAC => ({
    type: SEARCH_USERS,
    payload: users
});

export const setLoadingAC = (): ISetLoadingAC => ({type: SET_LOADING});

export const clearUsersAC = (): IClearUsersAC => ({type: CLEAR_USERS});

export const getUserAC = (userProfile: IUserProfile): IGetUserAC => ({type: GET_USER, payload: userProfile});

export const getReposAC = (repos: IRepo[]): IGetReposAC => ({type: GET_REPOS, payload: repos});

