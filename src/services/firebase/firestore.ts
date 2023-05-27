import { firebaseApp } from "./config";
import { getFirestore } from "firebase/firestore/lite";

export const db = getFirestore(firebaseApp);
