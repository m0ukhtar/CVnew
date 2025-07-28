// Traductions
const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.skills": "Compétences",
    "nav.experience": "Expérience",
    "nav.projects": "Projets",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Bonjour, je suis",
    "hero.profession": "Élève ingénieur en 2ᵉ année en ingénierie aérospatiale à l'IPSA",
    "hero.description":
      "Disponible pour un stage de 3 mois dès juin 2025",
    "hero.contact-btn": "Me contacter",
    "hero.cv-btn": "Télécharger mon CV",
    "hero.scroll": "Scroll Down",

    // About Section
    "about.subtitle": "À Propos",
    "about.title": "Qui suis-je?",
    "about.main-title":
      "Futur ingénieur en systèmes aéronautiques autonomes",
    "about.text1":
      "Passionné par l’aéronautique et les systèmes autonomes, je me forme actuellement à l'école d'ingénieurs de l'air, de l'espace et de la mobilité durable IPSA dans le cadre d’un diplôme d’ingénieur en aérospatial. Mon parcours technique, centré sur la mécatronique et les systèmes autonomes, me permet d’aborder les défis industriels avec une double vision : ingénierie de la performance et pilotage stratégique des projets.",
    "about.text2":
      "À travers ma formation, j’ai développé des compétences en contrôle des systèmes, modélisation mécatronique, systèmes embarqués, gestion des projets, ainsi qu’en analyse de stabilité dynamique des aéronefs.",
    "about.text3":
      "Je me forme également en data science et machine learning pour résoudre des problématiques techniques complexes.",
    "about.text4":
      "Mon parcours allie rigueur académique et démarche innovante, que ce soit dans mes projets universitaires ou mes initiatives personnelles. Mon ambition ? Utiliser mes connaissances techniques et ma vision entrepreneuriale pour contribuer à des solutions durables.",
    "about.expertise-title": "Domaines d'expertise",
    "about.expertise1": "Robotique & ROS2",
    "about.expertise2": "Systèmes aéronautiques",
    "about.expertise3": "Modélisation dynamique",
    "about.projects": "Projets complétés",
    "about.experiences": "Expériences clés",
    "about.languages": "Langues parlées",

    // Skills Section
    "skills.subtitle": "Mes Capacités",
    "skills.title": "Mes Compétences",
    "skills.skill1-title": "Ingénierie Système",
    "skills.skill1-desc":
      "Modélisation et simulation de systèmes complexes avec Matlab/Simulink et AMESIM",
    "skills.skill2-title": "Robotique",
    "skills.skill2-desc":
      "Développement avec ROS2, intégration capteurs/actionneurs, algorithmes de contrôle",
    "skills.skill3-title": "Aéronautique",
    "skills.skill3-desc":
      "Conception aérodynamique, systèmes embarqués, simulateurs de vol",
    "skills.skill4-title": "Programmation",
    "skills.skill4-desc":
      "Python, C++, VHDL, développement Web (HTML/CSS/JavaScript)",
    "skills.skill5-title": "CAO",
    "skills.skill5-desc":
      "Conception mécanique avec CATIA, analyse des contraintes, prototypage",
    "skills.skill6-title": "IA/Data Science",
    "skills.skill6-desc":
      "Machine Learning avec Scikit-learn, traitement de données avec Pandas",
    "skills.languages-title": "Langues",
    "skills.lang1": "Anglais",
    "skills.lang1-level": "Natif",
    "skills.lang2": "Arabe",
    "skills.lang2-level": "Natif",
    "skills.lang3": "Mandarin",

    // Experience Section
    "exp.subtitle": "Parcours",
    "exp.title": "Mon Expérience",
    "exp.date1": "2023 - Présent",
    "exp.role1": "Membre actif",
    "exp.desc1":
      "Conception et développement d'un simulateur de vol B777-200LR. Intégration électronique des commandes de vol et développement logiciel.",
    "exp.tag1-1": "Simulation",
    "exp.tag1-2": "Électronique",
    "exp.tag1-3": "Développement",
    "exp.date2": "2023 - Présent",
    "exp.role2": "Membre actif",
    "exp.desc2":
      "Travail sur les composants mécaniques et élaboration de listes de vérification pour l'assemblage d'un ULM biplan (Sherwood Ranger ST).",
    "exp.tag2-1": "Mécanique",
    "exp.tag2-2": "Conception",
    "exp.tag2-3": "Aéronautique",
    "exp.date3": "2020 - Présent",
    "exp.role3": "Fondateur",
    "exp.desc3":
      "Conception de systèmes informatiques et solutions digitales pour petites entreprises. Développement web et assistance technique.",
    "exp.tag3-1": "Entrepreneuriat",
    "exp.tag3-2": "Développement Web",
    "exp.tag3-3": "Solutions Digitales",

    // Education Section
    "edu.subtitle": "Apprentissage",
    "edu.title": "Ma Formation",
    "edu.date1": "2023 - Présent",
    "edu.degree1": "Ingénierie Aéronautique",
    "edu.desc1":
      "Cycle ingénieur, filière Signaux et Systèmes, majeur Mécatronique. Modules: Mécanique, Électronique, Informatique embarquée, Automatisation.",
    "edu.date2": "2024 - 2025",
    "edu.degree2": "Semestre International",
    "edu.school": "Université Aérospatiale de Shenyang, Chine",
    "edu.desc2":
      "Modules: Système de génie électrique, Navigation par satellite, Conception d'avions, Matériaux aérospatiaux.",
    "edu.date3": "2019 - 2020",
    "edu.degree3": "Baccalauréat Scientifique",
    "edu.desc3": "Baccalauréat scientifique avec mention.",

    // Projects Section
    "projects.subtitle": "Portfolio",
    "projects.title": "Mes Projets",
    "projects.filter-all": "Tous",
    "projects.filter-aero": "Aéronautique",
    "projects.filter-robot": "Robotique",
    "projects.filter-sim": "Simulation",
    "projects.filter-code": "Programmation",
    "projects.project1-title": "Drone Quadrirotor",
    "projects.project1-desc":
      "Modélisation dynamique et contrôle sous Matlab/Simulink",
    "projects.project2-title": "Robot Suiveur",
    "projects.project2-desc":
      "Programmation sous ROS2 avec intégration de capteurs",
    "projects.project3-title": "Système Hydraulique",
    "projects.project3-desc":
      "Analyse dynamique avec AMESIM d'un circuit de freinage",
    "projects.project4-title": "Conception Tronçonneuse",
    "projects.project4-desc":
      "Modélisation mécanique sous CATIA avec analyse des contraintes",
    "projects.project5-title": "Programmation FPGA",
    "projects.project5-desc": "Modélisation de circuits séquentiels en VHDL",
    "projects.project6-title": "Machine Learning",
    "projects.project6-desc": "Modèles supervisés avec Scikit-learn et Pandas",
    "projects.view-more": "Voir plus",

    // Contact Section
    "contact.subtitle": "Connectons-nous",
    "contact.title": "Contactez-moi",
    "contact.availability": "Disponible pour des opportunités",
    "contact.message":
      "Je suis actuellement à la recherche d'un stage de 3 mois à partir de juin 2025 dans l'aéronautique.",
    "contact.location": "Île-de-France, France",
    "contact.form-name": "Votre nom",
    "contact.form-email": "Votre email",
    "contact.form-subject": "Sujet",
    "contact.form-message": "Votre message",
    "contact.form-submit": "Envoyer le message",

    // Footer
    "footer.tagline":
      "Ingénieur Mécatronique spécialisé en aéronautique autonome",
    "footer.home": "Accueil",
    "footer.about": "À Propos",
    "footer.skills": "Compétences",
    "footer.experience": "Expérience",
    "footer.projects": "Projets",
    "footer.contact": "Contact",
    "footer.rights": "Tous droits réservés",

    // Titre de la page
    title: "Mahamat Moukhtar | Ingénieur Mécatronique",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Hello, I'm",
    "hero.profession": "2nd year Engineering Student",
    "hero.description":
      "Mechatronic & Autonomous Aerospace Systems – Available for a 4-month internship starting June 2025",
    "hero.contact-btn": "Contact me",
    "hero.cv-btn": "Download my CV",
    "hero.scroll": "Scroll Down",

    // About Section
    "about.subtitle": "About",
    "about.title": "Who am I?",
    "about.main-title":
      "Master’s student in Mechatronic Systems and Autonomous Aerospace Engineering",
    "about.text1":
      "Currently in the engineering cycle (Master 1/Bac+4) at IPSA, I specialize in the design, modeling and optimization of complex systems with an interdisciplinary approach combining mechanics, electronics and computer science.",
    "about.text2":
      "My background has allowed me to develop expertise in mobile robotics, embedded systems and dynamic simulation, with a particular application in the aeronautics sector.",
    "about.expertise-title": "Areas of expertise",
    "about.expertise1": "Robotics & ROS2",
    "about.expertise2": "Aeronautical systems",
    "about.expertise3": "Dynamic modeling",
    "about.projects": "Completed projects",
    "about.experiences": "Key experiences",
    "about.languages": "Languages spoken",

    // Skills Section
    "skills.subtitle": "My Capabilities",
    "skills.title": "My Skills",
    "skills.skill1-title": "Systems Engineering",
    "skills.skill1-desc":
      "Modeling and simulation of complex systems with Matlab/Simulink and AMESIM",
    "skills.skill2-title": "Robotics",
    "skills.skill2-desc":
      "Development with ROS2, sensor/actuator integration, control algorithms",
    "skills.skill3-title": "Aeronautics",
    "skills.skill3-desc":
      "Aerodynamic design, embedded systems, flight simulators",
    "skills.skill4-title": "Programming",
    "skills.skill4-desc":
      "Python, C++, VHDL, Web development (HTML/CSS/JavaScript)",
    "skills.skill5-title": "CAD",
    "skills.skill5-desc":
      "Mechanical design with CATIA, stress analysis, prototyping",
    "skills.skill6-title": "AI/Data Science",
    "skills.skill6-desc":
      "Machine Learning with Scikit-learn, data processing with Pandas",
    "skills.languages-title": "Languages",
    "skills.lang1": "French",
    "skills.lang1-level": "Native",
    "skills.lang2": "Arabic",
    "skills.lang2-level": "Native",
    "skills.lang3": "English",

    // Experience Section
    "exp.subtitle": "Journey",
    "exp.title": "My Experience",
    "exp.date1": "2023 - Present",
    "exp.role1": "Active member",
    "exp.desc1":
      "Design and development of a B777-200LR flight simulator. Electronic integration of flight controls and software development.",
    "exp.tag1-1": "Simulation",
    "exp.tag1-2": "Electronics",
    "exp.tag1-3": "Development",
    "exp.date2": "2023 - Present",
    "exp.role2": "Active member",
    "exp.desc2":
      "Work on mechanical components and development of checklists for the assembly of a biplane microlight (Sherwood Ranger ST).",
    "exp.tag2-1": "Mechanics",
    "exp.tag2-2": "Design",
    "exp.tag2-3": "Aeronautics",
    "exp.date3": "2020 - Present",
    "exp.role3": "Founder",
    "exp.desc3":
      "Design of computer systems and digital solutions for small businesses. Web development and technical support.",
    "exp.tag3-1": "Entrepreneurship",
    "exp.tag3-2": "Web Development",
    "exp.tag3-3": "Digital Solutions",

    // Education Section
    "edu.subtitle": "Education",
    "edu.title": "My Education",
    "edu.date1": "2023 - Present",
    "edu.degree1": "Aeronautical Engineering",
    "edu.desc1":
      "Engineering cycle, course: Signals and Systems, major: Mechatronics. Modules: Mechanics, Electronics, Embedded Computing, Automation.",
    "edu.date2": "2024 - 2025",
    "edu.degree2": "International Semester",
    "edu.school": "Shenyang Aerospace University, China",
    "edu.desc2":
      "Modules: Electrical Engineering System, Satellite Navigation, Aircraft Design, Aerospace Materials.",
    "edu.date3": "2019 - 2020",
    "edu.degree3": "Scientific Baccalaureate",
    "edu.desc3": "Scientific baccalaureate with honors.",

    // Projects Section
    "projects.subtitle": "Portfolio",
    "projects.title": "My Projects",
    "projects.filter-all": "All",
    "projects.filter-aero": "Aeronautics",
    "projects.filter-robot": "Robotics",
    "projects.filter-sim": "Simulation",
    "projects.filter-code": "Programming",
    "projects.project1-title": "Quadcopter Drone",
    "projects.project1-desc":
      "Dynamic modeling and control under Matlab/Simulink",
    "projects.project2-title": "Line Follower Robot",
    "projects.project2-desc": "Programming with ROS2 with sensor integration",
    "projects.project3-title": "Hydraulic System",
    "projects.project3-desc":
      "Dynamic analysis with AMESIM of a braking circuit",
    "projects.project4-title": "Chainsaw Design",
    "projects.project4-desc":
      "Mechanical modeling with CATIA with stress analysis",
    "projects.project5-title": "FPGA Programming",
    "projects.project5-desc": "Modeling of sequential circuits in VHDL",
    "projects.project6-title": "Machine Learning",
    "projects.project6-desc": "Supervised models with Scikit-learn and Pandas",
    "projects.view-more": "View more",

    // Contact Section
    "contact.subtitle": "Let's connect",
    "contact.title": "Contact me",
    "contact.availability": "Available for opportunities",
    "contact.message":
      "I am currently looking for a 4-month internship starting June 2025 in the field of systems engineering or mechatronics.",
    "contact.location": "Île-de-France, France",
    "contact.form-name": "Your name",
    "contact.form-email": "Your email",
    "contact.form-subject": "Subject",
    "contact.form-message": "Your message",
    "contact.form-submit": "Send message",

    // Footer
    "footer.tagline":
      "Mechatronics Engineer specialized in autonomous aeronautics",
    "footer.home": "Home",
    "footer.about": "About",
    "footer.skills": "Skills",
    "footer.experience": "Experience",
    "footer.projects": "Projects",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved",

    // Titre de la page
    title: "Mahamat Moukhtar | Mechatronics Engineer",
  },
};

