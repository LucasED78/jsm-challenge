import React from 'react';
import classes from './ClientList.module.css';

const ClientList = props => <div className={classes.Client__List}>
  { props.children }
</div>

export default ClientList;