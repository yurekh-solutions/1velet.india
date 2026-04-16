import { motion } from "framer-motion";
import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, PieChart, Pie, Cell, LineChart, Line, RadarChart,
  PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend,
  ComposedChart, Scatter
} from "recharts";
import {
  TrendingUp, Building2, Users, Activity, MapPin, Zap, IndianRupee,
  Shield, Smartphone, Brain, Globe, BarChart3, ArrowUpRight, ArrowDownRight, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import { AnimatedValue, Sparkline } from "@/components/IndiaSharedComponents";
import IndiaNavigation from "@/components/IndiaNavigation";

import mumbaiImg from "@/assets/mumbai-skyline.jpg";
import bangaloreImg from "@/assets/bangalore-tech.jpg";
import delhiImg from "@/assets/delhi-skyline.jpg";
import hyderabadImg from "@/assets/hyderabad-skyline.jpg";
import puneImg from "@/assets/pune-skyline.jpg";
import chennaiImg from "@/assets/chennai-skyline.jpg";
import indiaHeatmapImg from "@/assets/india-heatmap.jpg";
import heroBuilding from "@/assets/hero-building.jpg";



// --- Data ---
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

const growthProjections = [
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
  { city: "Mumbai MMR", projects: "3,200+", growth: "28%", cagr: "28% CAGR", population: "21M", premium: "850+", img: mumbaiImg, color: "#f97316", trend: [28, 32, 35, 40, 48, 55, 62] },
  { city: "Bangalore", projects: "2,800+", growth: "32%", cagr: "32% CAGR", population: "12M", premium: "720+", img: bangaloreImg, color: "#22c55e", trend: [24, 30, 38, 44, 52, 60, 68] },
  { city: "Delhi NCR", projects: "4,500+", growth: "24%", cagr: "24% CAGR", population: "32M", premium: "1,100+", img: delhiImg, color: "#3b82f6", trend: [35, 38, 42, 48, 54, 60, 65] },
  { city: "Hyderabad", projects: "1,900+", growth: "35%", cagr: "35% CAGR", population: "10M", premium: "480+", img: hyderabadImg, color: "#a855f7", trend: [18, 24, 32, 42, 52, 64, 78] },
  { city: "Pune", projects: "1,600+", growth: "22%", cagr: "22% CAGR", population: "7M", premium: "390+", img: puneImg, color: "#ec4899", trend: [15, 18, 22, 28, 34, 40, 46] },
  { city: "Chennai", projects: "1,200+", growth: "20%", cagr: "20% CAGR", population: "11M", premium: "310+", img: chennaiImg, color: "#14b8a6", trend: [12, 15, 18, 22, 26, 30, 35] },
];

const tooltipStyle = {
  contentStyle: { background: "hsl(220 20% 10%)", border: "1px solid hsl(220 15% 18%)", borderRadius: "0.5rem", color: "#f2f2f2", fontSize: 12 },
  labelStyle: { color: "hsl(82, 53%, 53%)" },
};

const AnalyticsPage = () => {
  const [activeRegion, setActiveRegion] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* India Pages Navigation */}
      <IndiaNavigation />
      
      {/* Hero Section with Cover Image */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={indiaHeatmapImg} alt="India market analytics dashboard showing real-time proptech data, growth projections and regional intelligence" className="w-full h-full object-cover" />
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
              <BarChart3 size={14} /> Live Analytics
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1]">
              India Market
              <span className="text-gradient block">Intelligence Dashboard</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
              Real-time market analytics, growth projections, and regional insights powered by advanced data science methodologies.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Analytics Content */}

      {/* Animated KPI Row */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { icon: TrendingUp, label: "Market CAGR", value: 1695, displayPrefix: "", displaySuffix: "%", display: "16.95", sub: "2025-2031", trend: "up", spark: [8, 10, 12, 13, 14, 15, 17] },
            { icon: Building2, label: "Target Buildings", value: 3000, displayPrefix: "", displaySuffix: "+", display: "3,000", sub: "By 2030", trend: "up", spark: [50, 200, 500, 900, 1500, 2200, 3000] },
            { icon: Users, label: "Connected Residents", value: 2000000, displayPrefix: "", displaySuffix: "+", display: "2M", sub: "Projected", trend: "up", spark: [25, 100, 300, 750, 1200, 1600, 2000] },
            { icon: Activity, label: "Building Automation", value: 65, displayPrefix: "$", displaySuffix: "B", display: "$65B", sub: "Global by 2034", trend: "up", spark: [7, 12, 20, 30, 42, 52, 65] },
          ].map((kpi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
            >
              <GlassCard className="p-4 sm:p-5 group hover:border-primary/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-primary/10">
                      <kpi.icon size={14} className="text-primary" />
                    </div>
                    <span className="text-[10px] sm:text-xs text-muted-foreground">{kpi.label}</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary text-[10px]">
                    <ArrowUpRight size={10} />
                    <span>+{kpi.spark[kpi.spark.length - 1] - kpi.spark[kpi.spark.length - 2]}%</span>
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-foreground">
                  {kpi.display}
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="text-[10px] sm:text-xs text-primary/70">{kpi.sub}</div>
                  <Sparkline data={kpi.spark} color="hsl(82, 53%, 53%)" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* India Heatmap Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8 mt-6 mb-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <GlassCard className="overflow-hidden p-0">
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Map */}
                <div className="lg:col-span-3 relative min-h-[300px] sm:min-h-[420px]">
                  <img
                    src={indiaHeatmapImg}
                    alt="India region heatmap"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 lg:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:hidden" />

                  {/* City hotspots */}
                  {[
                    { name: "Delhi NCR", top: "22%", left: "42%", idx: 2 },
                    { name: "Mumbai", top: "52%", left: "22%", idx: 0 },
                    { name: "Bangalore", top: "72%", left: "38%", idx: 1 },
                    { name: "Hyderabad", top: "58%", left: "42%", idx: 3 },
                    { name: "Pune", top: "56%", left: "28%", idx: 4 },
                    { name: "Chennai", top: "72%", left: "48%", idx: 5 },
                  ].map((pin, i) => (
                    <motion.button
                      key={i}
                      className={`absolute z-10 group/pin ${activeRegion === pin.idx ? "" : ""}`}
                      style={{ top: pin.top, left: pin.left }}
                      onMouseEnter={() => setActiveRegion(pin.idx)}
                      onMouseLeave={() => setActiveRegion(null)}
                      onClick={() => setActiveRegion(activeRegion === pin.idx ? null : pin.idx)}
                      whileHover={{ scale: 1.3 }}
                    >
                      <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                        activeRegion === pin.idx ? "bg-primary scale-150 shadow-[0_0_20px_hsla(82,53%,53%,0.6)]" : "bg-primary/60"
                      }`} />
                      <div className={`absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] sm:text-[10px] font-medium px-1.5 py-0.5 rounded bg-background/80 backdrop-blur-sm transition-opacity ${
                        activeRegion === pin.idx ? "opacity-100 text-primary" : "opacity-70 text-foreground"
                      }`}>
                        {pin.name}
                      </div>
                      {/* Pulse ring */}
                      <div className={`absolute inset-0 rounded-full animate-ping ${
                        activeRegion === pin.idx ? "bg-primary/30" : "bg-primary/10"
                      }`} style={{ animationDuration: "2s" }} />
                    </motion.button>
                  ))}

                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      Regional Heatmap
                    </span>
                  </div>
                </div>

                {/* Region Details Sidebar */}
                <div className="lg:col-span-2 p-6 sm:p-8 space-y-4 min-h-[400px] lg:min-h-[500px] overflow-y-auto">
                  <h3 className="font-display font-semibold text-foreground text-lg sm:text-xl mb-2 mt-2">City Intelligence</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-6">Hover or tap cities on the map to explore data</p>

                  <div className="space-y-4">
                    {cityRegions.map((region, idx) => (
                      <motion.div
                        key={idx}
                        className={`rounded-lg p-4 transition-all duration-300 cursor-pointer border ${activeRegion === idx ? "bg-primary/5 border-primary/30 shadow-lg" : "bg-secondary/30 border-transparent hover:bg-secondary/50"}`}
                        onMouseEnter={() => setActiveRegion(idx)}
                        onMouseLeave={() => setActiveRegion(null)}
                        layout
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-muted">
                            <img src={region.img} alt={region.city} className="w-full h-full object-cover" loading="lazy" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-display font-bold text-base text-foreground">{region.city}</span>
                              <span className="text-sm font-bold text-primary">{region.growth} CAGR</span>
                            </div>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                              <span>{region.projects} projects</span>
                              <span>{region.population} population</span>
                            </div>
                            <Sparkline data={region.trend} color={region.color} />
                          </div>
                        </div>

                        {/* Expanded detail on hover */}
                        {activeRegion === idx && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 pt-4 border-t border-border/50"
                          >
                            <div className="grid grid-cols-3 gap-4">
                              <div className="text-center p-2 bg-secondary/30 rounded-lg">
                                <div className="text-[10px] text-muted-foreground uppercase mb-1">Projects</div>
                                <div className="text-base font-bold text-foreground">{region.projects}</div>
                              </div>
                              <div className="text-center p-2 bg-secondary/30 rounded-lg">
                                <div className="text-[10px] text-muted-foreground uppercase mb-1">Premium</div>
                                <div className="text-base font-bold text-foreground">{region.premium}</div>
                              </div>
                              <div className="text-center p-2 bg-secondary/30 rounded-lg">
                                <div className="text-[10px] text-muted-foreground uppercase mb-1">Population</div>
                                <div className="text-base font-bold text-foreground">{region.population}</div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Animated Counters Banner */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { label: "Proptech Market", value: 429, prefix: "$", suffix: "B", sub: "by 2031" },
              { label: "Smart Home CAGR", value: 30, prefix: "", suffix: "%", sub: "growth rate" },
              { label: "Urban Population", value: 675, prefix: "", suffix: "M", sub: "by 2030" },
              { label: "Buildings Live", value: 600, prefix: "", suffix: "+", sub: "globally" },
              { label: "Residents", value: 150, prefix: "", suffix: "K+", sub: "connected" },
              { label: "Premium Projects", value: 12, prefix: "", suffix: "K+", sub: "annually" },
            ].map((counter, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard className="text-center p-3 sm:p-4">
                  <div className="text-xl sm:text-2xl font-bold font-display text-primary">
                    <AnimatedValue value={counter.value} prefix={counter.prefix} suffix={counter.suffix} />
                  </div>
                  <div className="text-[10px] sm:text-xs text-foreground font-medium mt-0.5">{counter.label}</div>
                  <div className="text-[9px] sm:text-[10px] text-muted-foreground">{counter.sub}</div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Row 1: Market Size + Smart Home */}
          <div className="grid lg:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <GlassCard className="h-full">
                <h3 className="font-display font-semibold text-foreground mb-1">Proptech Market Size</h3>
                <p className="text-xs text-muted-foreground mb-4">India (USD Billions)</p>
                <div className="h-64 sm:h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={marketSizeData}>
                      <defs>
                        <linearGradient id="gMarket" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(82, 53%, 53%)" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="hsl(82, 53%, 53%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
                      <XAxis dataKey="year" tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 12 }} />
                      <YAxis tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 12 }} />
                      <Tooltip {...tooltipStyle} />
                      <Area type="monotone" dataKey="value" stroke="hsl(82, 53%, 53%)" fill="url(#gMarket)" strokeWidth={2} animationDuration={2000} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <GlassCard className="h-full">
                <h3 className="font-display font-semibold text-foreground mb-1">Smart Home Market</h3>
                <p className="text-xs text-muted-foreground mb-4">India (USD Billions) — 30% CAGR</p>
                <div className="h-64 sm:h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={smartHomeData}>
                      <defs>
                        <linearGradient id="gSmart" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(160, 60%, 50%)" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="hsl(160, 60%, 50%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
                      <XAxis dataKey="year" tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 12 }} />
                      <YAxis tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 12 }} />
                      <Tooltip {...tooltipStyle} />
                      <Area type="monotone" dataKey="value" stroke="hsl(160, 60%, 50%)" fill="url(#gSmart)" strokeWidth={2} animationDuration={2000} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Row 2: Radar + Adoption Composed Chart */}
          <div className="grid lg:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <GlassCard className="h-full">
                <h3 className="font-display font-semibold text-foreground mb-1">Competitive Radar</h3>
                <p className="text-xs text-muted-foreground mb-4">1VALET vs. Indian market average</p>
                <div className="h-64 sm:h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData}>
                      <PolarGrid stroke="hsl(220, 15%, 18%)" />
                      <PolarAngleAxis dataKey="capability" tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 11 }} />
                      <PolarRadiusAxis tick={false} axisLine={false} />
                      <Radar name="1VALET" dataKey="valet" stroke="hsl(82, 53%, 53%)" fill="hsl(82, 53%, 53%)" fillOpacity={0.2} strokeWidth={2} animationDuration={2000} />
                      <Radar name="Competitors" dataKey="competitors" stroke="hsl(0, 70%, 55%)" fill="hsl(0, 70%, 55%)" fillOpacity={0.1} strokeWidth={2} animationDuration={2000} />
                      <Tooltip {...tooltipStyle} />
                      <Legend wrapperStyle={{ fontSize: 11, color: "hsl(220, 10%, 55%)" }} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <GlassCard className="h-full">
                <h3 className="font-display font-semibold text-foreground mb-1">Projected Adoption Curve</h3>
                <p className="text-xs text-muted-foreground mb-4">Signups, active users & retention rate</p>
                <div className="h-64 sm:h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={adoptionData}>
                      <defs>
                        <linearGradient id="gAdopt" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(82, 53%, 53%)" stopOpacity={0.2} />
                          <stop offset="95%" stopColor="hsl(82, 53%, 53%)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
                      <XAxis dataKey="month" tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 12 }} />
                      <YAxis yAxisId="left" tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 12 }} />
                      <YAxis yAxisId="right" orientation="right" tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 12 }} domain={[70, 100]} />
                      <Tooltip {...tooltipStyle} />
                      <Area yAxisId="left" type="monotone" dataKey="signups" fill="url(#gAdopt)" stroke="hsl(82, 53%, 53%)" strokeWidth={2} name="Signups" animationDuration={2000} />
                      <Bar yAxisId="left" dataKey="activeUsers" fill="hsl(160, 60%, 50%)" opacity={0.6} radius={[3, 3, 0, 0]} name="Active Users" animationDuration={2000} />
                      <Line yAxisId="right" type="monotone" dataKey="retention" stroke="hsl(45, 80%, 55%)" strokeWidth={2} dot={{ fill: "hsl(45, 80%, 55%)", r: 3 }} name="Retention %" animationDuration={2000} />
                      <Legend wrapperStyle={{ fontSize: 11, color: "hsl(220, 10%, 55%)" }} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Row 3: Regional + Segment Pie */}
          <div className="grid lg:grid-cols-3 gap-6">
            <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <GlassCard className="h-full">
                <h3 className="font-display font-semibold text-foreground mb-1">Regional Project Pipeline</h3>
                <p className="text-xs text-muted-foreground mb-4">Active premium projects by city with growth rate overlay</p>
                <div className="h-64 sm:h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={regionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
                      <XAxis dataKey="name" tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 11 }} angle={-20} textAnchor="end" height={60} />
                      <YAxis yAxisId="left" tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 12 }} />
                      <YAxis yAxisId="right" orientation="right" tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 12 }} />
                      <Tooltip {...tooltipStyle} />
                      <Bar yAxisId="left" dataKey="projects" radius={[4, 4, 0, 0]} animationDuration={2000}>
                        {regionData.map((entry, i) => (
                          <Cell key={i} fill={entry.color} />
                        ))}
                      </Bar>
                      <Line yAxisId="right" type="monotone" dataKey="growth" stroke="hsl(82, 53%, 53%)" strokeWidth={2} dot={{ fill: "hsl(82, 53%, 53%)", r: 4 }} name="Growth %" animationDuration={2000} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <GlassCard className="h-full">
                <h3 className="font-display font-semibold text-foreground mb-1">Target Segments</h3>
                <p className="text-xs text-muted-foreground mb-4">Market share by segment</p>
                <div className="h-52 sm:h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={segmentPie} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value" animationDuration={2000}>
                        {segmentPie.map((entry, i) => (
                          <Cell key={i} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip {...tooltipStyle} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-1.5 mt-2">
                  {segmentPie.map((s, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
                        <span className="text-muted-foreground">{s.name}</span>
                      </div>
                      <span className="text-foreground font-medium">{s.value}%</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>

          {/* Row 4: Growth Projections */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <GlassCard>
              <h3 className="font-display font-semibold text-foreground mb-1">1VALET India Growth Projections</h3>
              <p className="text-xs text-muted-foreground mb-4">Buildings, Residents (K), Revenue (₹ Cr)</p>
              <div className="h-72 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={growthProjections}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
                    <XAxis dataKey="year" tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 12 }} />
                    <YAxis tick={{ fill: "hsl(220, 10%, 55%)", fontSize: 12 }} />
                    <Tooltip {...tooltipStyle} />
                    <Line type="monotone" dataKey="buildings" stroke="hsl(82, 53%, 53%)" strokeWidth={2} dot={{ fill: "hsl(82, 53%, 53%)" }} name="Buildings" animationDuration={2000} />
                    <Line type="monotone" dataKey="residents" stroke="hsl(160, 60%, 50%)" strokeWidth={2} dot={{ fill: "hsl(160, 60%, 50%)" }} name="Residents (K)" animationDuration={2000} />
                    <Line type="monotone" dataKey="revenue" stroke="hsl(45, 80%, 55%)" strokeWidth={2} dot={{ fill: "hsl(45, 80%, 55%)" }} name="Revenue (₹Cr)" animationDuration={2000} />
                    <Legend wrapperStyle={{ fontSize: 11, color: "hsl(220, 10%, 55%)" }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* City Image Cards with Details */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Regional Intelligence"
            title="City-Level"
            highlight="Market Analysis"
            description="Deep dive into India's top real estate markets with growth trajectories."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {cityRegions.map((region, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <GlassCard hover className="overflow-hidden p-0 h-full">
                  <div className="relative h-40 sm:h-48">
                    <img src={region.img} alt={region.city} className="w-full h-full object-cover" loading="lazy" width={800} height={512} />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-primary" />
                          <span className="font-display font-bold text-foreground text-lg">{region.city}</span>
                        </div>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: `${region.color}20`, color: region.color }}>
                          {region.growth} CAGR
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-[10px] text-muted-foreground uppercase">Projects</div>
                        <div className="text-sm font-bold text-foreground">{region.projects}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-muted-foreground uppercase">Premium</div>
                        <div className="text-sm font-bold text-foreground">{region.premium}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-muted-foreground uppercase">Population</div>
                        <div className="text-sm font-bold text-foreground">{region.population}</div>
                      </div>
                    </div>

                    {/* Mini trend chart */}
                    <div className="flex items-center justify-between pt-2 border-t border-border/50">
                      <span className="text-[10px] text-muted-foreground">Growth Trend</span>
                      <Sparkline data={region.trend} color={region.color} />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/india/segments" className="group">
              <GlassCard hover className="p-6 h-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Market Segments</span>
                  <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-lg font-bold font-display text-foreground mb-2">Target Markets & Growth Roadmap</h3>
                <p className="text-sm text-muted-foreground">Explore luxury residential, townships, student housing, and senior living segments.</p>
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
        </div>
      </section>
    </div>
  );
};

export default AnalyticsPage;
