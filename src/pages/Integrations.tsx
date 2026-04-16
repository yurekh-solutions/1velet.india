import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import { Lock, Thermometer, Building, Shield, Camera, Package, CreditCard, ArrowUpDown, Watch, Zap, ChevronRight } from "lucide-react";
import managementPortal from "@/assets/management-portal.jpg";

const categories = [
  {
    icon: Lock, title: "Smart Locks",
    desc: "Carefully selected offline locks with full online functionality. No costly wiring or lock replacements. Salto integrations include key fob encryption and management.",
    partners: ["SALTO", "Alfred", "Yale", "EVO"],
  },
  {
    icon: Thermometer, title: "Smart Thermostats",
    desc: "Residents control temperature from the app while operators remotely manage vacant units to cut energy costs.",
    partners: ["Ecobee", "CoolMaster", "Distech"],
  },
  {
    icon: Building, title: "Property Management",
    desc: "Bi-directional sync with leading CRMs. Resident data, fob management, maintenance, rent payments, and workflows, all automated.",
    partners: ["Yardi", "Hopem", "RealPage", "Entrata"],
  },
  {
    icon: Shield, title: "Access Control",
    desc: "Tie into existing access control systems, unifying all access points into one dashboard without infrastructure changes.",
    partners: ["SALTO", "ICT", "Kantech", "Brivo", "Web Relays"],
  },
  {
    icon: Camera, title: "Video Surveillance / NVR",
    desc: "All cameras in one dashboard. View live feeds, review footage, restart cameras, and unlock doors, all from the Management Portal.",
    partners: ["Digital Watchdog", "Hikvision", "Hanwha"],
  },
  {
    icon: Package, title: "Smart Lockers",
    desc: "Automated parcel delivery and pickup with real-time notifications. Residents get alerts when packages arrive and can retrieve them 24/7 via app or code.",
    partners: ["Luxer", "Expedibox", "Snaile", "BlueBox / BlueBits"],
  },
  {
    icon: CreditCard, title: "Payments",
    desc: "Secure in-app rent payments, amenity booking fees, and service charges. Automatic ledger posting and reconciliation with your property management system.",
    partners: ["Stripe"],
  },
  {
    icon: ArrowUpDown, title: "Elevator",
    desc: "Restrict elevator access by floor and time. Residents and guests are automatically granted the correct floor access based on permissions and bookings.",
    partners: ["OTIS", "Kone", "Braxos", "Web Relays"],
  },
  {
    icon: Watch, title: "Smart Watches",
    desc: "Unlock doors, access amenities, and manage building entry directly from your wrist. Full integration with Apple Watch and Wear OS devices.",
    partners: ["Apple Watch", "Wear OS"],
  },
  {
    icon: Zap, title: "EV Charging",
    desc: "Manage EV charger access and billing from the 1VALET platform. Residents reserve stations, track usage, and pay directly through the app.",
    partners: ["SWTCH"],
  },
];

const caseStudies = [
  {
    title: "The Well, Toronto",
    subtitle: "Tridel's Landmark Mixed-Use Development",
    desc: "SALTO access control, smart thermostats, and Yardi PMS unified across multiple towers in one of Toronto's most ambitious developments.",
    img: "https://1valet.com/images/properties/property-the-well.webp"
  },
  {
    title: "Eleven, Calgary",
    subtitle: "Calgary's Tallest Residential Tower",
    desc: "Full-stack 1VALET deployment with smart intercom, digital keys, and integrated building management from lobby to penthouse.",
    img: "https://1valet.com/images/properties/property-eleven-calgary.webp"
  },
  {
    title: "The Ryland, Philadelphia",
    subtitle: "Retrofit Success Story",
    desc: "Existing access control hardware integrated into the 1VALET platform alongside smart thermostats and video surveillance. Zero rewiring required.",
    img: "https://1valet.com/images/properties/property-the-ryland.webp"
  },
  {
    title: "Cité Midtown, CLV Group",
    subtitle: "Legacy System Upgrade",
    desc: "Legacy hardware upgraded to unified 1VALET platform. Kantech access control, smart lockers, and resident app deployed across the property.",
    img: "https://1valet.com/images/properties/property-cite-midtown.webp"
  }
];

const Integrations = () => (
  <div className="min-h-screen">
    {/* Hero Section with Cover Image */}
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={managementPortal} alt="1VALET platform integrations with smart locks, property management systems, access control and video surveillance" className="w-full h-full object-cover" />
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
            <Zap size={14} /> Integrations
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1]">
            Works with your
            <span className="text-gradient block">existing systems.</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
            Hardware-agnostic platform that integrates with leading property management, access control, smart locks, and building systems.
          </p>
        </motion.div>
      </div>
    </section>
    
    {/* Integrations Content */}
    <section className="section-padding pt-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="HARDWARE AGNOSTIC"
          title="Your hardware. Our"
          highlight="platform."
          description="We don't lock you into proprietary hardware. 1VALET integrates with best-in-class devices you already use, and our retrofit-friendly approach means no costly rewiring."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {[
            { value: "30+", label: "Integration Partners" },
            { value: "100%", label: "Retrofit-Friendly" },
            { value: "10", label: "Integration Categories" },
          ].map((s) => (
            <GlassCard key={s.label} hover={false} className="text-center">
              <div className="text-3xl font-bold font-display text-gradient">{s.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </GlassCard>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <cat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display mb-2">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.partners.map((p) => (
                      <span key={p} className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Case Studies */}
    <section className="section-padding bg-card/30 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="POWERING ELITE PROPERTIES"
          title="Trusted by premium"
          highlight="buildings everywhere."
          description="From high-rise luxury residences to modern mixed-use developments, 1VALET integrations power buildings that demand the best."
        />
        
        <div className="grid sm:grid-cols-2 gap-8 mt-12">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
            >
              <img src={study.img} alt={study.title} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-bold font-display mb-2">{study.subtitle}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{study.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-base"
          >
            View all communities powered by 1VALET <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>

    <section className="section-padding text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold font-display">
          Don't see your <span className="text-gradient">vendor?</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          We're constantly expanding our integration ecosystem. If you have existing hardware, we can likely tie into it.
        </p>
        <Link
          to="/contact"
          className="inline-flex mt-8 px-10 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:brightness-110 transition-all glow-green text-sm uppercase tracking-wider"
        >
          Contact Our Team
        </Link>
      </div>
    </section>
  </div>
);

export default Integrations;
