import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Your Name</label>
          <input type="text" className="w-full border px-4 py-2 rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" className="w-full border px-4 py-2 rounded" required />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea className="w-full border px-4 py-2 rounded" rows={4} required></textarea>
        </div>
        <button type="submit" className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;