import React from 'react';
import Nav from '../../components/nav/Nav';

/**
 * The contact page component.
 * 
 * @returns {JSX.Element} - The contact page component.
 */
const Contactus = () => {
  return (
    <div>
      <Nav />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg w-full space-y-8">
          <div className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4">
            <h6 className="text-3xl font-bold text-center text-gray-900 mb-6">Send A Message</h6>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 ">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder=" Name"
                  className="block w-full px-4 py-2 border bg-white  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500  "
                  // The name field is required.
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block bg-white text-gray-700 font-semibold mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="block w-full px-4 py-2 border bg-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  // The email field is required.
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  className="block w-full px-4 py-2 border bg-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 "
                  // The subject field is required.
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Comment or Message</label>
                <textarea
                  id="message"
                  placeholder="Message"
                  rows="4"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  // The message field is required.
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-violet-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition duration-150 ease-in-out"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Contactus;
