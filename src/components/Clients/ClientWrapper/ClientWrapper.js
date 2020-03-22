import React from 'react';
import classes from './ClientWrapper.module.css';

const ClientList = props => <div className={classes.Client__Wrapper}>
  { props.children }
</div>

export default ClientList;