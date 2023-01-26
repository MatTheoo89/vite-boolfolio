<script>
import axios from 'axios';
export default {
  
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
        this.projects = r.data;
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
  
  <div class="container my-5">
    <div class="row">
      <div class="col2">
        <h1>PHP è più bello, tanto più bello!! Buuuuu Vue</h1>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
  @use './styles/general';
</style>