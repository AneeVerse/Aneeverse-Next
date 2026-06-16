import ServiceSchema from '@/components/seo/ServiceSchema'
import AdsDigitalMarketingHero from '@/components/services/ads-digital-marketing/AdsDigitalMarketingHero'
import AdvantageSection from '@/components/services/ads-digital-marketing/AdvantageSection'
import ServiceCardsSection from '@/components/services/ads-digital-marketing/ServiceCardsSection'
// import MidPageCTA from '@/components/services/ads-digital-marketing/MidPageCTA'
import WhyBusinessesSection from '@/components/services/ads-digital-marketing/WhyBusinessesSection'
import HowItWorksSection from '@/components/services/ads-digital-marketing/HowItWorksSection'
import AdsOurWorks from '@/components/services/ads-digital-marketing/AdsOurWorks'
import ResultsSection from '@/components/services/ads-digital-marketing/ResultsSection'
import ContactBlock from '@/components/services/ads-digital-marketing/ContactBlock'
import FAQSection from '@/components/services/ads-digital-marketing/FAQSection'
import FinalCTASection from '@/components/services/ads-digital-marketing/FinalCTASection'
import VisitorTracker from '@/components/services/ads-digital-marketing/VisitorTracker'

export const metadata = {
    title: "Digital Marketing Services | Aneeverse",
    description: "Google Ads, Meta Ads, SEO, Website Development, and Platform Development – handled by one dedicated team, reported back to you every week.",
}

const page = () => {
    return (
        <div>
            <VisitorTracker />
            <ServiceSchema
                serviceName="Digital Marketing Services"
                serviceType="ProfessionalService"
                description="Google Ads, Meta Ads, SEO, Website Development, and Platform Development – handled by one dedicated team, reported back to you every week."
                slug="ads-digital-marketing"
            />
            <AdsDigitalMarketingHero />
            <AdvantageSection />
            <div id="service-cards" className="scroll-mt-24">
                <ServiceCardsSection />
            </div>
            {/* <MidPageCTA /> */}
            <WhyBusinessesSection />
            <HowItWorksSection />
            <div id="our-works" className="scroll-mt-24">
                <AdsOurWorks />
            </div>
            <ResultsSection />
            <ContactBlock />
            <FAQSection />
            <FinalCTASection />
        </div>
    )
}

export default page
