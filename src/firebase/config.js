// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from 'firebase/auth';
// Функція для підключення бази даних у проект
import { getFirestore } from 'firebase/firestore';
// Функція для підключення сховища файлів в проект
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBV2bQ-BUt7md9rXj376ARjhLVm8NbqKpo",
    authDomain: "mynewproject-d511a.firebaseapp.com",
    databaseURL: "https://mynewproject-d511a-default-rtdb.firebaseio.com",
    projectId: "mynewproject-d511a",
    storageBucket: "mynewproject-d511a.appspot.com",
    messagingSenderId: "477687916186",
    appId: "1:477687916186:web:64dd13a08662e44c76e123",
    measurementId: "G-WCJS00PHYS",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);