<script>
    export default {
        name: 'MainRouterLink',
        props: ['to'],
    }

</script>

<template>
    <routerLink :to="to"><slot /></routerLink>
</template>