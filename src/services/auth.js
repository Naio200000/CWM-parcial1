import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export function register(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
            .then(userCredentials => {
                console.log('OK')
            })
            .catch(error => {
                console.error(error.code)
            })
};

export function login(email, password){


};

export function logout(){


};