import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { createUserProfile, updateUserProfile } from "./userProfile";
import { getFileURL, uploadFile } from "./fileStorage";
import { getImageExtension } from "../libraries/file";


const EMPTY_USER_DATA = {
    id: null, 
    email:null,
    displayName:null,
    playing:null,
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
            photoURL: user.photoURL,
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

export async function updateUserData({displayName, playing, bio}) {

    try {
        
        const updateAuthData = updateProfile(auth.currentUser, {displayName});

        const updateUserData = updateUserProfile(userData.id, {displayName, playing, bio})

        await Promise.all([updateAuthData, updateUserData]);

        setUserData({displayName, playing, bio})
    } catch (error) {
        console.log(error)
    }

}

export async function updateUserPhoto (photo) {

    try {
        
        await uploadFile(`users/${userData.id}/profilePhoto.${getImageExtension(photo)}`, photo);

        const photoURL = await getFileURL(`users/${userData.id}/profilePhoto.${getImageExtension(photo)}`);

        const updateAuthPhoto = updateProfile(auth.currentUser, {photoURL});

        const updateUserPhoto = updateUserProfile(userData.id, {photoURL})
        
        await Promise.all([updateAuthPhoto, updateUserPhoto]);
        
        setUserData({photoURL})
    } catch (error) {
        
        // console.log(error)
        throw error
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
        const updateAuthData = updateProfile(auth.currentUser, {displayName});
        const createUserData = createUserProfile(userData.user.uid, {email, displayName})
        await Promise.all([updateAuthData, createUserData]);

        setUserData({displayName});
    } catch (error) {
        return Promise.reject(new Error('[Auth.js | Register error] ' + error));
        // console.error(error.code)
        // throw error
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
            // console.error(error.code)
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


