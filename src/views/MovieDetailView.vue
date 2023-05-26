<script setup lang="ts">
import  router  from '../router'
import { useRoute } from 'vue-router';
import { ref } from "vue";

const route = useRoute();
const movie = ref(JSON.parse(route.query.movie));
console.log("test" + movie.value);


const handleClick = () => {
  router.push('/')
}

</script>

<template>
    <div class="movie-detail">
        <h1>{{movie.Title}}</h1>
        <img width="340" height="500" 
                :src="movie.Poster" 
                :alt="movie.Title" />
        <h3>Year: {{ movie.Year }}</h3>
        <p> {{ movie.Plot }}</p>
        <button @click.prevent="handleClick">Go back</button>
    </div>
</template>

<style scoped>
* {
    color: whitesmoke;
    line-height: 1.5;
}

.movie-detail {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2C3D4E;
    width: 600px;
    margin: auto;
    margin-top: 100px;
    padding: 20px;
    border-radius: 0.8rem;
    -webkit-box-shadow:0px 0px 105px 48px rgba(66,184,131,0.6);
    -moz-box-shadow: 0px 0px 105px 48px rgba(66,184,131,0.6);
    box-shadow: 0px 0px 105px 0px rgba(66,184,131,0.6);
}

h1 {
    font-size: 2rem;
    margin-bottom: 10px;
}

h3 {
    margin: 10px;
}

img {
    margin-top: 15px;
}

button {
    margin-top: 20px;
    border-radius: 0.4rem;
    background-color: transparent;
    color: whitesmoke;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border: 3px solid #42B883;
    -webkit-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out;
}


button:hover {
    box-shadow: 0 0 10px 0 #42B883 inset, 0 0 20px 2px #42B883;
    border: 3px solid #42B883;
}

</style>