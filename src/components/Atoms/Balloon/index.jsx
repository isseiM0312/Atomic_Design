import React from "react";
import styles from './styles.module.scss';

const Balloon = ({ children , className,...props}) => { return (<span className={`${styles.balloon}`} {...props}>{children}</span>); }

export default Balloon;