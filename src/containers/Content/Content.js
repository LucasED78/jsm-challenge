import React, { Component } from 'react';
import classes from './Content.module.css';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import Sidebar from '@/components/Sidebar/Sidebar';
import JSMCheckbox from '../../components/JSMCheckbox/JSMCheckbox';

class Content extends Component {
  render(){
    return (
      <ContentWrapper>
        <div className={classes.Content}>
          <Sidebar>
            <JSMCheckbox label="Especial" value="Especial" name="filters[]" />
            <JSMCheckbox label="Normal" value="Normal" name="filters[]" />
            <JSMCheckbox label="Trabalhoso" value="Trabalhoso" name="filters[]" />
          </Sidebar>

          <div>
            asdsad
          </div>
        </div>
      </ContentWrapper>
    )
  }
}

export default Content;