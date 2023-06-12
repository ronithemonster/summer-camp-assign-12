import React from 'react';

const PopularInstructorCard = ({ instructor }) => {
  return (
   <div> 
    <div>
   
    </div>
     <div className="bg-white rounded-lg shadow-lg p-4">
      <img className="w-full h-40 object-cover object-center rounded-t-lg" src={instructor.photo} alt={instructor.name} />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
        <p className="text-gray-600">{instructor.email}</p>
       
      </div>
    </div>
   </div>
  );
};

export default PopularInstructorCard;
