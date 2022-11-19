import React from "react";
import styles from './style.module.scss';
const txtFactory = role => ({tag:Tag = 'p', size = 'm', className, ...props}) => (
    <Tag className={`${role} ${size} ${className}`} 
    {...props}></Tag>
)

 ;
export const Txt = txtFactory('default');
export const InfoTxt = txtFactory('info');
export const WaringTxt = txtFactory('warning');
