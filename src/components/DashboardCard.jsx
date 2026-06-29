import { motion } from "framer-motion";

const DashboardCard = () => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass glow rounded-[30px] sm:rounded-[40px] p-6 sm:p-8 w-full max-w-[400px] mt-10 lg:mt-0"
    >
      <h2 className="text-white text-2xl font-bold mb-8">
        Refinery Telemetry
      </h2>

      <div className="space-y-6">

        <div>
          <div className="flex justify-between text-white mb-2">
            <span>Fuel Purity</span>
            <span>94%</span>
          </div>

          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-emeraldLuxury w-[94%]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-white mb-2">
            <span>Carbon Reduction</span>
            <span>78%</span>
          </div>

          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-goldLuxury w-[78%]"></div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default DashboardCard;