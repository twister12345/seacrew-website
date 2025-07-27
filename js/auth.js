// Firebase config (already initialized in HTML)

const auth = firebase.auth();

// Show modals
function openModal(id) {
  document.getElementById(id).style.display = 'block';
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// LOGIN
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginSubmit");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          alert("Login successful");
          closeModal('loginModal');
          updateUserInfo(userCredential.user);
        })
        .catch((error) => {
          alert("Login failed: " + error.message);
        });
    });
  }

  // SIGNUP
  const signupBtn = document.getElementById("signupSubmit");
  if (signupBtn) {
    signupBtn.addEventListener("click", () => {
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;

      auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          alert("Signup successful");
          closeModal('signupModal');
          updateUserInfo(userCredential.user);
        })
        .catch((error) => {
          alert("Signup failed: " + error.message);
        });
    });
  }

  // LOGOUT
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      auth.signOut().then(() => {
        alert("Logged out");
        updateUserInfo(null);
      });
    });
  }

  // Monitor auth state
  auth.onAuthStateChanged(user => {
    updateUserInfo(user);
  });
});

// Update user info in header
function updateUserInfo(user) {
  const userInfoDiv = document.getElementById("user-info");
  if (user) {
    userInfoDiv.innerText = `Logged in as: ${user.email}`;
  } else {
    userInfoDiv.innerText = '';
  }
}
