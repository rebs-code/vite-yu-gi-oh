<script>
import MainSelect from './MainSelect.vue';
import MainCardContainer from './MainCardContainer.vue';
import axios from 'axios';
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
    methods: {
        search() {
            console.log(this.store.searchArchetype);
            //call api to get cards
            if (this.store.searchArchetype !== '') {
                axios.get(this.store.apiYuGiOh.defaultURL + this.store.apiYuGiOh.cardInfo + '?archetype=' + this.store.searchArchetype)
                    .then((response) => {
                        this.store.cards = response.data.data; // insert results into cards array
                        this.isLoading = false;
                    })
            } else {
                axios.get(this.store.apiYuGiOh.defaultURL + this.store.apiYuGiOh.cardInfo + '?num=60&offset=0')
                    .then((response) => {
                        this.store.cards = response.data.data; // insert results into cards array
                        this.isLoading = false;
                    })
            }
        },
    },
    created() {
        //call api to get archetypes
        axios.get(this.store.apiYuGiOh.defaultURL + this.store.apiYuGiOh.archetypes)
            .then((response) => {
                this.store.archetypes = response.data;
            })
        this.search();
    },
};
</script>

<template>
    <main class="app-main">
        <div class="container">
            <MainSelect @searchArchetype="search" />
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