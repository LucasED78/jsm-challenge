import React from 'react';
import Content from '@/containers/Content/Content';
import Layout from './containers/Layout/Layout';
import Toolbar from './components/Navigation/Toolbar/Toolbar';

const App = () => {
  return (
    <>
      <Layout>
        <Toolbar />
        <Content />
      </Layout>
    </>
  )
}

export default App;