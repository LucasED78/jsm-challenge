import React from 'react';
import ClientCard from '@/components/Clients/ClientCard/ClientCard';
import ClientImage from '@/components/Clients/ClientImage/ClientImage';
import ClientTitle from '@/components/Clients/ClientTitle/ClientTitle';
import { ClientInfo, ClientInfoSmall } from '@/components/Clients/ClientInfo/ClientInfo';
import { v4 as uuid } from 'uuid';
import strUtil from '@/utils/stringUtil';

const ClientList = props => {
  return props.clients.map(e => {
    const { first: firstname, last: lastname} = e.name;
    const { city, state, postcode, street } = e.location;

    return (
      <ClientCard key={uuid()}>
        <ClientImage imageUrl={e.picture.large} />
  
        <ClientTitle title={strUtil.concatInformations([firstname, lastname])} />
  
        <ClientInfo info={street} />
  
        <ClientInfoSmall info={strUtil.concatInformations([state, city], ',')} />

        <ClientInfoSmall info={strUtil.concatInformations(['CEP', postcode], ':')} />
      </ClientCard>
    )
  })
}

export default ClientList;