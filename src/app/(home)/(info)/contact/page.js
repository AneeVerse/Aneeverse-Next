import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactUsPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* Header Section */}
      <div className="py-20 px-3 text-center bg-secondary-500 text-primary-500">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl font-light">We'd love to hear from you! Schedule a meeting or reach out to us.</p>
      </div>

      {/* Calendly Embed */}
      <div className="py-20 bg-[#fbfcfd] text-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center  mb-8">Schedule a Meeting</h2>
          <div className="rounded-lg overflow-hidden ">
            <iframe
              src="https://calendly.com/aneeverse/discovery-call"
              className="w-full min-h-[1090px] lg:min-h-[760px] border-none"
              frameBorder="0"
              scrolling="no"
              
              title="Calendly Scheduling"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="py-20 px-4 bg-secondary-500  text-primary-500 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold ">Get in Touch</h2>
            <div className="space-y-6">
              <p className="flex items-center text-lg ">
                <FaPhone className="  mr-4" /> +1-(707)-240-8320
              </p>
              <p className="flex items-center text-lg  ">
                <FaEnvelope className=" mr-4" /> info@contentbeta.com
              </p>
              <p className="flex items-center text-lg ">
                <FaMapMarkerAlt className=" mr-4" /> 484 Virginia Pine TER, Sunnyvale, CA, US
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a href="#" className="  ">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="  ">
                <FaInstagram size={24} />
              </a>
              <a href="#" className=" ">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold  text-left">Our Location</h2>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.828061780794!2d-122.037851184692!3d37.36882927983982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb749eb76121b%3A0xa1c1e6c9fd6885c5!2s484%20Virginia%20Pine%20Ter%2C%20Sunnyvale%2C%20CA%2094086%2C%20USA!5e0!3m2!1sen!2sin!4v1617563714741!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ContactUsPage;