import axios from 'axios'

const baseUrl = axios.create({
  baseURL: "https://indoor-wayfinder.herokuapp.com/"
})

export const getAllBuildings = async (token) => {

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return await baseUrl.get(`${baseUrl}building`, config)
}