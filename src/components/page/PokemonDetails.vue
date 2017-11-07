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
        <div>
          <img :src='pokemonData.imgUrl' class='center-img'>
        </div>
        <div>
          #{{pokemonData.idPaddedZeroes}}
        </div>
        <div>
          <h1>Types</h1>
          <span class='pokemon-type-chip' v-for='types in pokemonData.types'>
            <PokemonTypeChip :pokemon-type=types.type.name></PokemonTypeChip>
          </span>
        </div>
        <div>
          <h1>Stats</h1>
          <div v-for='pokemonStat in pokemonData.stats'>
            {{pokemonStat.stat.name}}
            {{pokemonStat.base_stat}}
          </div>
          Weight: {{pokemonData.weight}}
          Height: {{pokemonData.height}}
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
  data () {
    return {
      loading: false,
      error: null,
      pokemonData: []
    }
  },
  methods: {
    async fetchPokemonData() {
      this.loading = true
      this.error = null
      this.pokemonData = []
      
      try {
        const response = await PokemonService.getPokemonData(this.$route.params.pokemonName, this.$route.query.pokemonID)

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
.pokemon-type-chip {
  margin-left: 10px;
}
</style>
