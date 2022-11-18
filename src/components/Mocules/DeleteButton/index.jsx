import React from "react";
import styles from './style.module.scss';
import TrashCanIcon from "../../Atoms/TrashCanIcon";
import Balloon from "../../Atoms/Balloon";

const DeleteButton = ({className, onClick, ...props}) => (
    <span className={`${styles.root} ${className}`} {...props}>
        <TrashCanIcon onClick={onClick}/>
        <Balloon>削除する</Balloon>
    </span>
)

export default DeleteButton;