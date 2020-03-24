import React from 'react';
import classes from './Pager.module.css';

const Pager = props => <div className={classes.Pager}>
  { props.children }
</div>

export default Pager;