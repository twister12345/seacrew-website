// lang.js

document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      welcomeTitle: "Welcome",
      welcomeIntro: "Explore global crewing and maritime solutions with MOBX CREWING.",
      servicesTitle: "Our Services",
      services: [
        "Crew Management",
        "Recruitment & Training",
        "Maritime Logistics",
        "Technical Consulting"
      ],
      whyTitle: "Why Choose Us",
      whyPoints: [
        "Global reach with local expertise",
        "Reliable & efficient processes",
        "Dedicated to safety and compliance",
        "24/7 operational support"
      ],
      welcomePartner: "Partner with MOBX CREWING for your maritime success."
    },

    me: {
      welcomeTitle: "Dobrodošli",
      welcomeIntro: "Istražite globalna rješenja za posadu i pomorstvo sa MOBX CREWING.",
      servicesTitle: "Naše usluge",
      services: [
        "Upravljanje posadom",
        "Regrutacija i obuka",
        "Pomorska logistika",
        "Tehničko savjetovanje"
      ],
      whyTitle: "Zašto izabrati nas",
      whyPoints: [
        "Globalni domet uz lokalno znanje",
        "Pouzdani i efikasni procesi",
        "Posvećenost bezbjednosti i usklađenosti",
        "Podrška 24/7"
      ],
      welcomePartner: "Partnerstvo sa MOBX CREWING za vaš pomorski uspjeh."
    }
  };

  function updateText(lang) {
    const t = translations[lang];
    document.getElementById("welcome-title").innerText = t.welcomeTitle;
    document.getElementById("welcome-intro").innerText = t.welcomeIntro;
    document.getElementById("services-title").innerText = t.servicesTitle;
    document.getElementById("why-title").innerText = t.whyTitle;
    document.getElementById("welcome-partner").innerText = t.welcomePartner;

    const serviceList = document.getElementById("services-list");
    serviceList.innerHTML = "";
    t.services.forEach(service => {
      const li = document.createElement("li");
      li.textContent = service;
      serviceList.appendChild(li);
    });

    const whyList = document.getElementById("why-list");
    whyList.innerHTML = "";
    t.whyPoints.forEach(point => {
      const li = document.createElement("li");
      li.textContent = point;
      whyList.appendChild(li);
    });
  }

  // Flag click events
  document.getElementById("flag-en")?.addEventListener("click", () => updateText("en"));
  document.getElementById("flag-me")?.addEventListener("click", () => updateText("me"));

  // Default to English
  updateText("en");
});
