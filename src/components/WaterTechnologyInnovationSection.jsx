import { motion } from "framer-motion";

const WaterTechnologyInnovationSection = () => {
  return (
    <section className="py-8 sm:p-20 bg-[#D7E0E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap:24 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-50 px-4 py-1 sm:px-6 sm:py-2 rounded-full mx-auto lg:mx-0"
            >
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="bg-gradient-to-r from-blue-700 to-purple-900 text-transparent bg-clip-text font-medium text-sm sm:text-base">
                Water Innovation
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#03009B] leading-tight"
            >
              Revolutionizing{" "}
              <span className="relative inline-block mx-3">
                <span className="relative bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">
                  Water
                  <span className="absolute left-0 -bottom-2 w-full h-2 sm:h-3 rounded-full bg-blue-400 opacity-20"></span>
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-100 rounded-full -z-10"></div>
              </span>{" "}
              Technology
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-[1.05rem] sm:text-[1.15rem] mb-8 text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              We're pioneering the future of water technology with our groundbreaking innovation that eliminates expiration dates from bottled water, ensuring pure and safe drinking water for generations to come.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#03009B] hover:scale-[1.04] text-white px-8 py-2 sm:py-3 rounded-xl text-lg sm:text-xl font-medium transition-all duration-300">
                Explore Technology
              </button>
              <button className="text-[#03009B] hover:scale-[1.04] px-8 py-2 sm:py-3 rounded-xl font-medium text-lg sm:text-xl border-2 border-[#03009B] transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex justify-center lg:justify-end sm:mt-10 lg:mt-0"
          >
            <div className="relative w-full max-w-[400px] sm:max-w-md aspect-square lg:aspect-[1/1]">
              {/* Rotated gradient background */}
              <div className="absolute inset-3 sm:inset-4 bg-gradient-to-br from-[#CFDCE7] via-[#C7DFDC] to-transparent rounded-3xl transform rotate-8"></div>

              {/* White box behind image */}
              <div className="absolute inset-x-4 sm:inset-x-9 top-4 sm:top-9 bg-white rounded-3xl shadow-2xl backdrop-blur-xl p-4 sm:p-8 h-[300px] sm:h-100 flex items-center justify-center">
                <img src="images/innovation.webp" className="animate-float" alt="" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaterTechnologyInnovationSection;
