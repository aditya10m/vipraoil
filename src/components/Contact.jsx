import { FiCopy, FiPhoneCall, FiMail } from "react-icons/fi";

const contacts = [
  "7209800920",
  "7004403854",
  "9262868606",
  "9142199024",
];

const Contact = () => {

  const copyNumber = (number) => {
    navigator.clipboard.writeText(number);
    alert(`Copied: ${number}`);
  };

  return (
    <section
      id="contact"
      className="
        py-20
        sm:py-32
        px-6
        md:px-10
        lg:px-24

        bg-[#0a0a0a]
        text-white
      "
    >

      <div
        className="
          max-w-[1700px]
          mx-auto

          grid
          lg:grid-cols-2
          gap-10
          lg:gap-16

          items-start
        "
      >

        {/* LEFT SIDE */}
        <div>

          <p className="
            uppercase
            tracking-[4px]
            sm:tracking-[6px]
            text-xs
            text-emerald-400
            mb-4
            sm:mb-6
          ">
            Connect With VIPRAOIL
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
            CONTACT
            <br />
            VIPRAOIL
          </h2>

          <div className="
            w-32
            h-2
            bg-emerald-500
            rounded-full
            mb-8
            sm:mb-12
          "></div>

          <p className="
            text-base
            sm:text-lg
            md:text-xl
            text-gray-300
            leading-relaxed
            max-w-2xl
            mb-10
            sm:mb-16
          ">
            Partner with us to transform waste oil
            into sustainable clean biodiesel systems
            and next-generation green energy solutions.
          </p>

          {/* CONTACT NUMBERS */}
          <div className="space-y-5">

            {contacts.map((number) => (

              <div
                key={number}
                className="
                  flex
                  items-center
                  justify-between

                  bg-white/5

                  border
                  border-white/10

                  rounded-2xl

                  px-4
                  sm:px-6
                  py-4
                  sm:py-5

                  backdrop-blur-xl

                  hover:border-emerald-400

                  transition-all
                  duration-300
                "
              >

                <a
                  href={`tel:+91${number}`}
                  className="
                    flex
                    items-center
                    gap-3
                    sm:gap-4
                    hover:text-emerald-400
                    transition-colors
                    flex-1
                  "
                >

                  <div className="
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14

                    rounded-full

                    bg-emerald-500/20

                    flex
                    items-center
                    justify-center

                    text-emerald-400
                    text-xl
                    sm:text-2xl
                  ">
                    <FiPhoneCall />
                  </div>

                  <div>

                    <p className="
                      text-[10px]
                      sm:text-xs
                      uppercase
                      tracking-[2px]
                      sm:tracking-[3px]
                      text-gray-400
                      mb-0.5
                      sm:mb-1
                    ">
                      Contact Us
                    </p>

                    <h3 className="
                      text-lg
                      sm:text-xl
                      md:text-2xl
                      font-bold
                    ">
                      {number}
                    </h3>

                  </div>

                </a>

                {/* COPY BUTTON */}
                <button
                  onClick={() => copyNumber(number)}
                  className="
                    w-12
                    h-12
                    sm:w-14
                    sm:h-14

                    rounded-full

                    border
                    border-white/10

                    flex
                    items-center
                    justify-center

                    text-lg
                    sm:text-xl

                    hover:bg-emerald-500
                    hover:border-emerald-500

                    transition-all
                    duration-300
                    shrink-0
                    ml-4
                  "
                >
                  <FiCopy />
                </button>

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div
          className="
            bg-white/5

            border
            border-white/10

            rounded-[30px]
            sm:rounded-[40px]

            p-6
            sm:p-8
            md:p-12

            backdrop-blur-2xl
          "
        >

          <div className="
            flex
            items-center
            gap-4
            mb-10
          ">

            <div className="
              w-16
              h-16

              rounded-full

              bg-emerald-500/20

              flex
              items-center
              justify-center

              text-emerald-400
              text-3xl
            ">
              <FiMail />
            </div>

            <div>

              <p className="
                uppercase
                tracking-[3px]
                text-gray-400
                text-sm
                mb-2
              ">
                Send Message
              </p>

              <h3 className="
                text-3xl
                font-black
              ">
                Get In Touch
              </h3>

            </div>

          </div>

          {/* FORM */}
          <form className="space-y-6">

            {/* NAME */}
            <input
              type="text"
              placeholder="Your Name"
              className="
                w-full

                bg-white/5

                border
                border-white/10

                rounded-2xl

                px-6
                py-5

                outline-none

                focus:border-emerald-400

                transition-all
                duration-300

                placeholder:text-gray-500
              "
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              className="
                w-full

                bg-white/5

                border
                border-white/10

                rounded-2xl

                px-6
                py-5

                outline-none

                focus:border-emerald-400

                transition-all
                duration-300

                placeholder:text-gray-500
              "
            />

            {/* MESSAGE */}
            <textarea
              rows="7"
              placeholder="Write Your Message..."
              className="
                w-full

                bg-white/5

                border
                border-white/10

                rounded-2xl

                px-6
                py-5

                outline-none

                resize-none

                focus:border-emerald-400

                transition-all
                duration-300

                placeholder:text-gray-500
              "
            ></textarea>

            {/* BUTTON */}
            <button
              className="
                w-full

                bg-emerald-500
                hover:bg-emerald-600

                transition-all
                duration-300

                text-white

                py-5

                rounded-2xl

                uppercase
                tracking-[3px]

                font-bold

                shadow-2xl
              "
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;