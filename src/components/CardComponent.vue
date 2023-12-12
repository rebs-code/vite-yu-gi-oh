<script>
export default {
    name: 'CardComponent',
    props: {
        img: String,
    },

};
</script>

<template>
    <div class="card">
        <img :src="img" class="card-img-top" alt="...">
        <h5 class="card-title">{{ img }}</h5>
        <p class="card-archetype">achetype</p>
    </div>
</template>

<style scoped lang="scss">
.card {
    height: 400px;
    width: 190px;

    .card-img-top {
        object-fit: cover;
    }

    .card-title {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
    }

    .card-archetype {
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
    }
}
</style>