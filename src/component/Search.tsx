import React, {useContext, useState} from 'react';
import AlertContext, { AlertContextInterface } from "../context/alert/AlertContext";
import GitHubContext, {IGitHubContext} from "../context/github/GitHubContext";

const Search = (props: {}) => {
    const [value, setValue] = useState<string>('');
    const {show} = useContext(AlertContext) as AlertContextInterface;
    const {searchUsers} = useContext(GitHubContext) as IGitHubContext;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    const handleSubmit = (e:  React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key !== 'Enter') return;

        if(value.trim()){
            searchUsers(value.trim());
        } else {
            if(show) {
                show('Введите данные пользователя!')
            }
        }
    };

    return (
        <div className={'form-group'}>
            <input
                type='text'
                className='form-control'
                placeholder={'Введите имя пользователя'}
                value={value}
                onChange={handleChange}
                onKeyPress={handleSubmit}
            />
        </div>
    )
};

export default Search;