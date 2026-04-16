import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Building2, Smartphone, Monitor, Shield, Package, Users, TrendingUp, Zap, ChevronRight, Star, Cpu, Lock, Wifi, Camera, UserCheck } from "lucide-react";
import { getLanguagePreference } from "@/lib/translationUtils";
import ThreeBackground from "@/components/ThreeBackground";
import AnimatedCounter from "@/components/AnimatedCounter";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import { TiltCard, ParallaxSection, Reveal, FloatingElement, MagneticButton } from "@/components/AnimatedEffects";
import heroImg from "@/assets/1valet-hero-building.webp";
import intercomImg from "@/assets/1valet-intercom.webp";
import indiaImg from "@/assets/india-building.jpg";
import residentImg from "@/assets/1valet-resident-app.webp";
import portalImg from "@/assets/1valet-management-portal.webp";
import packageScanningImg from "@/assets/1valet-package-scanning.webp";
import platformArchImg from "@/assets/1valet-platform-architecture.webp";

// Image Carousel Component
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    { src: intercomImg, alt: "Smart Intercom Console" },
    { src: packageScanningImg, alt: "Package Scanning" },
    { src: residentImg, alt: "Resident App" },
    { src: portalImg, alt: "Management Portal" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="flex justify-center lg:justify-end w-full">
      <div className="relative w-full max-w-[500px]" style={{ height: '300px' }}>
        {/* Image Container */}
        <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden glass-card">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{ 
                x: index === currentIndex ? 0 : index < currentIndex ? '-100%' : '100%',
                opacity: index === currentIndex ? 1 : 0
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-6' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const [currentLang, setCurrentLang] = useState("en");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Sync with Google Translate
  useEffect(() => {
    const savedLang = getLanguagePreference() || "en";
    setCurrentLang(savedLang);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero with Parallax */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")' }}
        />
        {/* Three.js Background */}
        <ThreeBackground />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background z-[1]" />
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <Reveal direction="left">
                <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary bg-primary/10 rounded-full mb-4 sm:mb-6">
                  SMART INTERCOM
                </span>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-[1.1]">
                  The lobby
                  <br />
                  <span className="text-gradient">reimagined.</span>
                </h1>
              </Reveal>
              <Reveal direction="left" delay={0.2}>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Video intercom consoles in 43\", 22\", and 10\" form factors with patented package scanning, facial recognition, and express courier entry. Built for -30°C (-22°F) to 55°C (131°F).
                </p>
              </Reveal>
              <Reveal direction="left" delay={0.3}>
                <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                  <span className="uppercase tracking-wider">Operate in</span>
                  {["Canada", "USA", "India 🇮🇳", "UAE"].map((c) => (
                    <motion.span
                      key={c}
                      whileHover={{ scale: 1.1, borderColor: "hsl(82, 53%, 53%)" }}
                      className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-border text-foreground text-xs font-medium cursor-default"
                    >
                      {c}
                    </motion.span>
                  ))}
                </div>
              </Reveal>
              <Reveal direction="left" delay={0.4}>
                <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                  <MagneticButton>
                    <Link
                      to="/contact"
                      className="px-6 py-3 sm:px-8 sm:py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all glow-green text-xs sm:text-sm uppercase tracking-wider inline-block"
                    >
                      FREE CONSULTATION
                    </Link>
                  </MagneticButton>
                  <MagneticButton>
                    <Link
                      to="/products"
                      className="px-6 py-3 sm:px-8 sm:py-3.5 neu-button text-foreground font-semibold rounded-xl text-xs sm:text-sm uppercase tracking-wider inline-block"
                    >
                      Explore Platform
                    </Link>
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
            <div className="hidden lg:block">
              <div className="overflow-hidden">
                <img src={intercomImg} alt="1VALET Smart Intercom" className="w-full h-auto" width={800} height={1024} />
              </div>
            </div>
          </div>
        </motion.div>

     
      </section>

      {/* Stats with stagger */}
      <section className="section-padding border-t border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={600} suffix="+" label="Buildings Live" />
          <AnimatedCounter end={150} suffix="k+" label="Connected Residents" />
          <AnimatedCounter end={99} suffix=".99%" label="System Uptime" />
          <AnimatedCounter end={4} suffix="x" label="Daily App Opens" />
        </div>
      </section>

      {/* Trusted By - Logo Slider */}
      <section className="section-padding border-t border-border bg-card/20">
        <div className="max-w-7xl mx-auto">
          <Reveal direction="up">
            <h2 className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-12">
              Trusted by  <span className="text-[#89c44a]">the industry's best</span>
            </h2>
          </Reveal>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {["oxford", "starlight", "tridel", "akg", "boardwalk", "brookfield", "daniels", "greystar", "freed", "minto"].map((logo, i) => (
                <div key={i} className="flex-shrink-0 mx-8 md:mx-12 opacity-50 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={logo === 'tridel' ? `/logos/tridel.png` : `/logos/${logo}.svg`}
                    alt={logo}
                    className="h-8 md:h-10 w-auto"
                    style={{ filter: logo === 'tridel' ? 'none' : 'brightness(0) invert(1)' }}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {["oxford", "starlight", "tridel", "akg", "boardwalk", "brookfield", "daniels", "greystar", "freed", "minto"].map((logo, i) => (
                <div key={`dup-${i}`} className="flex-shrink-0 mx-8 md:mx-12 opacity-50 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={logo === 'tridel' ? `/logos/tridel.png` : `/logos/${logo}.svg`}
                    alt={logo}
                    className="h-8 md:h-10 w-auto"
                    style={{ filter: logo === 'tridel' ? 'none' : 'brightness(0) invert(1)' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Intercom Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <Reveal direction="left">
                <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary/10 rounded-full mb-3 sm:mb-4">
                  Smart Intercom
                </span>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display leading-tight mb-4 sm:mb-6">
                  The lobby <span className="text-gradient">reimagined.</span>
                </h2>
              </Reveal>
              <Reveal direction="left" delay={0.2}>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                  Video intercom consoles in 43\", 22\", and 10\" form factors with patented package scanning, facial recognition, and express courier entry. Built for -30°C (-22°F) to 55°C (131°F).
                </p>
              </Reveal>
              <Reveal direction="left" delay={0.3}>
                <Link to="/products/smart-intercom" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm sm:text-base">
                  Discover Smart Intercom <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Reveal>
            </div>
      
            {/* Right Side - Image Carousel */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <ImageCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Connected Platform — 3D Tilt Cards */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Platform Architecture"
            title="Connected at"
            highlight="every layer."
            description="From the parking garage to the penthouse — one unified platform that connects every system, every space, and every person in the building."
          />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-8 lg:mb-12">
            <Reveal direction="left">
              <TiltCard className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden h-full flex items-center">
                <img src={platformArchImg} alt="Platform Architecture" className="w-full h-auto object-cover" loading="lazy" width={1200} height={800} />
              </TiltCard>
            </Reveal>
            <div className="flex flex-col gap-4 sm:gap-6 justify-center">
              {[
                { icon: Building2, title: "Smart Intercom", desc: "HD video, facial recognition, patented package scanning", color: "from-primary/20 to-transparent" },
                { icon: Monitor, title: "Management Portal", desc: "CCTV, access control, virtual concierge — one dashboard", color: "from-primary/15 to-transparent" },
                { icon: Smartphone, title: "Resident App", desc: "Digital keys, rent, amenities — opened 4x daily", color: "from-primary/18 to-transparent" },
              ].map((item, i) => (
                <Reveal key={item.title} direction="up" delay={i * 0.15}>
                  <TiltCard className="glass-card-hover rounded-2xl p-6 h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative z-10 flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                      >
                        <item.icon className="w-7 h-7 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold font-display mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* India Launch — Parallax */}
      <ParallaxSection bgImage={indiaImg} className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <Reveal direction="scale" className="order-2 lg:order-1">
              <TiltCard className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden">
                <img src={indiaImg} alt="Smart Building in India" className="w-full h-auto" loading="lazy" width={1200} height={800} />
              </TiltCard>
            </Reveal>
            <div className="text-center lg:text-left order-1 lg:order-2">
              <Reveal direction="right">
                <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary/10 rounded-full mb-3 sm:mb-4">
                  Now in India 🇮🇳
                </span>
              </Reveal>
              <Reveal direction="right" delay={0.1}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
                  Transforming India's<br /><span className="text-gradient">real estate landscape.</span>
                </h2>
              </Reveal>
              <Reveal direction="right" delay={0.2}>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                  1VALET has officially launched in India, bringing world-class smart building technology to premium properties across Mumbai, Delhi NCR, Bangalore, and beyond.
                </p>
              </Reveal>
              <div className="space-y-4">
                {[
                  "Designed for Indian climate conditions (up to 55°C)",
                  "Integrated with local property management systems",
                  "UPI & digital payment support for residents",
                  "24/7 local support from our Mumbai office",
                ].map((item, i) => (
                  <Reveal key={item} direction="right" delay={0.3 + i * 0.1}>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal direction="right" delay={0.7}>
                <MagneticButton className="mt-6 sm:mt-8 inline-block">
                  <Link
                    to="/contact"
                    className="inline-flex px-5 py-2.5 sm:px-6 sm:py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all glow-green text-xs sm:text-sm"
                  >
                    Schedule India Demo
                  </Link>
                </MagneticButton>
              </Reveal>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* How It Works — Animated Steps */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="How It Works"
            title="A Seamless Experience,"
            highlight="From Day One."
            description="From lease signing to move-out, 1VALET automates every step."
          />
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden lg:block" />
            <div className="space-y-8 lg:space-y-0">
              {[
                { step: "01", title: "Move-In Trigger", desc: "Lease signed. Resident auto-added via PMS. Fobs activated, elevator access set. Zero manual work.", icon: Lock },
                { step: "02", title: "Mobile Self-Service", desc: "Reserve elevators, book amenities, pay in-app, receive parcel notifications. No fobs, no waivers.", icon: Smartphone },
                { step: "03", title: "Operator Control", desc: "Single login for cameras, doors, every subsystem. Leasing agents get automatic vacant unit access.", icon: Monitor },
                { step: "04", title: "Continuous Evolution", desc: "Bi-weekly releases keep your building tech at the bleeding edge. No outdated systems, ever.", icon: Cpu },
              ].map((item, i) => (
                <Reveal key={item.step} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center ${i > 0 ? "lg:mt-[-1.5rem]" : ""}`}>
                    <div className={`${i % 2 === 1 ? "lg:order-2" : ""} mb-6 lg:mb-0`}>
                      <TiltCard className="glass-card-hover rounded-2xl p-5 sm:p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-4xl font-bold font-display text-primary/30">{item.step}</span>
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold font-display mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </TiltCard>
                    </div>
                    <div className={`${i % 2 === 1 ? "lg:order-1" : ""} hidden lg:block`} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resident App with Parallax */}
      <ParallaxSection className="section-padding bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <Reveal direction="left">
                <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary/10 rounded-full mb-3 sm:mb-4">
                  Resident App
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
                  Your building,<br /><span className="text-gradient">in your pocket.</span>
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                  Residents open the app an average of 4x daily. Digital keys, rent payments, amenity booking, marketplace, maintenance, and community — all unified.
                </p>
              </Reveal>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {["Digital Keys", "Video Intercom", "Rent Payments", "Amenity Booking", "Package Alerts", "Maintenance"].map((f, i) => (
                  <Reveal key={f} direction="up" delay={i * 0.08}>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal direction="left" delay={0.5}>
                <Link to="/products/resident-app" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mt-4 sm:mt-6 text-sm sm:text-base">
                  Explore Resident App <ChevronRight className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>
            <Reveal direction="right" className="order-1 lg:order-2">
              <TiltCard className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden">
                <img src={residentImg} alt="Resident App" className="w-full h-auto" loading="lazy" width={1200} height={800} />
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Management Portal */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <Reveal direction="left" className="order-2 lg:order-1">
              <TiltCard className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden">
                <img src={portalImg} alt="Management Portal" className="w-full h-auto" loading="lazy" width={1200} height={800} />
              </TiltCard>
            </Reveal>
            <div className="text-center lg:text-left order-1 lg:order-2">
              <Reveal direction="right">
                <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary/10 rounded-full mb-3 sm:mb-4">
                  Management Portal
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-tight">
                  Your portfolio.<br /><span className="text-gradient">At a glance.</span>
                </h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                  CCTV integration, access control, virtual concierge, parking, inspections, and smart thermostat control — your entire building operations from a single dashboard.
                </p>
              </Reveal>
              <Reveal direction="right" delay={0.2}>
                <Link to="/products/management-portal" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-sm sm:text-base">
                  Explore Management Portal <ChevronRight className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

     

      {/* Business Impact — 3D Tilt Cards */}
      <section className="section-padding bg-card/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Business Impact"
            title="Designed for measurable"
            highlight="results."
            description="For investors, operators, and property managers who demand ROI."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: TrendingUp, title: "Higher Rents", desc: "Smart amenities command premium rental rates and accelerate unit absorption.", gradient: "from-primary/10" },
              { icon: Zap, title: "Reduced Costs", desc: "Centralize concierge, security, and management — cutting staffing costs.", gradient: "from-primary/8" },
              { icon: Star, title: "NOI Growth", desc: "Streamline operations to grow Net Operating Income and returns.", gradient: "from-primary/12" },
              { icon: Shield, title: "Asset Differentiation", desc: "Position properties apart. Future-proof and endlessly scalable.", gradient: "from-primary/9" },
            ].map((item, i) => (
              <Reveal key={item.title} direction="up" delay={i * 0.12}>
                <TiltCard className={`glass-card-hover rounded-2xl p-6 h-full bg-gradient-to-br ${item.gradient} to-transparent`}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5"
                  >
                    <item.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <h3 className="font-semibold font-display mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Patented Tech — Animated */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
            {/* Floating decorative elements */}
            <FloatingElement className="absolute top-10 right-10 opacity-20" duration={8}>
              <Package className="w-16 h-16 text-primary" />
            </FloatingElement>
            <FloatingElement className="absolute bottom-10 right-32 opacity-10" duration={6}>
              <Wifi className="w-12 h-12 text-primary" />
            </FloatingElement>
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <Reveal direction="left">
                  <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary/10 rounded-full mb-3 sm:mb-4">
                    Only From 1VALET
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display leading-tight mb-3 sm:mb-4">
                    Patented<br /><span className="text-gradient">package scanning.</span>
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                    The industry's only intercom with built-in parcel scanning and express courier entry. Automates delivery, reduces manual work, and keeps lobbies organized.
                  </p>
                </Reveal>
                <Reveal direction="left" delay={0.2}>
                  <div className="flex flex-wrap gap-3">
                    {["Automated Logging", "Express Courier Access", "Real-Time Notifications", "Photo Verification"].map((f) => (
                      <motion.span
                        key={f}
                        whileHover={{ scale: 1.05, borderColor: "hsl(142, 70%, 45%)" }}
                        className="px-4 py-2 rounded-xl border border-border text-sm text-muted-foreground cursor-default transition-colors"
                      >
                        {f}
                      </motion.span>
                    ))}
                  </div>
                </Reveal>
              </div>
              <Reveal direction="right">
                <TiltCard className="glass-card rounded-2xl overflow-hidden mt-6 lg:mt-0">
                  <img src={packageScanningImg} alt="Package Scanning" className="w-full h-auto" loading="lazy" width={800} height={600} />
                </TiltCard>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Vertical Marquee */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto mb-12">
          <SectionHeading
            badge="Testimonials"
            title="Trusted by property"
            highlight="professionals."
            description="Real stories from operators, property managers, and residents using 1VALET."
          />
        </div>

        <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
          {/* Fade overlays */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

          {/* Three columns with vertical marquee */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[600px] overflow-hidden">
            {/* Column 1 */}
            <div className="animate-scroll-up-1">
              {[
                { quote: "The app has been very user-friendly and the residents do not have a problem setting up their front door to the system. 1VALET has transformed how we manage our properties.", name: "Jackie", role: "Property Manager", company: "Premium Residential Building" },
                { quote: "Patented package scanning is a game-changer. Our delivery management went from chaotic to automated overnight.", name: "Michael Chen", role: "Building Operations Director", company: "Toronto Condo Corp" },
                { quote: "We've reduced concierge costs by 40% while improving resident satisfaction scores. The ROI is incredible.", name: "Sarah Williams", role: "Asset Manager", company: "Oxford Properties" },
                { quote: "1VALET integrates seamlessly with our existing Yardi system. Implementation was smooth and support is excellent.", name: "David Park", role: "VP of Technology", company: "Greystar" },
              ].map((testimonial, i) => (
                <div key={`col1-${i}`} className="glass-card rounded-2xl p-6 mb-4 hover:border-primary/30 transition-all duration-300">
                  <div className="mb-4">
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                      <path d="M8.5 17c.55 0 1.07-.15 1.46-.43.39-.28.54-.64.54-1.04V11.2c0-.4-.15-.76-.54-1.04A2.38 2.38 0 008.5 9.73c-.28 0-.54-.08-.73-.22a.72.72 0 01-.27-.53v-.74c0-.4.15-.76.54-1.04.39-.28.91-.43 1.46-.43.28 0 .54-.08.73-.22.19-.14.27-.33.27-.53V4.27c0-.2-.08-.39-.27-.53A1.3 1.3 0 008.5 3.3C6.88 3.3 5.3 3.76 4.15 4.58 3 5.4 2.5 6.53 2.5 7.67v7.46c0 .4.15.76.54 1.04.39.28.91.43 1.46.43zm11.5 0c.55 0 1.07-.15 1.46-.43.39-.28.54-.64.54-1.04V11.2c0-.4-.15-.76-.54-1.04a2.38 2.38 0 00-1.46-.43c-.28 0-.54-.08-.73-.22a.72.72 0 01-.27-.53v-.74c0-.4.15-.76.54-1.04.39-.28.91-.43 1.46-.43.28 0 .54-.08.73-.22.19-.14.27-.33.27-.53V4.27c0-.2-.08-.39-.27-.53a1.3 1.3 0 00-1.46-.44c-1.62 0-3.2.46-4.35 1.28-1.15.82-1.65 1.95-1.65 3.09v7.46c0 .4.15.76.54 1.04.39.28.91.43 1.46.43z" fill="currentColor" className="text-primary/60"/>
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                { quote: "The app has been very user-friendly and the residents do not have a problem setting up their front door to the system. 1VALET has transformed how we manage our properties.", name: "Jackie", role: "Property Manager", company: "Premium Residential Building" },
                { quote: "Patented package scanning is a game-changer. Our delivery management went from chaotic to automated overnight.", name: "Michael Chen", role: "Building Operations Director", company: "Toronto Condo Corp" },
                { quote: "We've reduced concierge costs by 40% while improving resident satisfaction scores. The ROI is incredible.", name: "Sarah Williams", role: "Asset Manager", company: "Oxford Properties" },
                { quote: "1VALET integrates seamlessly with our existing Yardi system. Implementation was smooth and support is excellent.", name: "David Park", role: "VP of Technology", company: "Greystar" },
              ].map((testimonial, i) => (
                <div key={`col1-dup-${i}`} className="glass-card rounded-2xl p-6 mb-4 hover:border-primary/30 transition-all duration-300">
                  <div className="mb-4">
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                      <path d="M8.5 17c.55 0 1.07-.15 1.46-.43.39-.28.54-.64.54-1.04V11.2c0-.4-.15-.76-.54-1.04A2.38 2.38 0 008.5 9.73c-.28 0-.54-.08-.73-.22a.72.72 0 01-.27-.53v-.74c0-.4.15-.76.54-1.04.39-.28.91-.43 1.46-.43.28 0 .54-.08.73-.22.19-.14.27-.33.27-.53V4.27c0-.2-.08-.39-.27-.53A1.3 1.3 0 008.5 3.3C6.88 3.3 5.3 3.76 4.15 4.58 3 5.4 2.5 6.53 2.5 7.67v7.46c0 .4.15.76.54 1.04.39.28.91.43 1.46.43zm11.5 0c.55 0 1.07-.15 1.46-.43.39-.28.54-.64.54-1.04V11.2c0-.4-.15-.76-.54-1.04a2.38 2.38 0 00-1.46-.43c-.28 0-.54-.08-.73-.22a.72.72 0 01-.27-.53v-.74c0-.4.15-.76.54-1.04.39-.28.91-.43 1.46-.43.28 0 .54-.08.73-.22.19-.14.27-.33.27-.53V4.27c0-.2-.08-.39-.27-.53a1.3 1.3 0 00-1.46-.44c-1.62 0-3.2.46-4.35 1.28-1.15.82-1.65 1.95-1.65 3.09v7.46c0 .4.15.76.54 1.04.39.28.91.43 1.46.43z" fill="currentColor" className="text-primary/60"/>
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="hidden md:block animate-scroll-up-2">
              {[
                { quote: "The facial recognition feature is incredible. Residents love the touchless entry, especially in winter.", name: "Emily Rodriguez", role: "Condo Board President", company: "The Well Toronto" },
                { quote: "1VALET's platform unified our fragmented tech stack. One dashboard instead of five different systems.", name: "James Thompson", role: "Regional Manager", company: "Minto Group" },
                { quote: "Our residents open the app 4x daily. It's become essential to their daily routine.", name: "Lisa Chang", role: "Community Manager", company: "Tridel" },
                { quote: "The management portal gives us complete visibility across all 50+ buildings in our portfolio.", name: "Robert Kim", role: "Director of Operations", company: "Starlight Investments" },
              ].map((testimonial, i) => (
                <div key={`col2-${i}`} className="glass-card rounded-2xl p-6 mb-4 hover:border-primary/30 transition-all duration-300">
                  <div className="mb-4">
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                      <path d="M8.5 17c.55 0 1.07-.15 1.46-.43.39-.28.54-.64.54-1.04V11.2c0-.4-.15-.76-.54-1.04A2.38 2.38 0 008.5 9.73c-.28 0-.54-.08-.73-.22a.72.72 0 01-.27-.53v-.74c0-.4.15-.76.54-1.04.39-.28.91-.43 1.46-.43.28 0 .54-.08.73-.22.19-.14.27-.33.27-.53V4.27c0-.2-.08-.39-.27-.53A1.3 1.3 0 008.5 3.3C6.88 3.3 5.3 3.76 4.15 4.58 3 5.4 2.5 6.53 2.5 7.67v7.46c0 .4.15.76.54 1.04.39.28.91.43 1.46.43zm11.5 0c.55 0 1.07-.15 1.46-.43.39-.28.54-.64.54-1.04V11.2c0-.4-.15-.76-.54-1.04a2.38 2.38 0 00-1.46-.43c-.28 0-.54-.08-.73-.22a.72.72 0 01-.27-.53v-.74c0-.4.15-.76.54-1.04.39-.28.91-.43 1.46-.43.28 0 .54-.08.73-.22.19-.14.27-.33.27-.53V4.27c0-.2-.08-.39-.27-.53a1.3 1.3 0 00-1.46-.44c-1.62 0-3.2.46-4.35 1.28-1.15.82-1.65 1.95-1.65 3.09v7.46c0 .4.15.76.54 1.04.39.28.91.43 1.46.43z" fill="currentColor" className="text-primary/60"/>
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                { quote: "The facial recognition feature is incredible. Residents love the touchless entry, especially in winter.", name: "Emily Rodriguez", role: "Condo Board President", company: "The Well Toronto" },
                { quote: "1VALET's platform unified our fragmented tech stack. One dashboard instead of five different systems.", name: "James Thompson", role: "Regional Manager", company: "Minto Group" },
                { quote: "Our residents open the app 4x daily. It's become essential to their daily routine.", name: "Lisa Chang", role: "Community Manager", company: "Tridel" },
                { quote: "The management portal gives us complete visibility across all 50+ buildings in our portfolio.", name: "Robert Kim", role: "Director of Operations", company: "Starlight Investments" },
              ].map((testimonial, i) => (
                <div key={`col2-dup-${i}`} className="glass-card rounded-2xl p-6 mb-4 hover:border-primary/30 transition-all duration-300">
                  <div className="mb-4">
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                      <path d="M8.5 17c.55 0 1.07-.15 1.46-.43.39-.28.54-.64.54-1.04V11.2c0-.4-.15-.76-.54-1.04A2.38 2.38 0 008.5 9.73c-.28 0-.54-.08-.73-.22a.72.72 0 01-.27-.53v-.74c0-.4.15-.76.54-1.04.39-.28.91-.43 1.46-.43.28 0 .54-.08.73-.22.19-.14.27-.33.27-.53V4.27c0-.2-.08-.39-.27-.53A1.3 1.3 0 008.5 3.3C6.88 3.3 5.3 3.76 4.15 4.58 3 5.4 2.5 6.53 2.5 7.67v7.46c0 .4.15.76.54 1.04.39.28.91.43 1.46.43zm11.5 0c.55 0 1.07-.15 1.46-.43.39-.28.54-.64.54-1.04V11.2c0-.4-.15-.76-.54-1.04a2.38 2.38 0 00-1.46-.43c-.28 0-.54-.08-.73-.22a.72.72 0 01-.27-.53v-.74c0-.4.15-.76.54-1.04.39-.28.91-.43 1.46-.43.28 0 .54-.08.73-.22.19-.14.27-.33.27-.53V4.27c0-.2-.08-.39-.27-.53a1.3 1.3 0 00-1.46-.44c-1.62 0-3.2.46-4.35 1.28-1.15.82-1.65 1.95-1.65 3.09v7.46c0 .4.15.76.54 1.04.39.28.91.43 1.46.43z" fill="currentColor" className="text-primary/60"/>
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 3 */}
            <div className="hidden lg:block animate-scroll-up-3">
              {[
                { quote: "Deployment across 600+ buildings was seamless. The hardware works flawlessly in Canadian winters.", name: "Tom Anderson", role: "CTO", company: "Boardwalk REIT" },
                { quote: "The resident app engagement is phenomenal. 4x daily opens means our announcements actually get read.", name: "Rachel Green", role: "Marketing Director", company: "Daniels Corporation" },
                { quote: "1VALET's package scanning eliminated our delivery room bottlenecks completely.", name: "Kevin Patel", role: "Building Manager", company: "Freed Developments" },
                { quote: "Best-in-class support team. They're responsive, knowledgeable, and truly understand property management.", name: "Amanda Lee", role: "Operations Lead", company: "AKG Management" },
              ].map((testimonial, i) => (
                <div key={`col3-${i}`} className="glass-card rounded-2xl p-6 mb-4 hover:border-primary/30 transition-all duration-300">
                  <div className="mb-4">
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                      <path d="M8.5 17c.55 0 1.07-.15 1.46-.43.39-.28.54-.64.54-1.04V11.2c0-.4-.15-.76-.54-1.04A2.38 2.38 0 008.5 9.73c-.28 0-.54-.08-.73-.22a.72.72 0 01-.27-.53v-.74c0-.4.15-.76.54-1.04.39-.28.91-.43 1.46-.43.28 0 .54-.08.73-.22.19-.14.27-.33.27-.53V4.27c0-.2-.08-.39-.27-.53A1.3 1.3 0 008.5 3.3C6.88 3.3 5.3 3.76 4.15 4.58 3 5.4 2.5 6.53 2.5 7.67v7.46c0 .4.15.76.54 1.04.39.28.91.43 1.46.43zm11.5 0c.55 0 1.07-.15 1.46-.43.39-.28.54-.64.54-1.04V11.2c0-.4-.15-.76-.54-1.04a2.38 2.38 0 00-1.46-.43c-.28 0-.54-.08-.73-.22a.72.72 0 01-.27-.53v-.74c0-.4.15-.76.54-1.04.39-.28.91-.43 1.46-.43.28 0 .54-.08.73-.22.19-.14.27-.33.27-.53V4.27c0-.2-.08-.39-.27-.53a1.3 1.3 0 00-1.46-.44c-1.62 0-3.2.46-4.35 1.28-1.15.82-1.65 1.95-1.65 3.09v7.46c0 .4.15.76.54 1.04.39.28.91.43 1.46.43z" fill="currentColor" className="text-primary/60"/>
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[
                { quote: "Deployment across 600+ buildings was seamless. The hardware works flawlessly in Canadian winters.", name: "Tom Anderson", role: "CTO", company: "Boardwalk REIT" },
                { quote: "The resident app engagement is phenomenal. 4x daily opens means our announcements actually get read.", name: "Rachel Green", role: "Marketing Director", company: "Daniels Corporation" },
                { quote: "1VALET's package scanning eliminated our delivery room bottlenecks completely.", name: "Kevin Patel", role: "Building Manager", company: "Freed Developments" },
                { quote: "Best-in-class support team. They're responsive, knowledgeable, and truly understand property management.", name: "Amanda Lee", role: "Operations Lead", company: "AKG Management" },
              ].map((testimonial, i) => (
                <div key={`col3-dup-${i}`} className="glass-card rounded-2xl p-6 mb-4 hover:border-primary/30 transition-all duration-300">
                  <div className="mb-4">
                    <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                      <path d="M8.5 17c.55 0 1.07-.15 1.46-.43.39-.28.54-.64.54-1.04V11.2c0-.4-.15-.76-.54-1.04A2.38 2.38 0 008.5 9.73c-.28 0-.54-.08-.73-.22a.72.72 0 01-.27-.53v-.74c0-.4.15-.76.54-1.04.39-.28.91-.43 1.46-.43.28 0 .54-.08.73-.22.19-.14.27-.33.27-.53V4.27c0-.2-.08-.39-.27-.53A1.3 1.3 0 008.5 3.3C6.88 3.3 5.3 3.76 4.15 4.58 3 5.4 2.5 6.53 2.5 7.67v7.46c0 .4.15.76.54 1.04.39.28.91.43 1.46.43zm11.5 0c.55 0 1.07-.15 1.46-.43.39-.28.54-.64.54-1.04V11.2c0-.4-.15-.76-.54-1.04a2.38 2.38 0 00-1.46-.43c-.28 0-.54-.08-.73-.22a.72.72 0 01-.27-.53v-.74c0-.4.15-.76.54-1.04.39-.28.91-.43 1.46-.43.28 0 .54-.08.73-.22.19-.14.27-.33.27-.53V4.27c0-.2-.08-.39-.27-.53a1.3 1.3 0 00-1.46-.44c-1.62 0-3.2.46-4.35 1.28-1.15.82-1.65 1.95-1.65 3.09v7.46c0 .4.15.76.54 1.04.39.28.91.43 1.46.43z" fill="currentColor" className="text-primary/60"/>
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6">
          <Reveal direction="up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display">
              Ready to transform{" "}
              
              <span className="text-gradient">your buildings?</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              Schedule a personalized demo. See how 1VALET can elevate your property, increase NOI, and delight your residents.
            </p>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <MagneticButton className="inline-block mt-8">
              <Link
                to="/contact"
                className="inline-flex px-8 py-3 sm:px-10 sm:py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:brightness-110 transition-all glow-green text-xs sm:text-sm uppercase tracking-wider"
              >
                Free Consultation
              </Link>
            </MagneticButton>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
