<script>

import axios from 'axios';

import ProjectCard from '../components/ProjectCard.vue';
import FormSearch from '../components/FormSearch.vue';
import {store} from '../data/store'

export default {
    components: { ProjectCard, FormSearch },

    name: 'project',

    data(){
        return {
            baseUrl: 'http://127.0.0.1:8000/api',
            ProjectUri: '/project',
            store
        }
    },
    methods:{
        getApi(){
            axios.get(this.baseUrl + this.ProjectUri)
            .then(r => {
                store.projects = r.data.projects;
            // console.log(r.data.projects);
        })
      // .catch( error => {errorMsg = error})
        },
    },
    mounted(){
        this.getApi();
        // console.log(this.projects);
      // console.log('mounted');
    }
}
</script>


<template>
    <div class="container my-5">
        <FormSearch/>
        <h1 class="text-center mb-4">Elenco progetti</h1>
        <div class="row">
            <div class="col-auto">
            </div>
            <div class="col">
                <div class="container-fluid d-flex flex-wrap justify-content-around">
                    <ProjectCard class="m-3" v-for="project in store.projects" :key="project.id" :project="project"/>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>