<script setup>
  // import { title } from 'process';
  import WelcomeLogo from './IndexLogo.vue'
  import WelcomeHeader from './IndexHeader.vue'
  import WelcomeItem from './ItemPost.vue'
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <WelcomeLogo /> -->
  <WelcomeHeader :postCount="countTask"></WelcomeHeader>
  <div class="post-it--filter">
    <input type="text" class ="post-it--filter--input" v-model="filterTerm" @blur="loadData" @keyup.enter="loadData" placeholder="search... " aria-label="filter post-it input field">
    <button @click="resetFilter" class ="post-it--filter--reset">Reset filter</button>
  </div>
<div class="post-it--wrapper">
  <button @click="toggleModal" id="add-post" class="new-post" v-if="!showModal">+</button>
  
  <div v-if="showModal" class="new-post">
    <input type="text" v-model="title" class="new-post--title" placeholder="Your note's title here">
    <textarea v-model="content" rows="5" class="new-post--content" placeholder="Your note's content here"></textarea>
    <br />
    <p class="new-post--footer">
    <button @click="addPost">add</button>
    <button @click="closeModal">cancel</button>
    </p>
  </div>

  <WelcomeItem v-for="post in posts" :key="post._id">
    <template #post-it--title>{{ post.title }}</template>
    <template #post-it--content>
      {{ post.content[0] }}
    </template>
    <template #post-it--back>
      <button @click="deletePost(post._id)" class="delete-post" aria-label="delete this post-it button">Remove</button>
      <RouterLink :to="'/note/' + post._id"><button aria-label="view this post-it button">View / Edit</button></RouterLink>
    </template>
  </WelcomeItem>
  
  <!-- <button @click="toggleModal" id="add-post" class="new-post" v-if="!showModal">+</button>
  
  <div v-if="showModal" class="new-post">
    <input type="text" v-model="title" class="new-post--title" placeholder="Your note's title here">
    <textarea v-model="content" rows="5" class="new-post--content" placeholder="Your note's content here"></textarea>
    <br />
    <p class="new-post--footer">
    <button @click="addPost">add</button>
    <button @click="closeModal">cancel</button>
    </p>
  </div> -->
</div>
</template>

