import React from 'react';
import ClientCard from '@/components/Clients/ClientCard/ClientCard';
import Shimmer from '../../Shimmer/Shimmer';

const ClientShimmer = () => {
  return (
    <ClientCard>
      <Shimmer width="128px" height="128px" />

      <Shimmer width="100px" height="20px" margin="10px 0" />

      <Shimmer width="200px" height="20px" margin="10px 0" />

      <Shimmer width="100px" height="20px" margin="10px 0" />
    </ClientCard>
  )
}

export default ClientShimmer;