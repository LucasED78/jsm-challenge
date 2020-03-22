import React from 'react';
import classes from './ClientCard.module.css';

const ClientCard = props => <div className={classes.Card}>
  { props.children }
</div>

export default ClientCard;