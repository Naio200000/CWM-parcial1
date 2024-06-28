import { subscribeToAuth } from '../services/auth';
import { onMounted, onUnmounted, ref } from 'vue';

export function useAuth() {

    const user = ref({
        authUser: {
            id: null,
            email: null
        },
    });
    let unsubscribeToAUth = () => {};

    onMounted(() => {
        unsubscribeToAUth = subscribeToAuth(userData => user.value = userData);
    });
    onUnmounted(() => {
        unsubscribeToAUth();
    })

    return {
        user,
    }
}