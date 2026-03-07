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
                    background: #111111;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                /* Override Cal.com internal styles via CSS variables */
                :root {
                    --cal-bg: #111111 !important;
                    --cal-bg-emphasis: #1a1a1a !important;
                    --cal-bg-subtle: #0d0d0d !important;
                    --cal-bg-muted: #080808 !important;
                    --cal-bg-inverted: #ffffff !important;
                    
                    --cal-border: rgba(255, 255, 255, 0.1) !important;
                    --cal-border-emphasis: rgba(255, 255, 255, 0.2) !important;
                    --cal-border-subtle: rgba(255, 255, 255, 0.05) !important;
                    
                    --cal-text: #ffffff !important;
                    --cal-text-emphasis: #ffffff !important;
                    --cal-text-subtle: #9ca3af !important;
                    --cal-text-muted: #6b7280 !important;
                    --cal-text-inverted: #111111 !important;
                    
                    --cal-brand: #2DC8E6 !important;
                    --cal-brand-emphasis: #25a8c4 !important;
                    --cal-brand-text: #111111 !important;
                }

                /* Style the Cal.com iframe/embed container */
                [data-cal-namespace="discovery-call"] {
                    background: #111111 !important;
                }
            `}</style>
        </section>
    );
};

export default DiscoveryCall;
