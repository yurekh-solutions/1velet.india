import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import { Building2, Users, Home, Briefcase, HardHat, GraduationCap, Heart, Layers, Wrench, Check } from "lucide-react";
import mumbaiSkyline from "@/assets/mumbai-skyline.jpg";

const stakeholders = [
  { icon: HardHat, title: "Developers & Builders", desc: "Enable units to be sold and rented faster, at higher multiples. Attract buyers and increase value per square foot. Future-proof and endlessly scalable." },
  { icon: Building2, title: "Owners & Operators", desc: "Replace siloed systems with a unified platform that lowers hardware costs, reduces service calls, and minimizes staffing. Cut concierge costs through smart entry." },
  { icon: Users, title: "Residents", desc: "Pay rent, book amenities, reserve guest parking, create service tickets — all from one app. Digital keys on phone, watch, or face. 4x daily app opens." },
  { icon: Briefcase, title: "Property Managers", desc: "One dashboard instead of five. Automate onboarding, manage maintenance, control thermostats in vacant units, and monitor CCTV — all from anywhere." },
];

const tiers = [
  {
    name: "Smart Lobby",
    desc: "Seamless building entry and management",
    features: ["Smart Video Entry Intercom", "Lobby & Garage Access", "Package Room & Courier Access", "Facial Recognition Entry", "Digital Keys", "Elevator Integration"],
  },
  {
    name: "Smart Building",
    desc: "Expand beyond entry with full building control",
    features: ["Everything in Smart Lobby", "Virtual Concierge", "CCTV Integration", "Suite Inspections", "Visitor Parking", "Multi-Building Dashboard"],
    popular: true,
  },
  {
    name: "Smart Suite",
    desc: "In-unit smart home and street-to-suite",
    features: ["Everything in Smart Building", "Smart Thermostats", "Smart Door Locks", "Self-Guided Touring", "In-Suite Device Control", "Energy Management"],
  },
];

const propertyTypes = [
  { icon: Building2, title: "Multifamily", desc: "Attract premium renters, increase NOI, and streamline operations across your entire portfolio — from garden-style walkups to high-rises." },
  { icon: GraduationCap, title: "Student Housing", desc: "Secure, scalable access control designed for high-turnover. Automated credential provisioning for move-in/move-out cycles." },
  { icon: Heart, title: "Senior Living", desc: "Simplified technology focusing on safety, accessibility, and community. Facial recognition entry and a resident app designed for ease of use." },
  { icon: Layers, title: "Mixed-Use", desc: "Seamlessly manage access across residential, commercial, and retail. Multi-property credentials across your entire community." },
  { icon: HardHat, title: "New Construction", desc: "Build smart from the ground up. Future-proof developments with one unified platform that grows with your building." },
  { icon: Wrench, title: "Retrofit", desc: "Upgrade legacy systems without ripping out walls. Retrofit-friendly smart lock integrations without costly hubs or replacements." },
];

const Solutions = () => (
  <div className="min-h-screen">
    {/* Hero Section with Cover Image */}
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={mumbaiSkyline} alt="1VALET smart building solutions for developers, owners, residents and property managers across multifamily, student housing and senior living" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </div>
      
      <div className="relative z-10 section-padding max-w-7xl mx-auto w-full pt-20 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
            <Building2 size={14} /> Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1]">
            Built for every
            <span className="text-gradient block">stakeholder.</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
            1VALET increases revenues, reduces costs, and increases asset value for property owners — while elevating resident engagement and fostering safer, smarter communities.
          </p>
        </motion.div>
      </div>
    </section>
    
    {/* Solutions Content */}
    <section className="section-padding pt-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="SOLUTIONS"
          title="Built for every"
          highlight="stakeholder."
          description="1VALET increases revenues, reduces costs, and increases asset value for property owners — while elevating resident engagement and fostering safer, smarter communities."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stakeholders.map((s, i) => (
            <GlassCard key={s.title} delay={i * 0.1}>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold font-display mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>

    {/* Tiers */}
    <section className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading badge="Tiered Plans" title="Start where you need." highlight="Scale as you grow." />
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <GlassCard key={tier.name} delay={i * 0.1} className={tier.popular ? "border-primary/30 ring-1 ring-primary/20" : ""}>
              {tier.popular && (
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold font-display mb-1">{tier.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{tier.desc}</p>
              <ul className="space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>

    {/* Property Types */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading badge="Property Types" title="Built for every" highlight="building type." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyTypes.map((p, i) => (
            <GlassCard key={p.title} delay={i * 0.05}>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold font-display mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-card/30 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-display">
          One platform. <span className="text-gradient">Not three.</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Why pay for separate intercom, property management, and resident app vendors? 1VALET consolidates your tech stack.
        </p>
        <Link
          to="/contact"
          className="inline-flex mt-8 px-10 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:brightness-110 transition-all glow-green text-sm uppercase tracking-wider"
        >
          Free Consultation
        </Link>
      </div>
    </section>
  </div>
);

export default Solutions;
