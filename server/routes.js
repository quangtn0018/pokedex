const RequestPokemon = require('./RequestPokemon')

module.exports = (app) => {
  app.get('/pokemonDisplays', RequestPokemon.getPokemonDisplays)
  app.get('/pokemon', RequestPokemon.getPokemonData)
}
