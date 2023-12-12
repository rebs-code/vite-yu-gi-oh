<script>
export default {
    name: 'CardComponent',
    props: {
        img: String,
        name: String,
        archetype: String,
    },

};
</script>

<template>
    <div class="card-div mb-3">
        <img :src="img" class="card-img-top" alt="...">
        <h5 class="card-name py-2">{{ name }}</h5>
        <p class="card-archetype">{{ archetype }}</p>
    </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partial/variables" as *;

.card-div {
    width: calc(100% / 5 - 20px);
    background-color: $primary-color;
    margin-right: 10px;
    margin-left: 10px;

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
        font-size: 1rem;
        text-align: center;
    }
}
</style>