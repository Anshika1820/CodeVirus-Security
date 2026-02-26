import React from "react";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-screen bg-[#f4f6f9] flex items-center px-8 lg:px-20 py-20 overflow-hidden">

        {/* Content */}
        <div className="relative z-10 max-w-2xl">

          <span className="inline-block px-4 py-2 bg-[#e6ecf5] rounded-full text-sm mb-6">
            Enterprise Cybersecurity Solutions
          </span>

          <h1 className="text-4xl lg:text-5xl font-semibold mb-6">
            Welcome to <br />
            <span className="text-[#1d3b6d]">
              CODEVIRUS SECURITY
            </span>
          </h1>

          <p className="text-gray-600 leading-relaxed mb-8">
            We protect your network with layered security, combining next-generation
            firewalls, intrusion prevention systems, secure access controls,
            and zero-trust principles to defend modern enterprises against evolving cyber threats.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button className="px-6 py-3 bg-[#1d3b6d] text-white rounded-full">
              Get Started
            </button>

            <button className="px-6 py-3 border border-[#1d3b6d] rounded-full">
              Our Security Approach
            </button>
          </div>

          {/* Why Card */}
          <div className="bg-gradient-to-br from-[#0f2d59] to-[#1d3b6d] text-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-lg font-semibold mb-4">
              Why Enterprises Choose Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li>✔ Zero-Trust Network Architecture</li>
              <li>✔ Advanced Threat Intelligence</li>
              <li>✔ 24/7 Monitoring & Incident Response</li>
              <li>✔ Global Compliance & Risk Standards</li>
            </ul>
          </div>

        </div>

        {/* Diagonal Blue Shape */}
        <div className="absolute right-0 bottom-0 w-[55%] h-full bg-[#1d3b6d] 
                        [clip-path:polygon(35%_0,100%_0,100%_100%,0%_100%)]
                        z-0
                        lg:w-[55%]
                        md:w-[65%]
                        sm:w-[75%]">
        </div>

      </section>


      {/* ================= PROJECTS SECTION ================= */}

      <section className="px-8 lg:px-20 py-20 bg-[#f4f6f9]">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-[#0f2d59] text-white rounded-xl overflow-hidden shadow-xl">
            <img
              src="/images/project1.jpg"
              alt=""
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold mb-3">
                Cyber Security Enhancement for Smart Devices
              </h3>
              <p className="text-sm text-gray-300">
                Advanced security solutions for IoT and smart device protection
                with real-time threat detection.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0f2d59] text-white rounded-xl overflow-hidden shadow-xl">
            <img
              src="/images/project2.jpg"
              alt=""
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold mb-3">
                Advanced Cyber Defense & Operations Center
              </h3>
              <p className="text-sm text-gray-300">
                Comprehensive cybersecurity operations center implementation
                with 24/7 monitoring and incident response.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0f2d59] text-white rounded-xl overflow-hidden shadow-xl">
            <img
              src="/images/project3.jpg"
              alt=""
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold mb-3">
                24/7 Security Monitoring & Incident Response
              </h3>
              <p className="text-sm text-gray-300">
                Round-the-clock security monitoring and rapid incident response
                system for critical infrastructure.
              </p>
            </div>
          </div>

        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#1d3b6d] text-white rounded-full">
            View All Projects
          </button>
        </div>

      </section>

    </div>
  );
};

export default Home;
