<template>
  <div>
      <div class='loading' v-if='loading'>
        <h1>Loading...</h1>
      </div>

      <div v-else-if='error' class='error'>
        <h1>
          Error...
        </h1>
        {{error}}
      </div>

      <div v-else>
        <span class='cursor-pointer' v-for='pokemon in pokedex' @click='showDetails(pokemon.name, pokemon.id)'>
          <q-card inline class='pokemon-card' tabindex='0'>
            <q-card-main>
              <img :src='pokemon.imgUrl' class='center-img'>
            </q-card-main>
            
            <q-card-title>
              <div class='pokemon-id bold-text'>
                #{{pokemon.idPaddedZeroes}}                
              </div>

              <div class='bold-text'>
                {{pokemon.name}}
              </div>
              
            </q-card-title>
          </q-card>
        </span>
      </div>

      
  </div>
</template>

<script>
import {
  QCard,
  QCardTitle,
  QCardSeparator,
  QCardMain,
} from 'quasar'

import PokemonTypeChip from '@/PokemonTypeChip'
import PokemonService from '../services/PokemonService'

export default {
  components: {
    QCard,
    QCardTitle,
    QCardSeparator,
    QCardMain,
    PokemonTypeChip
  },
  props: {
    pokemonGenerationIDs: {
      type: Object,
      default: function () {
        return null
      }
    }
  },
  data() {
    return {
      loading: false,
      error: null,
      pokedex: []
    }
  },
  // https://router.vuejs.org/en/advanced/data-fetching.html
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.setPokedex()
  },
  watch: {
    // call again the method if the route changes
    $route: 'setPokedex'
  },
  methods: {
    showDetails(name, id) {
      const pokemonName = name.charAt(0).toLowerCase() + name.slice(1)

      this.$router.push({ path: `/pokemon/${pokemonName}`, 
        query: {
          pokemonID: id
        }
      })
    },
    async setPokedex() {
      this.loading = true
      this.error = null
      this.pokedex = []
      
      try {
        const response = await PokemonService.getPokemonsNameList(this.pokemonGenerationIDs.FROM, this.pokemonGenerationIDs.TO)
        
        this.pokedex = response.data || []
        this.loading = false
      } catch (err) {
        this.error = err
        console.log('There was an ERROR: ', err)
      }
    }
  }
}
</script>

<style>
.pokemon-id {
  color: #919191;
  font-size: 80%;
}

.bold-text { 
  font-weight: bold
}

.center-img {
  display: block;
  margin: 0 auto;
}

.pokemon-card {
  transition: all .2s ease;
  background-color: #F2F2F2;
}

.pokemon-card:hover, .pokemon-card:focus {
  transform: scale(1.05);
  background-color: gray;
}

.cursor-pointer {
  cursor: pointer
}
</style>