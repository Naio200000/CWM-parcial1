import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

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
            })
};

export function login(email, password){


};

export function logout(){


};