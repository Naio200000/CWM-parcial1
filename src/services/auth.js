import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { createUserProfile, updateUserProfile } from "./userProfile";


const EMPTY_USER_DATA = {
    id: null, 
    email:null,
    displayName:null,
    bio:null,
    photoURL:null,
};
let userData = localStorage.getItem('user') == null ? EMPTY_USER_DATA : JSON.parse(localStorage.getItem('user'));
let observers = [];

/**
 * ejecuta la funcion setUserData para agregar o actualizar los datos del usuario y notificar a los observers
 */
onAuthStateChanged(auth, user => {

    if (user) {
        setUserData({
            id: user.uid, 
            email: user.email,
            displayName: user.displayName,
        });
    } else {
        setUserData(EMPTY_USER_DATA);
    }
});

/**
 * Ejecuta el callback cada vez que cambie el estado
 * 
 * @param {() => {}} callback 
 * @returns {() => {}} callback para cancelar las subscripcion
 */
export function subscribeToAuth(callback) {

    observers.push(callback);

    notify(callback);

    return () => observers = observers.filter(obs => obs !== callback);
};

/**
 * Notifica losd atos de un usuario
 * 
 * @param {() => {}} observer 
 */
function notify(observer) {

    observer({...userData});
};

/**
 * Notifica a todos los observes
 */
function notifyAll() {

    observers.forEach(obs => notify(obs));
};

/**
 * Actualiza datos del usuario y notifica a todos
 * update: Se agrega el guardado de los datos en el local storage
 * 
 * @param {{}}} data 
 */
function setUserData(data) {

    userData = {...userData, ...data};

    localStorage.setItem('user', JSON.stringify(userData));

    notifyAll();
};

export async function updateUserData({displayName}) {

    try {
        
        const updateAuthData = updateProfile(auth.currentUser, {displayName});

        console.log(userData.id);
        const updateUserData = updateUserProfile(userData.id, {displayName})

        await Promise.all({updateAuthData, updateUserData});
    } catch (error) {
        console.log(error)
    }

}


/**
 * Registra un usuario en la base de datos
 * 
 * @param {string} email email del usuario
 * @param {string} password password del usuario
 * @returns {Promise<null>}
 */
export async function register(email, password, displayName){

    try {

        const userData = await createUserWithEmailAndPassword(auth, email, password)
        // console.log(userData);
        await createUserProfile(userData.user.uid, {email, displayName})
    } catch (error) {

        console.error(error.code)
        throw error
    }
};

/**
 * Inicia sesion con los datos del usuario
 * 
 * @param {string} email email del usuario
 * @param {string} password password del usuario
 * @returns {Promise<null>}
 */
export function login(email, password){

    return signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
        })
        .catch(error => {
            console.error(error.code)
            throw error
        })
};

/**
 *  Cierra sesion del usuario 
 *  update se borra el local storage when cierra sesion
 * 
 * @returns {Promise<null>}
 */
export function logout(){

    localStorage.removeItem('user');

    return signOut(auth);
};


