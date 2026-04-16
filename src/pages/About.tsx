import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Lightbulb, Heart, Award, Globe, Wrench, Layers, MapPin, ChevronRight } from "lucide-react";
import delhiSkyline from "@/assets/delhi-skyline.jpg";

const leadership = [
  { 
    name: "Demetrios Barnes", 
    role: "Chief Executive Officer", 
    desc: "Previously co-founded SmartRent and helped scale it into a global proptech platform and public company. Deep operational, go-to-market, and capital markets experience.",
    img: "https://1valet.com/images/team/team-demetrios-barnes.webp?v=1"
  },
  { 
    name: "Hanna Haddad", 
    role: "CTO & Co-Founder", 
    desc: "Leads 1VALET's engineering organization. Built an enterprise-grade, deeply integrated system that reflects how buildings actually operate.",
    img: "https://1valet.com/images/team/team-hanna-haddad.webp?v=1"
  },
  { 
    name: "Sameer Sheth", 
    role: "Chief Operating Officer", 
    desc: "Drives operational execution across the business, ensuring seamless delivery of hardware, software, and services at scale.",
    img: "https://1valet.com/images/team/team-sameer-sheth.webp?v=1"
  },
  { 
    name: "Renato Pontello", 
    role: "Chief Legal & People Officer", 
    desc: "Oversees legal strategy and people operations, building the organizational foundation for 1VALET's international growth.",
    img: "https://1valet.com/images/team/team-renato-pontello.webp?v=3"
  },
  { 
    name: "Matthew Smith", 
    role: "VP Finance", 
    desc: "Leads financial planning and analysis, ensuring disciplined growth across hardware, software, and services as the company scales internationally.",
    img: "https://1valet.com/images/team/team-matthew-smith.webp?v=1"
  },
];

const board = [
  {
    name: "Jean-Pierre Poulin",
    role: "Founder & Executive Chairman",
    desc: "CEO of Devcore Group (22 years). Co-owner of the Ottawa Senators. Entrepreneur of the Year and multiple Master Builder Award winner.",
    img: "https://1valet.com/images/team/team-jp-poulin.webp?v=1"
  },
  {
    name: "Jeffrey York",
    role: "Board Director",
    desc: "Co-CEO of Farm Boy (acquired by Sobeys). President & COO of Giant Tiger for 20 years. Chairman of NexLiving, Focus Graphite, Grafoid.",
    img: "https://1valet.com/images/team/team-jeff-york.webp?v=1"
  },
  {
    name: "Mike McGahan",
    role: "Board Director",
    desc: "Executive Chairman at InterRent REIT (IIP.UN). CEO of CLV Group for 33 years. 30+ years in real estate with $8B+ in properties managed.",
    img: "https://1valet.com/images/team/team-mike-mcgahan.webp?v=1"
  },
  {
    name: "Francis Pomerleau",
    role: "Board Director",
    desc: "Vice Chair at Pomerleau with 34+ years in construction. Board Member at NexLiving, CarbiCrete, ITC Construction, and Borea. MBA from IMD.",
    img: "https://1valet.com/images/team/team-francis-pomerleau.webp?v=1"
  }
];

const values = [
  { icon: Lightbulb, title: "Innovation First", desc: "We don't follow the market. We define it." },
  { icon: Heart, title: "Human Scale", desc: "Technology should serve people, not the other way around." },
  { icon: Award, title: "Uncompromising Quality", desc: "Excellence isn't a price point — it's a standard." },
  { icon: Globe, title: "Global Perspective", desc: "Smart living is universal. We design for worldwide." },
  { icon: Wrench, title: "Do The Hard Work", desc: "We take on the challenges others avoid." },
  { icon: Layers, title: "Ecosystem Thinking", desc: "We create ecosystems that unify everything." },
];

const timeline = [
  { year: "2017", event: "Founded by Jean-Pierre Poulin in Gatineau, Quebec." },
  { year: "2019", event: "First Smart Intercom deployed. Patented package scanning launched." },
  { year: "2020", event: "Launched Resident App and Management Portal. Expanded across Canada." },
  { year: "2022", event: "Smart Suite and Smart Building tiers launched. Multi-property management." },
  { year: "2023", event: "500+ buildings live. 50,000+ connected residents. International expansion." },
  { year: "2024", event: "Next-gen outdoor console for extreme environments. Hardware-agnostic expansion." },
  { year: "2025", event: "Demetrios Barnes appointed CEO. India market launch. Global expansion accelerates." },
];

