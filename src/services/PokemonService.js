import Api from '../services/Api'

export default {
  getPokemonData (pokemonName, pokemonID) {
    return Api().get(`pokemon?pokemonName=${pokemonName}&pokemonID=${pokemonID}`)
  },
  getPokemonsNameList (pokemonIDFrom, pokemonIDTo) {
    return Api().get(`pokemonDisplays?pokemonIDFrom=${pokemonIDFrom}&pokemonIDTo=${pokemonIDTo}`)
  }
}
