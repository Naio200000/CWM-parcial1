import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, updateDoc, where } from 'firebase/firestore';
import {db} from './firebase';
import { getImageExtension } from '../libraries/file';
import { uploadFile } from './fileStorage';

/**
 * const {photoURL: photoURL} = await uploadFile(`posts/${document.id}/postimage.${getImageExtension(file)}`, file);
 * 
 * Graba un nuevos post en la base de datos
 * @param {{user: string, post: string}} data 
 * @returns {Promise<null>}
 */
export async function savePost(data) {

    if (data.post == '') {
        return Promise.reject(new Error('No puede publicar un post sin texto'));
    }
    
    const refPost = collection(db, 'posts');
    return addDoc(refPost, {
        ...data,
        created_at: serverTimestamp(),
    }).then(async doc =>{

    })

}

export function saveComment(data, postId) {

    if (data.comment == '') {
        return Promise.reject(new Error('No puede publicar un comentario sin texto'));
    }
    const refComment = collection(db, `posts/${postId}/comments`);
    
    return addDoc(refComment, {
        ...data,
        created_at:serverTimestamp(),
    }).then(doc => {

    });
}

/**
 * Ejecuta el callback cada vez que cambien los post en la bd
 * retorna la funcion onSnapshot
 * 
 * @param {() =>{}} callback 
 * @returns {Unsubscribe}
 */
export function subscribeToPosting(callback) {
    
    const refPost = query(
                    collection(db, 'posts'), 
                    orderBy('created_at', 'desc'));

    return onSnapshot(refPost, async snapshot => {
        
        const posts = snapshot.docs.map(doc => {

            return {
                id: doc.id,
                user: doc.data().user,
                post: doc.data().post,
                date: doc.data().created_at?.toDate(),
            }
        })

        callback(posts);
    });
}

/**
 * Ejecuta el callback cada vez que cambien los post en la bd
 * retorna la funcion onSnapshot
 * 
 * @param {() =>{}} callback 
 * @returns {Unsubscribe}
 */
export function subscribeToUserPosting(userId, callback) {
    
    const refUserPost = query(
        collection(db, 'posts'),
        where('user_Id', '==', userId),
        orderBy('created_at', 'desc')
    );

    return onSnapshot(refUserPost, async snapshot => {

        const posts = snapshot.docs.map(doc => {

            return {
                id: doc.id,
                user: doc.data().user,
                post: doc.data().post,
                photoURL: doc.data().photoURL,
                date: doc.data().created_at?.toDate(),
            };
        });

        callback(posts);
    });
}

/**
 * 
 * @param {string} postId 
 * @param {() => {}} callback 
 */
export function subscribeToComments(postId, callback) {

    const refComment = query(
                        collection(db, `posts/${postId}/comments`),
                        orderBy('created_at', 'desc'));

    return onSnapshot(refComment, async snapshot => {

        const comments = snapshot.docs.map(doc => {

            return {
                id: doc.id,
                user_email: doc.data().user_email,
                user_id: doc.data().user_Id,
                comment: doc.data().comment,
                date: doc.data().created_at?.toDate(),
            }
        })
        callback(comments);
    })
}