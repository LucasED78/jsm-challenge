import React, { Component } from 'react';
import classes from './Content.module.css';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import Sidebar from '@/components/Sidebar/Sidebar';
import JSMCheckbox from '@/components/JSMCheckbox/JSMCheckbox';
import ClientWrapper from '@/components/Clients/ClientWrapper/ClientWrapper';
import ClientService from '@/services/ClientService';
import ClientList from '../../components/Clients/ClientList/ClientList';
import Pager from '@/components/pagination/Pager/Pager';
import Page from '@/components/pagination/Page/Page';

class Content extends Component {

  state = {
    clients: [],
    loading: false,
    filters: [],
    pagination: {
      index: 1,
      isLastPage: false,
      mode: 'home'
    }
  }

  async componentDidMount(){
    this.fetchClients();
  }

  componentDidUpdate(prevProps, prevState){
    console.log(this.state.pagination)
    if (prevState.filters !== this.state.filters && this.state.filters) {
      this.filterClients();
    }
    
    if (prevState.filters.length > 0 && this.state.filters.length == 0) this.fetchClients();

    if (prevProps.searchTerm !== this.props.searchTerm) this.search()

    if (prevState.pagination.index !== this.state.pagination.index) {
      if (this.state.pagination.mode == 'home') this.fetchClients();
      else (this.filterClients());
    }
  }

  async fetchClients(){
    try {
      this.setState({ loading: true })

      const response = await ClientService.getAll(this.state.pagination.index);

      let clients = [...this.state.clients];

      clients = response.data

      const { lastPage } = response;

      const pagination = {...this.state.pagination};

      pagination.isLastPage = lastPage || false;

      this.setState({ clients: clients, loading: false, pagination: pagination });
    } catch(e){
      this.setState({ loading: false });
    }
  }
  
  checkboxChangeHandler = e => {
    const { value } = e.target;

    const filters = [...this.state.filters];

    if (!e.target.checked && this.state.filters.includes(value)) filters.splice(filters.indexOf(value))
    else filters.push(value);

    const { pagination } = this.state;

    pagination.mode = 'filter';

    this.setState({ filters: filters, mode: pagination });
  }

  search = async () => {
    try {
      this.setState({ loading: true })

      let clients = [...this.state.clients];

      const response = await ClientService.search(this.props.searchTerm);
      
      clients = response.clients;

      this.setState({ clients: clients, loading: false });
    } catch(e){
      this.setState({ loading: false });
    }
  }

  filterClients = async () => {
    try {
      this.setState({ loading: true });

      let clients = [...this.state.clients];

      const response = await ClientService.filter(this.state.filters, this.state.pagination.index);

      clients = response.data;

      const { lastPage } = response;

      const { pagination } = this.state;

      pagination.isLastPage = lastPage;

      this.setState({ clients: clients, loading: false, pagination: pagination })
    } catch(e){
      this.setState({ loading: false });
    }
  }

  pageClickedHandler = action => {
    let page;

    const pagination = {...this.state.pagination};

    let { index, isLastPage } = this.state.pagination;

    if (!isLastPage) {
      if (action == 'decrement') {
        if (index > 1) page = index -= 1;
      }
      else {
        page = index += 1;
      }    
      if (!isLastPage && index > 1) {
        pagination.index = page;
  
        this.setState({ pagination: pagination });
      }
    }
  }

  render(){
    return (
      <ContentWrapper>
        <div className={classes.Content}>
          <span>
            <Sidebar>
              <JSMCheckbox label="Especial" value="Special" name="filters[]" onChange={this.checkboxChangeHandler} />
              <JSMCheckbox label="Normal" value="Normal" name="filters[]" onChange={this.checkboxChangeHandler} />
              <JSMCheckbox label="Trabalhoso" value="Hard" name="filters[]" onChange={this.checkboxChangeHandler} />
            </Sidebar>
          </span>

          <ClientWrapper>
            <ClientList loading={this.state.loading} clients={this.state.clients} />

            <Pager>
              <Page 
                onClick={_ => this.pageClickedHandler('decrement')}
                state={this.state.pagination.index == 1 ? 'Page--disabled' : ''}>
                Anterior
              </Page>

              <Page 
                onClick={_ => this.pageClickedHandler('increment')}
                state={this.state.pagination.isLastPage ? 'Page--disabled' : ''}>
                Próximo
              </Page>
            </Pager>
          </ClientWrapper>
        </div>
      </ContentWrapper>
    )
  }
}

export default Content;