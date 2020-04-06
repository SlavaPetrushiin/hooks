import axios from 'axios';
import {IUser, IUserProfile} from "../context/github/GitHubState";



const CLIENT_ID = 'Iv1.51f60f5bee1dff78';
const CLIENT_SECRET = 'ea8b173349a977b78b882d228823ddc52ed88de8';

const withCred = (url: string): string => {
    return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
};

// @ts-ignore
export const apiGithub = {
    searchUsers(value: string): Promise<IUser[]> {
        return axios.get<IResponseSearchUsers>(withCred(`https://api.github.com/search/users?q=${value}&`))
            .then(response => {
                return response.data.items;
            })
    },
    getUser(name: string): Promise<IUserProfile> {
        return axios.get<IUserProfile>(withCred(`https://api.github.com/users/${name}?`))
            .then(response => {
                return response.data;
            })
    },
    getRepos(name: string): Promise<any> {
        return axios.get<any>(withCred(`https://api.github.com/users/${name}/repos?per_page=5&`))
            .then(response => {
                debugger
                return response.data;
            })
    }
};

//Search Users interface
interface IResponseSearchUsers {
    items: IUser[]
}



