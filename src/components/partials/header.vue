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
                    <router-link :to="{name: 'home'}"><span>Home</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'project'}"><span>Project</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'about'}"><span>Chi siamo</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'contact'}"><span>Contatti</span></router-link>
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

        
        li{
            font-size: 2rem;
            a{
                margin-right: 20px;
                text-decoration: none;
            }
        }

        .active{
            color: green;
        }


</style>


// class="nav-link text-decoration-none" aria-current="page"