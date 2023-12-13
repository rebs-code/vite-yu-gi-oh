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
        <select class="form-select" aria-label="Default select example" v-model="store.searchArchetype"
            @change="$emit('searchArchetype')">
            <option selected value="">Select archetype</option>
            <option v-for="archetype in store.archetypes" :value="archetype.archetype_name">{{
                archetype.archetype_name }}
            </option>
        </select>

    </div>
</template>

<style scoped lang="scss"></style>