import React from "react";
import styles from './style.module.scss'

const TextBox = ({className, ...props}) => (
    <inpiut type='text' className={[styles.textbox,className].join(' ')} {...props}>テキスト</inpiut>
)

export default TextBox