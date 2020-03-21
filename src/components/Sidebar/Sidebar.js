import React from 'react';
import classes from './Sidebar.module.css';

const Sidebar = props => <aside className={classes.Sidebar}>
  { props.children }
</aside>

export default Sidebar;