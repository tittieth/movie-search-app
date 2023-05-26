<script setup lang="ts">
import { ref } from "vue";

const userInput = ref("");

const emits = defineEmits<{ (e: "search", searchText: string): void }>();

const handleSubmit = () => {
  emits("search", userInput.value);
  userInput.value = "";
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="userInput" placeholder="Search for a movie..."/>
    <button>Search</button>
  </form>
</template>

<style scoped>
    input {
        border-radius: 0.4rem;
        width: 800px;
        padding: 15px;
        background-color: whitesmoke;
    }

    input:focus {
        outline: none;
    }

    form {
        margin: 50px;
    }

    button {
        border-radius: 0.4rem;
        background-color: transparent;
        color: whitesmoke;
        border: none;
        padding: 15px 35px;
        margin-left: 20px;
        border: 3px solid #42B883;
        -webkit-transition: all .15s ease-in-out;
        transition: all .15s ease-in-out;

    }

    button:hover {
      box-shadow: 0 0 10px 0 #42B883 inset, 0 0 20px 2px #42B883;
      border: 3px solid #42B883;
    }
</style>