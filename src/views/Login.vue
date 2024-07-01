<script>
    import LogTitle from '../components/fragments/LogTitle.vue';
    import MainH1 from '../components/labels/MainH1.vue';
    import MainH2 from '../components/labels/MainH2.vue';
    import MainLabel from '../components/labels/MainLabel.vue';
    import MainButton from '../components/labels/MainButton.vue';
    import { login } from '../services/auth';
    import MainP from '../components/labels/MainP.vue';
    export default {
        name: 'Login',
        components: { MainH1, MainH2, LogTitle, MainLabel, MainButton, MainP },
        data() {

            return {
                user: {
                    email: '',
                    password:'',
                },
                loading: false,
                feedbackMsg: '',
            }
        },
        methods: {

            async submitLogin(){
                try {

                    await login(this.user.email, this.user.password); 
                    this.$router.push({
                        path: '/home',
                    })
                } catch (error) {
                    this.feedbackMsg = 'Usuario o Contraseña no encontrado'
                }
            }
        }
    }
</script>

<template>
    <div class="h-full flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-evenly lg:mx-8 lg:gap-4" >
        <header class="lg:w-1/2 w-10/12 max-w-log">
                <LogTitle />
        </header>
        <section class="lg:w-1/2 w-10/12 max-w-log p-5 bg-gray-100 rounded-xl shadow-xl shadow-slate-500">
            <MainH2 class="sr-only">Iniciar Sesion</MainH2>
            <form action="" @submit.prevent="submitLogin">
                <div v-if="feedbackMsg" class="mb-4 px-4">
                    <div class="bg-red-200 w-full p-2 m-2 text-xl rounded-lg">
                        <MainP class="text-center text-lg">{{ feedbackMsg }}</MainP>
                    </div>
                </div>
                <div class="mb-4 px-4">
                    <MainLabel for="email">Correo Electronico</MainLabel>
                    <input 
                        v-model="user.email" 
                        class="w-full p-2 m-2 text-xl border-gray-400 border-2 rounded-lg"
                        type="email" 
                        id="email" 
                        placeholder="Correo Electronico"
                    />
                </div>
                <div class="mb-4 px-4">
                    <MainLabel for="passw0rd">Contraña</MainLabel>
                    <input 
                        v-model="user.password" 
                        class="w-full p-2 m-2 text-xl border-gray-400 border-2 rounded-lg"
                        type="password" 
                        id="password" 
                        placeholder="Contraña" 
                    />
                </div>
                <div class="mb-4 px-4">
                    <MainButton type="submit" class="bg-slate-500 hover:bg-slate-400 active:bg-slate-800">Iniciar Sesión</MainButton>
                </div>
                <div class="mt-4 px-4 border-t-2 w-8/12 mx-auto">
                    <routerLink to="/registrarse">
                        <MainButton class="bg-green-800 hover:bg-green-700 active:bg-green-950">Registrarse</MainButton>
                    </routerLink>
                </div>
            </form>
        </section>
    </div>
</template>