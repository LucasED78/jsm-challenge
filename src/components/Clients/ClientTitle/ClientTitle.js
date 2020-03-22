import React from 'react';
import classes from './ClientTitle.module.css';

const ClientTitle = props => (
  <p className={classes.Client__Title}>
    { props.title }
  </p>
)

export default ClientTitle;