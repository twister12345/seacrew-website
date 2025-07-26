// lang.js

window.mobxLang = (function () {
  const translations = {
    en: {
      welcome: "Welcome",
      welcomeUser: "Welcome",
      login: "Login",
      signup: "Sign up",
      logout: "Logout",
      loginModalTitle: "Login",
      signupModalTitle: "Sign Up",
      loginErrorUnverified: "Please verify your email before logging in.",
      signupSuccess: "Signup successful. Please check your email to verify your account.",
      welcomeIntro: "Explore our crewing and insurance services for the marine industry.",
      exploreServices: "Explore Our Crewing Services",
      insuranceHeader: "Insurance Services",
      insuranceText1: "When something goes wrong, both the financial fallout and impact on one’s reputation can create a devastating domino effect for large and small businesses alike. That’s why it’s paramount you opt for insurance services from an experienced company that understands the shipping and marine industry inside out. That way, when a disruption occurs, you’ll get the support you need.",
      insuranceText2: "MOBX-CREWING has earned an international reputation for delivering top-tier insurance services. Our professional, efficient claims management team provides clients with reliable, effective support built through decades of experience.",
      insuranceText3: "We understand the critical role of shipping in the global economy. With knowledge of varying vessel risks, we negotiate cost-effective prices from underwriters and pass savings to clients. This ensures comprehensive protection and coverage from liabilities and risks.",
      insuranceText4: "Our in-house insurance broking company, Risk Management Ltd., integrates marine insurance services to deliver the best customer experience and coverage tailored to your vessels and operations.",
      insuranceText5: "MOBX-CREWING's extensive marine service network supports a wide client base — from shipowners and banks to unions and offshore contractors.",
      checkHere: "Check here"
    },
    me: {
      welcome: "Dobrodošli",
      welcomeUser: "Dobrodošli",
      login: "Prijava",
      signup: "Registracija",
      logout: "Odjava",
      loginModalTitle: "Prijava",
      signupModalTitle: "Registracija",
      loginErrorUnverified: "Molimo potvrdite svoj email prije prijave.",
      signupSuccess: "Uspješna registracija. Provjerite svoj email kako biste potvrdili nalog.",
      welcomeIntro: "Istražite naše usluge zapošljavanja i osiguranja u pomorskoj industriji.",
      exploreServices: "Istražite naše usluge zapošljavanja",
      insuranceHeader: "Usluge osiguranja",
      insuranceText1: "Kada nešto pođe po zlu, i finansijska šteta i uticaj na reputaciju mogu izazvati razarajući efekat domina kako za velika tako i za mala preduzeća. Zato je ključno da odaberete osiguranje od iskusne kompanije koja duboko razumije pomorsku industriju. Tako, kada dođe do poremećaja, dobijate podršku koja vam je potrebna.",
      insuranceText2: "MOBX-CREWING je stekao međunarodnu reputaciju za pružanje vrhunskih usluga osiguranja. Naš profesionalni tim za upravljanje zahtjevima pruža klijentima pouzdanu i efikasnu podršku izgrađenu decenijama iskustva.",
      insuranceText3: "Razumijemo ključnu ulogu brodarstva u globalnoj ekonomiji. Sa znanjem o različitim rizicima plovila, pregovaramo o povoljnim cijenama kod osiguravača i štednju prenosimo na klijente. Ovo osigurava sveobuhvatnu zaštitu i pokriće od odgovornosti i rizika.",
      insuranceText4: "Naša interna brokerska firma za osiguranje, Risk Management Ltd., integriše usluge osiguranja kako bi pružila najbolje korisničko iskustvo i pokriće prilagođeno vašim plovilima i operacijama.",
      insuranceText5: "Široka mreža usluga MOBX-CREWING podržava raznovrsnu bazu klijenata — od brodovlasnika i banaka do sindikata i izvođača na moru.",
      checkHere: "Pogledajte ovdje"
    }
  };

  let currentLang = 'en';

  function setLang(lang) {
    currentLang = translations[lang] ? lang : 'en';
    updateTexts();
  }

  function t(key) {
    return translations[currentLang][key] || key;
  }

  function updateTexts() {
    document.getElementById('welcome-title').innerText = t('welcome');
    document.getElementById('welcome-intro').innerText = t('welcomeIntro');
    document.getElementById('loginModalTitle').innerText = t('loginModalTitle');
    document.getElementById('signupModalTitle').innerText = t('signupModalTitle');
    document.getElementById('btn-login').innerText = t('login');
    document.getElementById('btn-signup').innerText = t('signup');
    document.getElementById('logoutBtn').innerText = t('logout');
    document.querySelector('button.modern-button').innerText = t('exploreServices');

    const insuranceSection = document.getElementById('insurance-text');
    if (insuranceSection) {
      insuranceSection.querySelector('h3').innerText = t('insuranceHeader');
      const paragraphs = insuranceSection.querySelectorAll('p');
      if (paragraphs.length >= 5) {
        paragraphs[0].innerText = t('insuranceText1');
        paragraphs[1].innerText = t('insuranceText2');
        paragraphs[2].innerText = t('insuranceText3');
        paragraphs[3].innerText = t('insuranceText4');
        paragraphs[4].innerHTML = `${t('insuranceText5')} <a href='#'>${t('checkHere')}</a>`;
      }
    }
  }

  document.getElementById('flag-me').addEventListener('click', () => setLang('me'));
  document.getElementById('flag-en').addEventListener('click', () => setLang('en'));

  return {
    t
  };
})();
