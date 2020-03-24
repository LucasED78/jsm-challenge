import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './SearchBar.module.css';

const SearchBar = props => <>
  <div className={classes.Search__Wrapper}>
    <input 
      type="text" 
      className={classes.Search} 
      placeholder={props.placeholder}
      onChange={props.onChange}
      onKeyUp={props.onKeyUp} />

    <FontAwesomeIcon icon="search" className={classes.Search__Icon} />
  </div>
</>

export default SearchBar;