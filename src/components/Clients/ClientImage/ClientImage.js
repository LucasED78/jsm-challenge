import React from 'react';
import classes from './ClientImage.module.css';

const ClientImage = props => (
  <img 
    src={props.imageUrl} 
    className={[classes.Client__Image, classes['Client__Image--large']].join(' ')}
    alt="client image" />
)

export default ClientImage;