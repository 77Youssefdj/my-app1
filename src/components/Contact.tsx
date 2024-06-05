import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="section min-h-screen flex flex-col justify-center items-center text-center bg-[#111F44] text-white">
      <h1 className="text-4xl mb-8 text-[#61dafb]">Contact</h1>
      <p className="text-xl mb-8">This is the contact page where you can provide your contact information.</p>
      <form className="w-full max-w-lg">
        <div className="mb-6">
          <label htmlFor="name" className="block text-lg mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-3 bg-[#1A2B6B] text-white border border-[#61dafb] rounded-lg focus:outline-none focus:border-[#61dafb]"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-lg mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 bg-[#1A2B6B] text-white border border-[#61dafb] rounded-lg focus:outline-none focus:border-[#61dafb]"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-lg mb-2">Message</label>
          <textarea
            id="message"
            className="w-full p-3 bg-[#1A2B6B] text-white border border-[#61dafb] rounded-lg focus:outline-none focus:border-[#61dafb]"
            placeholder="Your Message"
            rows={5}
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-[#61dafb] text-[#111F44] font-semibold rounded-lg hover:bg-[#4ec1e0] focus:outline-none focus:bg-[#4ec1e0]"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
