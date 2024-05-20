import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";


const EMPTY_USER_DATA = {id: null, email:null,};
let userData = EMPTY_USER_DATA;
let observers = [];

/**
 * Agrega los datos del usuario si esta autenticado.
 */
onAuthStateChanged(auth, user => {
    if (user) {
        userData = {id: user.uid, email: user.email,};
    } else {
        userData = EMPTY_USER_DATA;
    }
    notifyAll();
})

/**
 * Ejecuta el callback cada vez que cambie el estado
 * 
 * @param {() => {}} callback 
 */
export function subscribeToAuth(callback) {
    observers.push(callback);

    notify(callback);
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
 * Registra un usuario en la base de datos
 * 
 * @param {string} email email del usuario
 * @param {string} password password del usuario
 * @returns {Promise<null>}
 */
export function register(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            console.log(userCredentials)
        })
        .catch(error => {
            console.error(error.code)
            throw error
        })
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
            console.log(userCredentials)
        })
        .catch(error => {
            console.error(error.code)
            throw error
        })
};

/**
 *  Cierra sesion del usuario 
 * 
 * @returns {Promise<null>}
 */
export function logout(){

    return signOut(auth);
};


