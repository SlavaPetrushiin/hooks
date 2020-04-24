import React, {useReducer} from 'react';
import AlertContext from "./AlertContext";
import {alertReducer} from "./alertReducer";
import {actionsAlert} from "../alert";

interface IProps {
    children: React.ReactNode
}

export const AlertState = (props: IProps) => {
    const [state, dispatch] = useReducer(alertReducer, null);

    const hide = () => dispatch(actionsAlert.hideAC());
    const show = (text: string, type: string = 'secondary') => dispatch(actionsAlert.showAC(text, type));

    return (
        <AlertContext.Provider value={{
            hide, show, alert: state
        }}>
            {props.children}
        </AlertContext.Provider>
    )
};