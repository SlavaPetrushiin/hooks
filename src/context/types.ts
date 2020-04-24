export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export const CLEAR_USERS = 'CLEAR_USERS';
export const GET_REPOS = 'GET_REPOS';
export const GET_USER = 'GET_USER';
export const SEARCH_USERS = 'SEARCH_USERS';
export const SET_LOADING = 'SET_LOADING';

type PropertiesTypes<T> = T extends {[key: string] : infer U} ? U : never
export type InferActionsTypes<T extends {[ket: string]: (...arg: any[]) => any}> = ReturnType<PropertiesTypes<T>>