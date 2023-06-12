import React from 'react';

const WelcomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500">
      <div className="max-w-3xl px-6 py-8 bg-white rounded-lg shadow-xl">
        <img
          src="https://storage.googleapis.com/website-production/uploads/2016/03/welcome-pages-slack.png"
          alt="Welcome"
          className="mb-8"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to our Community</h1>
        <p className="text-lg text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum viverra sem,
          vitae semper lectus lobortis ac.
        </p>
        <button className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
