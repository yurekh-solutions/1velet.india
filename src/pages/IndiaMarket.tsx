import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Building2, 
  Users, 
  Smartphone, 
  Shield, 
  Zap, 
  Globe, 
  Target, 
  ArrowRight,
  CheckCircle2,
  BarChart3,
  IndianRupee,
  Rocket,
  Award,
  Calendar,
  MapPin,
  Brain,
  Wifi,
  Lock,
  Package,
  Camera,
  PieChart,
  LineChart,
  Activity,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart as RePieChart, Pie, Cell, LineChart as ReLineChart, Line,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend,
  ComposedChart
} from "recharts";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import { AnimatedValue, Sparkline } from "@/components/IndiaSharedComponents";
import IndiaNavigation from "@/components/IndiaNavigation";

// India-specific images from local assets
import mumbaiSkyline from "@/assets/mumbai-skyline.jpg";
import bangaloreTech from "@/assets/bangalore-tech.jpg";
import delhiSkyline from "@/assets/delhi-skyline.jpg";
import hyderabadSkyline from "@/assets/hyderabad-skyline.jpg";
import chennaiSkyline from "@/assets/chennai-skyline.jpg";
import puneSkyline from "@/assets/pune-skyline.jpg";
import heroBuilding from "@/assets/hero-building.jpg";
import indiaBuilding from "@/assets/india-building.jpg";
import indiaHeatmap from "@/assets/india-heatmap.jpg";



// --- Chart Data ---
const marketSizeData = [
  { year: "2024", value: 1.3 },
  { year: "2025", value: 1.66 },
  { year: "2026", value: 2.1 },
  { year: "2027", value: 2.7 },
  { year: "2028", value: 3.3 },
  { year: "2029", value: 3.8 },
  { year: "2030", value: 4.29 },
];

const smartHomeData = [
  { year: "2024", value: 5.2 },
  { year: "2025", value: 6.8 },
  { year: "2026", value: 8.8 },
  { year: "2027", value: 11.4 },
  { year: "2028", value: 14.9 },
  { year: "2029", value: 17.1 },
  { year: "2030", value: 19.3 },
];

const regionData = [
  { name: "Mumbai MMR", projects: 3200, growth: 28, color: "#f97316" },
  { name: "Bangalore", projects: 2800, growth: 32, color: "#22c55e" },
  { name: "Delhi NCR", projects: 4500, growth: 24, color: "#3b82f6" },
  { name: "Hyderabad", projects: 1900, growth: 35, color: "#a855f7" },
  { name: "Pune", projects: 1600, growth: 22, color: "#ec4899" },
  { name: "Chennai", projects: 1200, growth: 20, color: "#14b8a6" },
];

const segmentPie = [
  { name: "Luxury Residential", value: 35, color: "hsl(82, 53%, 53%)" },
  { name: "Integrated Townships", value: 25, color: "hsl(160, 60%, 50%)" },
  { name: "Student Housing", value: 20, color: "hsl(220, 70%, 55%)" },
  { name: "Senior Living", value: 12, color: "hsl(45, 80%, 55%)" },
  { name: "Commercial", value: 8, color: "hsl(0, 70%, 55%)" },
];

const chartGrowthData = [
  { year: "2025", buildings: 75, residents: 25, revenue: 20 },
  { year: "2026", buildings: 300, residents: 100, revenue: 80 },
  { year: "2027", buildings: 700, residents: 300, revenue: 200 },
  { year: "2028", buildings: 1200, residents: 750, revenue: 450 },
  { year: "2030", buildings: 3000, residents: 2000, revenue: 800 },
];

const radarData = [
  { capability: "AI/ML", valet: 95, competitors: 30 },
  { capability: "Hardware", valet: 90, competitors: 65 },
  { capability: "Integration", valet: 92, competitors: 40 },
  { capability: "Scale", valet: 88, competitors: 35 },
  { capability: "UX", valet: 94, competitors: 50 },
  { capability: "Security", valet: 96, competitors: 55 },
];

