<script>
    import LogTitle from '../components/fragments/LogTitle.vue';
    import MainH1 from '../components/labels/MainH1.vue';
    import MainH2 from '../components/labels/MainH2.vue';
    import { register } from '../services/auth';
    export default {
        name: 'Register',
        components: {MainH1, MainH2, LogTitle},
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
                    await register(this.user.email, this.user.password); 
                    this.$router.push({
                        path: '/home',
                    })
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
        <section class="lg:w-1/2 w-10/12 max-w-log p-5 bg-gray-100 rounded-xl shadow-xl shadow-slate-500">
            <MainH2 class="sr-only">Registrarse</MainH2>
            <form action="" @submit.prevent="submitRegister">
                <div class="mb-4 px-4">
                    <label class="text-lg font-bold block sr-only" for="email">Correo Electronico</label>
                    <input  v-model="user.email" 
                            class="w-full p-2 m-2 text-xl border-gray-400 border-2 rounded-lg" 
                            type="email" 
                            id="email" 
                            placeholder="Correo Electronico">
                </div>
                <div class="mb-4 px-4">
                    <label class="text-lg font-bold block sr-only" for="password">Contraña</label>
                    <input  v-model="user.password" 
                            class="w-full p-2 m-2 text-xl border-gray-400 border-2 rounded-lg" 
                            type="password" 
                            id="password" 
                            placeholder="Contraña">
                </div>
                <div class="mb-4 px-4">
                    <button
                        type="submit" 
                        class="w-full p-2 m-2 rounded-lg text-2xl font-bold text-white bg-green-800 hover:bg-green-700 active:bg-green-950 transition-all">
                        Registrarse</button>
                    </div>
                    <div class="mt-4 px-4 border-t-2 w-8/12 mx-auto">
                        <routerLink to="/">
                        <button  
                            class="w-full p-2 mt-6 m-2 rounded-lg text-2xl font-bold text-white bg-slate-500 hover:bg-slate-400 active:bg-slate-800 transition-all"
                            >Iniciar Sesción</button>
                    </routerLink>
                </div>
            </form>
        </section>
    </div>
</template>
<!-- <template>
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
</template> -->