// Fonction de traduction
function setLanguage(lang) {
  // Sauvegarde la préférence
  localStorage.setItem("preferredLanguage", lang);

  // Met à jour tous les éléments avec data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key]; // Utiliser innerHTML pour interpréter les balises HTML
    }
  });

  // Met à jour les placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Met à jour le titre de la page
  document.title = translations[lang]["title"];

  // Met à jour l'interface du sélecteur de langue
  document.querySelectorAll(".language-switcher span").forEach((span) => {
    span.classList.remove("active");
    if (span.textContent.trim().toUpperCase() === lang.toUpperCase()) {
      span.classList.add("active");
    }
  });
}

// Animation des statistiques
function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number");
  statNumbers.forEach((number) => {
    const target = parseInt(number.getAttribute("data-count"));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const counter = setInterval(() => {
      current += step;
      if (current >= target) {
        clearInterval(counter);
        current = target;
      }
      number.textContent = Math.floor(current);
    }, 16);
  });
}

// Animation des barres de compétences
function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
}

// Initialisation au chargement
document.addEventListener("DOMContentLoaded", function () {
  // Initialiser Splitting.js pour les effets de texte
  if (typeof Splitting === "function") {
    Splitting();
  }

  // Préchargeur
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    window.addEventListener("load", function () {
      preloader.classList.add("fade-out");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    });
  }

  // Cursor personnalisé
  const cursor = document.querySelector(".cursor");
  const cursorFollower = document.querySelector(".cursor-follower");

  if (cursor && cursorFollower) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      setTimeout(() => {
        cursorFollower.style.left = e.clientX + "px";
        cursorFollower.style.top = e.clientY + "px";
      }, 100);
    });

    // Effets au survol
    const hoverElements = document.querySelectorAll(
      "a, button, .project-card, .skill-card, .education-card"
    );
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
        cursorFollower.classList.add("active");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
        cursorFollower.classList.remove("active");
      });
    });
  }

  // Navigation mobile
  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");

  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener("click", () => {
      navbarToggle.classList.toggle("active");
      navbarMenu.classList.toggle("active");
    });

    // Fermer le menu lorsqu'un lien est cliqué
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navbarToggle.classList.remove("active");
        navbarMenu.classList.remove("active");
      });
    });
  }

  // Détection de la langue préférée ou du navigateur
  const preferredLanguage =
    localStorage.getItem("preferredLanguage") ||
    (navigator.language.startsWith("fr") ? "fr" : "en");
  setLanguage(preferredLanguage);

  // Changement de langue
  const languageSwitcher = document.querySelector(".language-switcher");
  if (languageSwitcher) {
    const spans = languageSwitcher.querySelectorAll("span");
    spans.forEach((span) => {
      span.addEventListener("click", () => {
        const lang = span.textContent.trim().toLowerCase();
        spans.forEach((s) => s.classList.remove("active"));
        span.classList.add("active");
        setLanguage(lang);
      });
    });
  }

  // Animation au scroll
  const animateElements = document.querySelectorAll(".animate");
  const animateOnScroll = function () {
    animateElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Appel initial pour les éléments déjà visibles

  // Smooth scrolling pour les liens internes
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Bouton retour en haut
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.classList.add("active");
      } else {
        backToTop.classList.remove("active");
      }
    });
  }

  // Observer pour déclencher les animations lorsqu'elles deviennent visibles
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("skills")) {
            animateProgressBars();
          }
          if (entry.target.classList.contains("about")) {
            animateStats();
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".skills, .about").forEach((section) => {
    observer.observe(section);
  });

  // Filtrage des projets
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const filterValue = button.getAttribute("data-filter");
      projectCards.forEach((card) => {
        const show =
          filterValue === "all" ||
          card.getAttribute("data-category").includes(filterValue);
        card.style.display = show ? "block" : "none";
      });
    });
  });

  // GSAP animations
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero .subtitle", {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 0.5,
      ease: "power3.out",
    });
    gsap.from(".hero .title", {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 0.7,
      ease: "power3.out",
    });
    gsap.from(".hero .profession", {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 0.9,
      ease: "power3.out",
    });
    gsap.from(".hero .description", {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 1.1,
      ease: "power3.out",
    });
    gsap.from(".btn-group", {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 1.3,
      ease: "power3.out",
    });
    gsap.from(".hero-image", {
      duration: 1,
      scale: 0.8,
      opacity: 0,
      delay: 1,
      ease: "power3.out",
    });

    gsap.to(".shape-1", {
      duration: 10,
      rotation: 360,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".shape-2", {
      duration: 15,
      rotation: -360,
      repeat: -1,
      ease: "none",
    });
    gsap.to(".shape-3", {
      duration: 20,
      rotation: 360,
      repeat: -1,
      ease: "none",
    });

    gsap.utils.toArray("section").forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => {
          section.querySelectorAll(".animate").forEach((el) => {
            gsap.from(el, {
              duration: 1,
              y: 50,
              opacity: 0,
              ease: "power3.out",
            });
          });
        },
      });
    });
  }
});

// Ajoutez ce script avant la fermeture du body
document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;
  
  // Désactiver le bouton pendant l'envoi
  submitButton.disabled = true;
  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
  
  try {
      const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: {
              'Accept': 'application/json'
          }
      });
      
      if (response.ok) {
          form.reset();
          document.getElementById('form-confirmation').style.display = 'block';
          setTimeout(() => {
              document.getElementById('form-confirmation').style.display = 'none';
          }, 5000);
      } else {
          throw new Error('Erreur lors de l\'envoi');
      }
  } catch (error) {
      alert("Une erreur s'est produite. Veuillez réessayer ou me contacter directement par email.");
  } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
  }
});