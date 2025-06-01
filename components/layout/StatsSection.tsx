"use client";

import React from 'react';

const StatisticsSection = () => {
  const statistics = [
    {
      value: "8",
      label: "Expert Instructors",
      icon: "👨‍🏫" 
    },
    {
      value: "54,252",
      label: "Followers",
      icon: "🌍" 
    },
    {
      value: "97,220",
      label: "Students Enrolled",
      icon: "👥" 
    },
    {
      value: "10",
      label: "Years of Experience",
      icon: "📅" 
    },
    {
      value: "50",
      label: "Available Courses",
      icon: "📚"
    },
    {
      value: "Live",
      label: "Live Learning",
      icon: "📹"
    },
    {
      value: "$1,000,000",
      label: "Learners Earned",
      icon: "💰"
    }
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
      {statistics.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center transition-all hover:bg-[#ffcc00] hover:text-white">
          <div className="text-4xl mb-4">{stat.icon}</div>
          <h3 className="text-3xl font-semibold mb-2">{stat.value}</h3>
          <p className="text-gray-700">{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default StatisticsSection;
