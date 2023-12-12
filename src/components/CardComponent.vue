<script>
export default {
    name: 'CardComponent',
    props: {
        img: String,
        name: String,
    },

};
</script>

<template>
    <div class="card-div">
        <img :src="img" class="card-img-top" alt="...">
        <h5 class="card-name py-3">{{ name }}</h5>
        <p class="card-archetype">{{ archetype }}</p>
    </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partial/variables" as *;

.card-div {
    height: 400px;
    width: 190px;
    background-color: $primary-color;

    .card-img-top {
        object-fit: cover;
    }

    .card-name {
        font-size: 1.2rem;
        color: white;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
    }

    .card-archetype {
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
    }
}
</style>