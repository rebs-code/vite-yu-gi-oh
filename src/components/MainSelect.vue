<script>
import { store } from '../store';


export default {
    name: 'MainSelect',
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <div class="select-div col-2 py-5">
        <select class="form-select" aria-label="Default select example">
            <option selected>Select archetype</option>
            <option v-for="archetype in store.archetypes" :value="archetype">{{ archetype.archetype_name }}</option>
        </select>
    </div>
</template>

<style scoped lang="scss"></style>