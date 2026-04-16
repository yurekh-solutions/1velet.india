import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, BarChart3, Target, Cpu, Globe } from "lucide-react";

const indiaPages = [
  { path: "/india", label: "Overview", icon: Globe },
  { path: "/india/analytics", label: "Analytics", icon: BarChart3 },
  { path: "/india/segments", label: "Segments", icon: Target },
  { path: "/india/technology", label: "Technology", icon: Cpu },
];

const IndiaNavigation = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  const getPageIndex = (path: string) => {
    return indiaPages.findIndex((page) => page.path === path);
  };

  const currentIndex = getPageIndex(currentPage);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-16 z-40 bg-background/90 backdrop-blur-xl border-b border-border/50 mt-1 mb-2 sm:mb-4 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Progress Steps - Hide scrollbar, wrap on mobile */}
          <div className="flex-1 flex items-center gap-1 sm:gap-2 lg:gap-3 overflow-x-auto scrollbar-hide india-nav-scroll">
            {indiaPages.map((page, idx) => {
              const Icon = page.icon;
              const isActive = currentPage === page.path;
              const isCompleted = idx < currentIndex;
              const isLast = idx === indiaPages.length - 1;

              return (
                <div key={page.path} className="flex items-center flex-shrink-0">
                  {/* Step */}
                  <Link
                    to={page.path}
                    className={`group flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : isCompleted
                        ? "bg-primary/10 text-primary hover:bg-primary/20"
                        : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <Icon size={14} className="shrink-0" />
                    <span className="text-[10px] xs:text-xs sm:text-sm font-medium whitespace-nowrap">
                      {page.label}
                    </span>
                  </Link>

                  {/* Connector - Hidden on mobile */}
                  {!isLast && (
                    <ChevronRight
                      size={12}
                      className={`shrink-0 mx-0.5 sm:mx-1 lg:mx-2 hidden sm:block ${
                        isCompleted ? "text-primary" : "text-muted-foreground/30"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Progress Indicator */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
            <div className="text-xs text-muted-foreground whitespace-nowrap">
              {currentIndex + 1}/{indiaPages.length}
            </div>
            <div className="w-16 lg:w-24 h-1.5 bg-secondary rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / indiaPages.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IndiaNavigation;
