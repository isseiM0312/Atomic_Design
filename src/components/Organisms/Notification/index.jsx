import React from "react";
import Img from "../../Atoms/Img";
import { Heading } from "../../Atoms/Heading";
import { InfoTxt } from "../../Atoms/Txt";
import Time from "../../Atoms/ Time";
import DeleteButton from "../../Mocules/DeleteButton";
import styles from './style.module.scss';
import image from '../../../images/img.png'

const Notification = ({
    program,
    className,
    onClickDelete,
    ...props
}) => (
    <section className={[styles.root,className].join(' ')} {...props}>
        <div>
            <Img src={image} className={styles.media} height='128' />
        </div>
        <div className={styles.body}>
            <Heading level={3} visualLevel={6}>title</Heading>
            <InfoTxt size="s">channel</InfoTxt>
            <InfoTxt size='s' className={styles.time}>
                <Time format = 'MM月DD日(ddd)HH:mm'>1507032000000</Time> ~ 
                <Time format = 'HH:mm'>1507032000000</Time>
            </InfoTxt>
            <DeleteButton onClick={onClickDelete} className={styles.del}></DeleteButton>
        </div>
    </section>
);

export default Notification;