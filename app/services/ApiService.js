import axios from 'axios';

const host = 'https://api.develop.vozym.com/v1/';

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json',
      "IntegrationKey": "develop",
      "Accept": "application/json"
  }
};

export function PostRequest(endpoint, data) {
  return axios.post(host + endpoint, data, axiosConfig)
}

export function PutRequest(endpoint, data) {
  return axios.put(host + endpoint, data)
}

export function DeleteRequest(endpoint, data) {
  return axios.delete(host + endpoint, {data: data})
}

export function GetRequest(endpoint) {
  return axios.get(host + endpoint)
}
