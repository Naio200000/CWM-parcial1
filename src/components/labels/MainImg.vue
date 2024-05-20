<script>
    export default {
        name: 'MainImg',
        props: ['src', 'alt']
    }
</script>

<template>
        <img :src="src" :alt="alt">
</template>