import React from "react";
import './style.css';

const HeadingPresenter = ({
    tag:Tag,
    visualLevel,
    className,
    ...props
}) => (
    <Tag className = {`${className}`}{...props}></Tag>
)

const HeadingLinedPresenter = ({
    tag:Tag,
    visualLevel,
    className,
    ...props
}) => (
    <Tag className = {`${className} underlined`}{...props}></Tag>
)

const HeadingContainer = ({
    presenter,
    level = 2,
    visualLevel,
    ...props
}) => {
    level =  Math.max(1,Math.min(6,level));
    visualLevel = (typeof visualLevel !== 'undefined') ? visualLevel : level;
    const tag = `h${level}`
    return presenter({tag,visualLevel,...props})
}

export const Heading = props => (
    <HeadingContainer presenter={presenterProps => <HeadingPresenter {...presenterProps} />} {...props}/>
)


export const HeadingUnderlined = props => (
    <HeadingContainer presenter={ presenterProps => <HeadingLinedPresenter {...presenterProps} /> } {...props}></HeadingContainer>
);