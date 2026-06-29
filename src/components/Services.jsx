const services = [
  {
    title: "Oil Collection",
    image: "/images/pexels-talal-35416316.jpg",
  },

  {
    title: "Recycling",
    image: "/images/pexels-nataliaolivera-8132389.jpg",
  },

  {
    title: "Green Fuel Processing",
    image: "/images/pexels-tomfisk-6060192.jpg",
  },

  {
    title: "Community Outreach",
    image: "/images/service4.jpg",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="
        py-20
        sm:py-32
        px-6
        md:px-10
        lg:px-24

        bg-[#f7f7f7]
      "
    >

      {/* TITLE */}
      <div className="mb-12 sm:mb-20">

        <p className="
          uppercase
          tracking-[4px]
          sm:tracking-[6px]
          text-xs
          text-emerald-600
          mb-4
          sm:mb-6
        ">
          Sustainability Infrastructure
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
          PREMIUM
          <br />
          SUSTAINABILITY
          <br />
          SERVICES
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

        {services.map((service) => (

          <div
            key={service.title}
            className="
              group

              bg-white

              rounded-[30px]
              overflow-hidden

              hover:-translate-y-4

              transition-all
              duration-500

              shadow-sm
            "
          >

            {/* IMAGE */}
            <div className="
              h-[250px]
              sm:h-[350px]
              overflow-hidden
            ">

              <img
                src={service.image}
                alt={service.title}
                className="
                  w-full
                  h-full
                  object-cover

                  group-hover:scale-110

                  transition-all
                  duration-700
                "
              />

            </div>

            {/* CONTENT */}
            <div className="p-8">

              <h3 className="
                text-2xl
                font-black
                mb-4
              ">
                {service.title}
              </h3>

              <p className="
                text-gray-600
                leading-relaxed
              ">
                Advanced sustainable ecosystem
                infrastructure and renewable
                fuel innovation systems.
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Services;