<script setup>
import profileStore from '../store/profile.js';
import NavApp from '../components/NavApp.vue';
import NavApp2 from '../components/NavApp2.vue';
import { RouterLink } from 'vue-router';
import { addUser1 } from '../firebase/usersRegister.js'
import { ref } from 'vue';

const fName = ref('')
const lName = ref('')
const emailUser = ref('')
const pass = ref('')

const addNewUser = () => {
    const newUser = {
        id: crypto.randomUUID(),
        Firstname: fName.value,
        Lastname: lName.value,
        email: emailUser.value,
        password: pass.value,
        photoURL: 'https://picsum.photos/200'
    };
    addUser1(newUser);
}

// @submit.prevent 

</script>

<template>
    <header class="nav2">
        <NavApp />
    </header>
    <div class="main2 d-flex flex-column gap-4 p-2">
        <h1 class="text-center pt-2 mb-0">REGISTER</h1>
        <form class="form form-control ">
            <div class="mb-3">
                <label for="exampleInputName" class="form-label">First Name</label>
                <input v-model="fName" type="text" class="form-control" id="exampleInputName" required>
            </div>
            <div class="mb-3">
                <label for="exampleInputLast" class="form-label">Last Name</label>
                <input v-model="lName" type="text" class="form-control" id="exampleInputLast" required>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input v-model="emailUser" type="email" class="form-control" id="exampleInputEmail1"
                    aria-describedby="emailHelp" required>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input v-model="pass" type="password" class="form-control" id="exampleInputPassword1" required>
            </div>
            <div class="d-flex justify-content-center">
                <RouterLink to="/home">
                    <button @click.prevent="addNewUser" type="submit" class="btn btn-primary pt-1">Register</button>
                </RouterLink>
            </div>
        </form>
        <!-- <div class="d-flex flex-column justify-content-center align-items-center gap-3">
            <h2 v-if="profileStore.user" class="text-light">Welcome {{ profileStore.user.displayName }}!</h2>
            <button v-if="!profileStore.user" @click="loginWithGoogle" class="btn d-flex flex-row align-items-center gap-1 bg-light rounded-3 w-75 h-25 border border-primary border-2">
                <img class="gogImg" src="../components/icons/google.png" alt="">
                <p class="mb-0 w-100">Login with Google</p>  
            </button>
            <button v-if="profileStore.user" @click="logOut" class="btn btn-danger p-0">Log out</button>
        </div> -->
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
}

.gogImg {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
}

.nav2 {
    height: 10vh;
}
</style>