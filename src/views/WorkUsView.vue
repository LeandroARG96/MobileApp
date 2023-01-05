<script setup>
import NavApp from '../components/NavApp.vue';
import NavApp2 from '../components/NavApp2.vue';

</script>

<template>
    <header class="nav2">
        <NavApp />
    </header>
    <main>
        <div class="form-control main2">
            <h1 class="text-center rounded-3 bg-light">WORK WITH US!</h1>
            <div class="mb-3">
                <em><label for="exampleFormControlInput1" class="form-label">Email address</label></em>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <em><label for="exampleFormControlInput2" class="form-label">Phone</label></em>
                <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="+543435123456">
            </div>
            <div class="mb-3">
                <em><label for="formFile" class="form-label">Attach CV</label></em>
                <input class="form-control" type="file" id="formFile">
            </div>
            <div class="mb-3">
                <em><label for="exampleFormControlTextarea1" class="form-label">Comments</label></em>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                    placeholder="Why do you want to work with us?"></textarea>
            </div>
            <div class="d-flex justify-content-center py-5">
                <button class="btn btn-success">Submit</button>
            </div>
        </div>
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
    height: 10vh;
}

@media (orientation: landscape) {
    .form-control {
        padding-top: 1rem;
    }
}
</style>