import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

const ContactButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    {/* Phone Call Button */}
    <motion.a
      href="tel:+17021341409"
      className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      style={{ background: "#22c55e" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Call us"
    >
      <Phone className="w-7 h-7" style={{ color: "#fff" }} />
    </motion.a>

    {/* WhatsApp Button */}
    <motion.a
      href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%201VALET%20smart%20building%20solutions%20for%20India"
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-pulse-glow"
      style={{ background: "#25D366" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" style={{ color: "#fff" }} />
    </motion.a>
  </div>
);

export default ContactButtons;
