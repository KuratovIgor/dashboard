<template>
    <ElButton v-bind="$attrs" :type="type" :size="size">
        <slot />
    </ElButton>
</template>

<script setup lang="ts">
interface Props {
    type?: 'primary'| 'success'| 'warning'| 'danger'| 'info',
    size?: 'large'| 'default'| 'small',
}

withDefaults(defineProps<Props>(), {
    type: 'primary',
    size: 'default',
})
</script>
