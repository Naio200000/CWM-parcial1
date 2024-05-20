<script>
    import MainH1 from '../components/labels/MainH1.vue';
    import MainH2 from '../components/labels/MainH2.vue';
    import { login } from '../services/auth';
    export default {
        name: 'Login',
        components: {MainH1, MainH2},
        data() {
            return {
                user: {
                    email: '',
                    password:'',
                },
                loading: false,
            }
            },
            methods: {
            async submitLogin(){
                try {
                    await login(this.user.email, this.user.password); 
                    this.$router.push({
                        path: '/',
                    })
                } catch (error) {
                    //handle error   
                }
            }
        }
    }
</script>

<template>
    <div class="p-5 bg-white rounded-xl shadow-xl shadow-slate-500">
        <MainH2 class="sr-only">Iniciar Sesion</MainH2>
        <form action="" @submit.prevent="submitLogin">
            <div class="mb-4 px-4">
                <label class="text-lg font-bold block sr-only" for="email">Correo Electronico</label>
                <input  v-model="user.email" 
                        class="w-full p-2 m-2 text-xl border-gray-400 border-2 rounded-lg" 
                        type="email" 
                        id="email" 
                        placeholder="Correo Electronico">
            </div>
            <div class="mb-4 px-4">
                <label class="text-lg font-bold block sr-only" for="password">Correo Electronico</label>
                <input  v-model="user.email" 
                        class="w-full p-2 m-2 text-xl border-gray-400 border-2 rounded-lg" 
                        type="password" 
                        id="password" 
                        placeholder="Contraña">
            </div>
            <div class="mb-4 px-4">
                <button 
                    type="submit" 
                    class="w-full p-2 m-2 rounded-lg text-2xl font-bold text-white bg-slate-500 hover:bg-slate-400 active:bg-slate-800 transition-all"
                    >Iniciar Sesción</button>
            </div>
            <div class="mt-4 px-4 border-t-2">
                <button class="w-full p-2 mt-6 m-2 rounded-lg text-2xl font-bold text-white bg-green-800 hover:bg-green-700 active:bg-green-950 transition-all">
                    <routerLink to="/register">Registrarse</routerLink>
                </button>
            </div>
        </form>
    </div>
</template>