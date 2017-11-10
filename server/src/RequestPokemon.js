let Pokedex = require('pokedex-promise-v2')
let P = new Pokedex()

let _getPokemonIDPaddedZeroes = (pokemonID) => {
  let numDigits = pokemonID.toString().length

  switch (numDigits) {
    case 1:
      return `00${pokemonID}`
    case 2:
      return `0${pokemonID}`
    case 3:
      return `${pokemonID}`
  }
}

let _getPokemonImg = (pokemonID) => {
  let numDigits = pokemonID.toString().length
  let pokemonImgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

  switch (numDigits) {
    case 1:
      pokemonImgUrl += `00${pokemonID}.png`
      break
    case 2:
      pokemonImgUrl += `0${pokemonID}.png`
      break
    case 3:
      pokemonImgUrl += `${pokemonID}.png`
  }

  return pokemonImgUrl
}

let _getEvolutionsInfo = (pokemon, callback) => {
  callback(pokemon)
  if (pokemon.evolves_to.length) {
    _getEvolutionsInfo(pokemon.evolves_to[0], callback)
  }
}

module.exports = {
  async getPokemonData (req, res) {
    try {
      const pokemonID = parseInt(req.query.pokemonID)

      // api calls
      const pokemon = await P.getPokemonByName(pokemonID)
      const pokemonSpecies = await P.getPokemonSpeciesByName(pokemon.name)

      // url = 'https://pokeapi.co/api/v2/evolution-chain/1/'
      const evolutionChainID = parseInt(pokemonSpecies.evolution_chain.url.slice(42, pokemonSpecies.evolution_chain.url.length - 1))
      const evolutionChain = await P.getEvolutionChainById(evolutionChainID)

      // current pokemon main info
      const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)      
      const pokemonImgUrl = _getPokemonImg(pokemonID)
      const pokemonIDPaddedZeroes = _getPokemonIDPaddedZeroes(pokemonID)

      const types = pokemon.types.map((item) => {
        return item.type.name
      })

      const stats = pokemon.stats.map((item) => {
        return {
          name: item.stat.name,
          baseStat: item.base_stat
        }
      })

      const flavorTexts = pokemonSpecies.flavor_text_entries.filter((item) => {
        return item.language.name === 'en'
      })

      const speciesDescription = flavorTexts[0].flavor_text

      // prev and next pokemon
      const prevPokemonID = pokemonID === 1 ? 801 : pokemonID - 1
      const prevPokemon = {
        id: prevPokemonID,
        IDPaddedZeroes: _getPokemonIDPaddedZeroes(prevPokemonID)
      }

      const nextPokemonID = pokemonID === 801 ? 1 : pokemonID + 1
      const nextPokemon = {
        id: nextPokemonID,
        IDPaddedZeroes: _getPokemonIDPaddedZeroes(nextPokemonID)
      }

      // evolutions
      let evolutionsData = []
      console.log('before getevoCall')
      _getEvolutionsInfo(evolutionChain.chain, (pokemon) => {
        // url = 'https://pokeapi.co/api/v2/pokemon-species/2/'
        // slicing to get the ID near the end of url
        // 42 = start index of ID in url
        if (pokemon.species) {
          const evolutionPokemonID = parseInt(pokemon.species.url.slice(42, pokemon.species.url.length - 1))
          evolutionsData.push({
            id: evolutionPokemonID,
            name: pokemon.species.name.charAt(0).toUpperCase() + pokemon.species.name.slice(1),
            imgUrl: _getPokemonImg(evolutionPokemonID),
            idPaddedZeroes: _getPokemonIDPaddedZeroes(evolutionPokemonID)
          })
        }
      })

      const pokemonData = {
        idPaddedZeroes: pokemonIDPaddedZeroes,
        imgUrl: pokemonImgUrl,
        types,
        stats,
        height: pokemon.height,
        weight: pokemon.weight,
        speciesDescription,
        name: pokemonName,
        prevPokemon,
        nextPokemon,
        evolutionsData
      }

      res.send(pokemonData)
    } catch (err) {
      res.status(400).send({
        error: 'Pokemon cannot be found'
      })
    }
  },
  async getPokemonDisplays (req, res) {
    try {
      const pokemonList = await P.getPokemonsList()
      const pokemonIDFrom = parseInt(req.query.pokemonIDFrom)
      const pokemonIDTo = parseInt(req.query.pokemonIDTo)
      const results = pokemonList.results.slice(pokemonIDFrom - 1, pokemonIDTo).map((item, index) => {
        const pokemonID = index + pokemonIDFrom
        const pokemonImgUrl = _getPokemonImg(pokemonID)
        const pokemonIDPaddedZeroes = _getPokemonIDPaddedZeroes(pokemonID)

        return {
          id: pokemonID,
          idPaddedZeroes: pokemonIDPaddedZeroes,
          name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
          imgUrl: pokemonImgUrl
        }
      })
      res.send(results)
    } catch (err) {
      res.status(400).send({
        error: 'Pokemons List cannot be found'
      })
    }
  }
}
