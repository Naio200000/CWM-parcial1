<script setup>

defineProps({
    to: {
        type: String,
        require: true,
    },
});
</script>
<template>
    <routerLink :to="to"><slot /></routerLink>
</template>