<script>
export default {
    name: 'home',
}
</script>


<template>
    <div class="container my-5">
        <div class="row">
            <div class="col2">
                <h1>PHP è più bello, tanto più bello!! Buuuuu Vue</h1>
            </div>
            <div class="col">
                <div class="container-fluid d-flex flex-wrap justify-content-around">
                    <project-card class="m-3" v-for="project in projects" :key="project.id" :project="project"/>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>