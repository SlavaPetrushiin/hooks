import {InferActionsTypes} from "./types";

export type AlertActionTypes = InferActionsTypes<typeof actionsAlert>;

export const actionsAlert = {
    hideAC: () => ({type: 'HIDE_ALERT'} as const),
    showAC : (text: string, type: string) => ({type: 'SHOW_ALERT', payload: {text, type}} as const),
};