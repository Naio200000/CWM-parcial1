<script>
    import RegisterSkeleton from '../components/fragments/skeletons/RegisterSkeleton.vue';
    import LogTitle from '../components/fragments/LogTitle.vue';
    import MainH1 from '../components/labels/MainH1.vue';
    import MainH2 from '../components/labels/MainH2.vue';
    import MainLabel from '../components/labels/MainLabel.vue';
    import MainButton from '../components/labels/MainButton.vue';
    import { register } from '../services/auth';
    export default {
        name: 'Register',
        components: {MainH1, MainH2, LogTitle, MainLabel, MainButton, RegisterSkeleton},
        data() {

            return {
                user: {
                    displayName: '',
                    email: '',
                    password:'',
                },
                loading: false,
            }
        },
        methods: {

            async submitRegister(){
                this.loading = true
                try {
                    await register(this.user.email, this.user.password, this.user.displayName);
                    this.loading = false;
                    this.$router.push({
                        path: '/home',
                    });
                } catch (error) {
                    
                }
            }
        }
    }
</script>

<template>
    <div class="h-full flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-evenly lg:mx-8 lg:gap-4">
        <header class="lg:w-1/2 w-10/12 max-w-log">
                <LogTitle />
        </header>
        <section v-if="loading" class="lg:w-1/2 w-10/12 max-w-log p-5 bg-gray-100 rounded-xl shadow-xl shadow-slate-500">
            <RegisterSkeleton />
        </section>
        <section v-else class="lg:w-1/2 w-10/12 max-w-log p-5 bg-gray-100 rounded-xl shadow-xl shadow-slate-500">
            <MainH2 class="sr-only">Registrarse</MainH2>
            <form action="" @submit.prevent="submitRegister">
                <div class="mb-4 px-4">
                    <MainLabel for="displayName">Nombre de usuario</MainLabel>
                    <input  
                        v-model="user.displayName" 
                        class="w-full p-2 m-2 text-xl border-gray-400 border-2 rounded-lg"
                        type="text" 
                        id="displayName" 
                        placeholder="Nombre de Usuario"
                    >
                </div>
                <div class="mb-4 px-4">
                    <MainLabel for="email">Correo Electronico</MainLabel>
                    <input 
                        v-model="user.email"
                        class="w-full p-2 m-2 text-xl border-gray-400 border-2 rounded-lg"
                        type="email" 
                        id="email" 
                        placeholder="Correo Electronico">
                </div>
                <div class="mb-4 px-4">
                    <MainLabel for="password">Contraña</MainLabel>
                    <input  
                        v-model="user.password" 
                        class="w-full p-2 m-2 text-xl border-gray-400 border-2 rounded-lg"
                        type="password" 
                        id="password" 
                        placeholder="Contraña"
                    >
                </div>
                <div class="mb-4 px-4">
                    <MainButton type="submit" class="bg-green-800 hover:bg-green-700 active:bg-green-950">Registrarse</MainButton>
                </div>
            </form>
            <div class="mt-4 px-4 border-t-2 w-8/12 mx-auto">
                <routerLink to="/">
                    <MainButton class="bg-slate-500 hover:bg-slate-400 active:bg-slate-800 transition-all">Iniciar Sesión</MainButton>
                </routerLink>
            </div>
        </section>
    </div>
</template>