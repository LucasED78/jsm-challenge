import React from 'react';
import classes from './Layout.module.css';

const Layout = props => {
  console.log(classes);
  return <div className={classes}>
  { props.children }
</div>
}

export default Layout;