import React from "react";
import Address from "../../Images/Address.png";
import Phone from "../../Images/Phone.png";
import Work from "../../Images/work.png";

const ContactSection = () => {
  return (
    <div className="max-w-[1321px] mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Get In Touch With Us
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          For More Information About Our Product & Services, Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-xl shadow-lg">
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                <img className="w-6 h-6" src={Address.src} alt="Address" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                <img className="w-6 h-6" src={Phone.src} alt="Phone" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">Mobile: (+84) 546-6789</p>
                <p className="text-gray-600">Hotline: (+84) 456-6789</p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                <img className="w-6 h-6" src={Work.src} alt="Work" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Working Time
                </h3>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="name"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                placeholder="Abc"
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                placeholder="Abc@def.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                placeholder="This is an optional"
              />
            </div>

            {/* Message */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                rows={5}
                placeholder="Hi! I'd like to ask about..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
