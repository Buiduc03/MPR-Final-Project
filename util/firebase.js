import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function writeDataToFirestore(collection, document, data) {
    try {
        const ref = doc(firestore, collection, document)
        await setDoc(ref, data);
    } catch (error) {
        return error;
    }
}

export async function checkIfDocExist(collection, document) {
    try {
        const docRef = doc(firestore, collection, document);
        const docSnap = await getDoc(docRef);
        return docSnap.exists();
    } catch (error) {
        return error;
    }
}
export async function getUserData(collection, document) {
    try {
        const docRef = doc(firestore, collection, document);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    } catch (error) {
        return error;
    }
}
export async function updateUserData(collection, document, newData) {
    try {
        const docRef = doc(firestore, collection, document);
        await updateDoc(docRef, newData);
    } catch (error) {
        return error;
    }
}
