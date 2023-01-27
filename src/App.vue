<script>

import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import Header from './components/partials/header.vue';

export default {
    components: { ProjectCard, Header },
  
  name: 'App',
  
  data(){
    return {
      baseUrl: 'http://127.0.0.1:8000/api',
      ProjectUri: '/project',
      projects: [],
    }
  },
  methods:{
    getApi(){
      axios.get(this.baseUrl + this.ProjectUri)
      .then(r => {
        this.projects = r.data.projects;
          console.log(this.projects);
      })
      // .catch( error => {errorMsg = error})
    },
  },
    mounted(){
      this.getApi();
      // console.log('mounted');
    },
    created(){
      // console.log('created');
    }
}
</script>

<template>

  <Header/>

    <router-view></router-view>

</template>


<style lang="scss">
  @use './styles/general';
</style>