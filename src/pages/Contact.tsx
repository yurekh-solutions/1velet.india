import { useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import SectionHeading from "@/components/SectionHeading";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import hyderabadSkyline from "@/assets/hyderabad-skyline.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", units: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'm ${form.name} from ${form.company}. ${form.message}`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Cover Image */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={hyderabadSkyline} alt="Contact 1VALET India team for smart building platform demos, partnerships and consultations" className="w-full h-full object-cover" />
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
              <Send size={14} /> Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1]">
              Ready to transform
              <span className="text-gradient block">your buildings?</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
              Schedule a personalized demo. See how 1VALET can elevate your property with unified smart building technology.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="section-padding pt-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="Get in Touch"
            title="Ready to transform"
            highlight="your buildings?"
            description="Schedule a personalized demo. See how 1VALET can elevate your property."
          />

          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <GlassCard hover={false} className="p-8">
                <h3 className="text-xl font-bold font-display mb-6">Request a Free Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Full Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Phone</label>
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-1.5 block">Company</label>
                      <input
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Number of Units</label>
                    <select
                      value={form.units}
                      onChange={(e) => setForm({ ...form, units: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select range</option>
                      <option value="1-50">1 – 50 units</option>
                      <option value="50-200">50 – 200 units</option>
                      <option value="200-500">200 – 500 units</option>
                      <option value="500+">500+ units</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 bg-primary text-primary-foreground font-bold rounded-xl flex items-center justify-center gap-2 glow-green"
                  >
                    <Send className="w-4 h-4" /> Submit & Connect on WhatsApp
                  </motion.button>
                </form>
              </GlassCard>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <GlassCard hover={false}>
                <h4 className="font-semibold font-display mb-4">India Office</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary mt-1" />
                    <span className="text-sm text-muted-foreground">Mumbai, Maharashtra, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-foreground">+91 98765 43210</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href="mailto:india@1valet.com" className="text-sm text-muted-foreground hover:text-foreground">india@1valet.com</a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard hover={false}>
                <h4 className="font-semibold font-display mb-4">Global HQ</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary mt-1" />
                    <span className="text-sm text-muted-foreground">Ottawa, Ontario, Canada</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href="tel:+18339931212" className="text-sm text-muted-foreground hover:text-foreground">1-833-993-1212</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <a href="mailto:support@1valet.com" className="text-sm text-muted-foreground hover:text-foreground">support@1valet.com</a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard hover={false}>
                <h4 className="font-semibold font-display mb-2">Quick Connect</h4>
                <p className="text-sm text-muted-foreground mb-4">Prefer WhatsApp? Chat with us directly.</p>
                <a
                  href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%201VALET%20for%20my%20property%20in%20India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm"
                  style={{ background: "#25D366", color: "#fff" }}
                >
                  Chat on WhatsApp
                </a>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
