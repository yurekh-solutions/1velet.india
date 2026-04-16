import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, Check } from "lucide-react";
import logo from "@/assets/1valet-logo.svg";
import { applyTranslation, resetToEnglish, getLanguagePreference } from "@/lib/translationUtils";

const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "fr", name: "French", nativeName: "Français" },
  { code: "es", name: "Spanish", nativeName: "Español" },
  { code: "ar", name: "Arabic", nativeName: "العربية" },
  { code: "hi", name: "Hindi", nativeName: "हिंदी" },
];

const navLinks = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Smart Intercom", href: "/products/smart-intercom" },
      { label: "Management Portal", href: "/products/management-portal" },
      { label: "Resident App", href: "/products/resident-app" },
    ],
  },
  { label: "Integrations", href: "/integrations" },
  { label: "Solutions", href: "/solutions" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Company", href: "/about" },
      { label: "Careers", href: "/about#careers" },
      { label: "Our Clients", href: "/portfolio" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Support", href: "/support" },
];

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const location = useLocation();

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Sync with Google Translate
  useEffect(() => {
    const savedLang = getLanguagePreference() || "en";
    setCurrentLang(savedLang);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.language-selector')) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    setLangDropdownOpen(false);
    
    if (langCode === "en") {
      resetToEnglish();
    } else {
      applyTranslation(langCode);
    }
  };

  const getCurrentLang = () => currentLang;

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center z-50" data-testid="link-home">
            <img alt="1VALET" className="h-7" width="120" height="28" src={logo} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors rounded-lg flex items-center gap-1 ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3 h-3" />}
                </Link>
                <AnimatePresence>
                  {link.children && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-1 glass-card rounded-xl p-2 min-w-[220px]"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative language-selector">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-lg hover:bg-white/5"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">{getCurrentLang().toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-2 glass-card rounded-xl p-2 min-w-[180px] shadow-lg"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <span className="font-medium">{lang.code.toUpperCase()}</span>
                          <span>{lang.nativeName}</span>
                        </span>
                        {getCurrentLang() === lang.code && (
                          <Check className="w-4 h-4 text-primary" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link to="/support" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              LOGIN
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:brightness-110 transition-all glow-green"
            >
              FREE CONSULTATION
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-card border-t border-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.href}
                    className="block px-4 py-3 text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-8 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                {/* Mobile Language Selector */}
                <div className="px-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Language</p>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${
                          getCurrentLang() === lang.code
                            ? 'bg-primary/20 text-primary'
                            : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                        }`}
                      >
                        <span>{lang.nativeName}</span>
                        {getCurrentLang() === lang.code && (
                          <Check className="w-3 h-3" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  className="block text-center px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  FREE CONSULTATION
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
