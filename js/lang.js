// js/lang.js

const translations = {
  en: {
    welcomeTitle: "Welcome",
    welcomeIntro: "Explore global crewing and maritime solutions with MOBX CREWING.",
    exploreButton: "Explore Our Crewing Services",
    insuranceTitle: "Insurance Services",
    insuranceText1: "When something goes wrong, both the financial fallout and impact on one’s reputation can create a devastating domino effect for large and small businesses alike. That’s why it’s paramount you opt for insurance services from an experienced company that understands the shipping and marine industry inside out. That way, when a disruption occurs, you’ll get the support you need.",
    insuranceText2: "MOBX-CREWING has earned an international reputation for delivering top-tier insurance services. Our professional, efficient claims management team provides clients with reliable, effective support built through decades of experience.",
    insuranceText3: "We understand the critical role of shipping in the global economy. With knowledge of varying vessel risks, we negotiate cost-effective prices from underwriters and pass savings to clients. This ensures comprehensive protection and coverage from liabilities and risks.",
    insuranceText4: "Our in-house insurance broking company, Risk Management Ltd., integrates marine insurance services to deliver the best customer experience and coverage tailored to your vessels and operations.",
    insuranceText5: "MOBX-CREWING's extensive marine service network supports a wide client base — from shipowners and banks to unions and offshore contractors.",
    servicesTitle: "Our Services",
    servicesList: [
      "Crew Management",
      "Recruitment & Training",
      "Maritime Logistics",
      "Technical Consulting"
    ],
    whyTitle: "Why Choose Us",
    whyList: [
      "Global reach with local expertise",
      "Reliable & efficient processes",
      "Dedicated to safety and compliance",
      "24/7 operational support"
    ],
    welcomePartner: "Welcome aboard! Let’s work together on building a stronger maritime workforce."
  },

  me: {
    welcomeTitle: "Dobrodošli",
    welcomeIntro: "Istražite globalne posade i pomorska rešenja sa MOBX CREWING.",
    exploreButton: "Istražite naše usluge ukrcaja",
    insuranceTitle: "Usluge osiguranja",
    insuranceText1: "Kada nešto krene po zlu, i finansijski gubitak i uticaj na reputaciju mogu izazvati katastrofalni efekat domina. Zato je važno da izaberete iskusnu kompaniju koja razume pomorsku industriju.",
    insuranceText2: "MOBX-CREWING je stekao međunarodnu reputaciju pružanja vrhunskih usluga osiguranja. Naš efikasan tim za obradu potraživanja nudi pouzdanu podršku izgrađenu kroz decenije iskustva.",
    insuranceText3: "Razumemo kritičnu ulogu brodarstva u globalnoj ekonomiji. Uz znanje o rizicima plovila, pregovaramo povoljne cene i prosleđujemo uštede klijentima.",
    insuranceText4: "Naša kompanija za brokerske usluge, Risk Management Ltd., nudi prilagođena rešenja osiguranja za vaše brodove i operacije.",
    insuranceText5: "MOBX-CREWING ima široku mrežu pomorskih usluga koja podržava brodovlasnike, banke, sindikate i izvođače na moru.",
    servicesTitle: "Naše Usluge",
    servicesList: [
      "Upravljanje posadom",
      "Regrutacija i obuka",
      "Pomorska logistika",
      "Tehničko savetovanje"
    ],
    whyTitle: "Zašto izabrati nas",
    whyList: [
      "Globalni domet sa lokalnim znanjem",
      "Pouzdani i efikasni procesi",
      "Posvećenost bezbednosti i usklađenosti",
      "24/7 operativna podrška"
    ],
    welcomePartner: "Dobrodošli na brod! Radimo zajedno na jačanju pomorske radne snage."
  }
};

function switchLanguage(lang) {
  const t = translations[lang];

  document.getElementById("welcome-title").textContent = t.welcomeTitle;
  document.getElementById("welcome-intro").textContent = t.welcomeIntro;
  document.querySelector(".modern-button").textContent = t.exploreButton;
  document.querySelector("#insurance-text h3").textContent = t.insuranceTitle;

  const insurancePs = document.querySelectorAll("#insurance-text p");
  insurancePs[0].textContent = t.insuranceText1;
  insurancePs[1].textContent = t.insuranceText2;
  insurancePs[2].textContent = t.insuranceText3;
  insurancePs[3].textContent = t.insuranceText4;
  insurancePs[4].innerHTML = `${t.insuranceText5} <a href="#">Check here</a>`;

  document.getElementById("services-title").textContent = t.servicesTitle;
  const servicesList = document.getElementById("services-list");
  servicesList.innerHTML = t.servicesList.map(service => `<li>${service}</li>`).join("");

  document.getElementById("why-title").textContent = t.whyTitle;
  const whyList = document.getElementById("why-list");
  whyList.innerHTML = t.whyList.map(point => `<li>${point}</li>`).join("");

  document.getElementById("welcome-partner").textContent = t.welcomePartner;
}

// Add listeners
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("flag-en").addEventListener("click", () => switchLanguage("en"));
  document.getElementById("flag-me").addEventListener("click", () => switchLanguage("me"));

  switchLanguage("en"); // Default language
});
