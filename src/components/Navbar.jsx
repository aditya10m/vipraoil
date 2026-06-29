import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-[1700px] mx-auto h-[90px] px-6 md:px-8 lg:px-12 flex items-center justify-between gap-4">
          
          {/* BRAND IDENTITY LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 select-none group"
          >
            <img
              src="/images/logo.png"
              alt="VIPRAOIL"
              className="w-[52px] h-[52px] object-contain transition-transform duration-500 group-hover:rotate-[10deg]"
            />
            <div className="leading-none">
              <h1 className="text-[28px] md:text-[34px] font-black tracking-[4px] leading-none text-white">
                VIPRAOIL
              </h1>
              <p className="hidden md:block text-[9px] tracking-[2.5px] text-zinc-400 uppercase mt-1 font-medium">
                From Kitchen Wastes To Fuel Tanks
              </p>
            </div>
          </Link>

          {/* PRIMARY NAVIGATION MATRIX */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] uppercase tracking-[3px] font-semibold text-zinc-300">
            <Link
              to="/"
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/mission"
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              Mission
            </Link>
            <a
              href="/#services"
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="/#impact"
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              Impact
            </a>
            <a
              href="/#initiatives"
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              Initiatives
            </a>
            <Link
              to="/viprabot"
              className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors duration-300 tracking-[3px]"
            >
              AI Assistant
            </Link>
            <a
              href="/#contact"
              className="hover:text-emerald-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* ACTION CALL ACTIONS */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="/#impact"
              className="border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 px-5 py-2.5 rounded-full uppercase tracking-[2px] text-[11px] font-semibold"
            >
              Calculate Offset
            </a>
            <a
              href="/#contact"
              className="bg-white hover:bg-emerald-500 text-black hover:text-white transition-all duration-300 px-5 py-2.5 rounded-full uppercase tracking-[2px] text-[11px] font-semibold"
            >
              Join Us
            </a>
          </div>

          {/* INTERACTIVE MOBILE ACTION */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl text-white hover:text-emerald-400 transition-colors p-2"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </motion.nav>

      {/* Dim Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile sliding drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
            className="fixed top-0 right-0 h-screen w-full max-w-[320px] bg-black/95 backdrop-blur-2xl border-l border-white/10 z-50 p-8 flex flex-col justify-between lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {/* Header inside drawer */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <span className="text-white font-black tracking-[3px] text-lg">MENU</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl text-zinc-300 hover:text-emerald-400 p-1"
                >
                  <FiX />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-6 text-[13px] uppercase tracking-[3px] font-semibold text-zinc-300">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/mission"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Mission
                </Link>
                <a
                  href="/#services"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Services
                </a>
                <a
                  href="/#impact"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Impact
                </a>
                <a
                  href="/#initiatives"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Initiatives
                </a>
                <Link
                  to="/viprabot"
                  onClick={() => setIsOpen(false)}
                  className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors duration-300 tracking-[3px]"
                >
                  AI Assistant
                </Link>
                <a
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-emerald-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Action buttons inside drawer */}
            <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
              <a
                href="/#impact"
                onClick={() => setIsOpen(false)}
                className="border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 px-5 py-3 rounded-full text-center uppercase tracking-[2px] text-[11px] font-semibold"
              >
                Calculate Offset
              </a>
              <a
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="bg-emerald-600 text-white transition-all duration-300 px-5 py-3 rounded-full text-center uppercase tracking-[2px] text-[11px] font-semibold"
              >
                Join Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;