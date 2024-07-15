import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer className="  py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Contact Information</h3>
            <p>123 Fifth Ave, New York, NY 12004.</p>
            <p>+1 123 456 78 90</p>
            <p>mail@example.com</p>
          </div>

          {/* Column 2 */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Customer Service</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Help & FAQs</a></li>
              <li><a href="#" className="hover:text-white">Payment Method</a></li>
              <li><a href="#" className="hover:text-white">Delivery Information</a></li>
              <li><a href="#" className="hover:text-white">Track Your Order</a></li>
              <li><a href="#" className="hover:text-white">Return & Exchanges</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Categories</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Clothing & Fashion</a></li>
              <li><a href="#" className="hover:text-white">Toys</a></li>
              <li><a href="#" className="hover:text-white">School Supplies</a></li>
              <li><a href="#" className="hover:text-white">Birthday Party Supplies</a></li>
              <li><a href="#" className="hover:text-white">Baby Diapering</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Our Company</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Corporate Information</a></li>
              <li><a href="#" className="hover:text-white">Privacy & Cookies Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Condition</a></li>
              <li><a href="#" className="hover:text-white">Promo & Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
