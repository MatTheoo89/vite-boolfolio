<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">LOGO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link :to="{name: 'home'}"><a class="nav-link text-decoration-none" aria-current="page">Home</a></router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'project'}"><a class="nav-link text-decoration-none" aria-current="page">Project</a></router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'about'}"><a class="nav-link text-decoration-none">Chi siamo</a></router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'contact'}"><a class="nav-link text-decoration-none">Contatti</a></router-link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'header',
}
</script>

<style lang="scss" scoped>

        
        a{
            font-size: 2rem;
            text-decoration: none;
            &.active{
            background-color: green;
            }
        }


</style>