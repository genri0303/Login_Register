 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

 const firebaseConfig = {
    apiKey: "AIzaSyBuylQPz7bNwyZtqtkYgPuALFJ4-CQDAq0",
    authDomain: "login-and-register-8cdb4.firebaseapp.com",
    projectId: "login-and-register-8cdb4",
    storageBucket: "login-and-register-8cdb4.firebasestorage.app",
    messagingSenderId: "746847293592",
    appId: "1:746847293592:web:91bed6a7c5cace06aa00ed"
};

 const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

 document.addEventListener('DOMContentLoaded', function () {
 
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = document.getElementById("registerEmail").value;
            const password = document.getElementById("registerPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (password === confirmPassword) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then(() => {
                        alert("Registro exitoso. Ahora puedes iniciar sesión.");
                        registerForm.reset();
                        window.location.href = "index.html";  
                    })
                    .catch((error) => {
                        alert("Error: " + error.message);
                    });
            } else {
                alert("Las contraseñas no coinciden.");
            }
        });
    }
 
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    alert("Inicio de sesión exitoso.");
                    loginForm.reset();
                    window.location.href = "home.html";  
                })
                .catch((error) => {
                    alert("Error: " + error.message);
                });
        });
    }
});
