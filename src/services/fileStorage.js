import { ref, uploadBytes } from "firebase/storage";


export async function uploadFile(path, file) {

    const fileRef = ref(path, file);
    
    return uploadBytes(fileRef, file);
} 