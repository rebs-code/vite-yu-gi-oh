<script>
import { store } from '../store';
import CardComponent from './CardComponent.vue';
import MainSelect from './MainSelect.vue';
import MainFoundComponent from './MainFoundComponent.vue';
export default {
    name: 'MainCardContainer',
    components: {
        CardComponent,
        MainSelect,
        MainFoundComponent,
    },
    data() {
        return {
            store,
            isLoading: true,
        };
    },
    // created() {
    //     //call api to get cards
    //     axios.get(this.store.apiYuGiOh.defaultURL + this.store.apiYuGiOh.cardInfo + '?num=60&offset=0')
    //         .then((response) => {
    //             this.store.cards = response.data.data; // insert results into cards array
    //             this.isLoading = false;
    //         })
    //     //call api to get archetypes
    //     axios.get(this.store.apiYuGiOh.defaultURL + this.store.apiYuGiOh.archetypes)
    //         .then((response) => {
    //             this.store.archetypes = response.data;
    //         })
    // },
};
</script>

<template>
    <div class="container main-container p-5">
        <!-- <div v-if="isLoading">Loading</div> -->
        <div class="card-container d-flex flex-wrap">
            <MainFoundComponent :length="store.cards.length" />
            <CardComponent v-for="card in store.cards" :img="card.card_images[0].image_url" :name="card.name"
                :archetype="card.archetype" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.main-container {
    background-color: white;

}

.card-container {
    background-color: white;
}

.found-component {
    background-color: black;
}
</style>