import Navbar from "../components/Navbar";

const Mission = () => {
  return (
    <div className="bg-[#f6f6f4] overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 sm:pt-40 sm:pb-24 px-6 md:px-12 lg:px-24 overflow-hidden">

        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/Rahul.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* GRID */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full max-w-[1700px] mx-auto pt-16 lg:pt-0">

          {/* LEFT */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">

            <p className="uppercase tracking-[4px] sm:tracking-[6px] text-emerald-400 text-xs sm:text-sm md:text-base mb-6 sm:mb-8">
              VIPRAOIL MISSION PROTOCOL
            </p>

            <h1 className="
              text-3xl
              xs:text-4xl
              sm:text-6xl
              md:text-7xl
              lg:text-[88px]
              xl:text-[110px]
              font-black
              leading-[0.92]
              tracking-[-2px]
              sm:tracking-[-4px]
              text-white
              max-w-5xl
            ">
              CLEAN
              <br />
              BIO-
              <br />
              ENERGY
            </h1>

            <div className="w-24 sm:w-32 h-2 bg-emerald-500 rounded-full mt-6 sm:mt-10 mb-6 sm:mb-10"></div>

            <p className="
              text-base
              sm:text-lg
              md:text-xl
              text-gray-200
              leading-relaxed
              max-w-2xl
            ">
              VIPRAOIL transforms used kitchen oil into premium
              sustainable biodiesel ecosystems for cleaner logistics,
              smarter recycling infrastructure, and zero-waste
              fuel innovation.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 sm:mt-14 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">

              <a
                href="#mission-details"
                className="
                  bg-emerald-600
                  hover:bg-emerald-700
                  transition
                  text-white
                  px-8
                  sm:px-10
                  py-4
                  sm:py-5
                  rounded-full
                  uppercase
                  tracking-[2px]
                  sm:tracking-[3px]
                  text-xs
                  sm:text-sm
                "
              >
                Explore Mission
              </a>

              <a
                href="#contact-section"
                className="
                  border
                  border-white
                  hover:bg-white
                  hover:text-black
                  transition
                  text-white
                  px-8
                  sm:px-10
                  py-4
                  sm:py-5
                  rounded-full
                  uppercase
                  tracking-[2px]
                  sm:tracking-[3px]
                  text-xs
                  sm:text-sm
                "
              >
                Join Us
              </a>

            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative w-full max-w-[500px] mx-auto lg:max-w-none">

            <div className="
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              rounded-[30px] sm:rounded-[40px]
              p-6
              sm:p-8
              lg:p-10
              shadow-2xl
            ">

              <div className="flex justify-between items-center mb-6 sm:mb-8">

                <p className="uppercase tracking-[3px] sm:tracking-[4px] text-[10px] sm:text-xs text-white/70">
                  Telemetry Node // 04
                </p>

                <div className="
                  px-4
                  sm:px-5
                  py-1.5
                  sm:py-2
                  rounded-full
                  bg-emerald-500/20
                  border
                  border-emerald-400/30
                  text-emerald-300
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[1px]
                  sm:tracking-[2px]
                ">
                  Active System
                </div>
              </div>

              {/* IMAGE */}
              <div className="rounded-[20px] sm:rounded-[30px] overflow-hidden mb-6 sm:mb-8">

                <img
                  src="/images/refinery.jpg"
                  className="w-full h-[220px] sm:h-[350px] object-cover"
                />
              </div>

              {/* STATS */}
              <div className="space-y-8">

                <div>
                  <div className="flex justify-between mb-3 text-white uppercase text-xs tracking-[3px]">
                    <span>Fuel Purity</span>
                    <span>99.8%</span>
                  </div>

                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[99%] bg-emerald-500 rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3 text-white uppercase text-xs tracking-[3px]">
                    <span>Carbon Reduction</span>
                    <span>84%</span>
                  </div>

                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[84%] bg-yellow-500 rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3 text-white uppercase text-xs tracking-[3px]">
                    <span>Conversion Efficiency</span>
                    <span>92%</span>
                  </div>

                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[92%] bg-white rounded-full"></div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* DETAILS */}
      <section
        id="mission-details"
        className="py-20 sm:py-32 px-6 md:px-12 lg:px-24"
      >

        <div className="max-w-[1700px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[4px] sm:tracking-[5px] text-xs sm:text-sm text-emerald-600 mb-4 sm:mb-6">
              Sustainable Infrastructure
            </p>

            <h2 className="
              text-4xl
              xs:text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              leading-[1]
              tracking-[-2px]
              sm:tracking-[-3px]
              mb-8
              sm:mb-10
            ">
              FROM
              <br />
              KITCHEN WASTE
              <br />
              TO CLEAN FUEL
            </h2>

            <div className="w-24 sm:w-28 h-2 bg-emerald-500 rounded-full mb-8 sm:mb-10"></div>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Millions of liters of culinary waste oil are discarded
              into municipal drainage systems every year causing
              severe environmental contamination.
            </p>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
              VIPRAOIL intercepts these waste streams and converts
              them into certified sustainable biodiesel using advanced
              transesterification and purification systems.
            </p>

            {/* CARDS */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10 sm:mt-14">

              <div className="bg-white rounded-[30px] border p-6 sm:p-8">

                <h3 className="text-4xl sm:text-5xl font-black text-emerald-600 mb-3 sm:mb-4">
                  25K+
                </h3>

                <p className="uppercase tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm">
                  Liters Recycled
                </p>
              </div>

              <div className="bg-white rounded-[30px] border p-6 sm:p-8">

                <h3 className="text-4xl sm:text-5xl font-black text-yellow-600 mb-3 sm:mb-4">
                  780+
                </h3>

                <p className="uppercase tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm">
                  CO₂ Reduced
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">

            <div className="space-y-4 sm:space-y-6">

              <img
                src="/images/service1.jpg"
                className="rounded-[20px] sm:rounded-[30px] h-[160px] sm:h-[300px] object-cover w-full"
              />

              <img
                src="/images/service2.jpg"
                className="rounded-[20px] sm:rounded-[30px] h-[220px] sm:h-[420px] object-cover w-full"
              />
            </div>

            <div className="space-y-4 sm:space-y-6 pt-10 sm:pt-20">

              <img
                src="/images/service3.jpg"
                className="rounded-[20px] sm:rounded-[30px] h-[220px] sm:h-[420px] object-cover w-full"
              />

              <img
                src="/images/service4.jpg"
                className="rounded-[20px] sm:rounded-[30px] h-[160px] sm:h-[300px] object-cover w-full"
              />
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        id="contact-section"
        className="pb-20 sm:pb-32 px-6 md:px-12 lg:px-24"
      >

        <div className="
          max-w-[1700px]
          mx-auto
          bg-black
          rounded-[30px] sm:rounded-[50px]
          px-6
          sm:px-10
          lg:px-24
          py-12
          sm:py-20
          text-center
        ">

          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm text-emerald-400 mb-4 sm:mb-6">
            Join The Movement
          </p>

          <h2 className="
            text-3xl
            xs:text-4xl
            md:text-6xl
            lg:text-7xl
            font-black
            leading-[1]
            tracking-[-2px]
            sm:tracking-[-3px]
            text-white
            mb-8
            sm:mb-10
          ">
            BUILD A GREENER
            <br />
            FUTURE WITH US
          </h2>

          <p className="
            text-base
            sm:text-lg
            md:text-xl
            text-gray-300
            max-w-4xl
            mx-auto
            leading-relaxed
            mb-8
            sm:mb-12
          ">
            Partner with VIPRAOIL for sustainable fuel collection,
            clean biodiesel logistics, environmental campaigns,
            and future-ready renewable energy systems.
          </p>

          <a
            href="/#contact"
            className="
              inline-block
              bg-emerald-600
              hover:bg-emerald-700
              transition
              text-white
              px-10
              sm:px-12
              py-4
              sm:py-6
              rounded-full
              uppercase
              tracking-[3px]
              sm:tracking-[4px]
              text-xs
              sm:text-sm
            "
          >
            Contact Us
          </a>

        </div>
      </section>

    </div>
  );
};

export default Mission;