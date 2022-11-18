import React from "react";
import trashicon from './trash-can.svg';
import './style.css'



export const TrashCanIconPresenter = ({
    height = 20,
    width = 20,
    ...props
}) => (
    <img
    src={trashicon}
    height={height}
    width={width}
    {...props}></img>
    );

export const IconContainer = ({
    presenter,
    onClick,
    className,
    ...props
}) => {
    if (onClick) className += ' clickable';
    return (
        presenter({onClick,className,...props})
    )
}

export const TrashCanIcon = props => (
    <IconContainer
    presenter={presenterProps => <TrashCanIconPresenter {...presenterProps} />}
    {...props} />
);


export default TrashCanIcon