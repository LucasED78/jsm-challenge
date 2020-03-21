import React from 'react';
import Layout from './containers/Layout/Layout';
import Toolbar from './components/Navigation/Toolbar/Toolbar';

const App = () => {
  return (
    <>
      <Layout>
        <Toolbar />
      </Layout>
    </>
  )
}

export default App;