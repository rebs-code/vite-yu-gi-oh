<script>
import axios from 'axios';
import MainSelect from './MainSelect.vue';
import { store } from '../store';
export default {
    name: 'AppMain',
    components: {
        MainSelect,
    },
    data() {
        return {
            store,
            cards: [],
            apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=39&offset=0',
        };
    },
    created() {
        axios.get(this.apiURL)
            .then((response) => {
                this.cards = response.data.data;
            })
    },
};
</script>

<template>
    <main class="app-main">
        <div class="container">
            <MainSelect />
            <div>
                {{ cards }}

            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
.app-main {
    background-color: #d48f38;
    height: 100vh;
}
</style>