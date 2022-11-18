import React, {Component} from "react";
import Img from "../../Atoms/Img";
import { Heading } from "../../Atoms/Heading";
import { InfoTxt } from "../../Atoms/Txt";
import Time from "../../Atoms/ Time";
import DeleteButton from "../../Mocules/DeleteButton";
import styles from './style.module.scss';
import image from '../../../images/img.png'
import MediaObjectLayout from "../../Atoms/MediaObjectLayout";

const NotificationPresenter = ({
    program,
    className,
    onClickDelete,
    ...props
}) => (
    <MediaObjectLayout tag="section" className={[styles.root,className].join(' ')} {...props}>
         
            <Img src={image} className={styles.media} height='128' />
  
            <Heading level={3} visualLevel={6}>title</Heading>
            <InfoTxt size="s">channel</InfoTxt>
            <InfoTxt size='s' className={styles.time}>
                <Time format = 'MM月DD日(ddd)HH:mm'>1507032000000</Time> ~ 
                <Time format = 'HH:mm'>1507032000000</Time>
            </InfoTxt>
            <DeleteButton onClick={onClickDelete} className={styles.del}></DeleteButton>

    </MediaObjectLayout>
);


export class NotificationContainer extends Component {
    constructor() {
        super();
        this.onClickDelete = this.onClickDelete;
    }

    render() {
        const { presenter , onClickDelete:propsOnClickDelete, ...props} = this.props;
        const onClickDelete = propsOnClickDelete ? this.onClickDelete : null;
        const presenterProps = { onClickDelete, ...props }
        return presenter(presenterProps)
    }

    onClickDelete(...args) {
        const { onClickDelete , program } = this.props;
        onClickDelete(...args,program);
    }
}

const Notification = props => {
    <NotificationContainer presenter= {presenterProps =>  <NotificationPresenter {...presenterProps}></NotificationPresenter>} {...props}/>
}

export default Notification;