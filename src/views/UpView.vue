<script setup>
import NavApp from '../components/NavApp.vue';
import NavApp2 from '../components/NavApp2.vue';

</script>

<template>
  <header class="nav2">
    <NavApp />
  </header>
  <main>
    <div class="main2 d-flex justify-content-center flex-wrap align-items-center gap-2">
      <h1 class="text-center rounded-3 bg-light w-100">NEWS</h1>
      <div class="card text-bg-secondary" style="max-width: 18rem;">
        <div class="card-header"><img src="../components/icons/scaloni.jpg" alt=""></div>
        <div class="card-body">
          <h5 class="card-title">Scaloni at press conference</h5>
          <p class="card-text">Scaloni's words after the last confrontation.</p>
        </div>
      </div>
      <div class="card text-bg-secondary" style="max-width: 18rem;">
        <div class="card-header"><img src="../components/icons/lusail.jpg" alt=""></div>
        <div class="card-body">
          <h5 class="card-title">Lusail Stadium</h5>
          <p class="card-text">The most important match going to be here!.</p>
        </div>
      </div>
      <div class="card text-bg-secondary" style="max-width: 18rem;">
        <div class="card-header"><img src="../components/icons/argentina.jpg" alt=""></div>
        <div class="card-body">
          <h5 class="card-title">Argentina is a finalist!</h5>
          <p class="card-text">The team led by Lionel Scaloni dreams of eternal glory!</p>
        </div>
      </div>
      <!-- <p>{{ msg }}</p> -->
    </div>
  </main>
  <div class="nav2">
    <NavApp2 />
  </div>
</template>

<style scoped>
.main2 {
  padding: 1rem;
  background: linear-gradient(#40D1FF, #011B78);
  min-height: 80vh;
}

img{
  height: 10rem;
  width: 16rem;
  object-fit: cover;
  border: 1px solid black;
  border-radius: 10px;
}

.nav2 {
  height: 10vh;
}
@media (orientation: landscape) {
  .main2{
      padding-top: 1rem;
  }
}
</style>
