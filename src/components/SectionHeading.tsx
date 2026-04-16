import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ badge, title, highlight, description, center = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`mb-6 sm:mb-10 ${center ? "text-center" : ""}`}
  >
    {badge && (
      <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary/10 rounded-full mb-3">
        {badge}
      </span>
    )}
    <h2 className={`text-2xl sm:text-3xl lg:text-5xl font-bold font-display leading-tight ${
      center ? 'text-center' : ''
    }`}>
      {title}{" "}
      {highlight && (
        <span className="text-gradient">{highlight}</span>
      )}
    </h2>
    {description && (
      <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed">
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
