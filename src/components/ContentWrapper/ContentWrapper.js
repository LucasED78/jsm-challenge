import React from 'react';
import classes from './ContentWrapper.module.css'

const ContentWrapper = props => <>
  <div className={classes.ContentWrapper}>
    { props.children }
  </div>
</>

export default ContentWrapper;