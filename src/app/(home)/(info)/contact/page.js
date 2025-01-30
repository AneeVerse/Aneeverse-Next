import Layout from '@/components/common/Layout';
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactUsPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      

      {/* Header Section */}
      {/* <div className="py-20 px-3 text-center bg-secondary-500 text-primary-500">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl font-light">We'd love to hear from you! Schedule a meeting or reach out to us.</p>
      </div> */}

      {/* Calendly Embed */}
      <div className="py-20 bg-[#fbfcfd] text-secondary-500">
        <Layout>
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
        </Layout>
      </div>

      {/* Contact Details Section */}
      <div className="py-20 bg-secondary-500  text-primary-500 ">
        <Layout className="grid md:grid-cols-2 gap-12">

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
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8045.169104825051!2d73.005389!3d19.0155818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c103ebdfb625%3A0xee9ac3282c16c2!2sAneeverse%20Creative%20Solutions%20%7C%20Digital%20Marketing%2C%20Web%20Development%20Services%20in%20Navi%20Mumbai!5e1!3m2!1sen!2sin!4v1738217506212!5m2!1sen!2sin"
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

        </Layout>
      </div>

    </div>
  );
};

export default ContactUsPage;