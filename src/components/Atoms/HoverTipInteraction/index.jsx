import React,{Component} from "react";
import styles from './style.module.scss'

const HoverInteractionPresenter = ({ children, className, ...props }) => (
    <span className={[styles.root, className].join(' ')} {...props}>
        {children}
    </span>
);

const HoverInteractionContainer = ({ presenter, children, ...props }) => {
    console.log(React.Children.count(children))
    children = React.Children.map(children, (child)=> {
        console.log(child.type.name)
        if (child.type.name === 'Tip') {
            console.log(styles.tip);
            const grandChild = React.Children.only(child.props.children);
            console.log(grandChild.className)
            return React.cloneElement(grandChild, {
                className: [styles.tip, grandChild.props.className].join(' '),
            });
        } else if (child.type.name === 'Marker') {
            console.log('t')
            const grandChild = child.props.children;
            return React.cloneElement(grandChild, {
                className: [styles.marker, grandChild.props.className].join(' '),
            });
        }
        return child
    });

    return presenter({children, ...props});
}

const HoverTipInteraction = props => (
    <HoverInteractionContainer presenter={presenterProps => <HoverInteractionPresenter {...presenterProps} />} {...props}></HoverInteractionContainer>
);

export default HoverTipInteraction;

export const Tip = () => <span>これはレンダリングされないもの</span>;
export const Marker = () => <span>これはレンダリングされないもの</span>;

//cssを適応したコンポーネントを新たに作成して渡している