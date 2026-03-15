import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    HiShieldCheck,
    HiClock,
    HiDocumentText,
    HiChartBar,
    HiUsers,
    HiAcademicCap,
    HiArrowLeft
} from 'react-icons/hi';
import { servicesData } from './servicesData';

const ServiceDetail = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        const foundService = servicesData.find(s => s.id === parseInt(id));
        setService(foundService);
        window.scrollTo(0, 0); // Scroll to top when page loads
    }, [id]);

    const getIcon = (iconName) => {
        const icons = {
            'shield-check': HiShieldCheck,
            'clock': HiClock,
            'document-text': HiDocumentText,
            'chart-bar': HiChartBar,
            'users': HiUsers,
            'academic-cap': HiAcademicCap
        };
        return icons[iconName] || HiShieldCheck;
    };

    if (!service) {
        return (
            <div className="pt-32 pb-16 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Service not found</h2>
                    <Link to="/services" className="text-primary-600 hover:underline">Back to Services</Link>
                </div>
            </div>
        );
    }

    const IconComponent = getIcon(service.icon);

    return (
        <div >
            <div className="bg-[#0b2a5b] py-4">
                <div className="container-custom">
                    <Link to="/services" className="inline-flex items-center text-[#0b2a5b] font-semibold pl-4 rounded-full ml-4 p-2 bg-white  phover:translate-x-[-5px] transition-transform duration-300">
                        <HiArrowLeft className="mr-2" /> Back to Services
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl shadow-xl overflow-hidden"
                    >
                        <div className="bg-[#0b2a5b] md:p-10 text-white text-center">
                            
                            <h1 className="text-3xl md:text-5xl font-bold mb-2">{service.title}</h1>
                            <p className="text-xl md:text-xl text-white max-w-3xl mx-auto font-light">
                                {service.description}
                            </p>
                        </div>

                        <div className="p-2 md:p-16">
                            <div className="grid md:grid-cols-3 gap-12">
                                <div className="md:col-span-2 space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[#0b2a5b] mb-4 border-l-4 border-primary-500 pl-4">Overview</h3>
                                        <p className="text-gray-500 leading-7 text-md">
                                            {service.details}
                                        </p>
                                    </div>

                                    {/* Placeholder for more content if needed */}
                                    <div className="bg-blue-50 rounded-xl p-8 border border-purple-100">
                                        <h4 className="text-xl font-bold text-[#0b2a5b] mb-2">Why This Matters</h4>
                                        <p className="text-gray-700">
                                            In today's digital landscape, robust security measures are not just optional—they are essential for survival. {service.title} helps mitigate risks and ensures operational resilience.
                                        </p>
                                    </div>
                                </div>

                                <div className="md:col-span-1 ">
                                    <div className="bg-gray-50 shadow-lg shadow-[#0b2a5b] rounded-2xl p-8 sticky top-24">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features</h3>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="flex items-start"
                                                >
                                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                                                        <HiShieldCheck className="w-4 h-4 text-[#0b2a5b] " />
                                                    </div>
                                                    <span className="text-gray-700 font-medium">{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        <div className="mt-10 pt-8 border-t border-gray-200 ">
                                            <h4 className="text-lg font-bold text-[#0b2a5b] mb-4">Need this service?</h4>
                                            <Link to="/contact" className="block w-40 py-4 ml-25 text-center rounded-2xl bg-[#0b2a5b] text-white font-bold shadow-lg hover:shadow-xl hover:bg-primary-700 transition-all transform hover:-translate-y-1">
                                                Get a Quote
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
