import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
import {db} from './firebase';

/**
 * Graba un nuevos post en la base de datos
 * @param {{user: string, post: string}} data 
 * @returns {Promise<null>}
 */
export function savePost(data) {

    const refPost = collection(db, 'posts');
    return addDoc(refPost, {
        ...data,
        created_at: serverTimestamp(),
    })
    .then(doc => {

    });
}

/**
 * Ejecuta el callback cada vez que cambien los post en la bd
 * retorna la funcion onSnapshot
 * 
 * @param {() =>{}} callback 
 * @returns {Unsubscribe}
 */
export function subscribeToPosting (callback) {
    
    const refPost = query(
                    collection(db, 'posts'), 
                    orderBy('created_at', 'desc'));

    return onSnapshot(refPost, snapshot => {

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


    export function subscribeToIdPosting (callback, id) {
        
        const refPost = query(
                        collection(db, `posts`),
                        where('user_Id', '==', id),
                        orderBy('created_at', 'desc'));

        return onSnapshot(refPost, snapshot => {

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