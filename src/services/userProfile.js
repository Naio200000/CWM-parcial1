import { doc, getDoc } from "firebase/firestore";
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