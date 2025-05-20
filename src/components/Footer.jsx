import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 pt-10 pb-6 border-t">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold">Gadget Heaven</h2>
        <p className="text-sm mt-1 text-gray-500">
          Leading the way in cutting-edge technology and innovation.
        </p>
        <hr className="my-6 border-gray-300" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left text-sm">
          <div>
            <h3 className="font-semibold mb-2">Services</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Product Support</a></li>
              <li><a href="#" className="hover:underline">Order Tracking</a></li>
              <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
