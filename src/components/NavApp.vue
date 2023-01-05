<script setup>
import { RouterLink } from 'vue-router'
import profileStore from '../store/profile.js';


let path = document.location.pathname


</script>

<template>
  <nav class="nav1 fixed-top navbar px-2">
    <div class="d-flex justify-content-between align-items-center flex-row col-12 gap-3 px-1">
      <RouterLink active-class="active rounded-2" to="/home">
        <button class="btn btn-xs p-1 pt-0 pb-0" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <img src="./icons/home.png" alt="Home" title="Home"></button>
      </RouterLink>
      <input v-if="path == '/home' " class="form-control" type="search" placeholder="Search posts.." aria-label="Search">
      <h4 v-else>WorldCup's App</h4>
      <button class="btn p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar6"
        aria-controls="offcanvasNavbar6">
        <span v-if="!profileStore.user"><img src="./icons/menu30.png" alt="userLogo"></span>
        <span v-else><img class="imgUser rounded-5" :src="profileStore.user.photoURL" alt="userImg"></span>
      </button>
      <div class="menuH justify-content-center align-items-center offcanvas offcanvas-end rounded-4 mt-3 mx-3"
        tabindex="-1" id="offcanvasNavbar6" aria-labelledby="offcanvasNavbarLabel6">
        <div class="d-flex justify-content-center pt-3">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel6"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav align-items-center justify-content-center gap-3 flex-grow-1">
            <li class="nav-item">
              <span class="btn p-0"><img src="./icons/user.png" alt="user logo"></span>
            </li>
            <li class="nav-item">
              <span class="btn p-0"><img src="./icons/settings30.png" alt="settings logo"></span>
            </li>
            <li class="nav-item">
              <RouterLink to="/login">
                <button class="btn p-0"> <img src="./icons/icons8-log-in-30.png" alt="sign in logo"> </button>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

</template>

<style scoped>
.active {
  background-color: white;
  box-shadow: 5px 5px 10px black;
  border: 1px inset black;
}
button{
  text-decoration: none;
}

.imgUser{
  height: 2.8rem;
  width: 2.8rem;
  padding: 0;
}
.menuH {
  height: 12.5rem;
  max-width: 5rem;
  background-color: #D9D9D9;
}

.nav1 {
  min-height: 10vh;
  background-color: #D9D9D9;
  --bs-navbar-padding-y: 0;
}

@media (orientation: landscape) {
  .nav1 {
    min-height: 13vh;
  }
}
</style>