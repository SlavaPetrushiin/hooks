import {HIDE_ALERT, SHOW_ALERT} from "../types";
import {AlertActionTypes} from "../alert";

export const alertReducer = (state: any, action: AlertActionTypes) => {
    switch (action.type) {
        case SHOW_ALERT:
            return action.payload;
        case HIDE_ALERT:
            return null;
        default:
            return state;
    }
};

