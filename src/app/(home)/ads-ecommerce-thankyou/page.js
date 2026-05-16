import AdsEcommerceThankYou from "@/components/services/ads-ecommerce/AdsEcommerceThankYou";

export const metadata = {
  title: "Thank You – Free Store Audit Requested | Aneeverse",
  description:
    "Thanks for requesting your free store audit. Our marketplace specialists will be in touch within 24 hours.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return <AdsEcommerceThankYou />;
}
