import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

/**
 * Trae los datos de un usuario segun si ID
 * 
 * @param {string} id 
 */
export async function getUserProfilebyId(id) {

    const refUser = doc(db, `users/${id}`);

    const docUser = await getDoc(refUser);

    return {
        id: docUser.id,
        email: docUser.data().email,
    }
}

/**
 * Registra los datos de un nuevo usuario en la bd
 * 
 * @param {string} id Id del usuario para ser el nombre del documento el la base de datos
 * @param {{datos del usuario}} data datos del usuario para ser guardados
 * @return {Promise}
 */
export async function createUserProfile(id, data) {

    const refUser = doc(db, `users/${id}`);

    await setDoc(refUser, data);
}