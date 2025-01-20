import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  const locations = [
    {
      code: 'SFO',
      address: '484 Virginia Pine TER, Sunnyvale 94086, CA, US',
    },
    {
      code: 'LON',
      address: 'Flinders House, Bear Point, 2 E Parkside, London SE10 0FQ, UK',
    },
    {
      code: 'BOM',
      address: 'B702, Bharat Ark, Andheri, Mumbai 400053, IN',
    },
  ];

  return (
    <div className="bg-black text-white py-12 mt-[100px]">
      {/* Top section with promotional message */}
      <div className="bg-white text-black -mt-[130px] py-8 rounded-xl px-8 shadow-lg mx-2  md:mx-auto max-w-3xl md:flex md:items-center md:justify-between space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Start with a free Motion UI animation 🎉</h2>
          <p className="mb-4">New to Content Beta? You can try us out before formal engagement. Really!</p>
        </div>
        <div className="flex flex-col md:w-1/3 gap-4">
          <button className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600">Learn More</button>
          <span className="text-red-500 font-semibold">● 2 spots left for January</span>
        </div>
      </div>

      {/* Contact information section */}
      <div className="mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-around md:items-start space-y-8 md:space-y-0">
            <div className="text-center max-w-[230px] mx-auto"> 
          <h2 className="font-semibold mb-2 text-lg">Contact</h2>
              <p className="mb-1">+1-(707)-240-8320</p>
              <p className="">info@contentbeta.com</p>
            </div>
            {locations.map((location, index) => (
              <div key={index} className="text-center max-w-[230px] mx-auto">
               
                <div className="font-semibold flex flex-row  gap-2 mb-2 justify-center  text-lg">  <FaMapMarkerAlt size={24} className="" /> <span>{location.code}</span> </div>
                <p>{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
