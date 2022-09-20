import axios from 'axios'

const baseUrl = axios.create({
  baseURL: "https://indoor-wayfinder.herokuapp.com/"
})

export const login = async (reqBody) => {
  return await baseUrl.post(`auth/login`, reqBody)
};

export const signup = async (reqBody) => {
  return await baseUrl.post(`auth/register`, reqBody)
};