import axios from 'axios'

const herokuURL = `https://quangtn0018-pokedex.herokuapp.com/`
// add for dev
// const apiPORT = 5000

export default () => {
  return axios.create({
    baseURL: herokuURL
  })
}
