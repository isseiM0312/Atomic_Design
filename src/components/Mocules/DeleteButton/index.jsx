import React from "react";
import './style.css';
import TrashCanIcon from "../../Atoms/TrashCanIcon";
import Balloon from "../../Atoms/Balloon";

const DeleteButton = ({className, onClick, ...props}) => (
    <span className={`${'root'} ${className}`} {...props}>
        <TrashCanIcon onClick={onClick}/>
        <Balloon>削除する</Balloon>
    </span>
)

export default DeleteButton;