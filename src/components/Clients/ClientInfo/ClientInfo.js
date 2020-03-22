import React from 'react';
import classes from './ClientInfo.module.css';

export const ClientInfo = props => (
  <p className={classes.Client__Info}>
    { props.info }
  </p>
)

export const ClientInfoSmall = props => (
  <small className={[classes.Client__Info, classes['Client__Info--small']].join('')}>
    { props.info }
  </small>
)