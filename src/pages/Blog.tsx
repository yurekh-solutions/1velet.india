import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-background.png";
import blogProptech from "@/assets/blog-proptech-portfolio.png";
import blogPhiladelphia from "@/assets/blog-philadelphia-summit.jpg";
import blogTechConsolidation from "@/assets/blog-tech-consolidation.png";
import blogPortfolio from "@/assets/blog-portfolio-intelligence.png";
import blogCanniff from "@/assets/blog-canniff-building.jpg";
import blogSOC2 from "@/assets/blog-soc2-certification.png";
import blog12000Doors from "@/assets/blog-12000-doors.png";
import blogDemetrios from "@/assets/blog-demetrios-barnes.jpg";
import blogUnified from "@/assets/blog-unified-infrastructure.png";
import bangaloreTech from "@/assets/bangalore-tech.jpg";

const posts = [
  { category: "Industry Insights", date: "April 7, 2026", title: "Most PropTech Solves One Problem. 1VALET Solves Portfolio Complexity.", excerpt: "The operators winning in multifamily today aren't the ones with the most tools. They're the ones who consolidated.", image: blogProptech, slug: "proptech-portfolio" },
  { category: "Events", date: "April 2, 2026", title: "1VALET at the Philadelphia Multifamily Summit by Bisnow", excerpt: "Join us at Bisnow's Philadelphia Multifamily Summit to learn about unified smart building platforms.", image: blogPhiladelphia, slug: "philadelphia-summit" },
  { category: "Industry Insights", date: "April 1, 2026", title: "The Multifamily Industry Has Adopted Technology. It Hasn't Consolidated It.", excerpt: "Fragmented tech stacks are costing operators millions. Here's how consolidation changes the game.", image: blogTechConsolidation, slug: "tech-consolidation" },
  { category: "Industry Insights", date: "March 30, 2026", title: "Why Portfolio Intelligence Is the Next Competitive Advantage", excerpt: "Data-driven building management is no longer optional — it's the new standard for competitive multifamily.", image: blogPortfolio, slug: "portfolio-intelligence" },
  { category: "Client Highlight", date: "March 25, 2026", title: "Canniff Mill Residences: When a Technology Partner Has to Step Up", excerpt: "How 1VALET delivered a full smart building deployment under tight timelines for this premium property.", image: blogCanniff, slug: "canniff-mill" },
  { category: "Press Release", date: "March 2, 2026", title: "1VALET Achieves SOC 2 Type I Certification", excerpt: "Demonstrating our commitment to enterprise-grade security and data protection standards.", image: blogSOC2, slug: "soc2-certification" },
  { category: "Press Release", date: "February 23, 2026", title: "1VALET Rolling Out 12,000 Door Portfolio", excerpt: "One of the largest smart building deployments in North America.", image: blog12000Doors, slug: "12000-doors" },
  { category: "Press Release", date: "February 18, 2026", title: "SmartRent Co-Founder Joins 1VALET as CEO", excerpt: "Demetrios Barnes brings deep proptech and capital markets experience to accelerate growth.", image: blogDemetrios, slug: "demetrios-barnes-ceo" },
  { category: "India Launch", date: "January 15, 2026", title: "1VALET Officially Launches in India's Premium Real Estate Market", excerpt: "Bringing world-class smart building technology to Mumbai, Delhi NCR, Bangalore and beyond.", image: blogUnified, slug: "india-launch" },
];

const Blog = () => (
  <div className="min-h-screen">
    {/* Hero Section with Cover Image */}
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={bangaloreTech} alt="1VALET blog featuring industry insights, product launches, proptech trends and smart building innovations" className="w-full h-full object-cover" />
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
            <ChevronRight size={14} /> Blog
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1]">
            Blog &
            <span className="text-gradient block">insights.</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
            The latest from 1VALET — product launches, industry analysis, and the future of connected living.
          </p>
        </motion.div>
      </div>
    </section>
    
    {/* Blog Content */}
    <section className="section-padding pt-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Blog"
          title="Blog &"
          highlight="insights."
          description="The latest from 1VALET — product launches, industry analysis, and the future of connected living."
        />

        {/* Featured */}
        <GlassCard className="mb-12 p-0 overflow-hidden" hover={false}>
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-auto">
              <img src={posts[0].image} alt={posts[0].title} className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{posts[0].category}</span>
              <span className="text-xs text-muted-foreground ml-3">{posts[0].date}</span>
              <h3 className="text-2xl font-bold font-display mt-3 mb-3">{posts[0].title}</h3>
              <p className="text-muted-foreground mb-4">{posts[0].excerpt}</p>
              <Link to={`/blog/${posts[0].slug}`} className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                Read More <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </GlassCard>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(1).map((post, i) => (
            <GlassCard key={i} className="p-0 overflow-hidden" delay={i * 0.05}>
              <div className="relative h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</span>
                <span className="text-xs text-muted-foreground ml-3">{post.date}</span>
                <h3 className="font-semibold font-display mt-3 mb-2 leading-snug">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all">
                  Read More <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
    </div>
  </div>
);

export default Blog;
