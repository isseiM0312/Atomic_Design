
import './Button.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

/**
 * Button Component for explanation of StoryBook
 */

function Button({ children, color = 'default', size = 'base', backgroundColor, handleClick }) {
  return (<div id='root'>
    <button className={`${color} ${size}`} style={backgroundColor && { backgroundColor }} onClick={handleClick}>{children}</button>
  </div>);
}

export default Button;



//参照https://reffect.co.jp/html/storybook#Args