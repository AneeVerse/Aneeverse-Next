"use client";

import React, { useState, useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { motion, AnimatePresence } from "framer-motion";
import Turnstile from "@/components/common/Turnstile";
import useGeoLocation from "@/hooks/useGeoLocation";
import dynamic from "next/dynamic";
import "react-phone-input-2/lib/style.css";

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

const ContactCalEmbed = () => {
    const userGeo = useGeoLocation();
    const [step, setStep] = useState("form"); // 'form' | 'calendar'
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        otherDetails: ""
    });

    useEffect(() => {
        if (step === "calendar") {
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
        }
    }, [step]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.phone && formData.service) {
            setIsSubmitting(true);
            try {
                const res = await fetch("/api/discovery-lead", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...formData,
                        turnstileToken
                    })
                });
                if (res.ok) {
                    setStep("calendar");
                } else {
                    console.error("Failed to send discovery lead email, continuing to calendar.");
                    setStep("calendar");
                }
            } catch (err) {
                console.error("Error submitting discovery lead:", err);
                setStep("calendar");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="rounded-2xl overflow-hidden cal-embed-container bg-[#073742] min-h-[550px] flex flex-col justify-center relative">
            <AnimatePresence mode="wait">
                {step === "form" && (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="w-full max-w-2xl mx-auto py-12 px-6 md:px-12"
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-semibold text-white mb-2">Discovery Call Setup</h3>
                            <p className="text-gray-400 text-sm">Please tell us a bit about your needs first.</p>
                        </div>

                        <form onSubmit={handleFormSubmit} className="space-y-5">
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-1.5">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    disabled={isSubmitting}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 bg-[#031d23] border border-[#0c4755] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#2DC8E6] transition-colors disabled:opacity-50"
                                />
                            </div>

                            <div className="flex flex-col md:flex-row gap-5">
                                <div className="flex-1">
                                    <label className="block text-gray-300 text-sm font-medium mb-1.5">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        disabled={isSubmitting}
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 bg-[#031d23] border border-[#0c4755] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#2DC8E6] transition-colors disabled:opacity-50"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-gray-300 text-sm font-medium mb-1.5">Phone Number</label>
                                    <PhoneInput
                                        country={userGeo?.countryCode?.toLowerCase() || "in"}
                                        value={formData.phone}
                                        onChange={(phone) => setFormData({ ...formData, phone: phone.startsWith('+') ? phone : `+${phone}` })}
                                        disabled={isSubmitting}
                                        enableSearch={true}
                                        inputProps={{
                                            required: true,
                                            name: 'phone',
                                        }}
                                        containerClass="phone-input-container"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-1.5">What Service are you interested in?</label>
                                <div className="relative">
                                    <select
                                        required
                                        disabled={isSubmitting}
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        className="w-full px-4 py-3 bg-[#031d23] border border-[#0c4755] rounded-xl text-white focus:outline-none focus:border-[#2DC8E6] transition-colors appearance-none cursor-pointer disabled:opacity-50"
                                    >
                                        <option value="" disabled>Select a service...</option>
                                        <option value="Creative Design & Branding">Creative Design & Branding</option>
                                        <option value="UI, UX & Web Development">UI, UX & Web Development</option>
                                        <option value="Platform Development">Platform Development</option>
                                        <option value="SEO & Blog Writing">SEO & Blog Writing</option>
                                        <option value="AI SEO (GEO) (AEO) (AIO)">AI SEO (GEO) (AEO) (AIO)</option>
                                        <option value="n8n Workflows & Automation">n8n Workflows & Automation</option>
                                        <option value="Sales & Marketing Automation">Sales & Marketing Automation</option>
                                        <option value="Marketing Strategy & Campaign">Marketing Strategy & Campaign</option>
                                        <option value="E-commerce Marketplace Management (Amazon/eBay/Zepto/Etsy)">E-commerce Marketplace Management</option>
                                        <option value="Other">Other / General Inquiry</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <AnimatePresence>
                                {formData.service === "Other" && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                        animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="overflow-hidden"
                                    >
                                        <label className="block text-gray-300 text-sm font-medium mb-1.5">Please specify your requirements</label>
                                        <textarea
                                            required
                                            disabled={isSubmitting}
                                            value={formData.otherDetails}
                                            onChange={(e) => setFormData({ ...formData, otherDetails: e.target.value })}
                                            placeholder="Tell us more about what you're looking for..."
                                            rows={3}
                                            className="w-full px-4 py-3 bg-[#031d23] border border-[#0c4755] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#2DC8E6] transition-colors resize-none disabled:opacity-50"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
                                <Turnstile onVerify={setTurnstileToken} />
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting || (!!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken)}
                                className="w-full mt-4 py-3 bg-[#2DC8E6] text-black font-semibold rounded-xl hover:bg-[#25a8c4] transition-all duration-300 shadow-md flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-2">
                                        <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Saving Details...</span>
                                    </div>
                                ) : "Choose Date & Time"}
                            </button>
                        </form>
                    </motion.div>
                )}

                {step === "calendar" && (
                    <motion.div
                        key="calendar"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full"
                    >
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
                                theme: "dark",
                                name: formData.name,
                                email: formData.email,
                                notes: formData.service === "Other" ? formData.otherDetails : `Service requested: ${formData.service}`
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <style jsx global>{`
                .cal-embed-container {
                    background: #073742;
                    border: none;
                }
                :root {
                    --cal-bg: #073742 !important;
                    --cal-bg-emphasis: #0c4755 !important;
                    --cal-bg-subtle: #052c35 !important;
                    --cal-bg-muted: #031d23 !important;
                    --cal-bg-inverted: #ffffff !important;
                    
                    --cal-border: transparent !important;
                    --cal-border-emphasis: transparent !important;
                    --cal-border-subtle: transparent !important;
 
                    --cal-text: #ffffff !important;
                    --cal-text-emphasis: #ffffff !important;
                    --cal-text-subtle: #9ca3af !important;
                    --cal-text-muted: #6b7280 !important;
                    --cal-text-inverted: #073742 !important;
 
                    --cal-brand: #2DC8E6 !important;
                    --cal-brand-emphasis: #25a8c4 !important;
                    --cal-brand-text: #073742 !important;
                }
 
                [data-cal-namespace="discovery-call"] {
                    background: #073742 !important;
                }

                /* Overwrite react-phone-input-2 default classes to match our style */
                .phone-input-container .form-control {
                    width: 100% !important;
                    height: 48px !important;
                    background: #031d23 !important;
                    border: 1px solid #0c4755 !important;
                    border-radius: 12px !important;
                    color: #ffffff !important;
                    font-size: 14px !important;
                    padding-left: 48px !important;
                    transition: border-color 0.2s ease-in-out;
                }
                .phone-input-container .form-control:focus {
                    border-color: #2DC8E6 !important;
                    box-shadow: none !important;
                }
                .phone-input-container .flag-dropdown {
                    background: #031d23 !important;
                    border: 1px solid #0c4755 !important;
                    border-right: none !important;
                    border-radius: 12px 0 0 12px !important;
                }
                .phone-input-container .flag-dropdown:hover,
                .phone-input-container .flag-dropdown:focus,
                .phone-input-container .flag-dropdown.open {
                    background: #0c4755 !important;
                }
                .phone-input-container .selected-flag:hover,
                .phone-input-container .selected-flag:focus,
                .phone-input-container .flag-dropdown.open .selected-flag,
                .phone-input-container .flag-dropdown.open .selected-flag:hover {
                    background: #0c4755 !important;
                }
                .phone-input-container .selected-flag .arrow {
                    border-top-color: #9ca3af !important;
                }
                .phone-input-container .selected-flag .arrow.up {
                    border-bottom-color: #9ca3af !important;
                }
                .phone-input-container .country-list {
                    background-color: #05262e !important;
                    border: 1px solid #0c4755 !important;
                    border-radius: 8px !important;
                    color: #ffffff !important;
                    scrollbar-width: thin;
                    scrollbar-color: #0c4755 transparent;
                }
                .phone-input-container .country-list::-webkit-scrollbar {
                    width: 6px;
                }
                .phone-input-container .country-list::-webkit-scrollbar-track {
                    background: transparent;
                }
                .phone-input-container .country-list::-webkit-scrollbar-thumb {
                    background-color: #0c4755 !important;
                    border-radius: 3px;
                }
                .phone-input-container .country-list::-webkit-scrollbar-thumb:hover {
                    background-color: #2DC8E6 !important;
                }
                .phone-input-container .country-list .country:hover {
                    background-color: #0c4755 !important;
                }
                .phone-input-container .country-list .country.highlight {
                    background-color: #0a4f5e !important;
                }
                .phone-input-container .country-list .search {
                    background-color: #05262e !important;
                    padding: 8px !important;
                    border-bottom: 1px solid #0c4755 !important;
                }
                .phone-input-container .country-list .search-box {
                    background: #031d23 !important;
                    border: 1px solid #0c4755 !important;
                    color: #ffffff !important;
                    border-radius: 6px !important;
                }
                .phone-input-container .country-list .search-emoji {
                    font-size: 0 !important;
                    display: inline-block !important;
                    width: 16px !important;
                    height: 16px !important;
                    vertical-align: middle !important;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.35-4.35'/%3E%3C/svg%3E") !important;
                    background-repeat: no-repeat !important;
                    background-position: center !important;
                    background-size: contain !important;
                }
            `}</style>
        </div>
    );
};

export default ContactCalEmbed;
