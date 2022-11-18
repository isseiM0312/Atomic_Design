import React from "react";
import styles from './styles.css';

const Balloon = ({ children , className,...props}) => { return (<span className='balloon ' {...props}>{children}</span>); }

export default Balloon;