const adoptionData = [
  { month: "Jan", signups: 120, activeUsers: 95, retention: 82 },
  { month: "Feb", signups: 180, activeUsers: 150, retention: 85 },
  { month: "Mar", signups: 250, activeUsers: 210, retention: 87 },
  { month: "Apr", signups: 340, activeUsers: 300, retention: 89 },
  { month: "May", signups: 480, activeUsers: 420, retention: 91 },
  { month: "Jun", signups: 620, activeUsers: 560, retention: 93 },
];

const cityRegions = [
  { city: "Mumbai MMR", projects: "3,200+", growth: "28%", cagr: "28% CAGR", population: "21M", premium: "850+", img: mumbaiSkyline, color: "#f97316", trend: [28, 32, 35, 40, 48, 55, 62] },
  { city: "Bangalore", projects: "2,800+", growth: "32%", cagr: "32% CAGR", population: "12M", premium: "720+", img: bangaloreTech, color: "#22c55e", trend: [24, 30, 38, 44, 52, 60, 68] },
  { city: "Delhi NCR", projects: "4,500+", growth: "24%", cagr: "24% CAGR", population: "32M", premium: "1,100+", img: delhiSkyline, color: "#3b82f6", trend: [35, 38, 42, 48, 54, 60, 65] },
  { city: "Hyderabad", projects: "1,900+", growth: "35%", cagr: "35% CAGR", population: "10M", premium: "480+", img: hyderabadSkyline, color: "#a855f7", trend: [18, 24, 32, 42, 52, 64, 78] },
  { city: "Pune", projects: "1,600+", growth: "22%", cagr: "22% CAGR", population: "7M", premium: "390+", img: puneSkyline, color: "#ec4899", trend: [15, 18, 22, 28, 34, 40, 46] },
  { city: "Chennai", projects: "1,200+", growth: "20%", cagr: "20% CAGR", population: "11M", premium: "310+", img: chennaiSkyline, color: "#14b8a6", trend: [12, 15, 18, 22, 26, 30, 35] },
];

const tooltipStyle = {
  contentStyle: { background: "hsl(220 20% 10%)", border: "1px solid hsl(220 15% 18%)", borderRadius: "0.5rem", color: "#f2f2f2", fontSize: 12 },
  labelStyle: { color: "hsl(82, 53%, 53%)" },
};

const marketDrivers = [
  {
    icon: TrendingUp,
    title: "Rapid Urbanization",
    stat: "675M",
    desc: "Urban population by 2030, driving demand for smart residential and commercial spaces",
    impact: "High"
  },
  {
    icon: Smartphone,
    title: "Digital Adoption Surge",
    stat: "42%",
    desc: "Smartphone penetration enabling app-based building management and digital keyless entry",
    impact: "Critical"
  },
  {
    icon: Building2,
    title: "Premium Real Estate Boom",
    stat: "12,000+",
    desc: "Luxury and premium projects launching annually requiring integrated smart building solutions",
    impact: "High"
  },
  {
    icon: Shield,
    title: "Security & Safety Mandates",
    stat: "89%",
    desc: "Homebuyers prioritize advanced security systems and touchless entry post-pandemic",
    impact: "Critical"
  }
];

const competitiveAdvantages = [
  {
    icon: Zap,
    title: "Unified Platform Advantage",
    desc: "While Indian market relies on fragmented vendors (intercom + access control + app = 3-5 contracts), 1VALET offers ONE platform — reducing vendor management by 70% and integration costs by 60%.",
    stat: "60% cost reduction",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    desc: "Patented package scanning, facial recognition, and predictive maintenance — technology 5-7 years ahead of current Indian solutions. No local competitor offers this depth of AI integration.",
    stat: "5-7 years ahead",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Globe,
    title: "Proven Global Scale",
    desc: "600+ buildings, 150k+ residents across North America and Middle East. Battle-tested platform with 99.99% uptime. Indian developers get enterprise-grade technology from day one.",
    stat: "600+ buildings live",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: IndianRupee,
    title: "Hardware-Agnostic ROI",
    desc: "No costly rewiring or hardware replacement. Integrates with existing Salto, Yale, OTIS, Yardi systems. Retrofit-friendly approach saves ₹50-80 lakhs per building vs. full system replacement.",
    stat: "₹50-80L savings/building",
    color: "from-orange-500/20 to-red-500/20"
  }
];

const marketGaps = [
  {
    problem: "Fragmented Technology Stacks",
    current: "Developers juggle 5-7 vendors: intercom, access control, CCTV, property management, resident app, payment gateway, smart lockers",
    solution: "1VALET unifies all into ONE platform — one contract, one dashboard, one team",
    impact: "70% reduction in vendor management complexity"
  },
  {
    problem: "High Integration Costs",
    current: "Custom integrations between disparate systems cost ₹2-5 crores per project and take 6-12 months",
    solution: "Pre-built integrations with Yardi, RealPage, Salto, OTIS — plug-and-play in 2-4 weeks",
    impact: "80% faster deployment, 60% cost savings"
  },
  {
    problem: "Poor Resident Experience",
    current: "Residents use 4-5 different apps: one for intercom, one for payments, one for maintenance, one for amenities",
    solution: "Single 1VALET app: digital keys, video calls, rent payments, amenity booking, maintenance, community messaging",
    impact: "4x daily app opens vs. industry average 0.5x"
  },
  {
    problem: "Limited AI & Automation",
    current: "Indian solutions offer basic features — no facial recognition, no package scanning, no predictive analytics",
    solution: "AI-powered facial recognition, patented package scanning, predictive maintenance, energy optimization",
    impact: "Reduces concierge costs by 40%, package theft by 95%"
  }
];

const growthProjections = [
  { year: "2025", buildings: "50-75", residents: "25,000+", revenue: "₹15-20 Cr", milestone: "Launch in Mumbai, Bangalore, Delhi NCR" },
  { year: "2026", buildings: "200-300", residents: "100,000+", revenue: "₹60-80 Cr", milestone: "Expand to Pune, Hyderabad, Chennai" },
  { year: "2027", buildings: "500-700", residents: "300,000+", revenue: "₹150-200 Cr", milestone: "Pan-India presence, local manufacturing" },
  { year: "2028", buildings: "1,200+", residents: "750,000+", revenue: "₹350-450 Cr", milestone: "Market leader in premium segment" },
  { year: "2030", buildings: "3,000+", residents: "2,000,000+", revenue: "₹800 Cr+", milestone: "Dominant smart building platform" }
];

const targetSegments = [
  {
    segment: "Luxury Residential Towers",
    market: "Mumbai (South Mumbai, Bandra, Worli), Delhi NCR (Gurgaon, Noida), Bangalore (Indiranagar, Whitefield)",
    opportunity: "800-1,200 premium projects launching 2025-2027",
    pain: "High concierge costs (₹8-12L/month), security concerns, fragmented tech",
    value: "Reduce staffing by 40%, increase property value by 15-20%"
  },
  {
    segment: "Integrated Townships",
    market: "Hyderabad (Gachibowli, Financial District), Pune (Hinjewadi, Baner), Chennai (OMR)",
    opportunity: "200+ mega townships with 5,000-20,000 units each",
    pain: "Multi-building management complexity, inconsistent resident experience",
    value: "Unified dashboard for 10-50 buildings, consistent 5-star experience"
  },
  {
    segment: "Student Housing & PGs",
    market: "Kota, Pune, Bangalore, Delhi — 50M+ student population",
    opportunity: "Organized student housing growing at 25% CAGR",
    pain: "High tenant turnover, access control challenges, manual processes",
    value: "Automated move-in/move-out, digital keys, reduces admin costs by 60%"
  },
  {
    segment: "Senior Living Communities",
    market: "Bangalore, Pune, Goa — 150M+ senior population by 2030",
    opportunity: "Senior living projects growing at 20% CAGR",
    pain: "Safety concerns, emergency response, accessibility",
    value: "Facial recognition entry, emergency alerts, simplified app interface"
  }
];

