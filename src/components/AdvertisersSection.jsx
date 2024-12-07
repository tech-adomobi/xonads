// components/AdvertisersSection.jsx
import React from 'react';

export const AdvertisersSection = () => {
    return (
        <div className="bg-black py-20 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-start">
                    <div className="md:w-1/2 pr-16 mb-8 md:mb-0">
                        <p className="text-[#9AFF02] text-2xl font-bold mb-2">#ADVERTISE</p>
                        <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
                            XONADS FOR
                            <br />
                            ADVERTISERS
                        </h2>
                        <p className="text-[18px] md:text-2xl mb-10">
                            Reach your target audience with performance-driven campaigns.
                        </p>
                        <button className="bg-[#9AFF02] text-black py-2.5 px-5 md:py-3 md:px-6 rounded hover:bg-[#b5ff13] transition-colors duration-300 text-base md:text-lg font-bold">
                            CREATE A CAMPAIGN →
                        </button>
                    </div>
                    <div className="md:w-1/2">
                        <div className="grid grid-cols-2 gap-4 md:gap-8">
                            {[
                                { feature: "Fast campaign creation", icon: "🚀" },
                                { feature: "Integrated anti-fraud tech", icon: "🛡️" },
                                { feature: "Advanced targeting & tracking", icon: "🎯" },
                                { feature: "Engaging multidevice ads", icon: "📱💻" },
                                { feature: "Automated ROI optimization", icon: "⚙️" },
                                { feature: "Real-time statistics", icon: "📊" },
                            ].map(({ feature, icon }, index) => (
                                <div
                                    key={index}
                                    className="py-6 px-8 bg-[#9AFF02] text-black rounded-lg transform hover:scale-105 transition-transform duration-300 text-[14.4px] md:text-base font-normal md:font-medium shadow-lg hover:shadow-xl"
                                >
                                    <div className="flex items-center space-x-4">
                                        <span className="text-2xl">{icon}</span>
                                        <p>{feature}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
