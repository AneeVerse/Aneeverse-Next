import Layout from "../common/Layout";

export default function ServicesHero() {
    return (
      <section className="relative h-[400px] md:h-[500px] bg-black text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/services/hero-bg.png"
            alt="Background"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
  
        {/* Content Section */}
        <Layout className="relative z-10 flex flex-col items-start justify-center h-full">
          
          <div className="text-[#F7F9F2] text-sm">CREATIVE SERVICES</div>
          {/* Title */}

          <h1 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
            Design services for <br /> ambitious brands
          </h1>
  
          {/* Subtitle */}
          <p className="text-md md:text-lg mt-6 text-[#F7F9F2] max-w-2xl">
            Teams at fast-growing companies use our services to get quality graphic design done at scale. Book a call today and get access to your dedicated design team.
          </p>
  
          {/* Call to Action Button */}
          <button className="mt-8 px-6 py-3 bg-[#D8FF85] text-black font-semibold rounded-full text-md hover:bg-[#b1d75f] transition">
            BOOK A CALL
          </button>
        </Layout>
      </section>
    );
  }
  