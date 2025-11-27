"use client";

import React from "react";
import Layout from "../common/Layout";

const DiscoveryCall = () => {
    return (
        <section className="bg-[#03151a] py-20 md:py-24 text-white">
            <Layout>
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-4">
                        Together, Let's Create
                        <br />
                        Something Really Incredible
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                        FREE 15-Min Strategy Call – For Founders Ready to Scale Fast!
                    </p>
                </div>

                {/* Calendly Embed */}
                <div className="rounded-2xl overflow-hidden bg-[#072d36] shadow-2xl">
                    <iframe
                        src="https://calendly.com/aneeverse/discovery-call"
                        className="w-full min-h-[700px] lg:min-h-[760px] border-none"
                        frameBorder="0"
                        scrolling="no"
                        title="Calendly Scheduling - Discovery Call"
                    />
                </div>

                {/* Powered by Cal.com footer */}
                <div className="text-center mt-6">
                    <p className="text-gray-500 text-sm">
                        Powered by Cal.com
                    </p>
                </div>
            </Layout>
        </section>
    );
};

export default DiscoveryCall;
