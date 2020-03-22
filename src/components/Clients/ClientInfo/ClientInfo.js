import React from 'react';
import classes from './ClientInfo.module.css';

export const ClientInfo = props => (
  <p className={classes.ClientInfo__Info}>
    { props.info }
  </p>
)

export const ClientInfoSmall = props => (
  <small className={[classes.ClientInfo__Info, classes['ClientInfo--small']].join('')}>
    { props.info }
  </small>
)