<script>
import { nextTick } from 'vue'
export default {
  data() {
    return {
          showModal: false,
          filterTerm: '',
          countTask: 0,
          title: '',
          content: '',
          // méthode localstorage
          //posts: window.localStorage.getItem('myPosts') ? JSON.parse(window.localStorage.getItem('myPosts')) : []
          // méthode API
          posts: []
    }
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async dragEvent() {
      // attendre le prochain tick, càd une fois le DOM complètement constitué après le v-for
      await nextTick();
      // tri par drag and drop
      const draggables = document.querySelectorAll('.post-it')
      let wrapper = document.querySelector('.post-it--wrapper');
      let dragged;
      
      // event listener pour les éléments déclarés comme draggable
      draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (event) => {
          // récupérer l'élément qui est drag
          dragged = event.target;
        })
        draggable.addEventListener('dragover', (event) => {
          event.preventDefault();
        })
        draggable.addEventListener('drop', (event) => {
          event.preventDefault();
          let dropTarget = '';
          // déterminer l'objet sur lequel on drop en fonction de la div ou du h3 qui reçoit l'event
          if(event.target.className == '') {            
            dropTarget = event.target.parentElement.offsetParent;
          } else {
            dropTarget = event.target.offsetParent;            
          }
          // insérer l'objet drag avant l'objet drop dans la liste des noeuds du DOM
          wrapper.insertBefore(dragged, dropTarget);
        })
      })
      // fin du tri par drag and drop 
    },
    loadData() {
    // méthode API
    let url = 'http://5.135.119.239:3090/notes/';

    // méthode GET pour récupérer une donnée
    fetch(url, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        // filtre des données
        let myDatas = [];
        let filter = this.filterTerm.toLowerCase();
        if(filter != '') {
          data.notes.forEach(datas => {
            if(datas.title.toLowerCase().includes(filter) || datas.content[0].toLowerCase().includes(filter)) {
              myDatas.push(datas);
            }
          });
          this.posts = myDatas;
        } else {
          this.posts = data.notes;
        }        
        // fin filtre des données
        // // this.posts = data.notes;
        // this.countTask = this.posts.length;
        this.countTask = data.notes.length;
        this.dragEvent();
      })
      .catch(error => {
        console.error(error);
      })
    },
    closeModal() {
      this.title = '';
      this.content = '';
      this.showModal = !this.showModal;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    resetFilter() {
      document.querySelector('.post-it--filter--input').value = '';
      this.filterTerm = '';
      this.loadData();
    },
    addPost() {
      // vérifier que des éléments sont ajoutés dans les champs lors du click sur le bouton d'ajout
      let newPostTitle = document.querySelector('.new-post--title');
      let newPostContent = document.querySelector('.new-post--content');

      if(this.title == '' || this.content == '') {
        if(this.title == '' && this.content == '') {
          newPostTitle.setAttribute('style', 'color: red;');
          newPostContent.setAttribute('style', 'color: red;');
          this.title = 'Write a title or cancel';
          this.content = 'Write some content or cancel';
          let myTimeout = setTimeout(() => {
            newPostTitle.setAttribute('style', '');
            newPostContent.setAttribute('style', '');
            this.title = '';
            this.content = '';
            clearTimeout(myTimeout);
          }, 3000);
          return;
        }
        if(this.title == '') {
          newPostTitle.setAttribute('style', 'color: red;');
          this.title = 'Write a title or cancel';
          let myTimeout = setTimeout(() => {
            newPostTitle.setAttribute('style', '');
            newPostContent.setAttribute('style', '');
            this.title = '';
            clearTimeout(myTimeout);
          }, 3000);
          return;
        }
        if(this.content == '') {
          newPostContent.setAttribute('style', 'color: red;');
          this.content = 'Write some content or cancel';
          let myTimeout = setTimeout(() => {
            newPostTitle.setAttribute('style', '');
            newPostContent.setAttribute('style', '');
            this.content = '';
            clearTimeout(myTimeout);
          }, 3000);
          return;
        }
      }
      // toggle de l'affichage de la fenêtre d'ajout
      this.showModal = !this.showModal;   

      // // début méthode localstorage
        // // initialisation de l'id, au cas où le localstorage est vide
        // let myId = 0;
        // // si le localstorage contient mes post-it je récupère l'id le plus élevé
        // if(window.localStorage.getItem('myPosts')) {
        //   let allIds = JSON.parse(window.localStorage.getItem('myPosts')).map(obj => { return obj._id; });
        //   myId = Math.max(...allIds) + 1;
        // }
        // // initialisation de l'objet post-it avec les valeurs saisies et l'id
        // let newPost = {
        //   _id: myId,
        //   title: this.title,
        //   content: [this.content]
        // }
        // // mise à jour du template
        // this.posts.push(newPost);
        // let myArray = [];
        // // si le localstorage contient des post-it alors je récupère le contenu
        // // je rajoute le nouveau post-it, puis je stocke la nouvelle chaîne complète
        // if(window.localStorage.getItem('myPosts')) {
        //   myArray = JSON.parse(window.localStorage.getItem('myPosts'));
        //   myArray.push(newPost);
        //   window.localStorage.setItem('myPosts', JSON.stringify(myArray));
        // } else {
        // // sinon j'initialise le localstorage avec le nouveau post-it
        //   myArray.push(newPost);
        //   window.localStorage.setItem('myPosts', JSON.stringify(myArray));
        // }
      // // fin méthode localstorage

    // début méthode API
      // méthode POST pour insérer une donnée
        let url = 'http://5.135.119.239:3090/notes/';
        fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            title: this.title,
            content: [this.content]
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          this.loadData();
        })      
      // fin méthode API

      // reset des champs de saisie.
      this.title = '';
      this.content = '';
    },
    deletePost(postId) {
      let url = 'http://5.135.119.239:3090/notes/';
      // méthode DELETE pour supprimer une donnée
        let urlDel = (url + postId);
        fetch(urlDel, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          this.loadData();
        })
      // fin méthode API
    }

  }
}
</script>
