import axios from 'axios'

const apiPORT = 5000

export default () => {
  return axios.create({
    baseURL: `http://localhost:${apiPORT}/`
  })
}
