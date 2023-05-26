<template>
    <div class="load">
        <hr/>
        <hr/>
        <hr/>
        <hr/>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
    .load{
        position: relative;
        width: 100px;
        height: 100px;
    }

    .load hr{
        border: 0;
        margin: 0;
        width: 40%;
        height: 40%;
        position: absolute;
        border-radius: 50%;
        animation: spin 2s ease infinite;
    }

    .load :first-child {
        background: whitesmoke;
        animation-delay: -1.5s;
    }

    .load :nth-child(2) {
        background: #42B883;
        animation-delay: -1s;
    }

    .load :nth-child(3) {
        background: whitesmoke;
        animation-delay: -0.5s;
    }

    .load :last-child {
        background: #42B883;
    }

    @keyframes spin {
        0%,
        100% {
            transform: translate(0);
        }
        25% {
            transform: translate(160%);
        }
        50% {
            transform: translate(160%, 160%);
        }
        75% {
            transform: translate(0, 160%);
        }
    }
</style>