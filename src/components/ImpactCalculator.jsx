import { useState } from "react";

const ImpactCalculator = () => {

  const [oilAmount, setOilAmount] = useState(2500);
  const [selectedType, setSelectedType] = useState("domestic");

  // DYNAMIC CALCULATIONS
  const carbonAvoidance = Math.floor(oilAmount * 2.5);

  const freshwater =
    oilAmount > 10000
      ? (oilAmount * 1200).toLocaleString()
      : (oilAmount * 1000).toLocaleString();

  const biodiesel =
    oilAmount > 10000
      ? Math.floor(oilAmount * 0.95)
      : Math.floor(oilAmount * 0.9);

  return (
    <section
      id="impact"
      className="
        py-20
        sm:py-32
        px-6
        md:px-10
        lg:px-24
        bg-[#f7f7f7]
        overflow-hidden
      "
    >

      <div className="
        max-w-[1700px]
        mx-auto
        grid
        lg:grid-cols-2
        gap-10
        items-start
      ">

        {/* LEFT PANEL */}
        <div className="
          bg-white
          rounded-[30px] sm:rounded-[40px]
          border
          p-6
          sm:p-8
          md:p-12
          shadow-sm
          relative
          overflow-hidden
        ">

          {/* GLOW */}
          <div className="
            absolute
            -top-40
            -right-40
            w-[400px]
            h-[400px]
            bg-emerald-500/10
            rounded-full
            blur-3xl
          "></div>

          <div className="relative z-10">

            <p className="
              uppercase
              tracking-[4px]
              sm:tracking-[6px]
              text-emerald-600
              text-xs
              md:text-sm
              mb-4
              sm:mb-6
            ">
              Interactive System Simulator
            </p>

            <h2 className="
              text-4xl
              xs:text-5xl
              md:text-6xl
              lg:text-7xl
              font-black
              leading-[0.92]
              tracking-[-2px]
              sm:tracking-[-4px]
              mb-6
              sm:mb-8
            ">
              ECOLOGICAL
              <br />
              IMPACT
              <br />
              CALCULATOR
            </h2>

            <div className="w-32 h-2 bg-emerald-500 rounded-full mb-8 sm:mb-10"></div>

            <p className="
              text-gray-600
              text-base
              sm:text-lg
              md:text-xl
              leading-relaxed
              mb-8
              sm:mb-12
              max-w-2xl
            ">
              Input your culinary oil output volume parameters
              to simulate environmental impact and renewable
              biodiesel ecosystem performance in real-time.
            </p>

            {/* MODE BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-8 sm:mb-12">

              {/* DOMESTIC */}
              <button
                onClick={() => {
                  setSelectedType("domestic");
                  setOilAmount(2500);
                }}
                className={`
                  flex-1
                  min-w-[140px]
                  rounded-2xl
                  py-4
                  sm:py-5
                  font-bold
                  uppercase
                  tracking-[1px]
                  sm:tracking-[2px]
                  text-xs
                  sm:text-sm
                  transition-all
                  duration-300
                  border-2

                  ${
                    selectedType === "domestic"
                      ? "bg-emerald-600 border-emerald-600 text-white shadow-2xl"
                      : "bg-white border-gray-300 text-black hover:bg-black hover:text-white"
                  }
                `}
              >
                Domestic Kitchen
              </button>

              {/* RESTAURANT */}
              <button
                onClick={() => {
                  setSelectedType("restaurant");
                  setOilAmount(15000);
                }}
                className={`
                  flex-1
                  min-w-[140px]
                  rounded-2xl
                  py-4
                  sm:py-5
                  font-bold
                  uppercase
                  tracking-[1px]
                  sm:tracking-[2px]
                  text-xs
                  sm:text-sm
                  transition-all
                  duration-300
                  border-2

                  ${
                    selectedType === "restaurant"
                      ? "bg-black border-black text-white shadow-2xl"
                      : "bg-white border-gray-300 text-black hover:bg-black hover:text-white"
                  }
                `}
              >
                Restaurant / Hotel
              </button>

            </div>

            {/* RANGE */}
            <div>

              <div className="
                flex
                justify-between
                items-center
                mb-5
                uppercase
                text-xs
                md:text-sm
                tracking-[3px]
              ">

                <span>Culinary Waste Oil Stream</span>

                <span className="
                  font-black
                  text-emerald-600
                ">
                  {oilAmount.toLocaleString()} Liters
                </span>

              </div>

              <input
                type="range"
                min="50"
                max="25000"
                value={oilAmount}
                onChange={(e) => setOilAmount(Number(e.target.value))}
                className="
                  w-full
                  accent-emerald-600
                  cursor-pointer
                "
              />

              <div className="
                flex
                justify-between
                text-xs
                text-gray-400
                mt-3
              ">
                <span>50L</span>
                <span>25,000L</span>
              </div>

            </div>

          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="grid sm:grid-cols-2 gap-6">

          {/* CARD */}
          <div className="
            bg-white
            border
            rounded-[30px]
            p-8
            md:p-10
            min-h-[260px]
            flex
            flex-col
            justify-between
            hover:-translate-y-2
            transition
          ">

            <p className="
              uppercase
              text-xs
              tracking-[4px]
              text-gray-500
            ">
              Carbon Avoidance
            </p>

            <div>

              <h3 className="
                text-5xl
                md:text-6xl
                font-black
                leading-none
              ">
                {carbonAvoidance.toLocaleString()}
              </h3>

              <p className="
                mt-4
                text-emerald-600
                font-bold
              ">
                KG
              </p>

            </div>
          </div>

          {/* CARD */}
          <div className="
            bg-white
            border
            rounded-[30px]
            p-8
            md:p-10
            min-h-[260px]
            flex
            flex-col
            justify-between
            hover:-translate-y-2
            transition
          ">

            <p className="
              uppercase
              text-xs
              tracking-[4px]
              text-gray-500
            ">
              Freshwater Protected
            </p>

            <div>

              <h3 className="
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-black
                leading-none
                break-words
              ">
                {freshwater}
              </h3>

              <p className="
                mt-4
                text-emerald-600
                font-bold
              ">
                Liters
              </p>

            </div>
          </div>

          {/* CARD */}
          <div className="
            bg-white
            border
            rounded-[30px]
            p-8
            md:p-10
            min-h-[260px]
            flex
            flex-col
            justify-between
            hover:-translate-y-2
            transition
          ">

            <p className="
              uppercase
              text-xs
              tracking-[4px]
              text-gray-500
            ">
              Clean Biodiesel
            </p>

            <div>

              <h3 className="
                text-5xl
                md:text-6xl
                font-black
                leading-none
              ">
                {biodiesel.toLocaleString()}
              </h3>

              <p className="
                mt-4
                text-yellow-600
                font-bold
              ">
                Liters
              </p>

            </div>
          </div>

          {/* CERTIFICATION */}
          <div className="
            relative
            bg-white
            border
            rounded-[30px]
            p-8
            md:p-10
            min-h-[260px]
            flex
            flex-col
            justify-between
            overflow-hidden
            hover:-translate-y-2
            transition
          ">

            {/* DYNAMIC GLOW */}
            <div
              className={`
                absolute
                -top-20
                -right-20
                w-60
                h-60
                rounded-full
                blur-3xl
                opacity-20

                ${
                  selectedType === "domestic"
                    ? "bg-emerald-500"
                    : "bg-yellow-500"
                }
              `}
            ></div>

            <p className="
              uppercase
              text-xs
              tracking-[4px]
              text-gray-500
              relative
              z-10
            ">
              Certification
            </p>

            <div className="relative z-10">

              <h3
                className={`
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  lg:text-[42px]
                  font-black
                  leading-[1]
                  break-words
                  transition-all
                  duration-500

                  ${
                    selectedType === "domestic"
                      ? "text-emerald-700"
                      : "text-yellow-700"
                  }
                `}
              >

                {selectedType === "domestic"
                  ? (
                    <>
                      GREEN
                      <br />
                      PARTNER
                    </>
                  )
                  : (
                    <>
                      ECO
                      <br />
                      INDUSTRIAL
                    </>
                  )}

              </h3>

              <p className="
                mt-6
                text-gray-500
                text-sm
                leading-relaxed
                max-w-xs
              ">

                {selectedType === "domestic"
                  ? "Verified sustainable household recycling contributor."
                  : "Certified high-volume commercial biofuel ecosystem partner."}

              </p>

              {/* BADGE */}
              <div
                className={`
                  inline-block
                  mt-6
                  px-5
                  py-3
                  rounded-full
                  text-xs
                  uppercase
                  tracking-[3px]
                  font-bold

                  ${
                    selectedType === "domestic"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-yellow-100 text-yellow-700"
                  }
                `}
              >

                {selectedType === "domestic"
                  ? "Residential Verified"
                  : "Commercial Certified"}

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImpactCalculator;