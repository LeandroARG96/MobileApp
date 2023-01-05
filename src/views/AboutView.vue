<script setup>
import NavApp from '../components/NavApp.vue';
import NavApp2 from '../components/NavApp2.vue';

</script>

<template>
  <header class="nav2">
    <NavApp />
  </header>
  <main>
      <div class="main1 d-flex justify-content-center flex-wrap align-items-center gap-2 p-2">
          <div class="card text-bg-secondary" style="max-width: 18rem;">
        
              <div class="card-body">
                  <h5 class="card-title">Coming soon...</h5>
                  <p class="card-text">We are working for you!</p>
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
  .main1 {
      background: linear-gradient(#40D1FF, #011B78);
      min-height: 80vh;
  }
  .nav2{
    height: 10vh;
  }


  </style>