const initiatives = [
  {
    title: "Waste Oil Recovery",
    video: "/videos/initiative1.mp4",
    description:
      "Transforming used kitchen oil into premium renewable biodiesel ecosystems.",
  },

  {
    title: "Green Fuel Labs",
    video: "/videos/initiative2.mp4",
    description:
      "Advanced sustainable fuel innovation and next-generation eco technology.",
  },

  {
    title: "Community Awareness",
    video: "/videos/initiative3.mp4",
    description:
      "Educating communities for cleaner energy adoption and sustainability.",
  },

  {
    title: "Future Biodiesel Systems",
    video: "/videos/initiative4.mp4",
    description:
      "Building scalable renewable fuel infrastructure for next-generation mobility.",
  },
];

const Initiatives = () => {
  return (
    <section
      id="initiatives"
      className="
        py-20
        sm:py-32
        px-6
        md:px-10
        lg:px-24

        bg-black
        text-white
      "
    >

      {/* TITLE */}
      <div className="mb-12 sm:mb-20">

        <p className="
          uppercase
          tracking-[4px]
          sm:tracking-[6px]
          text-xs
          text-emerald-400
          mb-4
          sm:mb-6
        ">
          Future Sustainability
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

          max-w-5xl
        ">
          SUSTAINABILITY
          <br />
          INITIATIVES
        </h2>

      </div>

      {/* GRID */}
      <div className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        sm:gap-8
      ">

        {initiatives.map((item) => (

          <div
            key={item.title}
            className="
              group

              bg-white/5

              border
              border-white/10

              rounded-[30px]

              overflow-hidden

              backdrop-blur-xl

              hover:-translate-y-4

              transition-all
              duration-500
            "
          >

            {/* VIDEO */}
            <div className="
              h-[220px]
              sm:h-[320px]
              overflow-hidden
              relative
            ">

              <video
                autoPlay
                muted
                loop
                playsInline
                className="
                  w-full
                  h-full
                  object-cover

                  group-hover:scale-110

                  transition-all
                  duration-700
                "
              >
                <source
                  src={item.video}
                  type="video/mp4"
                />
              </video>

              {/* OVERLAY */}
              <div className="
                absolute
                inset-0
                bg-black/20
              "></div>

            </div>

            {/* CONTENT */}
            <div className="p-8">

              <h3 className="
                text-3xl
                font-black
                mb-5
              ">
                {item.title}
              </h3>

              <p className="
                text-gray-300
                leading-relaxed
                text-lg
              ">
                {item.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Initiatives;