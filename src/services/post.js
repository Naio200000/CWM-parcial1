import { addDoc, collection } from 'firebase/firestore';
import {db} from './firebase';

/**
 * Graba un nuevos post en la base de datos
 * @param {{user: string, post: string}} data 
 * @returns {Promise<null>}
 */
export function savePost(data) {

    const refPost = collection(db, 'post');
    return addDoc(refPost, {
        ...data,
    })
    .then(doc => {

    });
    
}