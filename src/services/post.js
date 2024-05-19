import { addDoc, collection, onSnapshot } from 'firebase/firestore';
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
export function subscribeToPosting (callback) {
    
    const refPost = collection(db, 'post');

    onSnapshot(refPost, snapshot => {

        const posts = snapshot.docs.map(doc => {
            return {
                user: doc.data().user,
                post: doc.data().post,
            }
        });
        callback(posts);
    });

}