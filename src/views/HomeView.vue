<script setup>

import NavApp2 from '../components/NavApp2.vue';
import NavApp from '../components/NavApp.vue';
import PostsHome from '../components/postsHome.vue';


</script>

<template>
  <header class="nav2">
    <NavApp />
  </header>
  <main>
    <PostsHome />
  </main>
  <div class="nav2">
    <NavApp2 />
  </div>

</template>

<style scoped>
.main2 {
  background: linear-gradient(#40D1FF, #011B78);
  min-height: 80vh;
}

.nav2 {
  min-height: 10vh;
}

.marcoUser{
  width: 4rem;
  height: 4rem;
  
  border-radius: 50%;
}

.imgUser{
  width: 4rem;
  height: 4rem;
  border: 2px solid black;
  border-radius: 50%;
  object-fit: cover;
}

</style>
