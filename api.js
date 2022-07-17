const fetch = require('node-fetch');

const BASE_URL = 'https://api.exchangerate.host';
const LATEST_ENDPOINT = '/latest';  

const contuirUrlBaseadaNaMoeda = (coin) => {
    return `${BASE_URL}${LATEST_ENDPOINT}/?base=${coin}`;
};

const fetch_Moeda = async (coin) => {
  const endpoint = contuirUrlBaseadaNaMoeda(coin);
    
  try{
   
    const resposta = await fetch(endpoint);
    const json = await resposta.json();
     
    return json;
 
  } catch (error) {
      throw error;
  }
}


fetch_Moeda('BRL');