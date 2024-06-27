<script setup>

defineProps({
    src: {
        type: String,
        require: true,
    },
    alt: {
        type: String,
        require: true,
    },
});
</script>
<template>
        <img :src="src" :alt="alt">
</template>