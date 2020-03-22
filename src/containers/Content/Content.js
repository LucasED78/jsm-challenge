import React, { Component } from 'react';
import classes from './Content.module.css';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import Sidebar from '@/components/Sidebar/Sidebar';
import JSMCheckbox from '@/components/JSMCheckbox/JSMCheckbox';
import ClientWrapper from '@/components/Clients/ClientWrapper/ClientWrapper';
import ClientService from '@/services/ClientService';
import ClientList from '../../components/Clients/ClientList/ClientList';
// import ClientRow from '@/components/ClientRow/ClientRow';

class Content extends Component {

  state = {
    clients: [],
    loading: false
  }

  async componentDidMount(){
    this.setState({ loading: true })

    const data = await ClientService.getAll();

    let clients = [...this.state.clients];

    clients = data;

    this.setState({ clients: clients });

    this.setState({ loading: false })
  }

  render(){
    return (
      <ContentWrapper>
        <div className={classes.Content}>
          <span>
            <Sidebar>
              <JSMCheckbox label="Especial" value="Especial" name="filters[]" />
              <JSMCheckbox label="Normal" value="Normal" name="filters[]" />
              <JSMCheckbox label="Trabalhoso" value="Trabalhoso" name="filters[]" />
            </Sidebar>
          </span>

          <ClientWrapper>
            <ClientList loading={this.state.loading} clients={this.state.clients} />
          </ClientWrapper>
        </div>
      </ContentWrapper>
    )
  }
}

export default Content;