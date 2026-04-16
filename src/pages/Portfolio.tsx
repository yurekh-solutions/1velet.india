import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import indiaImg from "@/assets/india-building.jpg";
import puneSkyline from "@/assets/pune-skyline.jpg";

const properties = [
  { 
    name: "The Well", 
    city: "Toronto, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/the-well-1.webp",
    desc: "King West premier luxury by Tridel. 1.5M sqft mixed-use masterplan on Wellington & Front."
  },
  { 
    name: "The Britt", 
    city: "Toronto, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/the-britt-1.webp",
    desc: "Iconic tower by Lanterra at 955 Bay Street. Bold architecture downtown."
  },
  { 
    name: "Leaside Common", 
    city: "Toronto, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/leaside-common-1.webp",
    desc: "Gairloch & Harlo Capital at Bayview & Eglinton. Sculpted mid-rise by BDP Quadrangle."
  },
  { 
    name: "Junction Point", 
    city: "Toronto, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/junction-point-1.webp",
    desc: "Gairloch Developments in The Junction. architectsAlliance design by Peter Clewes."
  },
  { 
    name: "625 Sheppard", 
    city: "Toronto, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/625-sheppard-1.webp",
    desc: "Canderel & Haven at Bayview Village. Modern tower in North York."
  },
  { 
    name: "Galleria on the Park", 
    city: "Toronto, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/galleria-on-park-1.webp",
    desc: "Master-planned by Almadev. 8-acre park, 2,800+ suites at Dupont & Dufferin."
  },
  { 
    name: "Residences at Bianca", 
    city: "Toronto, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/residences-bianca-1.webp",
    desc: "Tridel boutique mid-rise in the Annex. Teeple Architects. Up to 1,600 sqft."
  },
  { 
    name: "ERA in Bridgeland", 
    city: "Calgary, AB", 
    type: "Condo",
    image: "https://1valet.com/flagship/era-bridgeland-1.webp",
    desc: "Minto Communities in Bridgeland. Urban rooftop living with river valley views."
  },
  { 
    name: "1818 Alberni", 
    city: "Vancouver, BC", 
    type: "Condo",
    image: "https://1valet.com/flagship/1818-alberni-1.webp",
    desc: "Luxury tower by Landa Global on Alberni Street. Premium West End."
  },
  { 
    name: "Donovan", 
    city: "Vancouver, BC", 
    type: "Condo",
    image: "https://1valet.com/flagship/donovan-1.webp",
    desc: "Cressey at 1055 Richards Street. Refined Yaletown living."
  },
  { 
    name: "Habitat", 
    city: "Vancouver, BC", 
    type: "Condo",
    image: "https://1valet.com/flagship/habitat-1.webp",
    desc: "Porte & Fabric Living. Boutique 4-storey in Mount Pleasant. West Coast design."
  },
  { 
    name: "Mobilio Condos", 
    city: "Vaughan, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/mobilio-condos-1.webp",
    desc: "Menkes & QuadReal at Vaughan Metro Centre. Steps from the subway."
  },
  { 
    name: "Canopy Towers", 
    city: "Mississauga, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/canopy-towers-1.webp",
    desc: "Liberty Development in downtown Mississauga. Park views, modern tower."
  },
  { 
    name: "Kingsway by the River", 
    city: "Etobicoke, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/kingsway-river-1.webp",
    desc: "Urban Capital & Northam. Above the Humber River in the Kingsway."
  },
  { 
    name: "Evermore at West Village", 
    city: "Etobicoke, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/evermore-west-village-1.webp",
    desc: "Tridel in Etobicoke's West Village. Premium design meets everyday life."
  },
  { 
    name: "M City", 
    city: "Mississauga, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/m-city-1.webp",
    desc: "Rogers Real Estate & Urban Capital masterplan. 15-acre, 8-tower community at Burnhamthorpe & Confederation. CORE Architects."
  },
  { 
    name: "34 Berry", 
    city: "Brooklyn, NY", 
    type: "Rental",
    image: "https://1valet.com/flagship/34-berry-1.webp",
    desc: "LCOR luxury rental in Williamsburg overlooking McCarren Park. 142 units with distinctive red-glass facade. Manhattan skyline views."
  },
  { 
    name: "Cielo Apartments", 
    city: "Washington, DC", 
    type: "Rental",
    image: "https://1valet.com/flagship/cielo-apartments-1.webp",
    desc: "LCOR's 426-unit luxury rental in NoMa. WDG Architecture. 11 stories, LEED Gold certified. 300 M Street NE."
  },
  { 
    name: "Morse Apartments", 
    city: "Washington, DC", 
    type: "Rental",
    image: "https://1valet.com/flagship/morse-apartments-1.webp",
    desc: "LCOR luxury in Union Market District. 279 units, 11 stories. Resort-style rooftop infinity pool with 360° city views."
  },
  { 
    name: "The Edison", 
    city: "Washington, DC", 
    type: "Rental",
    image: "https://1valet.com/flagship/edison-1.webp",
    desc: "LCOR at Union Market. 187 units, 12 stories, LEED Silver. 10-ft ceilings, Bosch appliances. 1240 4th Street NE."
  },
  { 
    name: "The Ryland", 
    city: "Philadelphia, PA", 
    type: "Rental",
    image: "https://1valet.com/flagship/the-ryland-1.webp",
    desc: "LCOR's 32-story luxury rental tower at 1 Dock Street in Society Hill. Designed by Perkins Eastman with panoramic Delaware River views."
  },
  { 
    name: "LNX Residences", 
    city: "Toronto, ON", 
    type: "Rental",
    image: "https://1valet.com/flagship/lnx-residences-1.webp",
    desc: "Lormel Homes rental at Dundas & Bloor West. Modern mid-rise in the Junction with premium finishes and transit access."
  },
  { 
    name: "DTK", 
    city: "Kitchener, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/dtk-1.webp",
    desc: "In8 Developments landmark at 60 Frederick Street. Bold mixed-use tower in downtown Kitchener's tech district."
  },
  { 
    name: "Eleven", 
    city: "Calgary, AB", 
    type: "Rental",
    image: "https://1valet.com/flagship/eleven-1.webp",
    desc: "Intergulf Development rental in Beltline Calgary. Modern mid-rise at 11th Ave & 11th Street SW with premium finishes."
  },
  { 
    name: "The Bridge", 
    city: "Toronto, ON", 
    type: "Rental",
    image: "https://1valet.com/flagship/the-bridge-1.webp",
    desc: "Jemm Properties luxury rental in Bridgeland. Rooftop lounge with panoramic city and river views."
  },
  { 
    name: "Lucent", 
    city: "Vancouver, BC", 
    type: "Condo",
    image: "https://1valet.com/flagship/lucent-1.webp",
    desc: "Landa Global's flagship condo at 200 Burrard Street, Vancouver. Smart building technology by 1VALET with 23,800 sqft of premium amenities."
  },
];

