function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("open");
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("open");
  });
});
// Scroll reveal animation

const revealElements = document.querySelectorAll(
  ".section, .intro, .dark-section, .quote-section, .contact, .card, .benefits > div, .routine > div"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});
// Language Switch — English / Hindi

let currentLanguage = localStorage.getItem("language") || "en";

const translations = {
  en: {
    nav: [
      "Home",
      "Spiritual Progress",
      "Healing",
      "Material Wellbeing",
      "Guidance",
      "Contact"
    ],

    homeSmall: "WELCOME TO",
    homeTitle: "Spiritual<br><span>Sudheer</span>",
    homeText:
      "A space for inner growth, positive thinking, spiritual practices and balanced living.",
    explore: "Explore",
    connect: "Connect",

    journeySmall: "THE JOURNEY",
    journeyTitle: "Growth begins within",
    journeyText:
      "Spiritual development can be a personal journey of awareness, reflection, discipline and positive habits.",

    spiritualSmall: "01 — INNER JOURNEY",
    spiritualTitle: "Spiritual Progress",

    cards: [
      ["Meditation", "Simple meditation practices for developing awareness, calmness and concentration."],
      ["Self Growth", "Build positive habits, self-reflection and a disciplined approach to everyday life."],
      ["Positive Mindset", "Focus on constructive thoughts, gratitude and practical steps toward personal development."]
    ],

    healingSmall: "02 — POSITIVE ENERGY",
    healingTitle: "Negative Healing",
    healingText:
      "A spiritual approach can focus on reducing negativity through meditation, reflection, healthy routines and positive actions.",

    healingList: [
      "Mindful breathing",
      "Meditation & reflection",
      "Positive daily routines",
      "Gratitude & awareness"
    ],

    healingNote:
      "Spiritual practices are presented here as personal wellbeing practices and are not a substitute for professional medical care.",

    wellbeingSmall: "03 — BALANCED LIFE",
    wellbeingTitle: "Material Wellbeing",

    benefits: [
      ["Clarity", "Understand your goals and identify practical priorities."],
      ["Discipline", "Consistent habits can help turn intentions into action."],
      ["Balance", "Work toward balancing personal, spiritual and material goals."]
    ],

    guidanceText: "Awareness creates the space for meaningful change.",
    guidanceBy: "— Spiritual Sudheer",

    routineSmall: "04 — DAILY PRACTICE",
    routineTitle: "Simple Daily Routine",

    routine: [
      ["Morning", "5–10 minutes of quiet breathing and reflection."],
      ["Day", "Stay focused on useful actions and positive habits."],
      ["Evening", "Reflect on the day and note things you are grateful for."]
    ],

    contactSmall: "CONNECT WITH ME",
    contactTitle: "Begin Your Journey",
    contactText:
      "For spiritual guidance, questions or general information, you can get in touch with me on WhatsApp.",
    whatsapp: "💬 Chat on WhatsApp",
    whatsappNumber: "WhatsApp: +91 9794219396"
  },

  hi: {
    nav: [
      "होम",
      "आध्यात्मिक प्रगति",
      "हीलिंग",
      "भौतिक कल्याण",
      "मार्गदर्शन",
      "संपर्क"
    ],

    homeSmall: "आपका स्वागत है",
    homeTitle: "आध्यात्मिक<br><span>सुधीर</span>",
    homeText:
      "आंतरिक विकास, सकारात्मक सोच, आध्यात्मिक अभ्यास और संतुलित जीवन के लिए एक विशेष स्थान।",
    explore: "आगे बढ़ें",
    connect: "संपर्क करें",

    journeySmall: "आध्यात्मिक यात्रा",
    journeyTitle: "विकास की शुरुआत भीतर से होती है",
    journeyText:
      "आध्यात्मिक विकास जागरूकता, आत्मचिंतन, अनुशासन और सकारात्मक आदतों की व्यक्तिगत यात्रा हो सकती है।",

    spiritualSmall: "01 — आंतरिक यात्रा",
    spiritualTitle: "आध्यात्मिक प्रगति",

    cards: [
      ["ध्यान", "जागरूकता, शांति और एकाग्रता विकसित करने के लिए सरल ध्यान अभ्यास।"],
      ["आत्म-विकास", "सकारात्मक आदतों, आत्मचिंतन और अनुशासित जीवनशैली को विकसित करना।"],
      ["सकारात्मक सोच", "रचनात्मक विचारों, कृतज्ञता और व्यक्तिगत विकास के व्यावहारिक कदमों पर ध्यान देना।"]
    ],

    healingSmall: "02 — सकारात्मक ऊर्जा",
    healingTitle: "नकारात्मकता से मुक्ति के सकारात्मक अभ्यास",
    healingText:
      "आध्यात्मिक अभ्यासों के माध्यम से ध्यान, आत्मचिंतन, स्वस्थ दिनचर्या और सकारात्मक कार्यों पर ध्यान केंद्रित करके नकारात्मकता को कम करने का प्रयास किया जा सकता है।",

    healingList: [
      "सजग श्वास अभ्यास",
      "ध्यान और आत्मचिंतन",
      "सकारात्मक दैनिक दिनचर्या",
      "कृतज्ञता और जागरूकता"
    ],

    healingNote:
      "यहाँ आध्यात्मिक अभ्यास व्यक्तिगत कल्याण के लिए प्रस्तुत किए गए हैं और ये पेशेवर चिकित्सा देखभाल का विकल्प नहीं हैं।",

    wellbeingSmall: "03 — संतुलित जीवन",
    wellbeingTitle: "भौतिक कल्याण",

    benefits: [
      ["स्पष्टता", "अपने लक्ष्यों को समझें और व्यावहारिक प्राथमिकताओं को पहचानें।"],
      ["अनुशासन", "नियमित आदतें आपके विचारों को कार्य में बदलने में मदद कर सकती हैं।"],
      ["संतुलन", "व्यक्तिगत, आध्यात्मिक और भौतिक लक्ष्यों के बीच संतुलन बनाने का प्रयास करें।"]
    ],

    guidanceText: "जागरूकता सार्थक बदलाव के लिए स्थान बनाती है।",
    guidanceBy: "— आध्यात्मिक सुधीर",

    routineSmall: "04 — दैनिक अभ्यास",
    routineTitle: "सरल दैनिक दिनचर्या",

    routine: [
      ["सुबह", "5–10 मिनट शांत श्वास अभ्यास और आत्मचिंतन।"],
      ["दिन", "उपयोगी कार्यों और सकारात्मक आदतों पर ध्यान केंद्रित करें।"],
      ["शाम", "दिनभर के अनुभवों पर विचार करें और उन चीज़ों को याद करें जिनके लिए आप आभारी हैं।"]
    ],

    contactSmall: "मुझसे जुड़ें",
    contactTitle: "अपनी यात्रा शुरू करें",
    contactText:
      "आध्यात्मिक मार्गदर्शन, प्रश्नों या सामान्य जानकारी के लिए आप WhatsApp पर मुझसे संपर्क कर सकते हैं।",
    whatsapp: "💬 WhatsApp पर संपर्क करें",
    whatsappNumber: "WhatsApp: +91 9794219396"
  }
};



