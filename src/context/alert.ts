import {HIDE_ALERT, SHOW_ALERT} from "./types";

interface IHideAC  {
    type: typeof HIDE_ALERT;
}

interface IShowAC  {
    type: typeof SHOW_ALERT;
    payload: IAlertPayload
}

interface IAlertPayload {
    text: string;
    type: string;
}

export type AlertActionTypes = IHideAC | IShowAC;

//actionCreator
export const hideAC = (): IHideAC => ({type: HIDE_ALERT});
export const showAC = (text: string, type: string): IShowAC => ({
    type: SHOW_ALERT,
    payload: {text, type}
});