import React from "react";
import styles from './style.module.scss'
import TrashCanIcon from "../../Atoms/TrashCanIcon";
import Balloon from "../../Atoms/Balloon";
import HoverTipInteraction, { Tip ,Marker} from "../../Atoms/HoverTipInteraction";

const DeleteButton = ({className, onClick, ...props}) => {

    console.log(`sss${className}`)
    return(
    <HoverTipInteraction className={[styles.root, className].join(' ')} {...props} >
        <TrashCanIcon onClick={onClick}/>
        <Tip><span><Balloon>削除する</Balloon></span></Tip>
    </HoverTipInteraction>
)}

export default DeleteButton;