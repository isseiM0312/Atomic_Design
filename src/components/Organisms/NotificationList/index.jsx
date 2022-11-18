import React from "react";
import styles from './styles.module.scss';
import Notification from "../Notification";

const NotificationList = ({
    programs,
    onClickDelete,
    ...props
}) => (
    <div {...props}>
        {programs.map((program, idx) => (<Notification key={idx} className={styles.item} program={program} onClickDelete={onClickDelete}></Notification>))}
    </div>
);

export default NotificationList