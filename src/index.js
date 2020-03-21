import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faSearch, faCheck)

ReactDOM.render(<App />, document.getElementById('root'))