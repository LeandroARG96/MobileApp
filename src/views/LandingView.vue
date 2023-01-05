<script setup>
import { RouterLink } from 'vue-router'
import FooterApp from '../components/FooterApp.vue';

</script>

<template>

    <body class="landing d-flex flex-column justify-content-between py-2 align-items-center">
        <header class="pt-2">
            <h1 class="text-center">WORLDCUP'S APP</h1>
            <p class="w-100 text-center">The information that really matters It's in one place...</p>
        </header>
        <img class="img1" src="../components/icons/foto3.jpg" alt="foto3">
        <img class="img2" src="../components/icons/foto2.jpg" alt="foto2">
        <img class="img3" src="../components/icons/foto1.jpg" alt="foto1">
        <img class="img4" src="../components/icons/foto4.jpg" alt="foto4">
        <main>
            <RouterLink to="/home">
                <button type="button" class="btn rounded-5" style="max-width:7.5rem;">WELCOME</button>
            </RouterLink>
        </main>
        <FooterApp />
    </body>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


header {
    font-family: 'Roboto', sans-serif;
    z-index: 1;
}

.img1 {
    position: absolute;
    top: 6rem;
    right: 12px;
    z-index: 0;
    rotate: -10deg;
    height: 5.5rem;
    width: 5.5rem;
    object-fit: cover;
    border: 1px solid white
}
.img2 {
    position: absolute;
    top: 6rem;
    left: 1rem;
    z-index: 0;
    rotate: 10deg;
    height: 5.5rem;
    width: 5.5rem;
    object-fit: cover;
    border: 1px solid white
}
.img3{
    position: absolute;
    bottom: 13rem;
    right: 12px;
    z-index: 0;
    rotate: -10deg;
    height: 5.5rem;
    width: 5.5rem;
    object-fit: cover;
    border: 1px solid white
}
.img4{
    position: absolute;
    bottom: 13rem;
    left: 12px;
    z-index: 0;
    rotate: 10deg;
    height: 5.5rem;
    width: 5.5rem;
    object-fit: cover;
    border: 1px solid white
}

.fondo {
    height: 100vh;
    width: 100vw;
    background-color: black;
}

body{
    height: 100vh;
}

.landing {
    min-height: 100vh;
    width: 100vw;
    background: linear-gradient(#40D1FF, #011B78);
}

.btn {
    color: black;
    border: solid 2px black;
    width: 50vw;
}

.btn:hover {
    color: white;
    background-color: black;
}
</style>