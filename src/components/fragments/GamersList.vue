<script>
import MainP from '../labels/MainP.vue';
export default {
    name: 'GamersList',
    components: {MainP},
}
</script>

<template>
    <div class="w-10/12 max-w-post mx-auto my-4 rounded-lg shadow-lg shadow-slate-400 bg-gray-100">
        <div class="pt-2 px-2">
            <MainP class="text-base pb-0"><span class="font-bold">Email: </span>megamegt</MainP>
        </div>
        <div class="px-2 py-4">
            <MainP><span class="font-bold">Id: </span>meg</MainP>
        </div>
    </div>
</template>

