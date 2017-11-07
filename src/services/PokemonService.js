import Api from '../services/Api'

export default {
  getPokemonData (pokemonID) {
    return Api().get(`pokemon?pokemonID=${pokemonID}`)
  },
  getPokemonsNameList (pokemonIDFrom, pokemonIDTo) {
    return Api().get(`pokemon?pokemonIDFrom=${pokemonIDFrom}&pokemonIDTo=${pokemonIDTo}`)
  }
}
