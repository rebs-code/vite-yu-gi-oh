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
        };
    },
};
</script>

<template>
    <div class="container">
        <MainSelect />
    </div>
    <div class="container main-container p-5">
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
    justify-content: space-between;
}

.found-component {
    background-color: black;
}
</style>