<script>
import { store } from '../store';
import CardComponent from './CardComponent.vue';
export default {
    name: 'MainCardContainer',
    components: {
        CardComponent,
    },
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <div class="card-container d-flex flex-wrap p-5 gap-3">
        <CardComponent v-for="card in store.cards" :img="card.card_images[0].image_url" :name="card.name"
            :archetype="card.archetype" />
    </div>
</template>

<style scoped lang="scss">
.card-container {
    justify-content: space-between;
    background-color: white;
}
</style>