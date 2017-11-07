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
        <span class='cursor-pointer' v-for='pokemon in pokemonData' @click='showDetails'>
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
              <!-- <div>
                <span class='pokemon-type-chip' v-for='type in pokemon.types'>
                  <PokemonTypeChip :pokemon-type=type></PokemonTypeChip>
                </span>
              </div> -->
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
      pokemonData: []
    }
  },
  // https://router.vuejs.org/en/advanced/data-fetching.html
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchPokemonData()
  },
  watch: {
    // call again the method if the route changes
    $route: 'fetchPokemonData'
  },
  methods: {
    showDetails() {
      console.log('details was clicked')
    },
    async fetchPokemonData() {
      this.loading = true
      this.error = null
      this.pokemonData = []
      let response = null
      
      try {
        response = await PokemonService.getPokemonsNameList(this.pokemonGenerationIDs.FROM, this.pokemonGenerationIDs.TO)
        
        this.pokemonData = response.data || []
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

.pokemon-type-chip {
  margin-left: 10px;
}

.pokemon-type-chip:first-child {
  margin-left: 0;
}
</style>