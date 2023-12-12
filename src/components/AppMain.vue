<script>
import MainSelect from './MainSelect.vue';
import MainCardContainer from './MainCardContainer.vue';
import { store } from '../store';
export default {
    name: 'AppMain',
    components: {
        MainSelect,
        MainCardContainer,
    },
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <main class="app-main">
        <div class="container">
            <MainSelect />
        </div>
        <MainCardContainer />
    </main>
</template>

<style scoped lang="scss">
@use "../assets/scss/partial/variables" as *;

.app-main {
    background-color: $primary-color;
    min-height: 100vh;
}
</style>