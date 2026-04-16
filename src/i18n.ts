import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navbar
      nav: {
        products: "Products",
        integrations: "Integrations",
        solutions: "Solutions",
        about: "About",
        blog: "Blog",
        support: "Support",
        login: "LOGIN",
        freeConsultation: "FREE CONSULTATION"
      },
      // Hero
      hero: {
        badge: "SMART INTERCOM",
        title1: "The lobby",
        title2: "reimagined.",
        description: "Video intercom consoles in 43\", 22\", and 10\" form factors with patented package scanning, facial recognition, and express courier entry. Built for -30°C (-22°F) to 55°C (131°F).",
        cta: "Discover Smart Intercom"
      },
      // Stats
      stats: {
        residents: { value: "3M+", label: "Residents" },
        countries: { value: "20+", label: "Countries" },
        installations: { value: "60K+", label: "Installations" },
        properties: { value: "12K+", label: "Properties" }
      },
      // Smart Intercom
      intercom: {
        badge: "Smart Intercom",
        title1: "The lobby",
        title2: "reimagined.",
        description: "Video intercom consoles in 43\", 22\", and 10\" form factors with patented package scanning, facial recognition, and express courier entry.",
        discover: "Discover Smart Intercom"
      },
      // India
      india: {
        badge: "Now in India 🇮",
        title1: "Transforming India's",
        title2: "real estate landscape.",
        description: "1VALET has officially launched in India, bringing world-class smart building technology to premium properties across Mumbai, Delhi NCR, Bangalore, and beyond.",
        features: [
          "Designed for Indian climate conditions (up to 55°C)",
          "Integrated with local property management systems",
          "UPI & digital payment support for residents",
          "24/7 local support from our Mumbai office"
        ],
        cta: "Schedule India Demo"
      },
      // CTA
      cta: {
        title1: "Ready to transform",
        title2: "your buildings?",
        description: "Schedule a personalized demo. See how 1VALET can elevate your property, increase NOI, and delight your residents.",
        button: "Free Consultation"
      },
      // Products
      products: {
        badge: "Products",
        title: "Smart Building",
        highlight: "Product Suite.",
        description: "Three products. One unified platform. Built for operators, loved by residents.",
        smartIntercom: {
          title: "Smart Intercom",
          subtitle: "The building's first impression.",
          desc: "A smart video intercom system with the industry's only patented package scanning and express courier entry. 43\", 22\", and 10\" form factors. -30°C to 55°C.",
          features: ["HD Video Calling", "Patented Package Scanning", "Facial Recognition Entry", "Digital Keys", "Guest Access", "Express Courier Access", "Remote Management", "Multi-Language"]
        },
        managementPortal: {
          title: "Management Portal",
          subtitle: "Your portfolio. One dashboard.",
          desc: "The property management portal that combines all buildings and management systems into one view. Manage any building, at any time, from anywhere.",
          features: ["Multi-Property Dashboard", "CCTV Integration", "Unified Access Control", "Virtual Concierge", "Parking Management", "Suite Inspections", "Smart Thermostat Control", "Advanced Analytics"]
        },
        residentApp: {
          title: "Resident App",
          subtitle: "Your building, in your pocket.",
          desc: "Everything residents need to connect with every aspect of their home and community — driving higher engagement and satisfaction. Opened an average of 4x daily.",
          features: ["Digital Keys & Mobile Access", "Video Intercom", "Smart Thermostat", "Package Notifications", "Amenity Booking", "Rent Payments", "Maintenance Requests", "Community Messaging"]
        },
        learnMore: "Learn More",
        seeItInAction: {
          title1: "See it",
          title2: "in action.",
          description: "Schedule a demo to experience the most comprehensive smart building platform on the market."
        }
      },
      // About
      about: {
        badge: "Our Story",
        title: "We are",
        highlight: "1VALET.",
        description: "We believe every building should inspire connection, comfort, and possibility. Our mission is to transform how people experience the places they live and work.",
        origin: {
          title1: "Built by Operators.",
          title2: "For Operators.",
          p1: "1VALET was founded in 2017 by Jean-Pierre Poulin, an asset manager who lived the daily frustration of juggling fragmented building technology. Rather than wait for someone else to fix it, he built the platform he wished existed.",
          p2: "Today, under CEO Demetrios Barnes — himself an operator — the customer and user sit at the center of every decision. Operator-first thinking isn't just how 1VALET started. It's how it's run."
        },
        stats: {
          buildingsLive: "Buildings Live",
          connectedResidents: "Connected Residents",
          dailyAppOpens: "Daily App Opens",
          systemUptime: "System Uptime"
        },
        values: {
          badge: "Our Values",
          title: "What drives",
          highlight: "everything we do.",
          items: [
            { title: "Innovation First", desc: "We don't follow the market. We define it." },
            { title: "Human Scale", desc: "Technology should serve people, not the other way around." },
            { title: "Uncompromising Quality", desc: "Excellence isn't a price point — it's a standard." },
            { title: "Global Perspective", desc: "Smart living is universal. We design for worldwide." },
            { title: "Do The Hard Work", desc: "We take on the challenges others avoid." },
            { title: "Ecosystem Thinking", desc: "We create ecosystems that unify everything." }
          ]
        },
        timeline: {
          badge: "Our Journey",
          title: "From Ottawa",
          highlight: "to the world.",
          items: [
            { year: "2017", event: "Founded by Jean-Pierre Poulin in Gatineau, Quebec." },
            { year: "2019", event: "First Smart Intercom deployed. Patented package scanning launched." },
            { year: "2020", event: "Launched Resident App and Management Portal. Expanded across Canada." },
            { year: "2022", event: "Smart Suite and Smart Building tiers launched. Multi-property management." },
            { year: "2023", event: "500+ buildings live. 50,000+ connected residents. International expansion." },
            { year: "2024", event: "Next-gen outdoor console for extreme environments. Hardware-agnostic expansion." },
            { year: "2025", event: "Demetrios Barnes appointed CEO. India market launch. Global expansion accelerates." }
          ]
        },
        leadership: {
          badge: "Leadership",
          title: "The team behind",
          highlight: "the platform.",
          description: "Deep operational experience across proptech, IoT, and enterprise software.",
          items: [
            { name: "Demetrios Barnes", role: "Chief Executive Officer", desc: "Previously co-founded SmartRent. Deep operational and capital markets experience." },
            { name: "Hanna Haddad", role: "CTO & Co-Founder", desc: "Built an enterprise-grade system that reflects how buildings actually operate." },
            { name: "Sameer Sheth", role: "Chief Operating Officer", desc: "Drives operational execution across hardware, software, and services at scale." },
            { name: "Renato Pontello", role: "Chief Legal & People Officer", desc: "Building the organizational foundation for 1VALET's international growth." },
            { name: "Matthew Smith", role: "VP Finance", desc: "Leading disciplined growth as the company scales internationally." }
          ]
        },
        offices: {
          badge: "Global Presence",
          title: "Our",
          highlight: "offices.",
          items: [
            { city: "Ottawa", region: "Ontario, Canada" },
            { city: "Toronto", region: "Ontario, Canada" },
            { city: "Phoenix", region: "Arizona, USA" },
            { city: "Dubai", region: "UAE" },
            { city: "Mumbai", region: "Maharashtra, India 🇮🇳" }
          ]
        },
        cta: {
          title1: "Join the",
          title2: "movement.",
          description: "We're building the future of smart living. Whether you're a property owner, developer, or technologist — let's talk.",
          button: "Get in Touch"
        }
      },
    }
  },
  hi: {
    translation: {
      // Navbar
      nav: {
        products: "उत्पाद",
        integrations: "एकीकरण",
        solutions: "समाधान",
        about: "हमारे बारे में",
        blog: "ब्लॉग",
        support: "सहायता",
        login: "लॉगिन",
        freeConsultation: "निःशुल्क परामर्श"
      },
      // Hero
      hero: {
        badge: "स्मार्ट इंटरकॉम",
        title1: "लॉबी",
        title2: "पुनः कल्पना की गई।",
        description: "43\", 22\", और 10\" आकार के वीडियो इंटरकॉम कंसोल पेटेंटेड पैकेज स्कैनिंग, फेशियल रिकग्निशन और एक्सप्रेस कूरियर एंट्री के साथ। -30°C (-22°F) से 55°C (131°F) के लिए बनाया गया।",
        cta: "स्मार्ट इंटरकॉम खोजें"
      },
      // Stats
      stats: {
        residents: { value: "3M+", label: "निवासी" },
        countries: { value: "20+", label: "देश" },
        installations: { value: "60K+", label: "इंस्टॉलेशन" },
        properties: { value: "12K+", label: "संपत्तियां" }
      },
      // Smart Intercom
      intercom: {
        badge: "स्मार्ट इंटरकॉम",
        title1: "लॉबी",
        title2: "पुनः कल्पना की गई।",
        description: "43\", 22\", और 10\" आकार के वीडियो इंटरकॉम कंसोल पेटेंटेड पैकेज स्कैनिंग, फेशियल रिकग्निशन और एक्सप्रेस कूरियर एंट्री के साथ।",
        discover: "स्मार्ट इंटरकॉम खोजें"
      },
      // India
      india: {
        badge: "अब भारत में 🇮🇳",
        title1: "भारत की",
        title2: "रियल एस्टेट परिदृश्य को बदलना।",
        description: "1VALET आधिकारिक तौर पर भारत में लॉन्च हो गया है, जो मुंबई, दिल्ली एनसीआर, बैंगलोर और अन्य स्थानों में प्रीमियम संपत्तियों में विश्व स्तरीय स्मार्ट बिल्डिंग तकनीक ला रहा है।",
        features: [
          "भारतीय जलवायु स्थितियों के लिए डिज़ाइन किया गया (55°C तक)",
          "स्थानीय संपत्ति प्रबंधन प्रणालियों के साथ एकीकृत",
          "निवासियों के लिए UPI और डिजिटल भुगतान समर्थन",
          "मुंबई कार्यालय से 24/7 स्थानीय समर्थन"
        ],
        cta: "भारत डेमो शेड्यूल करें"
      },
      // CTA
      cta: {
        title1: "रूपांतरित करने के लिए तैयार",
        title2: "अपनी इमारतें?",
        description: "एक व्यक्तिगत डेमो शेड्यूल करें। देखें कि 1VALET आपकी संपत्ति को कैसे बढ़ा सकता है, NOI बढ़ा सकता है और आपके निवासियों को प्रसन्न कर सकता है।",
        button: "निःशुल्क परामर्श"
      }
    }
  },
  fr: {
    translation: {
      nav: {
        products: "Produits",
        integrations: "Intégrations",
        solutions: "Solutions",
        about: "À propos",
        blog: "Blog",
        support: "Support",
        login: "CONNEXION",
        freeConsultation: "CONSULTATION GRATUITE"
      },
      hero: {
        badge: "INTERPHONE INTELLIGENT",
        title1: "Le lobby",
        title2: "réimaginé.",
        description: "Consoles d'interphone vidéo en formats 43\", 22\" et 10\" avec numérisation de colis brevetée, reconnaissance faciale et entrée express pour les coursiers. Conçu pour -30°C (-22°F) à 55°C (131°F).",
        cta: "Découvrir l'Interphone Intelligent"
      },
      stats: {
        residents: { value: "3M+", label: "Résidents" },
        countries: { value: "20+", label: "Pays" },
        installations: { value: "60K+", label: "Installations" },
        properties: { value: "12K+", label: "Propriétés" }
      },
      intercom: {
        badge: "Interphone Intelligent",
        title1: "Le lobby",
        title2: "réimaginé.",
        description: "Consoles d'interphone vidéo en formats 43\", 22\" et 10\" avec numérisation de colis brevetée, reconnaissance faciale et entrée express pour les coursiers.",
        discover: "Découvrir l'Interphone Intelligent"
      },
      india: {
        badge: "Maintenant en Inde 🇮🇳",
        title1: "Transformer le",
        title2: "paysage immobilier de l'Inde.",
        description: "1VALET a officiellement lancé en Inde, apportant une technologie de bâtiment intelligent de classe mondiale aux propriétés premium à travers Mumbai, Delhi NCR, Bangalore et au-delà.",
        features: [
          "Conçu pour les conditions climatiques indiennes (jusqu'à 55°C)",
          "Intégré aux systèmes de gestion immobilière locaux",
          "Support de paiement UPI et numérique pour les résidents",
          "Support local 24/7 depuis notre bureau de Mumbai"
        ],
        cta: "Planifier une démo en Inde"
      },
      cta: {
        title1: "Prêt à transformer",
        title2: "vos bâtiments?",
        description: "Planifiez une démo personnalisée. Voyez comment 1VALET peut élever votre propriété, augmenter le NOI et ravir vos résidents.",
        button: "Consultation Gratuite"
      }
    }
  },
  es: {
    translation: {
      nav: {
        products: "Productos",
        integrations: "Integraciones",
        solutions: "Soluciones",
        about: "Acerca de",
        blog: "Blog",
        support: "Soporte",
        login: "INICIAR SESIÓN",
        freeConsultation: "CONSULTA GRATUITA"
      },
      hero: {
        badge: "INTERCOMUNICADOR INTELIGENTE",
        title1: "El lobby",
        title2: "reimaginado.",
        description: "Consolas de intercomunicador de video en formatos de 43\", 22\" y 10\" con escaneo de paquetes patentado, reconocimiento facial y entrada express para mensajeros. Diseñado para -30°C (-22°F) a 55°C (131°F).",
        cta: "Descubrir Intercomunicador Inteligente"
      },
      stats: {
        residents: { value: "3M+", label: "Residentes" },
        countries: { value: "20+", label: "Países" },
        installations: { value: "60K+", label: "Instalaciones" },
        properties: { value: "12K+", label: "Propiedades" }
      },
      intercom: {
        badge: "Intercomunicador Inteligente",
        title1: "El lobby",
        title2: "reimaginado.",
        description: "Consolas de intercomunicador de video en formatos de 43\", 22\" y 10\" con escaneo de paquetes patentado, reconocimiento facial y entrada express para mensajeros.",
        discover: "Descubrir Intercomunicador Inteligente"
      },
      india: {
        badge: "Ahora en India 🇮",
        title1: "Transformando el",
        title2: "panorama inmobiliario de India.",
        description: "1VALET se ha lanzado oficialmente en India, trayendo tecnología de edificios inteligentes de clase mundial a propiedades premium en Mumbai, Delhi NCR, Bangalore y más allá.",
        features: [
          "Diseñado para condiciones climáticas indias (hasta 55°C)",
          "Integrado con sistemas locales de gestión de propiedades",
          "Soporte de pago UPI y digital para residentes",
          "Soporte local 24/7 desde nuestra oficina en Mumbai"
        ],
        cta: "Programar demo en India"
      },
      cta: {
        title1: "Listo para transformar",
        title2: "tus edificios?",
        description: "Programa una demo personalizada. Mira cómo 1VALET puede elevar tu propiedad, aumentar el NOI y deleitar a tus residentes.",
        button: "Consulta Gratuita"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        products: "المنتجات",
        integrations: "التكاملات",
        solutions: "الحلول",
        about: "حول",
        blog: "المدونة",
        support: "الدعم",
        login: "تسجيل الدخول",
        freeConsultation: "استشارة مجانية"
      },
      hero: {
        badge: "الاتصال الداخلي الذكي",
        title1: "اللوبي",
        title2: "أعيد تخيله.",
        description: "وحدات اتصال فيديو داخلية بأحجام 43\" و 22\" و 10\" مع مسح حزم براءة اختراع والتعرف على الوجوه ودخول سريع للبريد. مصمم لـ -30°C (-22°F) إلى 55°C (131°F).",
        cta: "اكتشف الاتصال الداخلي الذكي"
      },
      stats: {
        residents: { value: "+3 مليون", label: "مقيمين" },
        countries: { value: "+20", label: "دولة" },
        installations: { value: "+60 ألف", label: "تركيبات" },
        properties: { value: "+12 ألف", label: "عقارات" }
      },
      intercom: {
        badge: "الاتصال الداخلي الذكي",
        title1: "اللوبي",
        title2: "أعيد تخيله.",
        description: "وحدات اتصال فيديو داخلية بأحجام 43\" و 22\" و 10\" مع مسح حزم براءة اختراع والتعرف على الوجوه ودخول سريع للبريد.",
        discover: "اكتشف الاتصال الداخلي الذكي"
      },
      india: {
        badge: "الآن في الهند 🇮",
        title1: "تحويل",
        title2: "المشهد العقاري في الهند.",
        description: "أطلقت 1VALET رسميًا في الهند، جالبة تقنية المباني الذكية العالمية إلى العقارات المتميزة في مومباي ودلهي وبنغالور وما وراءها.",
        features: [
          "مصمم لظروف المناخ الهندي (حتى 55°C)",
          "متكامل مع أنظمة إدارة العقارات المحلية",
          "دعم الدفع الرقمي و UPI للمقيمين",
          "دعم محلي 24/7 من مكتبنا في مومباي"
        ],
        cta: "جدولة عرض في الهند"
      },
      cta: {
        title1: "مستعد لتحويل",
        title2: "مبانيك؟",
        description: "جدولة عرض توضيحي مخصص. انظر كيف يمكن لـ 1VALET رفع عقارك وزيادة صافي الدخل التشغيلي وإسعاد مقيمينك.",
        button: "استشارة مجانية"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
