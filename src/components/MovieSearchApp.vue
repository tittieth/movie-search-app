<script setup lang="ts">
import { onMounted, ref } from "vue";
import SearchForm from "./SearchForm.vue";
import MovieView from "./MovieView.vue";
import { getMovies } from "../services/OmdbService";
import type { IMovie } from "@/models/IMovie";
import LoaderSpinner from "./LoaderSpinner.vue";

const movies = ref<IMovie[]>([]);
const isLoading = ref(false);
const noMoviesFound = ref(false);

onMounted(() => {
  const searchText = localStorage.getItem("searchText") || "[]";
  getMovies(searchText).then((moviesFromApi) => {
    movies.value = moviesFromApi;
  });
});

const searchMovies = async (searchText: string) => {
  movies.value = [];
  isLoading.value = true;
  noMoviesFound.value = false;

  setTimeout(async () => {
    try {
      movies.value = await getMovies(searchText);
      if(movies.value) {
        localStorage.setItem("searchText", searchText);
      } else {
        noMoviesFound.value = true;
      }
    } catch (error) {
      console.log(error);
    } finally { 
      isLoading.value = false;
    }
  }, 1000);
};
</script>

<template>
  <SearchForm @search="searchMovies"></SearchForm>
  <p v-if="noMoviesFound">No movies found</p>
  <div v-if="isLoading" class="loading-spinner">
      <LoaderSpinner />
  </div>
  <div class="wrapper">
      <MovieView
      :movie="movie"
      v-for="movie in movies"
      :key="movie.imdbID"
      :isLoading="isLoading"
    ></MovieView>
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}

.loading-spinner {
  margin-top: -200px;
  display: flex;
  justify-content: center;
}

p {
  font-size: 2rem;
  color: whitesmoke;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
