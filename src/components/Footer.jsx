import {
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiYoutube,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      className="
        bg-black
        text-white

        border-t
        border-white/10

        pt-20
        pb-10

        px-6
        md:px-10
        lg:px-24
      "
    >

      <div
        className="
          max-w-[1700px]
          mx-auto

          grid
          md:grid-cols-2
          lg:grid-cols-4

          gap-14
        "
      >

        {/* BRAND */}
        <div>

          <div className="
            flex
            items-center
            gap-4
            mb-8
          ">

            <img
              src="/images/logo.png"
              alt="VIPRAOIL"
              className="
                w-16
                h-16
                object-contain
              "
            />

            <div>

              <h2 className="
                text-3xl
                font-black
                tracking-[4px]
              ">
                VIPRAOIL
              </h2>

              <p className="
                text-xs
                uppercase
                tracking-[3px]
                text-gray-400
                mt-1
              ">
                Luxury Green Energy
              </p>

            </div>

          </div>

          <p className="
            text-gray-400
            leading-relaxed
            max-w-sm
          ">
            Transforming kitchen waste into
            sustainable biodiesel ecosystems
            and next-generation renewable fuel systems.
          </p>

        </div>



        {/* EMAILS */}
        <div>

          <h3 className="
            text-2xl
            font-black
            mb-8
          ">
            Emails
          </h3>

          <div className="space-y-5">

            {[
              "vipraoil.greenenergy@gmail.com",
            ].map((email) => (

              <a
                href={`mailto:${email}`}
                key={email}
                className="
                  flex
                  items-center
                  gap-4
                  hover:text-emerald-400
                  transition-colors
                "
              >

                <div className="
                  text-emerald-400
                  text-xl
                ">
                  <FiMail />
                </div>

                <p className="text-gray-300 break-all">
                  {email}
                </p>

              </a>

            ))}

          </div>

        </div>

        {/* SOCIALS */}
        <div>

          <h3 className="
            text-2xl
            font-black
            mb-8
          ">
            Follow Us
          </h3>

          <div className="
            flex
            gap-5
          ">

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/vipraoil.greenenergy?igsh=bTMwYWV4czM1Y3Vs&utm_source=qr"
              className="
                w-14
                h-14

                rounded-full

                bg-white/5

                border
                border-white/10

                flex
                items-center
                justify-center

                text-2xl

                hover:bg-emerald-500
                hover:border-emerald-500

                transition-all
                duration-300
              "
            >
              <FiInstagram />
            </a>

            {/* X / TWITTER */}
            <a
              href="https://x.com/greenvipraoil?s=11"
              className="
                w-14
                h-14

                rounded-full

                bg-white/5

                border
                border-white/10

                flex
                items-center
                justify-center

                text-2xl

                hover:bg-emerald-500
                hover:border-emerald-500

                transition-all
                duration-300
              "
            >
              <FiTwitter />
            </a>

            {/* LINKEDIN */}
            <a
              href="www.linkedin.com/in/vipraoil-green-energy-8b3428414

"
              className="
                w-14
                h-14

                rounded-full

                bg-white/5

                border
                border-white/10

                flex
                items-center
                justify-center

                text-2xl

                hover:bg-emerald-500
                hover:border-emerald-500

                transition-all
                duration-300
              "
            >
              <FiLinkedin />
            </a>

            {/* YOUTUBE */}
            <a
              href="https://youtube.com/@vipraoilgreenenergy?si=zxcRRmhGlt6Faz9d"
              className="
                w-14
                h-14

                rounded-full

                bg-white/5

                border
                border-white/10

                flex
                items-center
                justify-center

                text-2xl

                hover:bg-emerald-500
                hover:border-emerald-500

                transition-all
                duration-300
              "
            >
              <FiYoutube />
            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div
        className="
          border-t
          border-white/10

          mt-20
          pt-8

          flex
          flex-col
          md:flex-row

          items-center
          justify-between

          gap-5
        "
      >

        <p className="
          text-gray-500
          text-sm
        ">
          © 2026 VIPRAOIL — Luxury Green Energy Ecosystem
        </p>

        <p className="
          text-gray-500
          text-sm
        ">
          Sustainable Future • Renewable Biodiesel • Eco Innovation
        </p>

      </div>

    </footer>
  );
};

export default Footer;
