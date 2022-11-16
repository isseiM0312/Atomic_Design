
import './Button.css';
import PropTypes from 'prop-types';

function Button({ children, color = 'default', size = 'base',backgroundColor, handleClick}) {
  return <button className={`${color} ${size}`} style={backgroundColor && { backgroundColor }} onClick={handleClick}>{children}</button>;
}
  
export default Button;



//参照https://reffect.co.jp/html/storybook#Args