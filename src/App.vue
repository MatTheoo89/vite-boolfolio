<script>

import Header from './components/partials/header.vue';

export default {
  components: { Header },
  
  name: 'App',
}
</script>

<template>

  <Header/>

    <router-view></router-view>

</template>


<style lang="scss">
  @use './styles/general';
</style>