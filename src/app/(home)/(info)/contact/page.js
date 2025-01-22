import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactUsPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">

      {/* Header Section */}
      <div className="bg-white py-16 text-center shadow-md">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">We'd love to hear from you! Schedule a meeting or reach out to us.</p>
      </div>

      {/* Contact Details Section */}
      <div className="max-w-7xl mx-auto py-16 px-8">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <div className="space-y-4">
              <p className="flex items-center text-lg text-gray-700">
                <FaPhone className="text-green-500 mr-4" /> +1-(707)-240-8320
              </p>
              <p className="flex items-center text-lg text-gray-700">
                <FaEnvelope className="text-blue-500 mr-4" /> info@contentbeta.com
              </p>
              <p className="flex items-center text-lg text-gray-700">
                <FaMapMarkerAlt className="text-red-500 mr-4" /> 484 Virginia Pine TER, Sunnyvale, CA, US
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-800 hover:text-blue-600">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-800 hover:text-pink-600">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-700">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center">Our Location</h2>
            <div className="border rounded-lg overflow-hidden shadow-xl">
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

      {/* Calendly Embed */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Schedule a Meeting</h2>
          <div className="border rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://calendly.com/aneeverse/discovery-call?month=2025-01"
              width="100%"
              height="900"
              frameBorder="0"
              className="w-full"
              title="Calendly Scheduling"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Frequently Asked Questions</h2>
          <ul className="space-y-6">
            <li className="border-b pb-6">
              <h3 className="font-semibold text-lg text-gray-800">What services do you offer?</h3>
              <p className="text-gray-600">We provide a wide range of digital marketing and content creation services tailored to your needs.</p>
            </li>
            <li className="border-b pb-6">
              <h3 className="font-semibold text-lg text-gray-800">How can I schedule a meeting?</h3>
              <p className="text-gray-600">You can use the Calendly widget above to choose a suitable time for your meeting with us.</p>
            </li>
            <li className="border-b pb-6">
              <h3 className="font-semibold text-lg text-gray-800">Where are you located?</h3>
              <p className="text-gray-600">We are based in Sunnyvale, California, with offices in other major cities.</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="p-6 bg-white shadow-xl rounded-lg">
              <p className="italic text-gray-700">"Their service is top-notch and has helped us grow our online presence significantly."</p>
              <footer className="mt-4 text-right text-gray-500">- John Doe, CEO of Acme Corp</footer>
            </blockquote>
            <blockquote className="p-6 bg-white shadow-xl rounded-lg">
              <p className="italic text-gray-700">"Highly recommend their team for any digital marketing needs."</p>
              <footer className="mt-4 text-right text-gray-500">- Jane Smith, Marketing Manager</footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">About Us</h2>
          <p className="text-lg text-center text-gray-600">At Content Beta, we specialize in creating tailored digital content to elevate your brand's online presence. Our mission is to deliver innovative solutions that meet your unique business goals.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
