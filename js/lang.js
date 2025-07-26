
Skip to content
Navigation Menu
twister12345
seacrew-website

Type / to search
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
1
Insights
Settings
Commit b1c4824
twister12345
twister12345
authored
4 minutes ago
·
·
Verified
Update lang.js
main
1 parent 
4944338
 commit 
b1c4824
File tree
Filter files…
js
lang.js
1 file changed
+0
-146
lines changed
Search within code
 
‎js/lang.js
-146
Lines changed: 0 additions & 146 deletions
Original file line number	Diff line number	Diff line change
@@ -1,147 +1 @@
// lang.js: Language switching logic for MOBX Crewing

const LANGUAGES = {
  en: {
    welcome: "Welcome to MOBX Crewing Agency",
    intro: "MOBX Crewing is a professional maritime recruitment and crew management company dedicated to connecting highly qualified seafarers with global ship owners and operators. Our goal is to ensure optimal crew performance, safety, and satisfaction by providing reliable and skilled maritime personnel.",
    services: "Our Services",
    servicesList: [
      "Recruitment of Officers and Ratings for all vessel types",
      "Pre-employment screening, certification checks, and interviews",
      "Crew planning and scheduling",
      "Travel and documentation support",
      "Training and development support"
    ],
    why: "Why Choose MOBX?",
    whyList: [
      "Extensive database of certified and experienced crew",
      "Compliance with MLC 2006 and STCW standards",
      "Personalized client approach and fast response times",
      "Focus on safety, retention, and long-term partnerships"
    ],
    partner: "Whether you’re a shipowner seeking reliable crew or a seafarer looking for your next contract, MOBX Crewing is your trusted maritime HR partner.",
    login: "Login",
    signup: "Sign up",
    logout: "Logout",
    loginTitle: "Login",
    signupTitle: "Sign Up",
    loginPlaceholderEmail: "Email",
    loginPlaceholderPassword: "Password",
    signupPlaceholderName: "Full Name",
    signupPlaceholderEmail: "Email",
    signupPlaceholderPassword: "Password",
    close: "Close",
    signupSuccess: "Verification email sent! Please check your inbox before logging in.",
    loginErrorUnverified: "Please verify your email before logging in.",
    recaptchaIncomplete: "Please complete the reCAPTCHA.",
    signupErrorName: "Please enter your full name.",
    signupErrorPassword: "Password must be at least 6 characters.",
    welcomeUser: "Welcome"
  },
  me: {
    welcome: "Dobrodošli u MOBX Crewing Agenciju",
    intro: "MOBX Crewing je profesionalna pomorska agencija za zapošljavanje i upravljanje posadom, posvećena povezivanju kvalifikovanih pomoraca sa svjetskim brodovlasnicima i operaterima. Naš cilj je da obezbijedimo optimalne performanse posade, bezbjednost i zadovoljstvo pružajući pouzdano i stručno pomorsko osoblje.",
    services: "Naše usluge",
    servicesList: [
      "Zapošljavanje oficira i članova posade za sve tipove brodova",
      "Predzapošljavanje, provjera sertifikata i intervjui",
      "Planiranje i raspoređivanje posade",
      "Podrška za putovanja i dokumentaciju",
      "Podrška za obuku i razvoj"
    ],
    why: "Zašto izabrati MOBX?",
    whyList: [
      "Opsežna baza podataka sertifikovanih i iskusnih članova posade",
      "Usklađenost sa MLC 2006 i STCW standardima",
      "Personalizovan pristup klijentima i brza reakcija",
      "Fokus na bezbjednost, zadržavanje i dugoročna partnerstva"
    ],
    partner: "Bilo da ste brodovlasnik u potrazi za pouzdanom posadom ili pomorac koji traži novi ugovor, MOBX Crewing je vaš pouzdani partner za pomorski HR.",
    login: "Prijava",
    signup: "Registracija",
    logout: "Odjava",
    loginTitle: "Prijava",
    signupTitle: "Registracija",
    loginPlaceholderEmail: "Email",
    loginPlaceholderPassword: "Lozinka",
    signupPlaceholderName: "Puno ime",
    signupPlaceholderEmail: "Email",
    signupPlaceholderPassword: "Lozinka",
    close: "Zatvori",
    signupSuccess: "Verifikacioni email je poslat! Provjerite inbox prije prijave.",
    loginErrorUnverified: "Molimo potvrdite svoj email prije prijave.",
    recaptchaIncomplete: "Molimo završite reCAPTCHA.",
    signupErrorName: "Unesite svoje puno ime.",
    signupErrorPassword: "Lozinka mora imati najmanje 6 karaktera.",
    welcomeUser: "Dobrodošli"
  }
};
let currentLang = localStorage.getItem('mobx-lang') || 'en';
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}
function setPlaceholder(id, value) {
  const el = document.getElementById(id);
  if (el) el.placeholder = value;
}
function updateLanguageUI() {
  const t = LANGUAGES[currentLang];
  setText('welcome-title', t.welcome);
  setText('welcome-intro', t.intro);
  setText('services-title', t.services);
  const ul1 = document.getElementById('services-list');
  if (ul1) ul1.innerHTML = t.servicesList.map(item => `<li>${item}</li>`).join('');
  setText('why-title', t.why);
  const ul2 = document.getElementById('why-list');
  if (ul2) ul2.innerHTML = t.whyList.map(item => `<li>${item}</li>`).join('');
  setText('welcome-partner', t.partner);
  setText('btn-login', t.login);
  setText('btn-signup', t.signup);
  setText('logoutBtn', t.logout);
  setText('loginModalTitle', t.loginTitle);
  setPlaceholder('loginEmail', t.loginPlaceholderEmail);
  setPlaceholder('loginPassword', t.loginPlaceholderPassword);
  setText('login-submit-btn', t.login);
  setText('login-close-btn', t.close);
  setText('signupModalTitle', t.signupTitle);
  setPlaceholder('signupName', t.signupPlaceholderName);
  setPlaceholder('signupEmail', t.signupPlaceholderEmail);
  setPlaceholder('signupPassword', t.signupPlaceholderPassword);
  setText('signup-submit-btn', t.signup);
  setText('signup-close-btn', t.close);
  // Update user info greeting if user is logged in
  const userInfo = document.getElementById('user-info');
  if (userInfo && userInfo.dataset.email) {
    userInfo.textContent = `${t.welcomeUser}, ${userInfo.dataset.email}`;
  }
}
function switchLanguage(lang) {
  if (!LANGUAGES[lang]) return;
  currentLang = lang;
  localStorage.setItem('mobx-lang', lang);
  updateLanguageUI();
}
// Flag click handlers
window.addEventListener('DOMContentLoaded', () => {
  const flagMe = document.getElementById('flag-me');
  const flagEn = document.getElementById('flag-en');
  if (flagMe) flagMe.addEventListener('click', () => switchLanguage('me'));
  if (flagEn) flagEn.addEventListener('click', () => switchLanguage('en'));
  updateLanguageUI();
});
window.mobxLang = {
  get: () => currentLang,
  t: (key) => LANGUAGES[currentLang][key] || key
};
