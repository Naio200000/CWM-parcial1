<script>
    import LogTitle from '../components/fragments/LogTitle.vue';
    import MainH1 from '../components/labels/MainH1.vue';
    import MainH2 from '../components/labels/MainH2.vue';
import MainLabel from '../components/labels/MainLabel.vue';
import MainInput from '../components/labels/MainInput.vue';
    import { register } from '../services/auth';
import MainButton from '../components/labels/MainButton.vue';
    export default {
        name: 'Register',
        components: {MainH1, MainH2, LogTitle, MainLabel, MainInput, MainButton},
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
                try {
                    await register(this.user.email, this.user.password, this.user.displayName); 
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
                    <MainLabel for="displayName">Nombre de usuario</MainLabel>
                    <MainInput  
                        v-model="user.displayName" 
                        type="text" 
                        id="displayName" 
                        placeholder="Nombre de Usuario"
                    />
                </div>
                <div class="mb-4 px-4">
                    <MainLabel for="email">Correo Electronico</MainLabel>
                    <MainInput  
                        v-model="user.email" 
                        type="email" 
                        id="email" 
                        placeholder="Correo Electronico"
                    />
                </div>
                <div class="mb-4 px-4">
                    <MainLabel for="password">Contraña</MainLabel>
                    <MainInput  
                        v-model="user.password" 
                        type="password" 
                        id="password" 
                        placeholder="Contraña"
                    />
                </div>
                <div class="mb-4 px-4">
                    <MainButton type="submit" class="bg-green-800 hover:bg-green-700 active:bg-green-950">Registrarse</MainButton>
                    </div>
                    <div class="mt-4 px-4 border-t-2 w-8/12 mx-auto">
                        <routerLink to="/">
                            <MainButton class="bg-slate-500 hover:bg-slate-400 active:bg-slate-800 transition-all">Iniciar Sesión</MainButton>
                    </routerLink>
                </div>
            </form>
        </section>
    </div>
</template>