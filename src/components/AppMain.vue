<script>
import MainSelect from './MainSelect.vue';
export default {
    name: 'AppMain',
    components: {
        MainSelect,
    },
};
</script>

<template>
    <main class="app-main">
        <div class="container">
            <MainSelect />
        </div>
    </main>
</template>

<style scoped lang="scss">
.app-main {
    background-color: #d48f38;
    height: 100vh;
}
</style>