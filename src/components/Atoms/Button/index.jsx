import React from 'react';
import styles from './style.module.scss'

function buttonFactory(type) {
    return ({children,className,...props}) => (
        <button className={[styles.button,styles[type],className].join(' ')} {...props}>
            {children}
        </button>
    )
}

export const Button = buttonFactory('default');
export const PrimaryButton = buttonFactory('primary');
export const WarningButton = buttonFactory('warning');