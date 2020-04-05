import React, {useContext} from 'react';
import AlertContext, { AlertContextInterface } from '../context/alert/AlertContext';

const Alert = () => {
    const {alert, hide} = useContext(AlertContext) as AlertContextInterface;

    if(!alert) return null;

    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`} role="alert">
            {alert.text}
            <button type="button" className="close" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
};

export default Alert;