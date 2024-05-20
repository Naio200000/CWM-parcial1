import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
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
        created_at: serverTimestamp(),
    })
    .then(doc => {

    });
}
export function subscribeToPosting (callback) {
    
    const refPost = query(
                    collection(db, 'post'), 
                    orderBy('created_at', 'desc'));

    onSnapshot(refPost, snapshot => {

        const posts = snapshot.docs.map(doc => {
            return {
                user: doc.data().user,
                post: doc.data().post,
                date: doc.data().created_at.toDate(),
            }
        });
        callback(posts);
    });

}