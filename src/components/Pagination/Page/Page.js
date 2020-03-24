import React from 'react';
import classes from './Page.module.css';

const Page = props => (
  <button
    className={[classes.Page, classes[props.state]].join(' ')} 
    onClick={props.onClick}
    disabled={props.disabled}>
    { props.children }
  </button>
)

export default Page;