import React, { Component } from 'react';
import classes from './Content.module.css';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import Sidebar from '@/components/Sidebar/Sidebar';
import JSMCheckbox from '@/components/JSMCheckbox/JSMCheckbox';
import ClientWrapper from '@/components/Clients/ClientWrapper/ClientWrapper';
import ClientService from '@/services/ClientService';
import ClientList from '../../components/Clients/ClientList/ClientList';
import { filterSpecial } from '@/utils/clientUtils';

class Content extends Component {

  state = {
    clients: [],
    loading: false,
    filters: []
  }

  async componentDidMount(){
    this.fetchClients();
  }

  componentDidUpdate(_, prevState){
    if (prevState.filters !== this.state.filters && this.state.filters) {
      this.filterClients();
    }
    
    if (prevState.filters.length > 0 && this.state.filters.length == 0) this.fetchClients();
  }

  async fetchClients(){
    this.setState({ loading: true })

    const data = await ClientService.getAll();

    let clients = [...this.state.clients];

    clients = data;

    this.setState({ clients: clients });

    this.setState({ loading: false })
  }
  
  checkboxChangeHandler = e => {
    const { value } = e.target;

    const filters = [...this.state.filters];

    if (!e.target.checked && this.state.filters.includes(value)) filters.splice(filters.indexOf(value))
    else filters.push(value);

    this.setState({ filters: filters });
  }

  filterClients = () => {
    if (this.state.filters.includes('Special')) {
      const filteredClients = this.state.clients.filter(e => filterSpecial(e.location.coordinates.latitude, e.location.coordinates.longitude));

      let clients = [...this.state.clients];

      clients = filteredClients;

      this.setState({ clients: clients });
      
    }
  }

  render(){
    return (
      <ContentWrapper>
        <div className={classes.Content}>
          <span>
            <Sidebar>
              <JSMCheckbox label="Especial" value="Special" name="filters[]" onChange={this.checkboxChangeHandler} />
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