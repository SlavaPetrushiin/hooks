import {SEARCH_USERS, SET_LOADING} from "./types";
import {IUser} from "./github/GitHubState";



interface ISearchUsersAC {
    type: typeof SEARCH_USERS;
    users: IUser[];
}

interface ISetLoadingAC {
    type: typeof SET_LOADING;
}

export type GithubActionTypes = ISearchUsersAC;

//actionCreator
export const searchUsersAC = (users: IUser[]) => ({
    type: SEARCH_USERS,
    payload: users
});

export const setLoadingAC = () => ({type: SET_LOADING});