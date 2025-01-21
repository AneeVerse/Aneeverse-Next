import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactUsPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header Section */}
      <div className="bg-white py-12 text-center shadow-sm">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">We'd love to hear from you! Schedule a meeting or reach out to us.</p>
      </div>

      {/* Contact Details Section */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="flex items-center mb-4">
              <FaPhone className="mr-2" /> +1-(707)-240-8320
            </p>
            <p className="flex items-center mb-4">
              <FaEnvelope className="mr-2" /> info@contentbeta.com
            </p>
            <p className="flex items-center mb-4">
              <FaMapMarkerAlt className="mr-2" /> 484 Virginia Pine TER, Sunnyvale, CA, US
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-blue-600"><FaFacebookF /></a>
              <a href="#" className="text-gray-800 hover:text-blue-400"><FaTwitter /></a>
              <a href="#" className="text-gray-800 hover:text-pink-600"><FaInstagram /></a>
              <a href="#" className="text-gray-800 hover:text-blue-700"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Calendly Embed */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Schedule a Meeting</h2>
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://calendly.com/your-calendly-link"
                width="100%"
                height="400"
                frameBorder="0"
                className="w-full"
                title="Calendly Scheduling"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Location</h2>
        <div className="border rounded-lg overflow-hidden shadow-lg">
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

      {/* FAQ Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <ul className="space-y-4">
            <li className="border-b pb-4">
              <h3 className="font-semibold">What services do you offer?</h3>
              <p>We provide a wide range of digital marketing and content creation services tailored to your needs.</p>
            </li>
            <li className="border-b pb-4">
              <h3 className="font-semibold">How can I schedule a meeting?</h3>
              <p>You can use the Calendly widget above to choose a suitable time for your meeting with us.</p>
            </li>
            <li className="border-b pb-4">
              <h3 className="font-semibold">Where are you located?</h3>
              <p>We are based in Sunnyvale, California, with offices in other major cities.</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-200 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="p-4 bg-white shadow-lg rounded-lg">
              <p className="italic">"Their service is top-notch and has helped us grow our online presence significantly."</p>
              <footer className="mt-4 text-right">- John Doe, CEO of Acme Corp</footer>
            </blockquote>
            <blockquote className="p-4 bg-white shadow-lg rounded-lg">
              <p className="italic">"Highly recommend their team for any digital marketing needs."</p>
              <footer className="mt-4 text-right">- Jane Smith, Marketing Manager</footer>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4 text-center">About Us</h2>
          <p className="text-center">At Content Beta, we specialize in creating tailored digital content to elevate your brand's online presence. Our mission is to deliver innovative solutions that meet your unique business goals.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
