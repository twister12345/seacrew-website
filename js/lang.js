document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    en: {
      welcomeTitle: "Welcome",
      welcomeIntro: "Explore global maritime crewing solutions with MOBX-CREWING.",
      welcomePartner: "We’re proud to partner with global shipping leaders.",
      servicesTitle: "Our Services",
      servicesList: [
        "Crew Management",
        "Recruitment & Training",
        "Maritime Logistics",
        "Technical Consulting",
      ],
      whyTitle: "Why MOBX?",
      whyList: [
        "Global network & experience",
        "Reliable & efficient processes",
        "Dedicated to safety and compliance",
        "24/7 support & crew welfare",
      ],
    },
    me: {
      welcomeTitle: "Dobrodošli",
      welcomeIntro: "Istražite globalna rešenja za brodsku posadu sa MOBX-CREWING-om.",
      welcomePartner: "Ponosni smo što sarađujemo sa liderima u pomorskom sektoru.",
      servicesTitle: "Naše Usluge",
      servicesList: [
        "Upravljanje posadom",
        "Regrutacija i obuka",
        "Pomorska logistika",
        "Tehničko savjetovanje",
      ],
      whyTitle: "Zašto MOBX?",
      whyList: [
        "Globalna mreža i iskustvo",
        "Pouzdani i efikasni procesi",
        "Posvećenost bezbjednosti i usklađenosti",
        "Podrška 24/7 i dobrobit posade",
      ],
    }
  };

  function setLanguage(lang) {
    const t = translations[lang];

    document.getElementById("welcome-title").textContent = t.welcomeTitle;
    document.getElementById("welcome-intro").textContent = t.welcomeIntro;
    document.getElementById("services-title").textContent = t.servicesTitle;
    document.getElementById("why-title").textContent = t.whyTitle;
    document.getElementById("welcome-partner").textContent = t.welcomePartner;

    const servicesList = document.getElementById("services-list");
    servicesList.innerHTML = "";
    t.servicesList.forEach(service => {
      const li = document.createElement("li");
      li.textContent = service;
      servicesList.appendChild(li);
    });

    const whyList = document.getElementById("why-list");
    whyList.innerHTML = "";
    t.whyList.forEach(why => {
      const li = document.createElement("li");
      li.textContent = why;
      whyList.appendChild(li);
    });
  }

  document.getElementById("flag-me")?.addEventListener("click", () => setLanguage("me"));
  document.getElementById("flag-en")?.addEventListener("click", () => setLanguage("en"));

  // Default language
  setLanguage("en");
});
