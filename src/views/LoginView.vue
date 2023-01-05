<script setup>
import { loginWithGoogle, logOut } from '../firebase/authGoogle.js'
import profileStore from '../store/profile.js';
import NavApp from '../components/NavApp.vue';
import NavApp2 from '../components/NavApp2.vue';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
// import { signUser } from '../firebase/authEmail&Pass.js'
// import { traerUsuarios } from '../firebase/comments.js';

const email = ref('')
const pass = ref('')

// ver como exportar email y password, ver ultimo video

</script>

<template>
    <header class="nav2">
        <NavApp />
    </header>
    <!-- <button @click="signUser">traer</button> -->
    <div class="main2 d-flex flex-column gap-3">
        <h1 class="text-center pt-2 mb-0">LOGIN</h1>
        <!-- <button @click="traerUsuarios">traer usuarios</button> -->
        <form v-if="!profileStore.user" @submit.prevent class="form form-control ">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
                
                
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input v-model="pass" type="password" class="form-control" id="exampleInputPassword1" required>
            </div>
            <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary w-25 pt-1">Login</button>
            </div>
        </form>
        <div>
            <p v-if="!profileStore.user" class="text-light">Is it your first time? <RouterLink to="/register" class="text-info">SIGN UP!</RouterLink></p>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center gap-3">
            <h2 v-if="profileStore.user" class="text-light">Welcome {{ profileStore.user.displayName }}!</h2>
            <button v-if="!profileStore.user" @click="loginWithGoogle" class="btn d-flex flex-row align-items-center gap-1 bg-light rounded-3 w-75 h-25 border border-primary border-2">
                <img class="gogImg" src="../components/icons/google.png" alt="">
                <p class="mb-0 w-100">Login with Google</p>  
            </button>
            <button v-if="profileStore.user" @click="logOut" class="btn btn-danger p-0">Log out</button>
        </div>
    </div>
    <div class="nav2">
        <NavApp2 />
    </div>

</template>

<style scoped>
button {
    width: 10rem;
    height: 2rem;
}

.main2 {
    background: linear-gradient(#40D1FF, #011B78);
    min-height: 80vh;
    padding: 1rem;
}

.gogImg{
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
}
.nav2 {
    height: 10vh;
}

</style>