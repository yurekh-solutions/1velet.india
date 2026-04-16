import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactButtons from "@/components/WhatsAppButton";
import GoogleTranslateWidget from "@/components/GoogleTranslateWidget";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Integrations from "./pages/Integrations";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import PropertyDetail from "./pages/PropertyDetail";
import IndiaMarket from "./pages/IndiaMarket";
import IndiaAnalytics from "./pages/IndiaAnalytics";
import IndiaSegments from "./pages/IndiaSegments";
import IndiaTechnology from "./pages/IndiaTechnology";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GoogleTranslateWidget />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/property/:slug" element={<PropertyDetail />} />
          <Route path="/india" element={<IndiaMarket />} />
          <Route path="/india/analytics" element={<IndiaAnalytics />} />
          <Route path="/india/segments" element={<IndiaSegments />} />
          <Route path="/india/technology" element={<IndiaTechnology />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ContactButtons />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
