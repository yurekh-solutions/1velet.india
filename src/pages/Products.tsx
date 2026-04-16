import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Smartphone, Monitor, ChevronRight } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import heroBuilding from "@/assets/hero-building.jpg";

// Real images from 1valet.com
const intercomImg = "https://1valet.com/images/products/1Valet-Smart-Video-Intercom.webp";
const portalImg = "https://1valet.com/images/products/1valet-laptop-cctv-dashboard.webp";
const residentImg = "https://1valet.com/images/products/1VALET_App_Home_Screen.webp";

const products = [
  {
    id: "smart-intercom",
    icon: Building2,
    label: "SMART INTERCOM",
    title: "The building's first impression.",
    desc: "Video intercom consoles in 43\", 22\", and 10\" form factors with patented package scanning and express courier entry. Facial recognition, digital keys — engineered for -30°C (-22°F) to 55°C (131°F).",
    img: intercomImg,
    cta: "Explore Smart Intercom",
    link: "/products/console",
    imageFirst: false // Image on right
  },
  {
    id: "management-portal",
    icon: Monitor,
    label: "MANAGEMENT PORTAL",
    title: "Your portfolio at a glance.",
    desc: "CCTV integration, unified access control, virtual concierge, parking management, suite inspections, smart thermostat control — manage any building, at any time, from anywhere.",
    img: portalImg,
    cta: "Explore Management Portal",
    link: "/products/management",
    imageFirst: true // Image on left
  },
  {
    id: "resident-app",
    icon: Smartphone,
    label: "RESIDENT APP",
    title: "Your building, in your pocket.",
    desc: "Opened 4x daily. Digital keys, video intercom, rent payments, amenity booking, marketplace, maintenance, DocBox, community messaging — one app that becomes part of daily life.",
    img: residentImg,
    cta: "Explore Resident App",
    link: "/products/resident",
    imageFirst: false // Image on right
  },
];

const Products = () => (
  <div className="min-h-screen">
    {/* India Pages Navigation */}
    
    {/* Hero Section with Cover Image */}
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroBuilding} alt="1VALET smart building products including video intercom, management portal and resident app" className="w-full h-full object-cover" />
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
            <Building2 size={14} /> Our Products
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1]">
            Unified smart
            <span className="text-gradient block">building platform.</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
            Three interconnected products that work seamlessly together to create the industry's most complete smart building ecosystem.
          </p>
        </motion.div>
      </div>
    </section>
    
    {/* Products Content */}
    <section className="section-padding pt-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="PLATFORM"
          title="The complete"
          highlight="ecosystem."
          description="Hardware, software, and services — designed to replace fragmented vendor stacks with a single, unified building operating system."
        />
      </div>
    </section>

    {/* Product Sections - Alternating Layout */}
    <div className="space-y-0">
      {products.map((product, idx) => (
        <section key={product.id} className="section-padding border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center ${product.imageFirst ? 'lg:flex-row-reverse' : ''}`}>
              {/* Text Content */}
              <div className={product.imageFirst ? 'lg:order-2' : ''}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary/10 rounded-full mb-4">
                    {product.label}
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight mb-6">
                    {product.title}
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                    {product.desc}
                  </p>
                  <Link
                    to={product.link}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-base"
                  >
                    {product.cta} <ChevronRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={product.imageFirst ? 'lg:order-1' : ''}
              >
                <div className="glass-card rounded-3xl overflow-hidden">
                  <img 
                    src={product.img} 
                    alt={product.label}
                    className="w-full h-auto" 
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>

      {/* Integrations Section */}
      <section className="section-padding bg-card/30 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="INTEGRATIONS"
            title="Hardware"
            highlight="agnostic."
            description="Connects with a wide ecosystem of smart locks, thermostats, access control panels, property management systems, smart lockers, elevators, payment platforms, and more. Retrofit-friendly — no costly rewiring."
          />
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Salto", "Yale", "Brivo", "Ecobee", "Yardi", "RealPage", "Luxer", "Stripe", "OTIS"].map((partner) => (
              <div
                key={partner}
                className="px-6 py-3 glass-card rounded-xl text-sm font-semibold hover:border-primary/30 transition-all"
              >
                {partner}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/integrations"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all text-base"
            >
              View All Integrations <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-display">
          See it all <span className="text-gradient">in action.</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Schedule a personalized demo to see how the 1VALET ecosystem works together.
        </p>
        <Link
          to="/contact"
          className="inline-flex mt-8 px-10 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:brightness-110 transition-all glow-green text-sm uppercase tracking-wider"
        >
          FREE CONSULTATION
        </Link>
      </div>
    </section>
  </div>
);

export default Products;
