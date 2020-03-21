import React from 'react';
import Logo from '@/components/Navigation/Logo/Logo';
import SearchBar from '@/components/SearchBar/SearchBar';
import classes from './Toolbar.module.css';

const Toolbar = () => <header className={classes.Toolbar}>
  <div className={classes.Logo}>
    <Logo />
  </div>

  <SearchBar />
</header>

export default Toolbar;