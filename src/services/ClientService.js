import api from './api';

export default {
  getAll: async () => {
    try {
      const response = await api().get('/frontend-challenge.json');

      if (response.data) {
        return response.data.results;
      }

      throw new Error('no data founded');
    } catch(e){
      throw new Error('error trying to fetch clients');
    }
  }
}