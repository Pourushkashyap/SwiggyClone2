// import React from 'react'

// function Help() {
//   return (
//     <div>Help</div>
//   )
// }

// export default Help


import React, { useState } from 'react';

const HelpPage = () => {
  const [activeCategory, setActiveCategory] = useState('Partner Onboarding');

  const categories = [
    'Partner Onboarding',
    'Legal',
    'FAQs',
    'Instamart Onboarding',
  ];

  const questions = {
    'Partner Onboarding': [
      'I want to partner my restaurant with Swiggy',
      'What are the mandatory documents needed to list my restaurant on Swiggy?',
      'I want to opt-out from Google reserve',
      'After I submit all documents, how long will it take for my restaurant to go live on Swiggy?',
      'What is this one-time Onboarding fee? Do I have to pay for it while registering?',
      'Who should I contact if I need help & support in getting onboarded?',
    ],
    Legal: ['Legal Question 1', 'Legal Question 2'],
    FAQs: ['FAQ 1', 'FAQ 2'],
    'Instamart Onboarding': ['Instamart Question 1', 'Instamart Question 2'],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-lg font-semibold mb-6">Help & Support</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer p-3 mb-2 rounded-lg text-gray-800 font-medium ${
                activeCategory === category ? 'bg-white shadow-md' : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <section className="w-3/4 p-8">
        <h2 className="text-2xl font-semibold mb-4">{activeCategory}</h2>
        <ul>
          {questions[activeCategory]?.map((question, index) => (
            <li
              key={index}
              className="py-4 border-b border-gray-300 cursor-pointer"
            >
              {question}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HelpPage;
