<template>
  <!-- Configure 'view' prop for QLayout -->
  <q-layout ref='layout' view='lHr Lpr lFf'>
    <!-- Header -->
    <q-toolbar slot='header'>
      <q-btn flat @click='$refs.layout.toggleLeft()'>
        <q-icon name='menu' />
      </q-btn>
      <q-toolbar-title>
        {{toolbarTitle}}
        <span slot='subtitle'>{{toolbarSubtitle}}</span>
      </q-toolbar-title>

    </q-toolbar>

    <!-- Left Side Panel -->
    <div slot='left'>
      <q-list no-border link>
        <q-list-header>{{qListHeaderTitle}}</q-list-header>
      
        <q-side-link exact item to='/'>
          <q-item-side icon='home' />
          <q-item-main label='Complete Pokedex' />
        </q-side-link>

        <q-side-link item to='/generation1'>
          <q-item-side icon='filter_1' />
          <q-item-main label='Generation I' />
        </q-side-link>

        <q-side-link item to='/generation2'>
          <q-item-side icon='filter_2' />
          <q-item-main label='Generation II' />
        </q-side-link>

        <q-side-link item to='/generation3'>
          <q-item-side icon='filter_3' />
          <q-item-main label='Generation III' />
        </q-side-link>

        <q-side-link item to='/generation4'>
          <q-item-side icon='filter_4' />
          <q-item-main label='Generation IV' />
        </q-side-link>

        <q-side-link item to='/generation5'>
          <q-item-side icon='filter_5' />
          <q-item-main label='Generation V' />
        </q-side-link>

        <q-side-link item to='/generation6'>
          <q-item-side icon='filter_6' />
          <q-item-main label='Generation VI' />
        </q-side-link>

        <q-side-link item to='/generation7'>
          <q-item-side icon='filter_7' />
          <q-item-main label='Generation VII' />
        </q-side-link>
      </q-list>
    </div>

    <!-- sub-routes get injected here: -->
    <router-view />

    <!-- Footer -->
    <q-toolbar slot='footer'>
      <q-toolbar-title>
        {{footerMsg}}
      </q-toolbar-title>
    </q-toolbar>
  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QSideLink
} from "quasar";

export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QSideLink
  },
  data() {
    return {
      toolbarTitle: "Quang Nguyen's Pokedex",
      toolbarSubtitle: "Built using Vue.js and Quasar Framework with pokeapi",
      footerMsg:
        "All content is © Nintendo, GAME FREAK, The Pokémon Company, and Creatures Inc.",
      qListHeaderTitle: "Navigation"
    };
  }
};
</script>

<style>

</style>
