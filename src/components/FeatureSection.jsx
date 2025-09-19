import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: "images/excellence.svg",
      title: "Revolutionary Technology",
      desc: "Groundbreaking invention that eliminates the expiration date on bottled water",
    },
    {
      icon: "images/pure.svg",
      title: "Safe & Pure",
      desc: "Ensuring lifelong freshness and health through advanced purification",
    },
    {
      icon: "images/eco.svg",
      title: "Sustainable Solution",
      desc: "Eco-friendly approach to water preservation and distribution",
    },
  ];

  return (
    <section className="pb-20 bg-[#D7E0E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop/Large view - all together */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="hidden md:grid md:grid-cols-3 gap-6"
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#E4E9ED] backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#F0FDF4] rounded-2xl mb-4">
                <img src={f.icon} alt="" />
              </div>
              <h3 className="text-xl font-medium text-[#03009B] mb-4">{f.title}</h3>
              <p className="text-gray-900 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Mobile view - one by one animation */}
        <div className="flex flex-col gap-6 md:hidden mt-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#E4E9ED] backdrop-blur-sm rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-[#F0FDF4] rounded-2xl mb-4">
                <img src={f.icon} alt="" />
              </div>
              <h3 className="text-xl font-medium text-[#03009B] mb-4">{f.title}</h3>
              <p className="text-gray-900 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
