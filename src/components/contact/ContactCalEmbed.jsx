"use client";

import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const ContactCalEmbed = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "discovery-call" });

            // Apply custom styling
            cal("ui", {
                theme: "dark",
                styles: {
                    branding: {
                        brandColor: "#2DC8E6"
                    }
                },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);

    return (
        <div className="rounded-2xl overflow-hidden shadow-2xl cal-embed-container bg-[#111111]">
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
            <style jsx global>{`
                .cal-embed-container {
                    background: #111111;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
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

                [data-cal-namespace="discovery-call"] {
                    background: #111111 !important;
                }
            `}</style>
        </div>
    );
};

export default ContactCalEmbed;
