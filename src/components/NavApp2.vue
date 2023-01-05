<script setup>
import { RouterLink } from 'vue-router'



// if (document.location.pathname == "/rules") {
//   boton = document.getElementById("rules")
//   boton.className += " botonNav2";
// }

// let pathname = document.location.pathname



// function getPathname() {

//   return document.location.pathname
// }
// console.log(getPathname());


// function ponerID(id) {
//   return id
// }

// let pathID
// function getPath() {
//   let pathID = document.location.pathname
// }

// console.log(pathID);
  // return path


// let boton = pintarBoton()

</script>

<template>
  <nav class="nav2 d-flex justify-content-center align-items-center fixed-bottom navbar px-2 ">
    <div class="d-flex flex-row justify-content-evenly col-12 gap-3">
      <!-- agregar @click  en botonNav2 para que se agregue la clase -->
      <RouterLink active-class="active rounded-2" to="/upcoming">
        <button class="btn btn-xs p-1 pt-0 pb-0" type="button" title="Upcoming Events" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar1" aria-controls="offcanvasNavbar1">
          <img class="" src="./icons/upcoming.png" alt="UpcomingEvents">
        </button>
      </RouterLink>
      <!-- <button class="navbar-toggler" type="button" title="Contact" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
        aria-controls="offcanvasNavbar2">
        <span><img src="./icons/contact.png" alt="Contact"></span>
      </button> -->
      <RouterLink active-class="active rounded-2" to="/rules">
        <button class="btn btn-xs p-1 pt-0 pb-0" type="button" title="Rules & Policies" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar3" aria-controls="offcanvasNavbar3">
          <img src="./icons/rules.png" alt="Rules&Policies">
        </button>
      </RouterLink>
      <RouterLink active-class="active rounded-2" to="/work">
        <button class="btn btn-xs p-1 pt-0 pb-0" type="button" title="Work with Us" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar4" aria-controls="offcanvasNavbar4">
          <img src="./icons/workUs.png" alt="WorkWithUs">
        </button>
      </RouterLink>
      <RouterLink active-class="active rounded-2" to="/about">
        <button class="btn btn-xs p-1 pt-0 pb-0" type="button" title="About" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar5" aria-controls="offcanvasNavbar5">
          <img src="./icons/about.png" alt="About">
        </button>
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.active {
  background-color: white;
  box-shadow: 5px 5px 10px black;
  border: 1px inset black;
}

.nav2 {
  min-height: 10vh;
  background-color: #D9D9D9;
  --bs-navbar-padding-y: 0;
}

@media (orientation: landscape) {

  .nav2{
    min-height: 13vh !important  
  }
}
</style>