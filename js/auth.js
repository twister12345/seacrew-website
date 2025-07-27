// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Sign up
function signupUser() {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("Signup successful!");
      closeModal("signupModal");
    })
    .catch(error => {
      alert("Signup error: " + error.message);
    });
}

// Login
function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("Login successful!");
      closeModal("loginModal");
    })
    .catch(error => {
      alert("Login error: " + error.message);
    });
}

// Logout
function logoutUser() {
  auth.signOut()
    .then(() => {
      alert("Logged out!");
    })
    .catch(error => {
      alert("Logout error: " + error.message);
    });
}

// Track auth state
auth.onAuthStateChanged(user => {
  const userInfo = document.getElementById("user-info");
  if (user) {
    userInfo.textContent = `Logged in as: ${user.email}`;
    document.getElementById("logoutBtn").style.display = "inline-block";
  } else {
    userInfo.textContent = "";
    document.getElementById("logoutBtn").style.display = "none";
  }
});

// Modal open/close helpers
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "block";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "none";
}
