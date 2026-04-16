import { motion } from "framer-motion";
import { MapPin, Users, Target, TrendingUp, Building2, GraduationCap, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import IndiaNavigation from "@/components/IndiaNavigation";
import bangaloreTech from "@/assets/bangalore-tech.jpg";

const targetSegments = [
  {
    icon: Building2,
    segment: "Luxury Residential Towers",
    markets: ["Mumbai — South Mumbai, Bandra, Worli", "Delhi NCR — Gurgaon, Noida", "Bangalore — Indiranagar, Whitefield"],
    opportunity: "800-1,200 premium projects launching 2025-2027",
    pain: "High concierge costs (₹8-12L/month), security concerns, fragmented tech",
    value: "Reduce staffing by 40%, increase property value by 15-20%",
    gradient: "from-primary/20 to-transparent",
  },
  {
    icon: Users,
    segment: "Integrated Townships",
    markets: ["Hyderabad — Gachibowli, Financial District", "Pune — Hinjewadi, Baner", "Chennai — OMR"],
    opportunity: "200+ mega townships with 5,000-20,000 units each",
    pain: "Multi-building management complexity, inconsistent resident experience",
    value: "Unified dashboard for 10-50 buildings, consistent 5-star experience",
    gradient: "from-emerald-500/20 to-transparent",
  },
  {
    icon: GraduationCap,
    segment: "Student Housing & PGs",
    markets: ["Kota, Pune, Bangalore, Delhi", "50M+ student population"],
    opportunity: "Organized student housing growing at 25% CAGR",
    pain: "High tenant turnover, access control challenges, manual processes",
    value: "Automated move-in/move-out, digital keys, reduces admin costs by 60%",
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    icon: Heart,
    segment: "Senior Living Communities",
    markets: ["Bangalore, Pune, Goa", "150M+ senior population by 2030"],
    opportunity: "Senior living projects growing at 20% CAGR",
    pain: "Safety concerns, emergency response, accessibility",
    value: "Facial recognition entry, emergency alerts, simplified app interface",
    gradient: "from-amber-500/20 to-transparent",
  },
];

const growthProjections = [
  { year: "2025", buildings: "50-75", residents: "25,000+", revenue: "₹15-20 Cr", milestone: "Launch in Mumbai, Bangalore, Delhi NCR" },
  { year: "2026", buildings: "200-300", residents: "100,000+", revenue: "₹60-80 Cr", milestone: "Expand to Pune, Hyderabad, Chennai" },
  { year: "2027", buildings: "500-700", residents: "300,000+", revenue: "₹150-200 Cr", milestone: "Pan-India presence, local manufacturing" },
  { year: "2028", buildings: "1,200+", residents: "750,000+", revenue: "₹350-450 Cr", milestone: "Market leader in premium segment" },
  { year: "2030", buildings: "3,000+", residents: "2,000,000+", revenue: "₹800 Cr+", milestone: "Dominant smart building platform" },
];

const IndiaSegments = () => (
  <div className="min-h-screen">
    {/* India Pages Navigation */}
    <IndiaNavigation />
    
    {/* Hero Section with Cover Image */}
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={bangaloreTech} alt="India market segments including luxury residential towers, integrated townships, student housing and senior living" className="w-full h-full object-cover" />
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
            <Target size={14} /> Target Markets
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1]">
            Market Segments &
            <span className="text-gradient block">Growth Roadmap</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
            Strategic focus areas across India's premium real estate landscape with detailed growth projections.
          </p>
        </motion.div>
      </div>
    </section>
    
    {/* Segments Content */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Target Markets"
          title="Market Segments &"
          highlight="Growth Roadmap"
          description="Strategic focus areas across India's premium real estate landscape."
        />

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
          {targetSegments.map((seg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard hover className="h-full">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${seg.gradient} rounded-t-xl`} />
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <seg.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground">{seg.segment}</h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1 mb-1">
                      <MapPin size={12} /> Target Markets
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {seg.markets.map((m, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">{m}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1 mb-1">
                      <Target size={12} /> Opportunity
                    </span>
                    <p className="text-sm text-foreground">{seg.opportunity}</p>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-destructive/80 mb-1 block">Pain Points</span>
                    <p className="text-sm text-muted-foreground">{seg.pain}</p>
                  </div>

                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 block">1VALET Value</span>
                    <p className="text-sm text-foreground font-medium">{seg.value}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Growth Timeline */}
    <section className="section-padding bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="Growth Projections"
          title="5-Year India"
          highlight="Expansion Roadmap"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-6 sm:space-y-8">
            {growthProjections.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`sm:flex items-center gap-6 ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                <div className={`flex-1 ${idx % 2 === 0 ? "lg:text-right" : ""}`}>
                  <GlassCard hover>
                    <div className="text-2xl font-bold font-display text-primary mb-2">{proj.year}</div>
                    <div className="grid grid-cols-3 gap-3 mb-3">
                      <div>
                        <div className="text-xs text-muted-foreground">Buildings</div>
                        <div className="text-sm font-semibold text-foreground">{proj.buildings}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Residents</div>
                        <div className="text-sm font-semibold text-foreground">{proj.residents}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Revenue</div>
                        <div className="text-sm font-semibold text-primary">{proj.revenue}</div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">{proj.milestone}</p>
                  </GlassCard>
                </div>

                {/* Timeline dot */}
                <div className="hidden sm:flex w-3 h-3 rounded-full bg-primary shrink-0 relative z-10 ring-4 ring-background" />

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
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
          <Link to="/india/technology" className="group">
            <GlassCard hover className="p-6 h-full">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Technology</span>
                <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-2">Platform & Innovation</h3>
              <p className="text-sm text-muted-foreground">Discover patented package scanning, AI features, and India-specific technology.</p>
            </GlassCard>
          </Link>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <GlassCard className="py-12 px-6 glow-green">
            <h2 className="text-2xl sm:text-3xl font-bold font-display mb-3">
              Ready to <span className="text-gradient">transform</span> your property?
            </h2>
            <p className="text-muted-foreground text-sm mb-6">Connect with our India market team to explore partnership opportunities.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  </div>
);

export default IndiaSegments;
