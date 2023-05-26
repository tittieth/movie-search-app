<script setup lang="ts">
import type { IMovie } from "@/models/IMovie";
import { getMovieById } from "../services/OmdbService";
import router from "@/router";

export interface IMovieViewProps {
  movie: IMovie;
}

const props = defineProps<IMovieViewProps>();

const handleClick = async () => {
  let movie = await getMovieById(props.movie.imdbID);
  await router.push({ path: '/movie/' + movie.imdbID, query: { movie: JSON.stringify(movie) }})

  console.log(movie);
};
</script>

<template>
    <div class="movie-container" @click.prevent="handleClick">
        <div class="img-wrapper">
            <img width="340" height="500" 
            :src="movie.Poster" 
            :alt="movie.Title" />
        </div>

        <!-- <a href="#">Läs mer...</a> -->
    </div>
</template>

<style scoped>
    .movie-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-radius: 0.8rem;
        align-items: center;
        background: #212534;
        padding: 10px;
        margin: 20px;
    }

    h3 {
        font-size: 1.5rem;
        margin-top: 0;
    }

    button{ 
        margin-bottom: 0;
        border-radius: 14px;
        background-color: #6100C2;
        color: whitesmoke;
        border: none;
        padding: 10px 15px;
    }

    .img-wrapper {
        margin: 20px 10px;
    }

    img {
        border-radius: 0.8rem;
        cursor: pointer;
        transition: transform .2s;
    }

    img:hover {
        -webkit-box-shadow:0px 0px 105px 48px rgba(66,184,131,0.6);
        -moz-box-shadow: 0px 0px 105px 48px rgba(66,184,131,0.6);
        box-shadow: 0px 0px 105px 0px rgba(66,184,131,0.6);
        transform: scale(1.2);
    }
</style>