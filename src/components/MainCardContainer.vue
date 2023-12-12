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
    <div class="card-container">
        <CardComponent v-for="card in store.cards" />
    </div>
</template>

<style scoped lang="scss"></style>