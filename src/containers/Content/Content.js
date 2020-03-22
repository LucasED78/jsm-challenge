import React, { Component } from 'react';
import classes from './Content.module.css';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import Sidebar from '@/components/Sidebar/Sidebar';
import JSMCheckbox from '@/components/JSMCheckbox/JSMCheckbox';
import ClientList from '@/components/Clients/ClientList/ClientList';
import ClientCard from '@/components/Clients/ClientCard/ClientCard';
import ClientImage from '@/components/Clients/ClientImage/ClientImage';
import ClientTitle from '@/components/Clients/ClientTitle/ClientTitle';
import { ClientInfo, ClientInfoSmall } from '@/components/Clients/ClientInfo/ClientInfo';
// import ClientRow from '@/components/ClientRow/ClientRow';

class Content extends Component {
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

          <ClientList>
            <ClientCard>
              <ClientImage imageUrl="https://randomuser.me/api/portraits/women/31.jpg" />

              <ClientTitle title="Mary Anne" />

              <ClientInfo info="adsadkasdklasdsa" />

              <ClientInfoSmall info="adkasdosadksodkas" />
            </ClientCard>

            <ClientCard>
              <ClientImage imageUrl="https://randomuser.me/api/portraits/women/31.jpg" />

              <ClientTitle title="Mary Anne" />

              <ClientInfo info="adsadkasdklasdsa" />

              <ClientInfoSmall info="adkasdosadksodkas" />
            </ClientCard>

            <ClientCard>
              <ClientImage imageUrl="https://randomuser.me/api/portraits/women/31.jpg" />

              <ClientTitle title="Mary Anne" />

              <ClientInfo info="adsadkasdklasdsa" />

              <ClientInfoSmall info="adkasdosadksodkas" />
            </ClientCard>

            <ClientCard>
              <ClientImage imageUrl="https://randomuser.me/api/portraits/women/31.jpg" />

              <ClientTitle title="Mary Anne" />

              <ClientInfo info="adsadkasdklasdsa" />

              <ClientInfoSmall info="adkasdosadksodkas" />
            </ClientCard>

            <ClientCard>
              <ClientImage imageUrl="https://randomuser.me/api/portraits/women/31.jpg" />

              <ClientTitle title="Mary Anne" />

              <ClientInfo info="adsadkasdklasdsa" />

              <ClientInfoSmall info="adkasdosadksodkas" />
            </ClientCard>

            <ClientCard>
              <ClientImage imageUrl="https://randomuser.me/api/portraits/women/31.jpg" />

              <ClientTitle title="Mary Anne" />

              <ClientInfo info="adsadkasdklasdsa" />

              <ClientInfoSmall info="adkasdosadksodkas" />
            </ClientCard>

            <ClientCard>
              <ClientImage imageUrl="https://randomuser.me/api/portraits/women/31.jpg" />

              <ClientTitle title="Mary Anne" />

              <ClientInfo info="adsadkasdklasdsa" />

              <ClientInfoSmall info="adkasdosadksodkas" />
            </ClientCard>

            <ClientCard>
              <ClientImage imageUrl="https://randomuser.me/api/portraits/women/31.jpg" />

              <ClientTitle title="Mary Anne" />

              <ClientInfo info="adsadkasdklasdsa" />

              <ClientInfoSmall info="adkasdosadksodkas" />
            </ClientCard>

            <ClientCard>
              <ClientImage imageUrl="https://randomuser.me/api/portraits/women/31.jpg" />

              <ClientTitle title="Mary Anne" />

              <ClientInfo info="adsadkasdklasdsa" />

              <ClientInfoSmall info="adkasdosadksodkas" />
            </ClientCard>

            <ClientCard>
              <ClientImage imageUrl="https://randomuser.me/api/portraits/women/31.jpg" />

              <ClientTitle title="Mary Anne" />

              <ClientInfo info="adsadkasdklasdsa" />

              <ClientInfoSmall info="adkasdosadksodkas" />
            </ClientCard>

            <ClientCard>
              <ClientImage imageUrl="https://randomuser.me/api/portraits/women/31.jpg" />

              <ClientTitle title="Mary Anne" />

              <ClientInfo info="adsadkasdklasdsa" />

              <ClientInfoSmall info="adkasdosadksodkas" />
            </ClientCard>

            <ClientCard>
              <ClientImage imageUrl="https://randomuser.me/api/portraits/women/31.jpg" />

              <ClientTitle title="Mary Anne" />

              <ClientInfo info="adsadkasdklasdsa" />

              <ClientInfoSmall info="adkasdosadksodkas" />
            </ClientCard>
            
          </ClientList>
        </div>
      </ContentWrapper>
    )
  }
}

export default Content;