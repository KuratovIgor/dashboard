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
import { ref } from 'vue'

const links = [{
    label: 'Dashboard',
    icon: 'i-heroicons-squares-2x2-solid',
    to: '/dashboard'
  }]

const activeIndex = ref('1');

const handleMenuTabOpen = (key: string) => {
  activeIndex.value = key
}
</script>

<style lang="scss" scoped>
.sidebar {
    padding: 10px;
    width: 100%;
    max-width: 250px;
}
</style>
