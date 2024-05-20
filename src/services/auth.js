import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";


const EMPTY_USER_DATA = {id: null, email:null,};
let userData = EMPTY_USER_DATA;
let observers = [];

/**
 * ejecuta la funcion setUserData para agregar o actualizar los datos del usuario y notificar a los observers
 */
onAuthStateChanged(auth, user => {
    if (user) {
        setUserData({id: user.uid, email: user.email,});
    } else {
        setUserData(EMPTY_USER_DATA);
    }
})

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
 * 
 * @param {{}}} data 
 */
function setUserData(data) {

    userData = {...userData, ...data};
    notifyAll();
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