const offices = [
  { city: "Ottawa", region: "Ontario, Canada" },
  { city: "Toronto", region: "Ontario, Canada" },
  { city: "Phoenix", region: "Arizona, USA" },
  { city: "Dubai", region: "UAE" },
];

const About = () => (
  <div className="min-h-screen">
    {/* Hero Section with Cover Image */}
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={delhiSkyline} alt="1VALET team and leadership driving innovation in smart building technology and proptech industry" className="w-full h-full object-cover" />
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
            <Heart size={14} /> About Us
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1]">
            Built by operators,
            <span className="text-gradient block">for operators.</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
            Founded by property developers and scaled by proptech pioneers, 1VALET brings deep industry expertise to smart building innovation.
          </p>
        </motion.div>
      </div>
    </section>
    
    {/* About Content */}
    <section className="section-padding pt-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="OUR STORY"
          title="We are"
          highlight="1VALET."
          description="We believe every building should inspire connection, comfort, and possibility. Our mission is to transform how people experience the places they live and work."
        />
      </div>
    </section>

    {/* Origin */}
    <section className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold font-display mb-6">
          Built by Operators. <span className="text-gradient">For Operators.</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          1VALET was founded in 2017 by Jean-Pierre Poulin, an asset manager who lived the daily frustration of juggling fragmented building technology. Rather than wait for someone else to fix it, he built the platform he wished existed.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Today, under CEO Demetrios Barnes — himself an operator — the customer and user sit at the center of every decision. Operator-first thinking isn't just how 1VALET started. It's how it's run.
        </p>
      </div>
    </section>

    {/* Stats */}
    <section className="section-padding">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <AnimatedCounter end={600} suffix="+" label="Buildings Live" />
        <AnimatedCounter end={150} suffix="k+" label="Connected Residents" />
        <AnimatedCounter end={4} suffix="x" label="Daily App Opens" />
        <AnimatedCounter end={99} suffix=".99%" label="System Uptime" />
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading badge="Our Values" title="What drives" highlight="everything we do." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <GlassCard key={v.title} delay={i * 0.05}>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <v.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold font-display mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading badge="Our Journey" title="From Ottawa" highlight="to the world." />
        <div className="space-y-0">
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 py-6 border-l-2 border-border pl-8 relative"
            >
              <div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              <div>
                <span className="text-primary font-bold font-display text-lg">{t.year}</span>
                <p className="text-muted-foreground mt-1">{t.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="section-padding bg-card/30 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeading badge="LEADERSHIP" title="The team behind" highlight="the platform." description="Deep operational experience across proptech, IoT, and enterprise software." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {leadership.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-all"
            >
              <img src={l.img} alt={l.name} className="w-full h-64 object-cover rounded-xl mb-4" loading="lazy" />
              <h3 className="font-semibold font-display text-lg">{l.name}</h3>
              <p className="text-sm text-primary mb-2">{l.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Board of Directors */}
    <section className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeading badge="GOVERNANCE" title="Board of" highlight="Directors" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {board.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:border-primary/30 transition-all"
            >
              <img src={b.img} alt={b.name} className="w-full h-48 object-cover rounded-xl mb-4" loading="lazy" />
              <h3 className="font-semibold font-display">{b.name}</h3>
              <p className="text-sm text-primary mb-2">{b.role}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Offices */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading badge="Global Presence" title="Our" highlight="offices." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {offices.map((o, i) => (
            <GlassCard key={o.city} delay={i * 0.05} className="text-center">
              <MapPin className="w-5 h-5 text-primary mx-auto mb-2" />
              <h4 className="font-semibold font-display">{o.city}</h4>
              <p className="text-xs text-muted-foreground">{o.region}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding text-center">
      <h2 className="text-3xl sm:text-4xl font-bold font-display">
        Join the <span className="text-gradient">movement.</span>
      </h2>
      <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
        We're building the future of smart living. Whether you're a property owner, developer, or technologist — let's talk.
      </p>
      <Link
        to="/contact"
        className="inline-flex mt-8 px-10 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:brightness-110 transition-all glow-green text-sm uppercase tracking-wider"
      >
        Get in Touch
      </Link>
    </section>
  </div>
);

export default About;
