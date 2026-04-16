import { motion } from "framer-motion";
import { Camera, Wifi, Lock, Package, Smartphone, Shield, Zap, Brain, Globe, IndianRupee, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import IndiaNavigation from "@/components/IndiaNavigation";
import packageScanningImg from "@/assets/1valet-package-scanning.webp";
import intercomDevice from "@/assets/intercom-device.jpg";

const indiaFeatures = [
  { icon: Camera, title: "Extreme Weather Ready", desc: "-30°C to 55°C operating range — handles Mumbai humidity, Delhi heat, Bangalore monsoons" },
  { icon: Wifi, title: "Multi-Language Support", desc: "50+ languages including Hindi, Marathi, Tamil, Telugu, Bengali, Kannada, Malayalam" },
  { icon: Lock, title: "UPI Payment Integration", desc: "Native support for UPI, credit cards, net banking — seamless rent collection" },
  { icon: Package, title: "Localized Features", desc: "Festival mode, visitor management, domestic staff access, cultural customization" },
];

const platformCapabilities = [
  { icon: Smartphone, title: "Resident App", desc: "Digital keys, video intercom, rent payments, amenity booking, marketplace, maintenance — opened 4x daily", features: ["Digital Keys & NFC", "Video Intercom", "Rent Payments", "Amenity Booking", "Package Alerts", "Maintenance Requests"] },
  { icon: Shield, title: "Smart Intercom Console", desc: "43\", 22\", and 10\" form factors with HD video, facial recognition, and patented package scanning", features: ["Facial Recognition", "Package Scanning", "Express Courier Entry", "Visitor Management", "Emergency Alerts", "Multi-Language"] },
  { icon: Globe, title: "Management Portal", desc: "CCTV integration, access control, virtual concierge, parking, inspections — one unified dashboard", features: ["CCTV Integration", "Access Control", "Virtual Concierge", "Smart Thermostat", "Parking Management", "Inspection Reports"] },
];

const patentedTech = [
  "Automated package logging & tracking",
  "Express courier access with photo verification",
  "Real-time delivery notifications to residents",
  "AI-powered facial recognition entry",
  "Predictive maintenance algorithms",
  "Energy optimization intelligence",
];

const IndiaTechnology = () => (
  <div className="min-h-screen">
    {/* India Pages Navigation */}
    <IndiaNavigation />
    
    {/* Hero Section with Cover Image */}
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={intercomDevice} alt="1VALET smart building technology platform with AI-powered intercom, package scanning and facial recognition" className="w-full h-full object-cover" />
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
            <Zap size={14} /> Technology
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1]">
            Connected
            <span className="text-gradient block">Technology Stack</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
            Enterprise-grade smart building technology with patented innovations proven across 600+ buildings globally.
          </p>
        </motion.div>
      </div>
    </section>
    
    {/* Platform Capabilities */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Platform"
          title="Connected"
          highlight="Technology Stack"
          description="Enterprise-grade smart building technology proven across 600+ buildings globally."
        />

        <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">
          {platformCapabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <GlassCard hover className="h-full">
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                  <cap.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{cap.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {cap.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-foreground">
                      <CheckCircle2 size={12} className="text-primary shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Patented Technology */}
    <section className="section-padding bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
              Only From 1VALET
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
              Patented
              <span className="text-gradient block">package scanning.</span>
            </h2>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base">
              The industry's only intercom with built-in parcel scanning and express courier entry. Automates delivery, reduces manual work, and keeps lobbies organized.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {patentedTech.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <CheckCircle2 size={14} className="text-primary shrink-0" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={packageScanningImg}
                alt="Smart package scanning technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-4 glass-card rounded-xl p-3 sm:p-4">
              <div className="text-xs text-muted-foreground">Package theft reduced by</div>
              <div className="text-2xl font-bold font-display text-primary">95%</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* India-Specific Features */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="India-Ready"
          title="Built for"
          highlight="India's Needs"
          description="Localized technology designed for India's unique climate, languages, and payment systems."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {indiaFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard hover className="text-center h-full">
                <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-3">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Now CTA */}
    <section className="section-padding bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
            Why Now?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4">
            India's real estate is at a
            <span className="text-gradient block">technological tipping point.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Premium developers are actively seeking unified smart building solutions. Early movers will capture
            market leadership and establish technology standards for the next decade.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link to="/india" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
              Back to Overview <ArrowRight size={16} />
            </Link>
            <Link to="/india/analytics" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
              View Analytics <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Navigation Cards */}
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-4">
          <Link to="/india/analytics" className="group">
            <GlassCard hover className="p-6 h-full">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Analytics Dashboard</span>
                <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-2">Market Intelligence</h3>
              <p className="text-sm text-muted-foreground">View real-time market data, growth projections, and regional analytics.</p>
            </GlassCard>
          </Link>
          <Link to="/india/segments" className="group">
            <GlassCard hover className="p-6 h-full">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Market Segments</span>
                <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-2">Target Markets & Roadmap</h3>
              <p className="text-sm text-muted-foreground">Explore luxury residential, townships, student housing, and senior living segments.</p>
            </GlassCard>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default IndiaTechnology;
