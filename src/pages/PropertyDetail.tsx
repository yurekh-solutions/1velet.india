import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Building2, Check, ChevronRight } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import indiaImg from "@/assets/india-building.jpg";

// Property data (same as Portfolio page)
const properties = [
  { 
    name: "The Well", 
    city: "Toronto, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/the-well-1.webp",
    desc: "King West premier luxury by Tridel. 1.5M sqft mixed-use masterplan on Wellington & Front.",
    developer: "Tridel",
    units: "1,200+",
    yearCompleted: "2024",
    features: ["Smart Intercom", "CCTV Integration", "Yardi PMS", "Digital Keys", "Package Scanning", "Amenity Booking"]
  },
  { 
    name: "The Britt", 
    city: "Toronto, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/the-britt-1.webp",
    desc: "Iconic tower by Lanterra at 955 Bay Street. Bold architecture downtown.",
    developer: "Lanterra Developments",
    units: "850+",
    yearCompleted: "2023",
    features: ["Smart Building", "Access Control", "Virtual Concierge", "Digital Keys"]
  },
  { 
    name: "Leaside Common", 
    city: "Toronto, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/leaside-common-1.webp",
    desc: "Gairloch & Harlo Capital at Bayview & Eglinton. Sculpted mid-rise by BDP Quadrangle.",
    developer: "Gairloch & Harlo Capital",
    units: "320+",
    yearCompleted: "2024",
    features: ["Smart Intercom", "Parking Management", "Digital Keys", "CCTV"]
  },
  { 
    name: "Junction Point", 
    city: "Toronto, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/junction-point-1.webp",
    desc: "Gairloch Developments in The Junction. architectsAlliance design by Peter Clewes.",
    developer: "Gairloch Developments",
    units: "450+",
    yearCompleted: "2023",
    features: ["Smart Lobby", "Package Room", "Access Control", "Resident App"]
  },
  { 
    name: "625 Sheppard", 
    city: "Toronto, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/625-sheppard-1.webp",
    desc: "Canderel & Haven at Bayview Village. Modern tower in North York.",
    developer: "Canderel & Haven",
    units: "600+",
    yearCompleted: "2024",
    features: ["Smart Intercom", "Amenity Booking", "Digital Keys", "CCTV Integration"]
  },
  { 
    name: "Galleria on the Park", 
    city: "Toronto, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/galleria-on-park-1.webp",
    desc: "Master-planned by Almadev. 8-acre park, 2,800+ suites at Dupont & Dufferin.",
    developer: "Almadev",
    units: "2,800+",
    yearCompleted: "2025",
    features: ["Smart Community", "Multi-Building", "Amenity Booking", "CCTV", "Digital Keys"]
  },
  { 
    name: "Residences at Bianca", 
    city: "Toronto, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/residences-bianca-1.webp",
    desc: "Tridel boutique mid-rise in the Annex. Teeple Architects. Up to 1,600 sqft.",
    developer: "Tridel",
    units: "180+",
    yearCompleted: "2023",
    features: ["Smart Intercom", "Digital Keys", "Package Scanning", "Concierge"]
  },
  { 
    name: "ERA in Bridgeland", 
    city: "Calgary, AB", 
    type: "Condo",
    image: "https://1valet.com/flagship/era-bridgeland-1.webp",
    desc: "Minto Communities in Bridgeland. Urban rooftop living with river valley views.",
    developer: "Minto Communities",
    units: "400+",
    yearCompleted: "2024",
    features: ["Smart Building", "Rooftop Access", "Digital Keys", "Amenity Booking"]
  },
  { 
    name: "1818 Alberni", 
    city: "Vancouver, BC", 
    type: "Condo",
    image: "https://1valet.com/flagship/1818-alberni-1.webp",
    desc: "Luxury tower by Landa Global on Alberni Street. Premium West End.",
    developer: "Landa Global Properties",
    units: "280+",
    yearCompleted: "2023",
    features: ["Smart Suite", "Concierge", "Parking Management", "Digital Keys"]
  },
  { 
    name: "Donovan", 
    city: "Vancouver, BC", 
    type: "Condo",
    image: "https://1valet.com/flagship/donovan-1.webp",
    desc: "Cressey at 1055 Richards Street. Refined Yaletown living.",
    developer: "Cressey Development Group",
    units: "320+",
    yearCompleted: "2024",
    features: ["Smart Intercom", "Access Control", "Package Room", "Digital Keys"]
  },
  { 
    name: "Habitat", 
    city: "Vancouver, BC", 
    type: "Condo",
    image: "https://1valet.com/flagship/habitat-1.webp",
    desc: "Porte & Fabric Living. Boutique 4-storey in Mount Pleasant. West Coast design.",
    developer: "Porte & Fabric Living",
    units: "45+",
    yearCompleted: "2023",
    features: ["Smart Intercom", "Digital Keys", "Boutique Building"]
  },
  { 
    name: "Mobilio Condos", 
    city: "Vaughan, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/mobilio-condos-1.webp",
    desc: "Menkes & QuadReal at Vaughan Metro Centre. Steps from the subway.",
    developer: "Menkes & QuadReal",
    units: "1,500+",
    yearCompleted: "2025",
    features: ["Smart Building", "Transit Access", "Multi-Tower", "Digital Keys", "CCTV"]
  },
  { 
    name: "Canopy Towers", 
    city: "Mississauga, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/canopy-towers-1.webp",
    desc: "Liberty Development in downtown Mississauga. Park views, modern tower.",
    developer: "Liberty Development Corporation",
    units: "900+",
    yearCompleted: "2024",
    features: ["Smart Intercom", "Park Views", "Digital Keys", "Amenity Booking"]
  },
  { 
    name: "Kingsway by the River", 
    city: "Etobicoke, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/kingsway-river-1.webp",
    desc: "Urban Capital & Northam. Above the Humber River in the Kingsway.",
    developer: "Urban Capital & Northam",
    units: "350+",
    yearCompleted: "2024",
    features: ["Smart Building", "River Views", "Digital Keys", "Concierge"]
  },
  { 
    name: "Evermore at West Village", 
    city: "Etobicoke, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/evermore-west-village-1.webp",
    desc: "Tridel in Etobicoke's West Village. Premium design meets everyday life.",
    developer: "Tridel",
    units: "400+",
    yearCompleted: "2023",
    features: ["Smart Intercom", "Package Scanning", "Digital Keys", "CCTV"]
  },
  { 
    name: "M City", 
    city: "Mississauga, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/m-city-1.webp",
    desc: "Rogers Real Estate & Urban Capital masterplan. 15-acre, 8-tower community at Burnhamthorpe & Confederation. CORE Architects.",
    developer: "Rogers Real Estate & Urban Capital",
    units: "5,000+",
    yearCompleted: "2025",
    features: ["Smart Community", "Multi-Building", "8 Towers", "Digital Keys", "Amenity Booking", "CCTV"]
  },
  { 
    name: "34 Berry", 
    city: "Brooklyn, NY", 
    type: "Rental",
    image: "https://1valet.com/flagship/34-berry-1.webp",
    desc: "LCOR luxury rental in Williamsburg overlooking McCarren Park. 142 units with distinctive red-glass facade. Manhattan skyline views.",
    developer: "LCOR",
    units: "142",
    yearCompleted: "2022",
    features: ["Smart Intercom", "Package Room", "Access Control", "Manhattan Views", "Digital Keys"]
  },
  { 
    name: "Cielo Apartments", 
    city: "Washington, DC", 
    type: "Rental",
    image: "https://1valet.com/flagship/cielo-apartments-1.webp",
    desc: "LCOR's 426-unit luxury rental in NoMa. WDG Architecture. 11 stories, LEED Gold certified. 300 M Street NE.",
    developer: "LCOR",
    units: "426",
    yearCompleted: "2023",
    features: ["Smart Building", "LEED Gold", "Digital Keys", "CCTV", "Access Control"]
  },
  { 
    name: "Morse Apartments", 
    city: "Washington, DC", 
    type: "Rental",
    image: "https://1valet.com/flagship/morse-apartments-1.webp",
    desc: "LCOR luxury in Union Market District. 279 units, 11 stories. Resort-style rooftop infinity pool with 360° city views.",
    developer: "LCOR",
    units: "279",
    yearCompleted: "2024",
    features: ["Smart Intercom", "Rooftop Pool", "360° Views", "Digital Keys", "Package Room"]
  },
  { 
    name: "The Edison", 
    city: "Washington, DC", 
    type: "Rental",
    image: "https://1valet.com/flagship/edison-1.webp",
    desc: "LCOR at Union Market. 187 units, 12 stories, LEED Silver. 10-ft ceilings, Bosch appliances. 1240 4th Street NE.",
    developer: "LCOR",
    units: "187",
    yearCompleted: "2023",
    features: ["Smart Building", "LEED Silver", "Digital Keys", "Premium Finishes"]
  },
  { 
    name: "The Ryland", 
    city: "Philadelphia, PA", 
    type: "Rental",
    image: "https://1valet.com/flagship/the-ryland-1.webp",
    desc: "LCOR's 32-story luxury rental tower at 1 Dock Street in Society Hill. Designed by Perkins Eastman with panoramic Delaware River views.",
    developer: "LCOR",
    units: "350+",
    yearCompleted: "2022",
    features: ["Smart Intercom", "River Views", "32 Stories", "Digital Keys", "CCTV", "Concierge"]
  },
  { 
    name: "LNX Residences", 
    city: "Toronto, ON", 
    type: "Rental",
    image: "https://1valet.com/flagship/lnx-residences-1.webp",
    desc: "Lormel Homes rental at Dundas & Bloor West. Modern mid-rise in the Junction with premium finishes and transit access.",
    developer: "Lormel Homes",
    units: "200+",
    yearCompleted: "2024",
    features: ["Smart Intercom", "Transit Access", "Digital Keys", "Premium Finishes"]
  },
  { 
    name: "DTK", 
    city: "Kitchener, ON", 
    type: "Condo",
    image: "https://1valet.com/flagship/dtk-1.webp",
    desc: "In8 Developments landmark at 60 Frederick Street. Bold mixed-use tower in downtown Kitchener's tech district.",
    developer: "In8 Developments",
    units: "500+",
    yearCompleted: "2024",
    features: ["Smart Building", "Mixed-Use", "Tech District", "Digital Keys", "CCTV"]
  },
  { 
    name: "Eleven", 
    city: "Calgary, AB", 
    type: "Rental",
    image: "https://1valet.com/flagship/eleven-1.webp",
    desc: "Intergulf Development rental in Beltline Calgary. Modern mid-rise at 11th Ave & 11th Street SW with premium finishes.",
    developer: "Intergulf Development Group",
    units: "180+",
    yearCompleted: "2023",
    features: ["Smart Intercom", "Beltline Location", "Digital Keys", "Premium Finishes"]
  },
  { 
    name: "The Bridge", 
    city: "Toronto, ON", 
    type: "Rental",
    image: "https://1valet.com/flagship/the-bridge-1.webp",
    desc: "Jemm Properties luxury rental in Bridgeland. Rooftop lounge with panoramic city and river views.",
    developer: "Jemm Properties",
    units: "250+",
    yearCompleted: "2024",
    features: ["Smart Building", "Rooftop Lounge", "River Views", "Digital Keys", "City Views"]
  },
  { 
    name: "Lucent", 
    city: "Vancouver, BC", 
    type: "Condo",
    image: "https://1valet.com/flagship/lucent-1.webp",
    desc: "Landa Global's flagship condo at 200 Burrard Street, Vancouver. Smart building technology by 1VALET with 23,800 sqft of premium amenities.",
    developer: "Landa Global Properties",
    units: "600+",
    yearCompleted: "2023",
    features: ["Smart Building", "23,800 sqft Amenities", "Flagship", "Digital Keys", "Virtual Concierge", "CCTV"]
  },
];

const PropertyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find the property by slug (convert name to slug format)
  const property = properties.find(p => 
    p.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === slug
  );

  if (!property) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
          <p className="text-muted-foreground mb-8">The property you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/portfolio')}
            className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={property.image} 
          alt={property.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = indiaImg;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/portfolio')}
          className="absolute top-28 left-4 sm:left-8 flex items-center gap-2 px-4 py-2 glass-card rounded-xl hover:bg-white/10 transition-all z-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Portfolio</span>
        </button>

        {/* Property Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full mb-4">
                {property.type}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-4">
                {property.name}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{property.city}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold font-display mb-4">About This Property</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {property.desc}
                  </p>
                </GlassCard>

                <GlassCard className="p-8">
                  <h2 className="text-2xl font-bold font-display mb-6">1VALET Features</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {property.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="sticky top-28"
              >
                <GlassCard className="p-6 mb-6">
                  <h3 className="text-xl font-bold font-display mb-6">Property Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Developer</p>
                        <p className="font-semibold">{property.developer}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                        <p className="font-semibold">{property.city}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-primary">{property.type[0]}</span>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Property Type</p>
                        <p className="font-semibold">{property.type}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-primary">#</span>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Total Units</p>
                        <p className="font-semibold">{property.units}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <span className="text-xs font-bold text-primary">📅</span>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Year Completed</p>
                        <p className="font-semibold">{property.yearCompleted}</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6 text-center">
                  <h3 className="text-lg font-bold font-display mb-2">Interested in This Property?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn how 1VALET can transform your building.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:brightness-110 transition-all glow-green"
                  >
                    Schedule a Demo <ChevronRight className="w-4 h-4" />
                  </Link>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetail;
