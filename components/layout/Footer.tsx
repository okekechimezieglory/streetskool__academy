// components/layout/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} Streetschool. All rights reserved.</p>
        <p className="text-sm">Follow us on social media:</p>
        <div className="flex justify-center space-x-4">
          <a href="https://twitter.com/streetskool" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://youtube.com/streetschool4" target="_blank" rel="noopener noreferrer">Youtube</a>
          <a href="https://instagram.com/streetschool" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com/streetschool" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://linkedin.com/in/streetschool" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
