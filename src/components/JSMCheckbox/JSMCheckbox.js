import React from 'react';
import classes from './JSMCheckbox.module.css';

const JSMCheckbox = props => <label className={classes.JSMCheckbox__wrapper}>
  <input 
    type="checkbox" 
    name={props.name} 
    className={classes.JSMCheckbox__input} 
    onChange={props.onChange} />
  <span className={classes.JSMCheckbox}></span>
  { props.label }
</label>

export default JSMCheckbox;