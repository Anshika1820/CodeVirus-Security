import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
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
  HiArrowCircleRight
} from 'react-icons/hi';

import { servicesData } from './servicesData';

const Services = () => {
  const [services, setServices] = useState(servicesData);

  useEffect(() => {
    // Optional: Simulate API call or keep for future API integration
    // For now, we use static data
    setServices(servicesData);
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      'shield-check': HiShieldCheck,
      'clock': HiClock,
      'document-text': HiDocumentText,
      'chart-bar': HiChartBar,
      'users': HiUsers,
      'academic-cap': HiAcademicCap,
      'eye': HiEye,
      'cog': HiCog,
      'server': HiServer,
      'lock-closed': HiLockClosed,
      'globe': HiGlobe,
      'database': HiDatabase
    };
    
    return icons[iconName] || HiShieldCheck;
  };
  return (
    <div className=' bg-slate-100'>

      <section className="relative">
        <div className="container-custom ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            
          >
            <div className='bg-white pb-15 text-center'>
            <h2 className="text-5xl font-bold text-[#0b2a5b] pt-10 pl-4">
              ADDITIONAL SECURITY SOLUTIONS
            </h2>
            <p className="text-slate-600 ">
              Specialized security solutions to address
              specific challenges and requBeyond our core services, we offerirements of modern organizations.
            </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-20">

          {services.filter(s => s.id > 6).map((service, index) => {

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 group"
              >

                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h3 className="text-xl font-semibold text-slate-700 mb-3 group-hover:text-[#0b2a5b] transition">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* BUTTON */}
                  <Link to={`/services/${service.id}`}>
                    <button className="flex items-center gap-2 text-slate-600 font-semibold hover:text-[#0b2a5b] transition">
                      View More
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </Link>

                </div>

              </motion.div>
            )

          })}

          </div>
        </div>
      </section>


      {/* Main Services */}
      <section className="relative py-16 ">

        <div className="container-custom ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-10 mb-10 bg-white "
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0b2a5b] ">
              CORE SECUIRTY SERVICES
            </h2>
            <p className="text-slate-600">
              Our comprehensive suite of cybersecurity services is designed to protect your organization
              from the most sophisticated threats <br />while ensuring compliance and operational efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-20 ">
            {services.filter(s => s.id <= 6).map((service, index) => {
              const IconComponent = getIcon(service.icon);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.1 }
                  }}
                  className="group bg-white rounded-2xl shadow-lg shadow-[#0b2a5b] hover:shadow-xl transition-all d overflow-hidden border border-gray-100 cursor-pointer"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="p-8">
                    <motion.h3
                      className="text-lg font-bold text-[#0b2a5b] mb-4 group-hover:text-primary-600 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {service.title}
                    </motion.h3>

                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      {service.description.substring(0, 100)}...
                    </p>

                    {service.features && (
                      <div className="space-y-2 my-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <motion.div
                              className="w-2 h-2 bg-primary-600 rounded-full mr-3"
                              whileHover={{ scale: 1.5 }}
                            ></motion.div>
                            <HiArrowCircleRight className='fill-[#0b2a5b]'/> <span className='pl-2'> {feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    <Link to={`/services/${service.id}`}>
                      <motion.button
                        className="w-full mt-2  rounded-lg text-gray-700 font-semibold hover:bg-primary-600 hover:text-[#0b2a5b] transition-all duration-300 flex items-center group-hover:bg-primary-50 group-hover:text-primary-700 mt-6"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View More
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.button>
                    </Link>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Additional Services */}


      {/* CTA Section */}
      <section className="relative py-16 bg-[#0b2a5b]  ">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-slate-400 text-semibold  max-w-3xl mx-auto mb-8">
              Get in touch with our cybersecurity experts to discuss your security needs
              and discover how we can protect your digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="text-white bg-[#0b2a6b] text-lg px-6 py-4 shadow-slate-400 shadow-md">
                Get Started
              </Link>
              <Link to="/about" className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-[#0b2a5b] transition-colors duration-300">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
