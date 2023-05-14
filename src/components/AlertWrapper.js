import React, {useContext} from 'react'
import Alert from "./Alert";
import AlertContext from '../context/AlertContext';

function AlertWrapper() {
    const context = useContext(AlertContext);
    const { alert } = context;

    return <Alert alert={alert} />;
}

export default AlertWrapper;