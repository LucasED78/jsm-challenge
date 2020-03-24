import api from './api';

export default {
  getAll: async page => {
    try {
      const response = await api().get(`/client?page=${page}`);

      if (response.data) {
        return response.data;
      }

      throw new Error('no data founded');
    } catch(e){
      throw new Error('error trying to fetch clients');
    }
  },
  search: async term => {
    try {
      const response = await api().post('/client/search', {
        query: term
      });

      if (response.data) {
        return response.data;
      }

      throw new Error('no data founded');
    } catch(e){
      throw new Error('error trying to fetch clients');
    }
  },
  filter: async (filters, page) => {
    try {
      const response = await api().post(`/client/filter?page=${page}`, {
        filters
      });

      if (response.data) {
        return response.data;
      }

      throw new Error('no data founded');
    } catch(e){
      throw new Error('error trying to fetch clients');
    }
  }
}