const Portfolio = () => (
  <div className="min-h-screen">
    {/* Hero Section with Cover Image */}
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={puneSkyline} alt="1VALET property portfolio showcasing luxury residential towers and smart building deployments across India" className="w-full h-full object-cover" />
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
            <Building2 size={14} /> Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1]">
            Flagship
            <span className="text-gradient block">properties.</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
            Explore premium properties powered by 1VALET's unified smart building platform across India's top real estate markets.
          </p>
        </motion.div>
      </div>
    </section>
    
    {/* Portfolio Content */}
    <section className="section-padding pt-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary bg-primary/10 rounded-full mb-4">
            Featured
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            Flagship Properties
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            26 featured developments powered by 1VALET
          </p>
        </div>

        {/* Featured Properties Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {properties.map((p, i) => {
            const slug = p.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={`/property/${slug}`}>
                  <GlassCard hover={false} className="overflow-hidden group cursor-pointer h-full block">
                    {/* Property Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={p.image} 
                        alt={p.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = indiaImg;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">
                        {p.name}
                      </h3>
                      
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                        {p.city} · {p.type}
                      </p>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* India Feature */}
        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <img src={indiaImg} alt="India Buildings" className="w-full h-64 lg:h-full object-cover" loading="lazy" />
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">India Expansion</span>
              <h3 className="text-2xl font-bold font-display mb-4">Now powering premium properties across India</h3>
              <p className="text-muted-foreground mb-6">
                From Mumbai to Bangalore, 1VALET is bringing enterprise-grade smart building technology to India's fastest-growing real estate markets.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary bg-primary/10 rounded-full mb-4">
            Powered by 1VALET
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-12">
            600+ buildings. One platform.
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={600} suffix="+" label="Buildings Live" />
          <AnimatedCounter end={100} suffix="+" label="Cities" />
          <AnimatedCounter end={100} suffix="k+" label="Units Connected" />
          <AnimatedCounter end={100} suffix="%" label="Cloud-Managed" />
        </div>
      </div>
    </section>
  </div>
);

export default Portfolio;
