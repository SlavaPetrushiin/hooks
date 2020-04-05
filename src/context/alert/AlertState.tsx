import React, {useReducer} from 'react';
import AlertContext from "./AlertContext";
import {alertReducer} from "./alertReducer";
import {HIDE_ALERT, SHOW_ALERT} from "../types";

interface IProps {
    children: React.ReactNode
}

export const AlertState = (props: IProps) => {
    const [state, dispatch] = useReducer(alertReducer, null);

    const hide = () => dispatch({type: HIDE_ALERT});
    const show = (text: string, type: string = 'secondary') => dispatch({
        type: SHOW_ALERT,
        payload: {text, type}
    });

    return (
        <AlertContext.Provider value={{
            hide, show, alert: state
        }}>
            {props.children}
        </AlertContext.Provider>
    )
};