import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Project from "./Project";
import networksecurity from "../assets/Photos/network.png";
import digitalforensics from "../assets/Photos/digitalforensics.png";
import dataloss from "../assets/Photos/dataloss.png";

const Home = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className="overflow-hidden ">
      
      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative h-auto lg:min-h-[85vh] flex items-start pt-16 lg:pt-20 pb-16 lg:pb-24
        bg-[linear-gradient(120deg,#ffffff_55%,#0b2a5b_45%)]"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_20%_30%,rgba(11,42,91,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(22,61,130,0.25),transparent_45%)]" />

        <div className="relative z-10 max-w-7xl mx-auto 
        px-4 sm:px-6 
        grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] 
        gap-12 lg:gap-16 ">

          {/* LEFT CONTENT */}
          <div
            className={`transition-all duration-1000${
              active
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block mb-3 px-5 py-2 rounded-full bg-white text-[#0b2a5b] shadow-md shadow-[#0b2a5b] font-semibold text-xs sm:text-sm">
              Enterprise Cybersecurity Solutions
            </span>

            <h1 className="font-black leading-tight mb-7">
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-gray-700  font-sans">
                Protect your <br />  internal and <br /> external
              </span>
              <span className="block text-[#0b2a5b] text-2xl sm:text-3xl lg:text-4xl">
                network from <br /> unauthorized <br />access and <br /> attacks
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 max-w-xl mb-8 leading-relaxed">
              We design and secure enterprise-grade networks using firewalls, IDS/IPS, VPNs, and zero-trust principles to prevent breaches and data leaks.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Link
                to="/getstarted"
                className="px-8 py-3 rounded-full font-bold text-white 
                bg-gradient-to-r from-[#0b2a5b] to-[#163d82] 
                shadow-[0_18px_40px_rgba(11,42,91,0.35)] 
                hover:scale-105 transition text-center"
              >
                Get Started
              </Link>

              <Link
                to="/security-approach"
                className="px-8 py-3 rounded-full font-bold 
                border-2 border-black text-black bg-white 
                hover:bg-black hover:text-white transition text-center"
              >
                Our Security Approach
              </Link>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div
            className={`transition-all duration-1000 delay-150 container h-80 ${
              active
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            } 
            bg-gradient-to-b from-[#0b2a5b] to-[#071a36] 
            rounded-3xl p- sm:p-8 lg:p-12 mt-30
            text-slate-200 
            shadow-[0_40px_80px_rgba(7,26,54,0.6)]`}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6">
              Why Enterprises Choose Us
            </h3>

            <ul className="space-y-4 text-slate-300 text-sm sm:text-base">
              <li className="flex gap-3">
                <span className="text-[#60a5fa]">✔</span>
                Zero-Trust Network Architecture
              </li>
              <li className="flex gap-3">
                <span className="text-[#60a5fa]">✔</span>
                Advanced Threat Intelligence
              </li>
              <li className="flex gap-3">
                <span className="text-[#60a5fa]">✔</span>
                24/7 Monitoring & Incident Response
              </li>
              <li className="flex gap-3">
                <span className="text-[#60a5fa]">✔</span>
                Global Compliance & Risk Standards
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0b2a5b] mt-3   ">
              Comprehensive Cybersecurity Operations Center
            </span>
            <h2 className="text-xs sm:text-sm uppercase tracking-widest text-[#163d82] font-semibold">
              We provide advanced cybersecurity solutions to protect your digital assets and ensure business continuity.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" >

            <ServiceCard
              title="Cybersecurity Operations Centers"
              description="A centralized unit for monitoring, detecting, and responding to cybersecurity threats."
            />

            <ServiceCard
              title="Incident Response And Management"
              description="Rapid response strategies to identify, contain, and recover from cyber incidents."
            />

            <ServiceCard
              title="Incident Response Plans And Procedures"
              description="Well-defined response plans to minimize damage during security breaches."
            />

            <ServiceCard
              title="Integrating Threat Intelligence"
              description="Combining threat intelligence feeds for proactive security defense."
            />
      
            <ServiceCard
              title="Role Of Security Analysts In CSOC"
              description="Expert analysts monitoring systems and investigating threats.."
            />

            <ServiceCard
              title="Challenges In Staffing & Retaining Talent"
              description="Strategies to recruit and retain skilled cybersecurity professionals."
            />
            
          </div>
           <div className="text-center mt-12">
            <a
              href="/services"
              className="px-4 py-3 bg-[#0b2a5b] text-white rounded font-semibold hover:bg-[#081c3a] transition"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      <About />
      <Project preview={true} />
    </div>
  );
};

export default Home;


/* ================= Reusable Service Card ================= */

const ServiceCard = ({ image, title, description, link }) => (
  <div className="bg-white border border-slate-200 rounded-2xl 
  overflow-hidden shadow-sm hover:shadow-lg shadow-[#0b2a5b]
  transition-all duration-300 flex flex-col group ">


    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold text-[#0b2a5b] mb-3">
        {title}
      </h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">
        {description}
      </p>
      
    </div>
  </div>
);  
