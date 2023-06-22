import { initializeApp, cert } from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import { creds } from "../credentials.js";

initializeApp({
    credential: cert(creds)
})

export const db = getFirestore();
