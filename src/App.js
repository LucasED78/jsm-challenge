import React, { Component } from 'react';
import Content from '@/containers/Content/Content';
import Layout from './containers/Layout/Layout';
import Toolbar from './components/Navigation/Toolbar/Toolbar';

class App extends Component {

  state = {
    searchTerm: ''
  }

  searchbarPressedHandler = (e) => {
    if (e.keyCode == 13) this.setState({ searchTerm: e.target.value })
  }

  render(){
    return (
      <>
        <Layout>
          <Toolbar searchbarPressedHandler={this.searchbarPressedHandler} />
          <Content searchTerm={this.state.searchTerm} />
        </Layout>
      </>
    )
  }
}

export default App;