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
    <div class="p-4 bg-white rounded-xl shadow-xl shadow-slate-500">
        <MainH2 class="sr-only">Iniciar Sesion</MainH2>
        <form action="" @submit.prevent="submitLogin">
            <div class="mb-4 px-4">
                <label class="text-lg font-bold block sr-only" for="email">Correo Electronico</label>
                <input  v-model="user.email" 
                        class="w-full p-2 m-2 text-xl border-gray-400 border-2 rounded" 
                        type="email" 
                        id="email" 
                        placeholder="Correo Electronico">
            </div>
            <div class="mb-4 px-4">
                <label class="text-lg font-bold block sr-only" for="password">Correo Electronico</label>
                <input  v-model="user.email" 
                        class="w-full p-2 m-2 text-xl border-gray-400 border-2 rounded" 
                        type="password" 
                        id="password" 
                        placeholder="Contraña">
            </div>
            <button 
                type="submit" class="mb-4 py-2 px-6 bg-blue-light text-gray-light font-bold rounded hover:bg-blue-dark transition-all">Registrarse</button>
        </form>
    </div>
</template>