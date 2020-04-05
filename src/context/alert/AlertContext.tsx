import React from 'react';

export interface AlertContextInterface {
    show: (text: string, type?: string) => void
    hide: () => void
    alert: IAlert | null
}

export interface IAlert {
    type: string
    text: string
}

const  AlertContext = React.createContext<AlertContextInterface | null>(null);

export default AlertContext;

