import axios from 'axios';

let URL = 'https://gims.yga.org.tr/cms/api/v1/';

export default {
  getSchools(params){
    return axios.get(URL + params).then(response => {
      return response.data;
    });
  },
  getVolunteers(params){
    return axios.get(URL + 'volunteers').then(response => {
      return response.data;
    });
  },
  giftCardInfoCreate(data) {
    return axios.post(URL + 'gift-card/info/create', data).then(response => {
      return response.data;
    });
  },

}
