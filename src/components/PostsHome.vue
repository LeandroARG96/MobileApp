<script setup>
import profileStore from '../store/profile.js';
import comments from '../store/comments.js'
import resp from '../store/respTOcomments.js'
import { addResp } from '../firebase/resp.js'
import { addComment } from '../firebase/comments.js'
import { RouterLink } from 'vue-router';
import { ref } from 'vue';


// const boxComments = () => {
// let captura = document.getElementById('boxComments')
// captura = document.createElement('div')
//   <div class="accordion accordion-flush" id="accordionFlushExample">
//     <div class="accordion-item">
//       <h2 class="accordion-header" id="flush-headingOne">
//         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
//           Accordion Item #1
//         </button>
//       </h2>
//       <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
//         <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
//       </div>
//     </div>
//   </div>
// }

const boxComment = ref(false)
let idPost = ref('')
let idPost2 = ref('')

const boxComments = (id) => {
  idPost = id
  boxComment.value = !boxComment.value
}

const post = ref('');

const addNewComment = () => {
  const newComment = {
    id: crypto.randomUUID(),
    date: Date.now(),
    name: profileStore.user.displayName,
    photo: profileStore.user.photoURL,
    post: post.value
  };
  addComment(newComment);
  post.value = '';
}


const resp1 = ref('');

//le paso el comment para usar el id del firestore
const addNewResp = (comment) => {
  const newResp = {
    name: profileStore.user.displayName,
    photo: profileStore.user.photoURL,
    id: comment.id,
    text: resp1.value
  };
  addResp(newResp);
  resp1.value = '';
};

const fav = ref(false)

const toggleFav = (id) => {
  idPost2 = id
  fav.value = !fav.value
}

</script>

<template>

  <div class="main2 d-flex justify-content-center flex-column flex-wrap align-items-center gap-3 p-3">
    <div v-if="profileStore.user" class="d-flex flex-column justify-content-center align-items-center">
      <img class="logo" src="../components/icons/logo.jpeg" alt="">
      <h2 class="mb-0">Welcome</h2>
      <h2>{{ profileStore.user.displayName }}!</h2>
    </div>
    <div v-else class="d-flex flex-column justify-content-center align-items-center">
      <div>
        <img class="logo" src="../components/icons/logo.jpeg" alt="">
      </div>
      <h1>WorldCup's App</h1>
      <!-- <RouterLink to="/login" class="btnSign btn btn-success p-1">Sign in here</RouterLink>  -->
    </div>
    <div v-if="profileStore.user" class="text-bg-secondary rounded-2" style="max-width: 18rem;">
      <div class="card-body p-3">
        <div class="form-outline ">
          <label class="form-label" for="addANote">Add a post</label>
          <div class="d-flex flex-row gap-2">
            <input v-model="post" v-on:keyup.enter="addNewComment" type="text" id="addANote" class="form-control"
              placeholder="Type something..." />
            <button @click.prevent="addNewComment" class="btnSend btn btn-light"><img class="imgSend"
                src="./icons/send-20.png" alt=""></button>
          </div>
        </div>
      </div>
    </div>
    <div v-for="comment in comments" class="card text-bg-secondary d-flex flex-column flex-wrap py-1"
      style="max-width: 18rem;min-width: 18rem;">
      <div class="d-flex flex-row">
        <div class="d-flex justify-content-center align-items-center w-25 p-3">
          <img class="imgUser" :src="comment.photo" alt="">
        </div>
        <div class="w-75 d-flex flex-row justify-content-start align-items-center">
          <h4 class="px-2 mb-0">{{ comment.name }}</h4>
        </div>
      </div>
      <div class="card-body">
        <p class="card-text">{{ comment.post }}</p>
      </div>
      <!-- v-if="profileStore.user" -->
      <div v-if="profileStore.user"
        class="border-top border-bottom border-2 border-dark d-flex flex-row justify-content-around align-items-center p-1">
        <button @click="toggleFav(comment.id)" :class="fav && comment.id == idPost2 ? 'btn p-0 mgButton' : 'btn p-0'"><img src="./icons/mg-20.png"
            alt="like"></button>
        <button id="boxComments" class="btn p-0" @click="boxComments(comment.id)"><img src="./icons/comments-20.png"
            alt="comments"></button>
        <button class="btn p-0"><img src="./icons/share-20.png" alt="share"></button>
      </div>
      <RouterLink v-else to="/login"
        class="border-top border-2 border-dark d-flex flex-row justify-content-around align-items-center p-2">
        <div class="btn btn-primary px-2">
          <em>
            <p class="text-white mb-0">Please login to interact</p>
          </em>
        </div>
      </RouterLink>
      <div v-if="boxComment == true && idPost == comment.id" class="p-2">
        <input v-model="resp1" v-on:keyup.enter="addNewResp(comment)" class="rounded-2 w-100" type="text"
          placeholder="Your comment..">
      </div>
      <div v-for="r in resp">
        <div v-if="r.id == comment.id"
          class="d-flex flex-column justify-content-center align-items-center flex-wrap py-2">
          <div class="card text-bg-secondary" style="width:16rem;">
            <div class="d-flex flex-row justify-content-start align-items-center gap-2 px-1 h-25">
              <div class="d-flex justify-content-center align-items-center w-25 p-1">
                <img class="imgUser" :src="r.photo" alt="">
              </div>
              <div class="w-50 d-flex flex-row justify-content-start align-items-center">
                <h6 class="px-2 mb-0">{{ r.name }}</h6>
              </div>
            </div>
            <div class="card-body bg-dark rounded-2" style="min-height:3rem;">
              <p class="card-text">{{ r.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <img src="./icons/cancel-20.png" alt="delete"> -->
    </div>
    <!-- <p>{{ msg }}</p> -->
  </div>
</template>

<style scoped>
.main2 {
  background: linear-gradient(#40D1FF, #011B78);
  min-height: 80vh;
}

.logo {
  margin-bottom: -2px;
  height: 7rem;
  width: 7rem;
  border: 1px black solid;
  border-radius: 50%;
}

textarea {
  min-height: 2vh;
}

.marcoUser {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}

.btnSign {
  font-size: .8rem;
}

.btnSend {
  height: 2.4rem;
  width: 2.8rem;
  border-radius: 50%;
}

.imgSend {
  width: 1.2rem;
  height: 1.2rem;
}

.imgUser {
  width: 3rem;
  height: 3rem;
  border: 2px solid black;
  border-radius: 50%;
  object-fit: cover;
}

.mgButton {
  height: 1.8rem;
  width: 1.8rem;
  color: red;
  background-color: red;
  border: 1px solid red;
  border-radius: 60%;
  --bs-btn-bg: red !important;
  font-variation-settings: 'FILL' 1;
}

.btn {
  --bs-btn-padding-x: 0rem;
}
</style>