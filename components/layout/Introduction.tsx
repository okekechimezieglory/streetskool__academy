"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Introduction = () => {
  const router = useRouter();

  const handleLearnMore = () => {
    router.push('/learning');
  };

  return (
    <section className="bg-[#ec5252] text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Welcome to Streetschool!</h2>
        <p className="text-base md:text-lg mb-6">
          Streetschool is your go-to platform for learning and mastering new skills.
          Join our platform and unlock your potential with Africa&apos;s largest selection of local contents.
        </p>
        <button 
          onClick={handleLearnMore} 
          className="bg-white text-[#ec5252] font-semibold py-2 px-4 rounded hover:bg-[#ec5252]/80 transition"
        >
          Join Us
        </button>
      </div>
    </section>
  );
};

export default Introduction;
