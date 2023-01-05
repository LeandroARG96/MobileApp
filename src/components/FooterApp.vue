<script setup>
// import NavApp2Vue from './NavApp2.vue';
</script>

<template>
  <div class="footer d-flex flex-row pt-1">
    <div class="d-flex flex-column gap-2 col-12 px-1">
      <div class="d-flex flex-row justify-content-between">
        <div class="d-flex flex-column align-items-center col-5">
          <h2>Follow us</h2>
          <div>
            <img src="./icons/wsp40.png" alt="whatsapp">
            <img src="./icons/ig40.png" alt="instagram">
            <img src="./icons/face40.png" alt="facebook">
          </div>
        </div>
        <div class="d-flex flex-column align-items-center col-7">
          <h2>Contact</h2>
          <div class="d-flex flex-column copyright">
            <small>
              <p class="text-center">Tel: <a href="tel:3435027690">+543435027690</a></p>
            </small>
            <small>
              <p>Mail: <a href="mailto:leandrorios.25.96@gmail.com">leandrorios.25.96@gmail.com</a></p>
            </small>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center col-12 px-1 gap-2">
        <div class="text-center copyright">
          <p>Copyright &copy; 2022.
            We are MundialApp Ltd.</p>
          <p>All right Reserved.
            Terms & Conditions.
            Privacy Policy.</p>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="nav2">

  </div> -->
</template>

<style scoped>
.copyright {
  line-height: 0.9
}

.footer {
  color: black;
  min-height: 6vh;
}

.nav2 {
  height: 10vh;
}
</style>