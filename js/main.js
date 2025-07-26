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

function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

function signUpUser() {
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      user.sendEmailVerification();
      db.collection('users').doc(user.uid).set({
        fullName: name,
        email: email,
        createdAt: new Date()
      });
      document.getElementById('verify-msg').innerText = 'Verification email sent!';
      document.getElementById('verify-msg').style.color = 'green';
    })
    .catch((error) => {
      alert(error.message);
    });
}

function loginUser() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        document.getElementById('user-info').innerText = `Welcome, ${user.email}`;
        closeModal('loginModal');
      } else {
        alert('Please verify your email before logging in.');
      }
    })
    .catch((error) => {
      alert(error.message);
    });
}

function logoutUser() {
  auth.signOut().then(() => {
    document.getElementById('user-info').innerText = '';
    alert('You have been logged out.');
  });
}
