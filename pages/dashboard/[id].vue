<template>
    <div>
        <h1>{{ someText }}</h1>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const someText = computed(() => `Detail page ${route.params.id}`)
</script>
