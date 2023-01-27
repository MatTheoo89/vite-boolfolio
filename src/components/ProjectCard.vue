<template>
    <div class="card col-3 text-black">
        <!-- <img :src="project.cover_image" class="card-img-top" :alt="project.name"> -->
        <div class="card-body">
        <h3 class="card-title fw-bold"><router-link :to="{name: 'detail', params:{slug: project.slug} }">{{project.name}}</router-link></h3>
        <h4 class="card-title"> <strong>Cateoria:</strong> {{project.type.type}}</h4>
        <h5 class="card-title" v-if="project.technologies.length">
            <strong>Tecnologie: </strong>
            <span class="badge text-bg-danger me-2"
                    v-for="tag in project.technologies" :key="tag.id">{{tag.type}}</span>
        </h5>
        <p class="card-text">{{project.summary}}</p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
</div>
    
</template>

<script>
export default {
    name: 'ProjectCard',
    props:{
        project: Object,
    }
}
</script>

<style>

</style>