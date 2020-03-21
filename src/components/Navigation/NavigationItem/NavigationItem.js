import React from 'react';
import classes from './NavigationItem.module.css';

const NavigationItem = props => <a href="#">
  { props.children }
</a>

export default NavigationItem;