const IndiaMarket = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]); 
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [activeRegion, setActiveRegion] = useState<number | null>(null);

  return (
  <div className="min-h-screen">
    {/* India Pages Navigation */}
    <IndiaNavigation />
    
    {/* Hero with Parallax */}
    <section ref={heroRef} className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden">
      <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
        <img src={heroBuilding} alt="1VALET transforming India's real estate future with unified smart building platform and proptech solutions" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
      </motion.div>
  
      <motion.div style={{ opacity: heroOpacity }} className="relative z-10 section-padding max-w-7xl mx-auto w-full pt-20 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
            <Rocket size={14} /> India Market Expansion
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1]">
            Transforming India's
            <span className="text-gradient block">Real Estate Future</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
            Data-driven analysis of why 1VALET's unified smart building platform is positioned to capture
            India's $4.29B proptech market.
          </p>
        </motion.div>
  
        {/* Key Metrics */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 mt-6 sm:mt-8 lg:mt-12">
          {[
            { label: "India Proptech Market", value: "$4.29B", sub: "by 2031", icon: TrendingUp },
            { label: "Smart Home Growth", value: "30%", sub: "CAGR", icon: Smartphone },
            { label: "Urban Population", value: "675M", sub: "by 2030", icon: Users },
            { label: "Premium Projects", value: "12K+", sub: "annually", icon: Building2 },
          ].map((stat, idx) => (
            <GlassCard key={idx} className="text-center p-3 sm:p-5">
              <stat.icon className="mx-auto mb-2 text-primary" size={20} />
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-foreground">{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              <div className="text-[10px] sm:text-xs text-primary/70">{stat.sub}</div>
            </GlassCard>
          ))}
        </motion.div>
      </motion.div>
    </section>

    {/* Market Opportunity Deep Dive */}
    <section className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="MARKET OPPORTUNITY"
          title="India's smart building"
          highlight="inflection point."
          description="Multiple converging trends create a perfect storm for 1VALET's market entry — unprecedented demand, technology readiness, and competitive gaps."
        />

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-12">
          {marketDrivers.map((driver, idx) => (
            <motion.div
              key={driver.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <driver.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <h3 className="text-lg sm:text-xl font-bold font-display">{driver.title}</h3>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        driver.impact === 'Critical' 
                          ? 'bg-red-500/20 text-red-500' 
                          : 'bg-orange-500/20 text-orange-500'
                      }`}>
                        {driver.impact} Impact
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1 sm:mb-2">{driver.stat}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{driver.desc}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Competitive Advantages */}
    <section className="section-padding bg-card/30 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="COMPETITIVE MOAT"
          title="Why 1VALET wins in"
          highlight="India."
          description="Structural advantages that local competitors cannot replicate — proven technology, global scale, and hardware-agnostic architecture."
        />

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-12">
          {competitiveAdvantages.map((adv, idx) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard className="p-5 sm:p-8 h-full">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${adv.color} flex items-center justify-center mb-4 sm:mb-6`}>
                  <adv.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display mb-3 sm:mb-4">{adv.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{adv.desc}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-primary">{adv.stat}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Market Gaps & Solutions */}
    <section className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="MARKET GAPS"
          title="Critical problems"
          highlight="we solve."
          description="Deep analysis of pain points in India's current smart building ecosystem — and how 1VALET's platform eliminates them."
        />

        <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-12">
          {marketGaps.map((gap, idx) => (
            <motion.div
              key={gap.problem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard className="p-5 sm:p-8">
                <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                  <div>
                    <div className="text-sm font-bold text-red-500 mb-2 uppercase tracking-wider">Current Problem</div>
                    <h3 className="text-xl font-bold font-display mb-3">{gap.problem}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{gap.current}</p>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-green-500 mb-2 uppercase tracking-wider">1VALET Solution</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{gap.solution}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full">
                      <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">Business Impact</div>
                      <div className="text-2xl font-bold text-gradient">{gap.impact}</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Target Market Segments */}
    <section className="section-padding bg-card/30 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="TARGET SEGMENTS"
          title="Strategic market"
          highlight="entry points."
          description="Four high-value segments where 1VALET's platform delivers immediate ROI and competitive differentiation."
        />

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-12">
          {targetSegments.map((segment, idx) => (
            <motion.div
              key={segment.segment}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard className="p-5 sm:p-8 h-full">
                <h3 className="text-xl sm:text-2xl font-bold font-display mb-3 sm:mb-4">{segment.segment}</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">Target Markets</div>
                    <p className="text-sm text-muted-foreground">{segment.market}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">Market Opportunity</div>
                    <p className="text-sm text-muted-foreground">{segment.opportunity}</p>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-red-500 mb-1 uppercase tracking-wider">Current Pain Points</div>
                    <p className="text-sm text-muted-foreground">{segment.pain}</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs font-bold text-green-500 mb-1 uppercase tracking-wider">1VALET Value Proposition</div>
                    <p className="text-sm font-semibold text-foreground">{segment.value}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Power BI Analytics Dashboard */}
    <section className="section-padding bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="LIVE ANALYTICS"
          title="India market"
          highlight="intelligence dashboard."
          description="Real-time market analytics and growth projections powered by advanced data science methodologies."
        />

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-12">
          {/* Market Size Chart */}
          <GlassCard className="p-4 sm:p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div>
                <h3 className="text-xl font-bold font-display mb-1">Market Growth Trajectory</h3>
                <p className="text-sm text-muted-foreground">India Proptech Market Size (USD Billions)</p>
              </div>
              <LineChart className="w-6 h-6 text-primary" />
            </div>
            
            {/* Chart Visualization */}
            <div className="relative h-48 sm:h-64">
              <div className="absolute inset-0 flex items-end justify-between gap-2 px-4">
                {[
                  { year: '2024', value: 1.3, height: '30%' },
                  { year: '2025', value: 1.66, height: '40%' },
                  { year: '2026', value: 2.1, height: '52%' },
                  { year: '2027', value: 2.7, height: '65%' },
                  { year: '2028', value: 3.3, height: '78%' },
                  { year: '2029', value: 3.8, height: '90%' },
                  { year: '2030', value: 4.29, height: '100%' }
                ].map((year, idx) => (
                  <motion.div
                    key={year.year}
                    initial={{ height: 0 }}
                    whileInView={{ height: year.height }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                    className="flex-1 bg-gradient-to-t from-primary/80 to-primary/40 rounded-t-lg relative group cursor-pointer"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="px-2 py-1 bg-primary text-primary-foreground text-xs font-bold rounded whitespace-nowrap">
                        ${year.value}B
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-bold">
                      {year.year}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* Key Metrics */}
          <div className="space-y-3 sm:space-y-6">
            <GlassCard className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span className="text-sm font-semibold">Growth Rate</span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">16.95%</div>
              <div className="text-sm text-muted-foreground">CAGR (2025-2031)</div>
            </GlassCard>

            <GlassCard className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <span className="text-sm font-semibold">Target Buildings</span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">3,000+</div>
              <div className="text-sm text-muted-foreground">By 2030</div>
            </GlassCard>

            <GlassCard className="p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                <span className="text-sm font-semibold">Connected Residents</span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">2M+</div>
              <div className="text-sm text-muted-foreground">Market penetration</div>
            </GlassCard>
          </div>
        </div>

        {/* Regional Analytics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 sm:mt-6">
          {[
            { city: "Mumbai MMR", projects: "3,200+", growth: "28% CAGR", color: "from-orange-500/20 to-red-500/20", img: mumbaiSkyline },
            { city: "Bangalore", projects: "2,800+", growth: "32% CAGR", color: "from-green-500/20 to-emerald-500/20", img: bangaloreTech },
            { city: "Delhi NCR", projects: "4,500+", growth: "24% CAGR", color: "from-blue-500/20 to-cyan-500/20", img: delhiSkyline },
            { city: "Hyderabad", projects: "1,900+", growth: "35% CAGR", color: "from-purple-500/20 to-pink-500/20", img: hyderabadSkyline }
          ].map((region, idx) => (
            <motion.div
              key={region.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard className="overflow-hidden">
                <div className="relative h-24 sm:h-32">
                  <img src={region.img} alt={region.city} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <h4 className="text-lg font-bold font-display">{region.city}</h4>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <div className="flex justify-between items-center mb-1 sm:mb-2">
                    <span className="text-sm text-muted-foreground">Projects</span>
                    <span className="font-bold">{region.projects}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Growth</span>
                    <span className="font-bold text-gradient">{region.growth}</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Growth Projections */}
    <section className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="GROWTH TRAJECTORY"
          title="5-year market"
          highlight="penetration plan."
          description="Conservative projections based on current pipeline, market size, and proven adoption rates from North American and Middle East markets."
        />

        <div className="mt-6 sm:mt-12">
          {/* Mobile: Stack vertically, Desktop: Grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {growthProjections.map((proj, idx) => (
              <motion.div
                key={proj.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <GlassCard className="p-4 sm:p-6">
                  <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1 sm:mb-2">{proj.year}</div>
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Buildings</div>
                      <div className="font-bold">{proj.buildings}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Residents</div>
                      <div className="font-bold">{proj.residents}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Revenue</div>
                      <div className="font-bold text-primary">{proj.revenue}</div>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <div className="text-xs font-semibold text-foreground">{proj.milestone}</div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Technology Advantage */}
    <section className="section-padding bg-card/30 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="TECHNOLOGY EDGE"
          title="Built for India's"
          highlight="unique challenges."
          description="Platform capabilities specifically designed to address Indian market requirements — from extreme weather to multi-language support."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-12">
          {[
            { icon: Camera, title: "Extreme Weather Ready", desc: "-30°C to 55°C operating range — handles Mumbai humidity, Delhi heat, Bangalore monsoons" },
            { icon: Wifi, title: "Multi-Language Support", desc: "50+ languages including Hindi, Marathi, Tamil, Telugu, Bengali, Kannada, Malayalam" },
            { icon: Lock, title: "UPI Payment Integration", desc: "Native support for UPI, credit cards, net banking — seamless rent collection" },
            { icon: Package, title: "Localized Features", desc: "Festival mode, visitor management, domestic staff access, cultural customization" }
          ].map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard className="p-4 sm:p-6 text-center h-full">
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-bold font-display mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Now - Urgency */}
    <section className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-4 sm:mb-6">
            <Rocket className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
            <span className="text-xs sm:text-sm font-semibold text-red-500">WHY NOW?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold font-display mb-4 sm:mb-6">
            India's real estate is at a
            <br />
            <span className="text-gradient">technological tipping point.</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto">
            Premium developers are actively seeking unified smart building solutions. Early movers will capture 
            market leadership and establish technology standards for the next decade. 1VALET's proven platform, 
            global expertise, and hardware-agnostic approach position it to dominate India's $4.29B proptech market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-3 sm:py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:brightness-110 transition-all glow-green text-xs sm:text-sm uppercase tracking-wider"
            >
              Schedule India Market Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-3 sm:py-4 glass-card font-bold rounded-xl hover:border-primary/30 transition-all text-xs sm:text-sm uppercase tracking-wider"
            >
              Explore Platform <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-gradient-to-r from-orange-500/10 via-saffron-500/10 to-green-500/10 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <Award className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-4 sm:mb-6" />
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold font-display mb-4 sm:mb-6">
          Ready to lead India's
          <br />
          <span className="text-gradient">smart building revolution?</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
          Join forward-thinking developers who are already partnering with 1VALET to deliver 
          world-class smart living experiences across India's premium real estate market.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 sm:px-12 py-4 sm:py-5 bg-primary text-primary-foreground font-bold rounded-xl hover:brightness-110 transition-all glow-green text-sm sm:text-base uppercase tracking-wider"
        >
          Connect with India Team <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  </div>
  );
};

export default IndiaMarket;
