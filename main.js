// main.js: Firebase and UI logic for MOBX Crewing

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
const db = firebase.firestore();

// Modal logic (unchanged)
let lastFocusedElement = null;
function openModal(id) {
  closeModal("loginModal");
  closeModal("signupModal");
  document.getElementById(id).style.display = 'block';
  lastFocusedElement = document.activeElement;
  setTimeout(() => {
    const modal = document.getElementById(id).querySelector('.modal-content');
    if (modal) modal.focus();
  }, 100);
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
  if (lastFocusedElement) lastFocusedElement.focus();
}
window.addEventListener('keydown', function(e) {
  if ((document.getElementById('loginModal').style.display === 'block' ||
      document.getElementById('signupModal').style.display === 'block') && e.key === 'Escape') {
    closeModal('loginModal');
    closeModal('signupModal');
  }
});
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      const focusableEls = modal.querySelectorAll('input, button, [tabindex]:not([tabindex="-1"])');
      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];
      if (e.shiftKey ? document.activeElement === firstEl : document.activeElement === lastEl) {
        e.preventDefault();
        (e.shiftKey ? lastEl : firstEl).focus();
      }
    }
  });
});

// reCAPTCHA
let recaptchaWidgetId = null;
window.onload = function() {
  recaptchaWidgetId = grecaptcha.render('recaptcha-container', {
    'sitekey': 'your_site_key' // TODO: Replace with your real site key!
  });
};

// Sign Up
function signUpUser(e) {
  e.preventDefault();
  document.getElementById('signup-error').innerText = '';
  document.getElementById('verify-msg').innerText = '';
  const t = window.mobxLang.t;
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;

  if (!name) {
    document.getElementById('signup-error').innerText = t('signupErrorName');
    return;
  }
  if (password.length < 6) {
    document.getElementById('signup-error').innerText = t('signupErrorPassword');
    return;
  }
  const recaptchaResponse = grecaptcha.getResponse(recaptchaWidgetId);
  if (!recaptchaResponse) {
    document.getElementById('signup-error').innerText = t('recaptchaIncomplete');
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      user.sendEmailVerification();
      return db.collection('users').doc(user.uid).set({
        fullName: name,
        email: email,
        createdAt: new Date()
      });
    })
    .then(() => {
      document.getElementById('verify-msg').innerText = t('signupSuccess');
      grecaptcha.reset(recaptchaWidgetId);
      document.getElementById('signupForm').reset();
    })
    .catch(error => {
      document.getElementById('signup-error').innerText = error.message;
      grecaptcha.reset(recaptchaWidgetId);
    });
}

// Login
function loginUser(e) {
  e.preventDefault();
  document.getElementById('login-error').innerText = '';
  const t = window.mobxLang.t;
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      if (user.emailVerified) {
        showUserInfo(user.email);
        document.getElementById('logoutBtn').style.display = 'inline-block';
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('btn-login').style.display = 'none';
        document.getElementById('btn-signup').style.display = 'none';
      } else {
        document.getElementById('login-error').innerText = t('loginErrorUnverified');
        auth.signOut();
      }
    })
    .catch(error => {
      document.getElementById('login-error').innerText = error.message;
    });
}

// Logout
function logoutUser() {
  auth.signOut().then(() => {
    clearUserInfo();
    document.getElementById('logoutBtn').style.display = 'none';
    document.getElementById('btn-login').style.display = 'inline-block';
    document.getElementById('btn-signup').style.display = 'inline-block';
  });
}

// Session persistence
auth.onAuthStateChanged(user => {
  if (user && user.emailVerified) {
    showUserInfo(user.email);
    document.getElementById('logoutBtn').style.display = 'inline-block';
    document.getElementById('btn-login').style.display = 'none';
    document.getElementById('btn-signup').style.display = 'none';
  } else {
    clearUserInfo();
    document.getElementById('logoutBtn').style.display = 'none';
    document.getElementById('btn-login').style.display = 'inline-block';
    document.getElementById('btn-signup').style.display = 'inline-block';
  }
});

// Helper functions for language-aware user info
function showUserInfo(email) {
  const t = window.mobxLang.t;
  const userInfo = document.getElementById('user-info');
  userInfo.textContent = `${t('welcomeUser')}, ${email}`;
  userInfo.dataset.email = email;
}
function clearUserInfo() {
  const userInfo = document.getElementById('user-info');
  userInfo.textContent = '';
  userInfo.dataset.email = '';
}