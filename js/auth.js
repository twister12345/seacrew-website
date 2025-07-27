// js/auth.js
// Import Firebase SDK
const firebaseConfig = {
  apiKey: "AIzaSyDBCwn0gpqIfxGFhjgPyp4djv34N4rpMyI",
  authDomain: "mobx-auth-77004.firebaseapp.com",
  projectId: "mobx-auth-77004",
  storageBucket: "mobx-auth-77004.appspot.com",
  messagingSenderId: "155941750383",
  appId: "1:155941750383:web:3a5341bad5ebd91aff2f9a",
  measurementId: "G-0BJ503BRT6"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Auth functions
function loginUser() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      closeModals();
      updateUserUI(userCredential.user);
    })
    .catch(error => alert("Login Error: " + error.message));
}

function signUpUser() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      closeModals();
      updateUserUI(userCredential.user);
    })
    .catch(error => alert("Signup Error: " + error.message));
}

function logoutUser() {
  auth.signOut().then(() => {
    updateUserUI(null);
  });
}

function updateUserUI(user) {
  const userInfo = document.getElementById("user-info");
  if (user) {
    userInfo.innerHTML = `Logged in as: ${user.email}`;
  } else {
    userInfo.innerHTML = "";
  }
}

auth.onAuthStateChanged(user => {
  updateUserUI(user);
});

// Close modal helper
function closeModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.style.display = "none";
  });
}
