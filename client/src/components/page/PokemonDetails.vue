<template>
  <div>
      <div class='loading' v-if='loading'>
        <h1>Loading...</h1>
      </div>

      <div v-else-if='error' class='error'>
        <h1>Error...</h1>
        {{error}}
      </div>

      <div v-else class='row justify-center'>
        <q-card class='col-8' color='dark'>
          <div class='row'>
            <div class='col-6 cursor-pointer prev-next-hover prev-select' tabindex='0' @click='showDetails(pokemonData.prevPokemon.id)'>
              <h3>
                <q-icon name='navigate_before' size='50px'/>                
                #{{pokemonData.prevPokemon.IDPaddedZeroes}}
              </h3>
            </div>
            
            <div class='col-6 cursor-pointer prev-next-hover text-right next-select' tabindex='0' @click='showDetails(pokemonData.nextPokemon.id)'>
              <h3>
                #{{pokemonData.nextPokemon.IDPaddedZeroes}}
                <q-icon name='navigate_next' size='50px'/>                
              </h3>
            </div>
          </div>

          <div class='row justify-center'>
            <div class='pokemon-name-id-container'>
              <span class='pokemon-name'>
                {{pokemonData.name}}
              </span>
              
              <span class='pokemon-main-id pokemon-id'>
                #{{pokemonData.idPaddedZeroes}}
              </span>
            </div>
          </div>
          
          <div class='inner-content'>
            <div class='row justify-center'>
              <div>
                <img :src='pokemonData.imgUrl'>
              </div>

              <div class='description-container'>  
                <div class='row pokemon-description'>
                  {{pokemonData.speciesDescription}}
                </div>
                
                <div class='row types-info-container justify-between'>
                  <div class='types'>
                    <div>
                      <span class='pokemon-type-chip' v-for='(type,index) in pokemonData.types' :key='index'>
                        <PokemonTypeChip :pokemon-type=type></PokemonTypeChip>
                      </span>
                    </div>
                  </div>

                  <div>                    
                    <div>
                      <div>
                        Weight: {{pokemonData.weight}}
                      </div>
                      <div>
                        Height: {{pokemonData.height}}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            <div class='stats-container'>
              <div class='row justify-center'>                  
                <p class='title'>Stats</p>
              </div>
              
              <div v-for='(stat,index) in pokemonData.stats' :key='index'>
                {{stat.name}}
                {{stat.baseStat}}
                <q-progress 
                  :percentage='stat.baseStat' 
                  class='stats-progress'
                  color='warning'
                />
              </div>
            </div>
            
            <div class='evolutions'>
              <div class='title row justify-center evolution-title'>Evolutions</div>
              
              <div class='row justify-center' v-if='noEvolution'>
                {{noEvolutionMsg}}
              </div>
              
              <div class='row justify-center gt-medium-screen'>
                <div class='items-center' v-for='(evolutionPokemon, index) in pokemonData.evolutionsData' :key='index'>
                    <div class='row items-center'>
                      <div class='text-center'>
                        <img @click='showDetails(evolutionPokemon.id)' :src='evolutionPokemon.imgUrl' class='circle-border cursor-pointer small-pokemon-img' tabindex='0'>
                        <div>
                          {{evolutionPokemon.name}}
                          <span class='pokemon-id'>
                            #{{evolutionPokemon.idPaddedZeroes}}
                          </span>
                        </div>
                      </div>
                      
                      <span v-if='index !== pokemonData.evolutionsData.length - 1'>
                        <q-icon name='navigate_next' size='70px'/>
                      </span>
                    </div>                   
                </div>
              </div>

              <div class='lt-medium-screen'>
                <div class='' v-for='(evolutionPokemon, index) in pokemonData.evolutionsData' :key='index'>
                    <div class='text-center'>
                      <div>
                        <img @click='showDetails(evolutionPokemon.id)' :src='evolutionPokemon.imgUrl' class='circle-border cursor-pointer small-pokemon-img' tabindex='0'>
                      </div>
                      <div>
                        {{evolutionPokemon.name}}
                        <span class='pokemon-id'>
                          #{{evolutionPokemon.idPaddedZeroes}}
                        </span>
                      </div>
                    </div>
                    
                    <div class='row justify-center rotate-90' v-if='index !== pokemonData.evolutionsData.length - 1'>
                      <q-icon name='navigate_next' size='70px'/>
                    </div>
                </div>
              </div>

            </div>
          </div>
          
          
        </q-card>
      </div>
  </div>
</template>

<script>
import {
  QCard,
  QCardTitle,
  QCardMain,
  QIcon,
  QProgress
} from 'quasar'

import PokemonTypeChip from '@/PokemonTypeChip'
import PokemonService from '../../services/PokemonService'

export default {
  components: {
    QCard,
    QCardTitle,
    QCardMain,
    QIcon,
    QProgress,
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

<style scoped>
@media all and (max-width: 890px) {
  .gt-medium-screen {
    display: none;
  }

  .lt-medium-screen {
    display: block !important;
  }
}

.lt-medium-screen {
  display: none;
}

.types {
  margin-bottom: 20px;
}

.types-info-container {
  padding-top: 30px;
  max-width: 300px;
}

.description-container {
  padding: 10px;
  border: 1px solid white;
  border-radius: 10px;
}
.stats-container {
  padding: 0 15%;
  margin-top: 20px;
}

.pokemon-description {
  max-width: 600px;
}

.stats-progress {
  height: 10px;
}

.title {
  font-size: 30px;
}

.evolution-title {
  margin-top: 20px;
}

.small-pokemon-img {
  transform: scale(.75);
}

.pokemon-name-id-container {
  padding-top: 15px;
}

.pokemon-name, .pokemon-main-id {
  font-size: 30px;
}

.pokemon-id {
  color: #919191;
  font-weight: bold;
}

.inner-content {
  padding: 10px;
}

.prev-next-hover {
  background-color: gray; 
  transition: background-color 0.3s;
}

.prev-next-hover h3 {
  font-size: 122%;
}

.prev-select {
  border-right: 3px solid #333;
}

.next-select {
  border-left: 3px solid #333;
}

.prev-next-hover:hover, .prev-next-hover:focus{
  background-color: #027be3;
}

.pokemon-type-chip {
  margin-left: 10px;
}

.pokemon-type-chip:first-child {
  margin-left: none;
}

.circle-border {
  border: 5px solid;
  border-radius: 120px;
}

.circle-border:hover, .circle-border:focus {
  background-color: gray;
}
</style>
