<script>
export default {
    name: 'AppHeader',
};
</script>

<template>
    <header class="app-header d-flex align-items-center">
        <img src="../assets/img/ygo-logo.png" alt="Yu-Gi-Oh Logo">
        <h1>Yu-Gi-Oh API</h1>
    </header>
</template>

<style scoped lang="scss">
.app-header {
    background-color: white;
    padding: 1rem;

    img {
        height: 2rem;
        margin-right: 1rem;
    }
}
</style>
```