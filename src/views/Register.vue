<script>
    import MainH1 from '../components/labels/MainH1.vue';
    import { register } from '../services/auth';
    export default {
        name: 'Register',
        components: {MainH1},
        data() {

            return {
                user: {
                    username: '',
                    email: '',
                    password:'',
                },
                loading: false,
            }
        },
        methods: {
            async submitRegister(){
                try {
                    await login(this.user.email, this.user.password); 
                    this.$router.push({
                        path: '/',
                    })
                } catch (error) {
                    
                }
            }
        }
    }
</script>

<template>
    <header class="container mx-auto mt-8">
        <div>
            <MainH1>Registrarse</MainH1>
        </div>

        <div>
            <form action="" @submit.prevent="submitRegister">
                <div class="mb-4">
                    <label class="text-lg font-bold block" for="username">Nombre de Usuario</label>
                    <input v-model="user.username" class="border-black border-2 rounded p-2 m-1" type="text" id="username">
                </div>
                <div class="mb-4">
                    <label class="text-lg font-bold block" for="email">Direccion de Mail</label>
                    <input v-model="user.email" class="border-black border-2 rounded p-2 m-1" type="email" id="email">
                </div>
                <div class="mb-4">
                    <label class="text-lg font-bold block" for="password">Contrasena</label>
                    <input v-model="user.password" class="border-black border-2 rounded p-2 m-1" type="password" id="password">
                </div>
                <button 
                    type="submit" class="mb-4 py-2 px-6 bg-blue-light text-gray-light font-bold rounded hover:bg-blue-dark transition-all">Registrarse</button>
            </form>
        </div>
    </header>
</template>