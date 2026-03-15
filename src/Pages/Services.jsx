
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiShieldCheck,
  HiClock,
  HiDocumentText,
  HiChartBar,
  HiUsers,
  HiAcademicCap,
  HiEye,
  HiCog,
  HiServer,
  HiLockClosed,
  HiGlobe,
  HiDatabase,
  HiArrowCircleRight,
} from "react-icons/hi";

import { servicesData } from "./servicesData";

const Services = () => {
  const [services, setServices] = useState(servicesData);

  useEffect(() => {
    setServices(servicesData);
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      "shield-check": HiShieldCheck,
      clock: HiClock,
      "document-text": HiDocumentText,
      "chart-bar": HiChartBar,
      users: HiUsers,
      "academic-cap": HiAcademicCap,
      eye: HiEye,
      cog: HiCog,
      server: HiServer,
      "lock-closed": HiLockClosed,
      globe: HiGlobe,
      database: HiDatabase,
    };
    return icons[iconName] || HiShieldCheck;
  };

  return (
    <div className="bg-slate-100">

      {/* ================= ADDITIONAL SERVICES ================= */}

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white text-center py-10 rounded-xl mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#0b2a5b]">
              ADDITIONAL SECURITY SOLUTIONS
            </h2>

            <p className="text-slate-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Specialized security solutions to address specific challenges and
              requirements of modern organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.filter((s) => s.id > 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group"
              >

                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-44 sm:h-52 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-700 mb-3 group-hover:text-[#0b2a5b]">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-xs font-semibold mb-6">
                    {service.description}
                  </p>

                  <Link to={`/services/${service.id}`}>
                    <button className="flex items-center gap-2 text-slate-600 font-semibold hover:text-[#0b2a5b] transition">
                      View More
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CORE SERVICES ================= */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-white py-10 rounded-xl mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#0b2a5b]">
              CORE SECURITY SERVICES
            </h2>

            <p className="text-slate-600 mt-3 max-w-3xl mx-auto text-sm sm:text-base">
              Our cybersecurity services protect organizations from advanced
              threats while ensuring compliance and operational efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.filter((s) => s.id <= 6).map((service, index) => {
              const IconComponent = getIcon(service.icon);

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden border"
                >

                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-44 sm:h-48 object-cover group-hover:scale-110 transition"
                  />

                  <div className="p-6">

                    <h3 className="text-lg font-bold text-[#0b2a5b] mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-5 text-sm">
                      {service.description.substring(0, 100)}...
                    </p>

                    {service.features && (
                      <div className="space-y-2 mb-6">

                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <HiArrowCircleRight className="text-[#0b2a5b]" />
                            <span className="ml-2">{feature}</span>
                          </div>
                        ))}

                      </div>
                    )}

                    <Link to={`/services/${service.id}`}>
                      <button className="flex items-center gap-2 font-semibold text-slate-700 hover:text-[#0b2a5b]">
                        View More
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </Link>

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}

      <section className="py-16 bg-[#0b2a5b]">

        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Secure Your Organization?
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-sm sm:text-lg">
            Get in touch with our cybersecurity experts and discover how we can
            protect your digital assets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/contact"
              className="bg-white text-[#0b2a5b] px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Get Started
            </Link>

            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#0b2a5b] transition"
            >
              Learn More
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Services;

