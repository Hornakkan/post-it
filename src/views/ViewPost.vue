<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
</script>

<template>
  <div class="view--wrapper">
    <h3 class="view--message">(feel free to edit your post-it down below)</h3>
    <div class="view-post-it">
      <div class="view-post-it--details">
        <h3 aria-label="post-it title" contenteditable="true" @blur="updateTitle">{{ postDetails.title }}</h3>
        <p aria-label="post-it content" contenteditable="true" @blur="updateContent">{{ postDetails.content }}</p>
        <!-- <h3 aria-label="post-it title" contenteditable="true" @blur="">{{ postDetails.title }}</h3>
        <p aria-label="post-it content" contenteditable="true" @blur="">{{ postDetails.content }}</p> -->
      </div>
      <div class="view-post-it--footer">
        <RouterLink to="/" aria-label="back to the index page button"><button>Back</button></RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postDetails: {
        title: '',
        content: '',
        _id: ''
      }
      }
  },
  mounted() {
    // récupération de l'id attaché à la route
    // filtrage des post-it et récupération de celui dont l'id match au param
    const route = useRoute();
    
    // // méthode localstorage
    // let myArray = [];
    // if (window.localStorage.getItem('myPosts')) {
    //   myArray = JSON.parse(window.localStorage.getItem('myPosts'))
    //   myArray.forEach(singlePost => {
    //     if(singlePost._id == route.params.id) {
    //       this.postDetails.title = singlePost.title;
    //       this.postDetails.content = singlePost.content[0];
    //     }
    //   });
    // }
    // // fin méthode localstorage    

    // méthode API
    let url = 'http://5.135.119.239:3090/notes/';
    fetch(url, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        data.notes.forEach(singlePost => {
          if(singlePost._id == route.params.id) {
              this.postDetails.title = singlePost.title;
              this.postDetails.content = singlePost.content[0];
              this.postDetails._id = singlePost._id;
          }
        });
      })
      .catch(error => {
        console.error(error);
      })
    // fin méthode API
  },
  methods: {
    loadData(title, content) {
      this.postDetails.title = title;
      this.postDetails.content = content;
    },
    updateTitle(event) {
        let url = 'http://5.135.119.239:3090/notes/' + this.postDetails._id;
        fetch(url, {
          method: 'PUT',
          body: JSON.stringify({
            title: event.target.innerText,
            content: [this.postDetails.content]
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          this.loadData(event.target.innerText, this.postDetails.content);
        })         
    },
    updateContent(event) {
              let url = 'http://5.135.119.239:3090/notes/' + this.postDetails._id;
        fetch(url, {
          method: 'PUT',
          body: JSON.stringify({
            title: this.postDetails.title,
            content: [event.target.innerText]
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          this.loadData(this.postDetails.title, event.target.innerText);
        })   
    }
  }
}
</script>

