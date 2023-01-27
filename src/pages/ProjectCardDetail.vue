<script>

import axios from 'axios';

export default {
    name: 'ProjectCardDetail',
    
    data(){
        return {
            baseUrl: 'http://127.0.0.1:8000/api',
            ProjectUri: '/project/',
            project: {type: {}},
        }
    },
    methods:{
        getDetail(){
            axios.get(this.baseUrl + this.ProjectUri + this.$route.params.slug)
            .then(r => {
                this.project = r.data;
                
        console.log(r.data);

        });
      // .catch( error => {errorMsg = error})
        },
    },
    created(){
        this.getDetail();
    }
}
</script>


<template>
        <img :src="project.cover_image" class="card-img-top" :alt="'image-' + project.name">
    <!-- <div class="card col-3 text-black"> -->
        <!-- <img :src="project.cover_image" class="card-img-top" :alt="'image-' + project.name"> -->
        <!-- <div class="card-body">
        <h3 class="card-title fw-bold">{{project.name}}</h3>
        <h4 class="card-title"> <strong>Cateoria:</strong> {{project.type.type}}</h4> -->
        <!-- <h5 class="card-title">
            <strong>Tecnologie: </strong>
            <span class="badge text-bg-danger me-2"
                v-for="tag in project.technologies" :key="tag.id">{{tag.type}}</span>
        </h5> -->
        <!-- <p class="card-text">{{project.summary}}</p> -->
    <!-- </div>
</div> -->
    
</template>


<style>

</style>