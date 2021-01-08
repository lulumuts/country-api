import axios from 'axios'

export const countryAPI = axios.create({
  baseURL: 'https://restcountries-v1.p.rapidapi.com'
})

countryAPI.interceptors.request.use(
  config => {
    config.headers.common['x-rapidapi-key'] = `${process.env.VUE_APP_KEY}`
    config.headers.common['x-rapidapi-host'] = `${process.env.VUE_APP_HOST}`
    return config
  },
  error => Promise.reject(error)
)
