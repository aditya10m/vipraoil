import Navbar from "../components/Navbar";

const Story = () => {
  return (
    <div className="bg-black text-white overflow-hidden">

      <Navbar />

      {/* HERO VIDEO */}
      <section className="
        relative
        h-screen
        flex
        items-center
        justify-center
        overflow-hidden
      ">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        >
          <source
            src="/videos/story.mp4"
            type="video/mp4"
          />
        </video>

        {/* OVERLAY */}
        <div className="
          absolute
          inset-0
          bg-black/60
        "></div>

        {/* CONTENT */}
        <div className="
          relative
          z-10
          text-center
          px-6
        ">

          <p className="
            uppercase
            tracking-[6px]
            text-emerald-400
            mb-6
          ">
            VIPRAOIL Documentary
          </p>

          <h1 className="
            text-3xl
            xs:text-5xl
            md:text-7xl
            lg:text-[110px]

            font-black
            leading-[0.9]
            tracking-[-2px]
            sm:tracking-[-4px]

            max-w-6xl
            mx-auto
          ">
            THE FUTURE
            <br />
            OF GREEN
            <br />
            FUEL
          </h1>

          <p className="
            mt-6
            sm:mt-10
            text-base
            sm:text-lg
            md:text-2xl
            text-gray-300
            max-w-3xl
            mx-auto
            leading-relaxed
          ">
            Transforming kitchen waste into sustainable
            biodiesel ecosystems for a cleaner planet.
          </p>

        </div>
      </section>

      {/* STORY */}
      <section className="
        py-20
        sm:py-32
        px-6
        md:px-10
        lg:px-24
      ">

        <div className="
          max-w-[1600px]
          mx-auto
          grid
          lg:grid-cols-2
          gap-10
          lg:gap-20
          items-center
        ">

          {/* LEFT */}
          <div>

            <p className="
              uppercase
              tracking-[4px]
              sm:tracking-[5px]
              text-xs
              text-emerald-400
              mb-4
              sm:mb-6
            ">
              Green Fuel
            </p>

            <h2 className="
              text-4xl
              xs:text-5xl
              md:text-6xl
              lg:text-7xl

              font-black
              leading-[0.95]
              tracking-[-2px]
              sm:tracking-[-3px]

              mb-8
              sm:mb-10
            ">
              WHAT IS
              <br />
              GREEN
              <br />
              FUEL?
            </h2>

            <div className="
              w-24
              sm:w-32
              h-2
              bg-emerald-500
              rounded-full
              mb-8
              sm:mb-10
            "></div>

            <p className="
              text-base
              sm:text-lg
              md:text-xl
              text-gray-300
              leading-relaxed
              mb-6
              sm:mb-8
            ">
              Green fuel is renewable energy produced
              from sustainable waste resources instead
              of fossil fuels.
            </p>

            <p className="
              text-base
              sm:text-lg
              md:text-xl
              text-gray-300
              leading-relaxed
            ">
              VIPRAOIL converts used cooking oil into
              high-efficiency biodiesel that reduces
              carbon emissions and prevents water pollution.
            </p>

          </div>

          {/* RIGHT */}
          <div className="w-full">

            <img
              src="/images/story1.jpg"
              className="
                rounded-[30px]
                sm:rounded-[40px]
                w-full
                h-[300px]
                sm:h-[500px]
                lg:h-[700px]
                object-cover
              "
            />

          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="
        py-20
        sm:py-32
        bg-[#0d0d0d]
        px-6
        md:px-10
        lg:px-24
      ">

        <div className="
          max-w-[1700px]
          mx-auto
        ">

          <div className="text-center mb-12 sm:mb-20">

            <p className="
              uppercase
              tracking-[4px]
              sm:tracking-[5px]
              text-xs
              text-emerald-400
              mb-4
              sm:mb-6
            ">
              Refining Process
            </p>

            <h2 className="
              text-4xl
              xs:text-5xl
              md:text-6xl
              lg:text-7xl

              font-black
              leading-[0.95]
              tracking-[-2px]
              sm:tracking-[-3px]
            ">
              HOW VIPRAOIL
              <br />
              WORKS
            </h2>

          </div>

          {/* CARDS */}
          <div className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          ">

            {[
              "Oil Collection",
              "Purification",
              "Refining",
              "Clean Biodiesel"
            ].map((item, index) => (

              <div
                key={index}
                className="
                  bg-white/5
                  border
                  border-white/10

                  rounded-[30px]

                  p-10

                  backdrop-blur-xl

                  hover:-translate-y-3
                  transition-all
                  duration-500
                "
              >

                <div className="
                  text-6xl
                  font-black
                  text-emerald-400
                  mb-10
                ">
                  0{index + 1}
                </div>

                <h3 className="
                  text-2xl
                  font-bold
                  mb-6
                ">
                  {item}
                </h3>

                <p className="
                  text-gray-400
                  leading-relaxed
                ">
                  Advanced sustainable infrastructure
                  and eco-technology systems.
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* FUTURE */}
      <section className="
        py-20
        sm:py-32
        px-6
        md:px-10
        lg:px-24
      ">

        <div className="
          max-w-[1500px]
          mx-auto
          text-center
        ">

          <p className="
            uppercase
            tracking-[4px]
            sm:tracking-[5px]
            text-xs
            text-emerald-400
            mb-4
            sm:mb-6
          ">
            Sustainable Future
          </p>

          <h2 className="
            text-3xl
            xs:text-4xl
            md:text-6xl
            lg:text-7xl

            font-black
            leading-[0.95]
            tracking-[-2px]
            sm:tracking-[-3px]

            mb-8
            sm:mb-10
          ">
            BUILDING THE
            <br />
            NEXT GENERATION
            <br />
            OF ENERGY
          </h2>

          <p className="
            text-base
            sm:text-lg
            md:text-2xl
            text-gray-300
            leading-relaxed
            max-w-4xl
            mx-auto
          ">
            VIPRAOIL aims to create a circular renewable
            energy ecosystem where waste becomes fuel,
            pollution becomes opportunity,
            and sustainability becomes scalable.
          </p>

        </div>
      </section>

    </div>
  );
};

export default Story;