<script>
import { store } from '../store';
import CardComponent from './CardComponent.vue';
import MainSelect from './MainSelect.vue';
export default {
    name: 'MainCardContainer',
    components: {
        CardComponent,
        MainSelect,
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
    <div class="d-flex justify-content-center">
        <div class="card-container d-flex flex-wrap p-5 gap-3 container">
            <CardComponent v-for="card in store.cards" :img="card.card_images[0].image_url" :name="card.name"
                :archetype="card.archetype" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.card-container {

    background-color: white;
}
</style>