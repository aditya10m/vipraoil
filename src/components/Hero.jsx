import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DashboardCard from "./DashboardCard";

const Hero = () => {
  return (
    <section className="relative min-h-screen lg:h-screen overflow-hidden gradient-bg flex items-center py-28 lg:py-0">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-24 gap-10 lg:gap-8">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <p className="uppercase tracking-[4px] sm:tracking-[8px] text-xs text-whiteLuxury mb-4 sm:mb-6">
            Sustainable Luxury Energy
          </p>

          <h1 className="luxury-title text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] sm:leading-none">
            THE LUXURY OF PURE BIO-ENERGY
          </h1>

          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-200 max-w-xl">
            From Kitchen Wastes to Fuel Tanks
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">

            {/* EXPLORE */}
            <Link
              to="/mission"
              className="bg-emeraldLuxury text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold transition hover:bg-emerald-600"
            >
              Explore Mission
            </Link>

            {/* STORY */}
            <Link
              to="/story"
              className="glass text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold transition hover:bg-white/10"
            >
              Watch Story
            </Link>

          </div>
        </motion.div>

        <DashboardCard />
      </div>
    </section>
  );
};

export default Hero;