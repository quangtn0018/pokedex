<template>
  <div>
      <div class='loading' v-if='loading'>
        <h1>Loading...</h1>
      </div>

      <div v-else-if='error' class='error'>
        <h1>Error...</h1>
        {{error}}
      </div>

      <div v-else>
        <q-input
          class='search-input'
          v-model.trim='searchText'
          @change='filterPokedex()'
          float-label='Search pokemon name'
          clearable
        />

        <div class='row justify-center'>
          <!-- :key='index' to silence 'Elements in iteration expect to have v-bind:key directives' -->
            <q-card
              class='pokemon-card cursor-pointer'
              v-for='(pokemon,index) in filteredPokedex'
              :key='index' 
              @click='showDetails(pokemon.id)'
              tabindex='0'
            >
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
        </div>
      </div> 
  </div>
</template>

<script>
import {
  QCard,
  QCardTitle,
  QCardMain,
  QInput
} from 'quasar'

import PokemonService from '../services/PokemonService'

export default {
  components: {
    QCard,
    QCardTitle,
    QCardMain,
    QInput
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
      pokedex: [],
      searchText: '',
      filteredPokedex: []
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
    filterPokedex() {
      const searchText = this.searchText.toLowerCase()
      if (searchText === '') {
        this.filteredPokedex = this.pokedex.slice()
        return
      }
      this.filteredPokedex = this.pokedex.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchText)
      })
    },
    showDetails(id) {
      this.$router.push({ path: `/pokemon/${id}`})
    },
    async setPokedex() {
      this.loading = true
      this.error = null
      this.pokedex = []
      
      try {
        const response = await PokemonService.getPokemonsNameList(this.pokemonGenerationIDs.FROM, this.pokemonGenerationIDs.TO)
        
        this.pokedex = response.data || []
        this.filteredPokedex = this.pokedex.slice()
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
.search-input {
  margin-bottom: 40px;
}

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
</style>