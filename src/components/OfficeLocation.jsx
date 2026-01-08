import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const OfficeLocation = () => {
  const mapUrl =
    "https://maps.google.com/maps?q=219+Silver+Trade+Center+Opp+Utran+Power+House+Mota+Varachha+Surat+395006&t=&z=17&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="py-20 bg-[#000101] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="flex items-center gap-2 px-6 py-2.5 border border-[#4C91C9]/20 rounded-full bg-[#4C91C9]/5 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-[#4C91C9]" />
              <span className="text-[#4C91C9] font-bold text-sm tracking-wider uppercase">
                Our Office Location
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4C91C9] to-[#fbc72d] bg-clip-text text-transparent mb-4 pb-4"
          >
            Visit Us In Person
          </motion.h2>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0A0A0A] border border-[#4C91C9]/20 rounded-3xl p-6 md:p-10 relative z-20 shadow-2xl max-w-xl mx-auto mb-8"
          >
            <div className="flex flex-col items-center">
              <div className="w-8 h-6 rounded-full bg-[#4C91C9]/10 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-[#4C91C9]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Office Address
              </h3>
              <p className="text-white/60 text-lg mb-8 max-w-sm leading-relaxed">
                219, Silver Trade Center, Opp Utran Power House, Mota Varachha,
                Surat-395006
              </p>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl transition-all duration-300 border border-[#4C91C9]/20 hover:border-[#4C91C9]/20"
              >
                <span className="font-bold">Get Directions</span>
                <Navigation className="w-4 h-4 text-[#4C91C9] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-[#4C91C9]/20 relative z-10"
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Overlay to ensure map matches dark theme better if needed */}
            <div className="absolute inset-0 bg-[#4C91C9]/10 pointer-events-none mix-blend-overlay" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;
