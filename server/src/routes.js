const RequestPokemon = require('./RequestPokemon')

module.exports = (app) => {
  app.get('/pokemon', RequestPokemon.getPokemonsNameList)
}
