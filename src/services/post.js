import { addDoc, collection, getDocs, onSnapshot, orderBy, query, serverTimestamp, snapshotEqual, where } from 'firebase/firestore';
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

export function saveComment(data, postId) {

    const refComment = collection(db, `posts/${postId}/comments`);
    
    return addDoc(refComment, {
        ...data,
        created_at:serverTimestamp(),
    }).then(doc => {
    
    });
}

/**
 * Ejecuta el callback cada vez que cambien los post en la bd
 * Trae todos los posts con sus comentarios
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

        const posts = [];
        
        for (const doc of snapshot.docs) {
            const postData = doc.data();
            const commentsSnapshot = await getCommentsForPost(doc.ref);
            const comments = commentsSnapshot.docs.map(commentDoc => ({
                id: commentDoc.id,
                user_email: commentDoc.data().user_email,
                user_id: commentDoc.data().user_id,
                comment: commentDoc.data().comment,
                date: commentDoc.data().created_at.toDate(),
            }));

            posts.push({
                id: doc.id,
                user: postData.user,
                post: postData.post,
                date: postData.created_at.toDate(),
                comments: comments
            });
        }

        callback(posts);
    });
}

/**
 * 
 * @param {{*}} postRef referencia a la collection 
 * @param {() => {}} callback 
 * @returns 
 */
export function subscribeToComments(postRef, callback) {

    const commentRef = query(
                        collection(postRef, 'comments'),
                        orderBy('created_at', 'desc'));

    return onSnapshot(commentRef, async snapshot => {

        const comments = snapshot.docs.map(doc => {
            return {
                id: commentDoc.id,
                user_email: commentDoc.data().user_email,
                user_id: commentDoc.data().user_id,
                comment: commentDoc.data().comment,
                date: commentDoc.data().created_at.toDate(),
            }
        });

        callback(comments);
    })
}

/**
 * trae los documentos que se encuentran dentro de la collecion en un post
 * @param {{post}}} postRef 
 * @returns snapshot de los comentaios de un post
 */
async function getCommentsForPost(postRef) {

    const commentsSnapshot = await getDocs(collection(postRef, 'comments'), orderBy('created_at', 'desc'));
    
    return commentsSnapshot;
}


/**
 * Ejecuta el callback cada vez que cambien los post en la bd
 * Trae todos los posts con sus comentarios
 * retorna la funcion onSnapshot
 * 
 * @param {() =>{}} callback 
 * @returns {Unsubscribe}
 */
export function subscribeToPosting2(callback) {
    
    const refPost = query(
                    collection(db, 'posts'), 
                    orderBy('created_at', 'desc'));

    return onSnapshot(refPost, async snapshot => {
        
        const posts = snapshot.docs.map(doc => {

            return {
                id: doc.data().user_id,
                user: doc.data().user,
                post: doc.data().post,
                date: doc.data().created_at.toDate(),
            }
        })

        callback(posts);
    });
}

/**
 * 
 * @param {string} postId 
 * @param {() => {}} callback 
 */
export function subscribeToComments2(postId, callback) {

    const refComment = query(
                        collection(db, `posts/${postId}/comments`))
                        orderBy('created_at', 'desc');
    
    return onSnapshot(refComment, async snapshot => {

        const comments = snapshot.docs.map(doc => {

            console.log(doc.data());
        })
        
        callback(comments);
    })
}