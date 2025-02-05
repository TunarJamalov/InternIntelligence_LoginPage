
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBSnWqKEsBFt4FZzYtCpSGXbyTs7_-DLfk",
  authDomain: "login-page-5127e.firebaseapp.com",
  projectId: "login-page-5127e",
  storageBucket: "login-page-5127e.appspot.com",
  messagingSenderId: "888903433222",
  appId: "1:888903433222:web:c7abbd06ab1044d794d787",
  measurementId: "G-8MYNEVYF1D"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const loginForm = document.getElementById('loginFormElement');
const registerForm = document.getElementById('registerFormElement');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');


showRegister.addEventListener('click', () => {
  loginForm.classList.add('d-none');
  registerForm.classList.remove('d-none');
});

showLogin.addEventListener('click', () => {
  registerForm.classList.add('d-none');
  loginForm.classList.remove('d-none');
});


loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert('Login successful!');
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});


registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert('Registration successful!');
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
});

// Toggle Dark Mode
const toggleMode = document.getElementById('toggleMode');
toggleMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
