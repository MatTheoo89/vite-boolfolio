<script>

import axios from 'axios';

import ProjectCard from '../components/ProjectCard.vue';

export default {
    components: { ProjectCard },

    name: 'profect',

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
    }
}
</script>


<template>
    <div class="container my-5">
        <h1 class="text-center mb-4">Elenco progetti</h1>
        <div class="row">
            <div class="col-auto">
            </div>
            <div class="col">
                <div class="container-fluid d-flex flex-wrap justify-content-around">
                    <ProjectCard class="m-3" v-for="project in projects" :key="project.id" :project="project"/>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>