<script>
export default {
    name: 'MainFoundComponent',
    props: {
        length: Number,
    },
};
</script>

<template>
    <div class="found">
        <h3>Found {{ length }} cards</h3>
    </div>
</template>

<style scoped lang="scss">
.found {
    background-color: black;
    color: white;
    width: 100%;
    margin: 0 10px;

    h3 {
        padding: 1rem;
        font-size: 1rem;
        margin: 0;
    }
}
</style>