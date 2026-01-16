"use client";

import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Layout from "../common/Layout";

const DiscoveryCall = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "discovery-call" });

            // Apply custom styling to match your website theme
            cal("ui", {
                theme: "dark",
                styles: {
                    branding: {
                        brandColor: "#2DC8E6" // Your accent color (teal/cyan)
                    }
                },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);

    return (
        <section className="bg-[#03151a] py-20 md:py-24 text-white">
            <Layout>
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-4 font-bw-gradual tracking-tight">
                        Together, Let's Create
                        <br />
                        Something Really Incredible
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg">
                        FREE 15-Min Strategy Call – For Founders Ready to Scale Fast!
                    </p>
                </div>

                {/* Cal.com Embed with Custom Theme */}
                <div className="rounded-2xl overflow-hidden shadow-2xl cal-embed-container">
                    <Cal
                        namespace="discovery-call"
                        calLink="aneeverse/15min"
                        style={{
                            width: "100%",
                            height: "100%",
                            overflow: "scroll",
                            minHeight: "700px"
                        }}
                        config={{
                            layout: "month_view",
                            theme: "dark"
                        }}
                    />
                </div>

                {/* Powered by Cal.com footer */}
                <div className="text-center mt-6">
                    <p className="text-gray-500 text-sm">
                        Powered by Cal.com
                    </p>
                </div>
            </Layout>

            {/* Custom CSS for Cal.com styling */}
            <style jsx global>{`
                /* Cal.com Dark Theme Customization */
                .cal-embed-container {
                    background: linear-gradient(135deg, #072d36 0%, #073742 100%);
                    border: 1px solid rgba(45, 200, 230, 0.1);
                }

                /* Override Cal.com internal styles via CSS variables */
                :root {
                    --cal-bg: #073742 !important;
                    --cal-bg-emphasis: #0a4a58 !important;
                    --cal-bg-subtle: #072d36 !important;
                    --cal-bg-muted: #061f26 !important;
                    --cal-bg-inverted: #2DC8E6 !important;
                    
                    --cal-border: rgba(45, 200, 230, 0.2) !important;
                    --cal-border-emphasis: rgba(45, 200, 230, 0.3) !important;
                    --cal-border-subtle: rgba(45, 200, 230, 0.1) !important;
                    
                    --cal-text: #ffffff !important;
                    --cal-text-emphasis: #ffffff !important;
                    --cal-text-subtle: #9ca3af !important;
                    --cal-text-muted: #6b7280 !important;
                    --cal-text-inverted: #03151a !important;
                    
                    --cal-brand: #2DC8E6 !important;
                    --cal-brand-emphasis: #25a8c4 !important;
                    --cal-brand-text: #03151a !important;
                }

                /* Style the Cal.com iframe/embed container */
                [data-cal-namespace="discovery-call"] {
                    background: #073742 !important;
                }
            `}</style>
        </section>
    );
};

export default DiscoveryCall;
