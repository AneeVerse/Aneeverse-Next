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
        <div className="rounded-2xl overflow-hidden shadow-2xl cal-embed-container bg-[#073742]">
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
                    background: linear-gradient(135deg, #072d36 0%, #073742 100%);
                    border: 1px solid rgba(45, 200, 230, 0.1);
                }
                :root {
                    --cal-bg: #073742 !important;
                    --cal-text: #ffffff !important;
                    --cal-brand: #2DC8E6 !important;
                }
            `}</style>
        </div>
    );
};

export default ContactCalEmbed;
