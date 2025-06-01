"use client";

import React from 'react';

const CardSection = () => {
  const cards = [
    {
      title: "Sabi Teachers",
      description: "Our teachers sabi the matter, like dem legit, trusted, no kpakpo or kembies.",
      icon: "👩‍🏫" 
    },
    {
      title: "Easy Communication",
      description: "Omo! our teachers sabi how to make sure the thing dey enter your brain as dem go break am down wella.",
      icon: "📬"
    },
    {
      title: "Get Sabificates",
      description: "You go get sabificate wey go show say you don learn the matter and sabi dem wellwell.",
      icon: "🎓"
    },
  ];

  return (
    <section className="flex flex-wrap justify-center py-10">
      {cards.map((card, index) => (
        <div key={index} className="mb-4 w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg p-6 text-center transition-all hover:bg-[#ec5252] hover:text-white">
          <div className="text-4xl mb-4">{card.icon}</div>
          <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
          <p className="text-gray-700">{card.description}</p>
        </div>
      ))}
    </section>
  );
};

export default CardSection;
