import Api from '../services/Api'

export default {
  getPokemonData (pokemonID) {
    return Api().get(`pokemon?pokemonID=${pokemonID}`)
  },
  getPokemonsNameList (pokemonIDFrom, pokemonIDTo) {
    return Api().get(`pokemonDisplays?pokemonIDFrom=${pokemonIDFrom}&pokemonIDTo=${pokemonIDTo}`)
  }
}
