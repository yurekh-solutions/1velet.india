import { Link } from "react-router-dom";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import { Search, Users, Building, Mail, Phone, MessageCircle } from "lucide-react";
import chennaiSkyline from "@/assets/chennai-skyline.jpg";

const Support = () => (
  <div className="min-h-screen">
    {/* Hero Section with Cover Image */}
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={chennaiSkyline} alt="1VALET customer support and help center for smart building platform users and operators" className="w-full h-full object-cover" />
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
            <MessageCircle size={14} /> Support
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1]">
            How can we
            <span className="text-gradient block">help you?</span>
          </h1>
          <p className="mt-6 text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
            Find answers, get support, and access the resources you need for your smart building platform.
          </p>
        </motion.div>
      </div>
    </section>
    
    {/* Support Content */}
    <section className="section-padding pt-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="Support"
          title="How can we"
          highlight="help you?"
          description="Find answers, get support, and access the resources you need."
        />

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="glass-card rounded-2xl p-2 flex items-center gap-3">
            <Search className="w-5 h-5 text-muted-foreground ml-4" />
            <input
              type="text"
              placeholder="Search for help articles..."
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground py-3"
            />
            <button className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-xl">
              Search
            </button>
          </div>
        </div>

        {/* Roles */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          <GlassCard>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold font-display mb-2">Residents</h3>
            <p className="text-sm text-muted-foreground mb-4">Help with the mobile app, smart devices, access, and visitor passes.</p>
            <a href="#" className="text-primary font-semibold text-sm">Visit Help Center →</a>
          </GlassCard>
          <GlassCard delay={0.1}>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Building className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold font-display mb-2">Property Managers</h3>
            <p className="text-sm text-muted-foreground mb-4">Help with the management portal, building setup, and resident management.</p>
            <a href="#" className="text-primary font-semibold text-sm">Visit Help Center →</a>
          </GlassCard>
        </div>

        {/* Contact Channels */}
        <SectionHeading title="Still need" highlight="help?" description="Reach out through any of these channels." />
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <GlassCard className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-semibold font-display mb-1">Email Support</h4>
            <p className="text-sm text-muted-foreground mb-3">Send us a message and we'll get back to you.</p>
            <a href="mailto:support@1valet.com" className="text-primary text-sm font-medium">support@1valet.com</a>
          </GlassCard>
          <GlassCard className="text-center" delay={0.1}>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-semibold font-display mb-1">Call Support</h4>
            <p className="text-sm text-muted-foreground mb-3">Speak directly with our team.</p>
            <a href="tel:+18339931212" className="text-primary text-sm font-medium">1-833-993-1212</a>
          </GlassCard>
          <GlassCard className="text-center" delay={0.2}>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-semibold font-display mb-1">WhatsApp (India)</h4>
            <p className="text-sm text-muted-foreground mb-3">Chat with our India support team.</p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm font-medium"
            >
              +91 98765 43210
            </a>
          </GlassCard>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex px-10 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:brightness-110 transition-all glow-green text-sm uppercase tracking-wider"
          >
            Sales Inquiries — Free Consultation
          </Link>
        </div>
      </div>
    </section>
    </div>
  </div>
);

export default Support;
