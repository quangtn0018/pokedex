<template>
  <q-chip square :class='typeColor'>
    {{pokemonType}}
  </q-chip>
</template>

<script>
import { QChip } from "quasar";

export default {
  /**
     * 18 pokemon types
     *  normal
     *  water
     *  electric
     *  fighting
     *  ground
     *  psychic
     *  rock
     *  dark
     *  steel 
     *  fire
     *  grass
     *  ice
     *  poison
     *  flying
     *  bug
     *  ghost
     *  dragon
     *  fairy
     */
  components: {
    QChip
  },
  props: {
    pokemonType: {
      type: String,
      required: true
    }
  },
  computed: {
    typeColor() {
      let prefix = "bg-";
      switch (this.pokemonType) {
        case "normal":
          return `${prefix}normal`;
        case "water":
          return `${prefix}water`;
        case "electric":
          return `${prefix}electric`;
        case "fighting":
          return `${prefix}fighting`;
        case "ground":
          return `${prefix}ground`;
        case "psychic":
          return `${prefix}psychic`;
        case "rock":
          return `${prefix}rock`;
        case "dark":
          return `${prefix}dark`;
        case "steel":
          return `${prefix}steel`;
        case "fire":
          return `${prefix}fire`;
        case "grass":
          return `${prefix}grass`;
        case "ice":
          return `${prefix}ice`;
        case "poison":
          return `${prefix}poison`;
        case "flying":
          return `${prefix}flying`;
        case "bug":
          return `${prefix}bug`;
        case "ghost":
          return `${prefix}ghost`;
        case "dragon":
          return `${prefix}dragon`;
        case "fairy":
          return `${prefix}fairy`;
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.bg-normal {
  background: -webkit-linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
  background: -ms-linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
  background: -moz-linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
  background: -o-linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
  background: linear-gradient(180deg, #a4acaf 50%, #a4acaf 50%);
  background-color: #a4acaf;
  color: #212121;
}

.bg-water {
  background: -webkit-linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
  background: -ms-linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
  background: -moz-linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
  background: -o-linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
  background: linear-gradient(180deg, #4592c4 50%, #4592c4 50%);
  background-color: #4592c4;
  color: #fff;
}

.bg-electric {
  background: -webkit-linear-gradient(180deg, #eed535 50%, #eed535 50%);
  background: -ms-linear-gradient(180deg, #eed535 50%, #eed535 50%);
  background: -moz-linear-gradient(180deg, #eed535 50%, #eed535 50%);
  background: -o-linear-gradient(180deg, #eed535 50%, #eed535 50%);
  background: linear-gradient(180deg, #eed535 50%, #eed535 50%);
  background-color: #eed535;
  color: #212121;
}

.bg-fighting {
  background: -webkit-linear-gradient(180deg, #d56723 50%, #d56723 50%);
  background: -ms-linear-gradient(180deg, #d56723 50%, #d56723 50%);
  background: -moz-linear-gradient(180deg, #d56723 50%, #d56723 50%);
  background: -o-linear-gradient(180deg, #d56723 50%, #d56723 50%);
  background: linear-gradient(180deg, #d56723 50%, #d56723 50%);
  background-color: #d56723;
  color: #fff;
}

.bg-ground {
  background: -webkit-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
  background: -ms-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
  background: -moz-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
  background: -o-linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
  background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
  background-color: #f7de3f;
  color: #212121;
}

.bg-psychic {
  background: -webkit-linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
  background: -ms-linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
  background: -moz-linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
  background: -o-linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
  background: linear-gradient(180deg, #f366b9 50%, #f366b9 50%);
  background-color: #f366b9;
  color: #fff;
}

.bg-rock {
  background: -webkit-linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
  background: -ms-linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
  background: -moz-linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
  background: -o-linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
  background: linear-gradient(180deg, #a38c21 50%, #a38c21 50%);
  background-color: #a38c21;
  color: #fff;
}

.bg-dark {
  background: -webkit-linear-gradient(180deg, #707070 50%, #707070 50%);
  background: -ms-linear-gradient(180deg, #707070 50%, #707070 50%);
  background: -moz-linear-gradient(180deg, #707070 50%, #707070 50%);
  background: -o-linear-gradient(180deg, #707070 50%, #707070 50%);
  background: linear-gradient(180deg, #707070 50%, #707070 50%);
  background-color: #707070;
  color: #fff;
}

.bg-steel {
  background: -webkit-linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
  background: -ms-linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
  background: -moz-linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
  background: -o-linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
  background: linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
  background-color: #9eb7b8;
  color: #212121;
}

.bg-fire {
  background: -webkit-linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
  background: -ms-linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
  background: -moz-linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
  background: -o-linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
  background: linear-gradient(180deg, #fd7d24 50%, #fd7d24 50%);
  background-color: #fd7d24;
  color: #fff;
}

.bg-grass {
  background: -webkit-linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
  background: -ms-linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
  background: -moz-linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
  background: -o-linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
  background: linear-gradient(180deg, #9bcc50 50%, #9bcc50 50%);
  background-color: #9bcc50;
  color: #212121;
}

.bg-ice {
  background: -webkit-linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
  background: -ms-linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
  background: -moz-linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
  background: -o-linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
  background: linear-gradient(180deg, #51c4e7 50%, #51c4e7 50%);
  background-color: #51c4e7;
  color: #212121;
}

.bg-poison {
  background: -webkit-linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
  background: -ms-linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
  background: -moz-linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
  background: -o-linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
  background: linear-gradient(180deg, #b97fc9 50%, #b97fc9 50%);
  background-color: #b97fc9;
  color: #fff;
}

.bg-flying {
  background: -webkit-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  background: -ms-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  background: -moz-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  background: -o-linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
  background-color: #3dc7ef;
  color: #212121;
}

.bg-bug {
  background: -webkit-linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
  background: -ms-linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
  background: -moz-linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
  background: -o-linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
  background: linear-gradient(180deg, #729f3f 50%, #729f3f 50%);
  background-color: #729f3f;
  color: #fff;
}

.bg-ghost {
  background: -webkit-linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
  background: -ms-linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
  background: -moz-linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
  background: -o-linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
  background: linear-gradient(180deg, #7b62a3 50%, #7b62a3 50%);
  background-color: #7b62a3;
  color: #fff;
}

.bg-dragon {
  background: -webkit-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  background: -ms-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  background: -moz-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  background: -o-linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  background-color: #53a4cf;
  color: #fff;
}

.bg-fairy {
  background: -webkit-linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
  background: -ms-linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
  background: -moz-linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
  background: -o-linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
  background: linear-gradient(180deg, #fdb9e9 50%, #fdb9e9 50%);
  background-color: #fdb9e9;
  color: #212121;
}
</style>
