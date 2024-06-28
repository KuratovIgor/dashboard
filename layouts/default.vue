<template>
    <div class="default-container">
        <UVerticalNavigation class="sidebar" :links="links" />

        <UDivider orientation="vertical" />

        <div class="page-container">
            <NuxtPage />
        </div>
    </div>
</template>

<script setup lang="ts">
const links = [{
    label: 'Dashboard',
    icon: 'i-heroicons-squares-2x2-solid',
    to: '/dashboard'
  }]
</script>

<style lang="scss" scoped>
.default-container {
    display: flex;
}

.sidebar {
    padding: 10px;
    width: 100%;
    max-width: 250px;
}

.page-container {
    height: 100vh;
    width: 100%;
    padding: 30px;
    overflow: auto;
    transition: 0.1s linear;
}
</style>
