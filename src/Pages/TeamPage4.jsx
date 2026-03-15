import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function TeamPage4() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* HERO SECTION */}
      <section className="px-6 md:px-20 py-20 bg-[#0B2A5B] text-white">
        <div className="max-w-5xl mx-auto text-center">

          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-md">
            <h2 className="text-xs md:text-sm font-semibold tracking-widest uppercase">
              Our Executive Team
            </h2>
          </div>

          <h3 className="mt-6 text-3xl md:text-5xl font-bold">
            Leaders & Security Experts
          </h3>

          <p className="mt-5 text-sm md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Cybersecurity professionals delivering trusted, compliant, and enterprise-grade solutions.
          </p>

          <div className="mt-8 h-1 w-24 bg-white mx-auto rounded-full"></div>
        </div>
      </section>

      {/* PROFILE CARD */}
      <section className="px-6 md:px-20 pb-20 -mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-14 border border-gray-100"
        >

          {/* Header */}
          <div className="text-center border-b border-gray-200 pb-10">

            <h1 className="text-3xl md:text-4xl font-bold text-[#0B2A5B] tracking-tight">
              Shreyansh Singh
            </h1>

            <p className="mt-2 text-base md:text-lg text-gray-600">
              Cyber Security Analyst
            </p>

            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              <span className="bg-[#0B2A5B] text-white text-xs md:text-sm px-5 py-2 rounded-full shadow-md">
                Core Security Team
              </span>
            </div>

          </div>

          {/* About */}
          <div className="mt-12 space-y-6 text-sm md:text-base text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">

            <p>
              Shreyansh Singh brings over 3 years of experience in cybersecurity
              operations and specializes in practical cybersecurity training and
              foundational security practices.
            </p>

            <p>
              He focuses on ethical hacking, network security, cyber awareness,
              and hands-on lab demonstrations.
            </p>

          </div>

          {/* Key Expertise */}
          <div className="mt-16">
            <h2 className="text-xl md:text-2xl font-semibold mb-10 text-center text-[#0B2A5B]">
              Key Expertise
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Cyber Security Services",
                "Network Security Operations",
                "VAPT & Ethical Hacking",
                "Linux & Windows Security",
                "Web Application VAPT",
                "Network VAPT",
                "Cloud Security Assessment",
                "API Security Testing",
                "Mobile Application Security Testing",
                "Source Code Review (SAST)",
                "Business Logic Testing",
                "Lab Setup & Attack Simulation",
                "Security Audit & Reporting",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="bg-gray-100 border border-gray-200 text-gray-800 text-xs md:text-sm px-5 py-2 rounded-full 
                  hover:bg-[#0B2A5B] hover:text-white hover:shadow-lg transition-all duration-300"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-16 flex justify-center gap-6">

            <Link to="/tp3">
              <button className="bg-gray-200 text-gray-800 px-8 py-3 text-sm rounded-full 
              hover:bg-gray-300 transition-all duration-300 shadow-md">
                ← Previous
              </button>
            </Link>

            <Link to="/tp5">
              <button className="bg-[#0B2A5B] text-white px-10 py-3 text-sm rounded-full 
              hover:bg-[#123a7a] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Next →
              </button>
            </Link>

          </div>

        </motion.div>
      </section>
    </div>
  );
}