function updateSpecialMessage() {
  const hi = document.querySelector(".special-message-hi");
  const en = document.querySelector(".special-message-en");

  if (!hi || !en) return;

  if (currentLanguage === "hi") {
    hi.style.display = "block";
    en.style.display = "none";
  } else {
    hi.style.display = "none";
    en.style.display = "block";
  }
}

function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "hi" : "en";
  localStorage.setItem("language", currentLanguage);

  const t = translations[currentLanguage];

  // Navigation
  const navLinks = document.querySelectorAll("#nav a");

  navLinks.forEach((link, index) => {
    link.textContent = t.nav[index];
  });

  // Hero
  document.querySelector(".hero .small-title").textContent = t.homeSmall;
  document.querySelector(".hero h1").innerHTML = t.homeTitle;
  document.querySelector(".hero-text").textContent = t.homeText;

  const heroButtons = document.querySelectorAll(".hero-buttons .btn");
  heroButtons[0].textContent = t.explore;
  heroButtons[1].textContent = t.connect;

  // Journey
  document.querySelector(".intro .small-title").textContent = t.journeySmall;
  document.querySelector(".intro h2").textContent = t.journeyTitle;
  document.querySelector(".intro p:last-child").textContent = t.journeyText;

  // Spiritual Progress
  const spiritual = document.querySelector("#spiritual");

  spiritual.querySelector(".small-title").textContent = t.spiritualSmall;
  spiritual.querySelector("h2").textContent = t.spiritualTitle;

  const cards = spiritual.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.querySelector("h3").textContent = t.cards[index][0];
    card.querySelector("p").textContent = t.cards[index][1];
  });

  // Healing
  const healing = document.querySelector("#healing");

  healing.querySelector(".small-title").textContent = t.healingSmall;
  healing.querySelector("h2").textContent = t.healingTitle;
  healing.querySelector(".wide-text").textContent = t.healingText;

  const healingItems = healing.querySelectorAll(".healing-list div");

  healingItems.forEach((item, index) => {
    const number = String(index + 1).padStart(2, "0");
    item.innerHTML = number + ' <span>' + t.healingList[index] + '</span>';
  });

  healing.querySelector(".note").textContent = t.healingNote;

  // Material Wellbeing
  const wellbeing = document.querySelector("#wellbeing");

  wellbeing.querySelector(".small-title").textContent = t.wellbeingSmall;
  wellbeing.querySelector("h2").textContent = t.wellbeingTitle;

  const benefitItems = wellbeing.querySelectorAll(".benefits > div");

  benefitItems.forEach((item, index) => {
    item.querySelector("h3").textContent = t.benefits[index][0];
    item.querySelector("p").textContent = t.benefits[index][1];
  });

  // Guidance / Quote
  const quote = document.querySelector(".quote-section");

  quote.querySelector("h2").textContent = t.guidanceText;
  quote.querySelector("p").textContent = t.guidanceBy;

  // Daily Routine
  const routineSection = document.querySelectorAll(".section")[2];

  routineSection.querySelector(".small-title").textContent = t.routineSmall;
  routineSection.querySelector("h2").textContent = t.routineTitle;

  const routineItems = routineSection.querySelectorAll(".routine > div");

  routineItems.forEach((item, index) => {
    item.querySelector("span").textContent = t.routine[index][0];
    item.querySelector("p").textContent = t.routine[index][1];
  });

  // Contact
  const contact = document.querySelector("#contact");

  contact.querySelector(".small-title").textContent = t.contactSmall;
  contact.querySelector("h2").textContent = t.contactTitle;
  contact.querySelector("p").textContent = t.contactText;
  contact.querySelector(".whatsapp-btn").textContent = t.whatsapp;
  contact.querySelector(".phone-number").textContent = t.whatsappNumber;

  updateSpecialMessage();

  // HTML language attribute
  document.documentElement.lang = currentLanguage === "hi" ? "hi" : "en";
}


document.addEventListener("DOMContentLoaded", () => {
  if (currentLanguage === "hi") {
    toggleLanguage();
    currentLanguage = "hi";
    localStorage.setItem("language", "hi");
  } else {
    document.documentElement.lang = "en";
  }
});
