import React from 'react';
import Logo from '@/components/Navigation/Logo/Logo';
import SearchBar from '@/components/SearchBar/SearchBar';
import classes from './Toolbar.module.css';

const Toolbar = props => <header className={classes.Toolbar}>
  <div className={classes.Logo}>
    <Logo />
  </div>

  <SearchBar onKeyUp={props.searchbarPressedHandler} />
</header>

export default Toolbar;