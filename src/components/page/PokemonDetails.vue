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
        <div class='cursor-pointer prev-next-hover' tabindex='0' @click='showDetails(pokemonData.prevPokemon.id)'>
          <h1>#{{pokemonData.prevPokemon.IDPaddedZeroes}}</h1>
        </div>
        <div class='cursor-pointer prev-next-hover' tabindex='0' @click='showDetails(pokemonData.nextPokemon.id)'>
          <h1>#{{pokemonData.nextPokemon.IDPaddedZeroes}}</h1>
        </div>

        <div>
          <h1>{{pokemonData.name}}</h1>
        </div>

        <div>
          #{{pokemonData.idPaddedZeroes}}
        </div>
        
        <div>
          <img :src='pokemonData.imgUrl' class=''>
        </div>
        
        <div>
          <h1>Description</h1>
          {{pokemonData.speciesDescription}}
        </div>
        <div>
          <h1>Types</h1>
          <span class='pokemon-type-chip' v-for='type in pokemonData.types'>
            <PokemonTypeChip :pokemon-type=type></PokemonTypeChip>
          </span>
        </div>
        <div>
          <h1>Stats</h1>
          <div v-for='stat in pokemonData.stats'>
            {{stat.name}}
            {{stat.baseStat}}
          </div>
        </div>
        <div>
          <h1>Info</h1>
          <div>
            Weight: {{pokemonData.weight}}
            Height: {{pokemonData.height}}
          </div>
        </div>

        <div>
          <h1>Evolutions</h1>
          <div v-if='noEvolution'>
              {{noEvolutionMsg}}
            </div>
          <div class='inline' v-for='evolutionPokemon in pokemonData.evolutionsData'>
            <div class='cursor-pointer' @click='showDetails(evolutionPokemon.id)'>
              <div>
                <img :src='evolutionPokemon.imgUrl' class='circle-border' tabindex='0'>
              </div>
              <div>
                {{evolutionPokemon.name}}
                #{{evolutionPokemon.idPaddedZeroes}}            
              </div>
            </div>
          </div>
        </div>
        
      </div>
  </div>
</template>

<script>
import PokemonTypeChip from '@/PokemonTypeChip'
import PokemonService from '../../services/PokemonService'

export default {
  components: {
    PokemonTypeChip
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchPokemonData()
  },
  watch: {
    // call again the method if the route changes
    $route: 'fetchPokemonData'
  },
  data () {
    return {
      loading: false,
      error: null,
      noEvolution: false,
      noEvolutionMsg: 'This Pokemon does not evolve.',
      pokemonData: []
    }
  },
  methods: {
    showDetails(id) {
      this.$router.push({ path: `/pokemon/${id}`})
    },
    async fetchPokemonData() {
      this.loading = true
      this.error = null
      this.pokemonData = []
      
      try {
        const response = await PokemonService.getPokemonData(this.$route.params.pokemonID)

        this.pokemonData = response.data || []
        this.noEvolution = this.pokemonData.evolutionsData.length <= 1
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
.prev-next-hover:hover, .prev-next-hover:focus{
  background-color: lightgray;
}

.pokemon-type-chip {
  margin-left: 10px;
}

.circle-border {
  border: 5px solid;
  border-radius: 120px;
}

.circle-border:hover, .circle-border:focus {
  background-color: lightgray;
}

.inline {
  display: inline-block;
}
</style>
