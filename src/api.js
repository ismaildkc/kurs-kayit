import axios from 'axios';

let URL = 'https://bilimseferberligi.org/cms/api/v1/';

export default {
  donationList(data){
    return axios.post(URL + 'donation/list' , data)
    .then(response => {
      return response.data;
    });
  },
  loginFacebook(){
    return axios.get(URL + 'auth/login/facebook').then(response => {
      return response.data;
    });
  },
  infoCreate(data) {
    return axios.post(URL + 'donation/info/create', data).then(response => {
      return response.data;
    });
  },
  campaignInfoCreate(data) {
    return axios.post(URL + 'campaign/info/create', data).then(response => {
      return response.data;
    });
  },
  giftCardInfoCreate(data) {
    return axios.post(URL + 'gift-card/info/create', data).then(response => {
      return response.data;
    });
  },
  paymentTeksefer(data) {
    return axios.post(URL + 'donation/payment/single', data).then(response => {
      return response.data;
    });
  },
  campaignPaymentTeksefer(data){
    return axios.post(URL + 'campaign/payment/single', data).then(response => {
      return response.data;
    });
  },
  giftCardPaymentTeksefer(data){
    return axios.post(URL + 'gift-card/payment/single', data).then(response => {
      return response.data;
    });
  },
  paymentDuzenli(data) {
    return axios.post(URL + 'donation/payment/subscription', data).then(response => {
      return response.data;
    });
  },
  checkStatus(data) {
    return axios.post(URL + 'donation/payment/conversation/check', data).then(response => {
      return response.data;
    });
  },
  campaignCheckStatus(data) {
    return axios.post(URL + 'campaign/payment/conversation/check', data).then(response => {
      return response.data;
    });
  },
  giftCheckStatus(data) {
    return axios.post(URL + 'gift-card/payment/conversation/check', data).then(response => {
      return response.data;
    });
  },
  subscribe(data) {
    return axios.post(URL + 'newsletter/add', data).then(response => {
      return response.data;
    });
  },
  homeData() {
    return axios.get(URL + 'home').then(response => {
      return response;
    });
  },
  login(data) {
    return axios.post(URL + 'auth/login', data).then(response => {
      return response.data;
    });
  },
  tokenCheck(data) {
    return axios.post(URL + 'token/check', data).then(response => {
      return response.data;
    });
  },
  registerUser(data) {
    return axios.post(URL + 'auth/register', data).then(response => {
      return response.data;
    });
  },
  forgotPassword(data) {
    return axios.post(URL + 'auth/forget/password', data).then(response => {
      return response.data;
    });
  },
  sendContactForm(data) {
    return axios.post(URL + 'frontend/form/save', data).then(response => {
      return response.data;
    });
  },
  cancelDonation(data) {
    return axios.post(URL + 'donation/payment/cancel', data).then(response => {
      return response.data;
    });
  },
  resetPassword(data) {
    return axios.post(URL + 'auth/reset/password', data).then(response => {
      return response.data;
    });
  },
  userCampaignList(data , headers) {
    return axios.post(URL + 'user/campaign' , data , headers).then(response => {
      return response.data;
    });
  },
  userDonationList(data , headers) {
    return axios.post(URL + 'user/donation' , data , headers).then(response => {
      return response.data;
    });
  },
  pageCampaignList() {
    return axios.get(URL + 'campaign/list' ).then(response => {
      return response.data;
    });
  },
  getDonors() {
    return axios.get(URL + 'frontend/donors' ).then(response => {
      return response.data;
    });
  },
  getSupporters() {
    return axios.get(URL + 'frontend/supporters' ).then(response => {
      return response.data;
    });
  },
  getSupports() {
    return axios.get(URL + 'frontend/supports' ).then(response => {
      return response.data;
    });
  },
  getCampaign(data){
    return axios.post(URL + 'campaign/detail' , data, {   headers: {

    }} ).then(response => {
      return response.data;
    });
  },
  getCampaignEditDetail(data , headers ){
    return axios.post(URL + 'campaign/edit/detail' , data, headers).then(response => {
      return response.data;
    });
  },
  getCampaignCity(){
    return axios.get(URL + 'campaign/city'  ).then(response => {
      return response.data;
    });
  },
  getFestivals(){
    return axios.get(URL + 'frontend/festivals'  ).then(response => {
      return response.data;
    });
  },
  getGiftCardList(){
    return axios.get(URL + 'gift-card/list'  ).then(response => {
      return response.data;
    });
  },
  getFacebookLogin(){
    return axios.get(URL + 'auth/login/facebook'  ).then(response => {
      return response.data;
    });
  },
  getGoogleLogin(headers){
    return axios.get(URL + 'auth/login/google' , headers ).then(response => {
      return response.data;
    });
  },
  getUserDetail(data , headers) {
    return axios.post(URL + 'user/profile' , data , headers).then(response => {
      return response.data;
    });
  },
  editCampaign(data , headers) {
    return axios.post(URL + 'campaign/edit' , data , headers).then(response => {
      return response.data;
    });
  },
  updateUserDetail(data , headers) {
    return axios.post(URL + 'user/profile/settings' , data , headers).then(response => {
      return response.data;
    });
  },
  createCampaign(data , headers) {
    return axios.post(URL + 'campaign/create' , data , headers).then(response => {
      return response.data;
    });
  },
  avatarUpload(data , headers) {
    return axios.post(URL + 'user/profile/avatar' , data , headers).then(response => {
      return response.data;
    });
  },
  getAllCities(){
    return axios.get(URL + 'home/city'  ).then(response => {
      return response.data;
    });
  },
  getComments(){
    return axios.get(URL + 'frontend/comments'  ).then(response => {
      return response.data;
    });
  },
  getStories(){
    return axios.get(URL + 'frontend/stories'  ).then(response => {
      return response.data;
    });
  },
  getNews(){
    return axios.get(URL + 'frontend/news'  ).then(response => {
      return response.data;
    });
  },
  getSSS(){
    return axios.get(URL + 'frontend/sss'  ).then(response => {
      return response.data;
    });
  },
  getInfographic(){
    return axios.get(URL + 'frontend/infographic'  ).then(response => {
      return response.data;
    });
  },
  getPageContent(page){
    return axios.get( URL + 'frontend/pages?slug=' + page ).then(response => {
      return response.data;
    });
  },
  analysisReport(){
    return axios.get(URL + 'frontend/analysis-report').then(response => {
      return response.data;
    })
  },
  getPopup(){
    return axios.get(URL + 'frontend/popup').then(response => {
      return response.data;
    })
  },
  getBilimsetiGorsel(){
    return axios.get(URL + 'frontend/carousel').then(response => {
      return response.data;
    })
  },
}
