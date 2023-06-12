import React, { useContext } from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const ClassCard = ({ cls, handleSelect }) => {
  const { user } = useContext(AuthContext);

  return (
    <Fade>
      <div>
        <div className="card card-compact w-96 h-[450px] bg-base-100 shadow-xl hover:bg-red-100">
          <figure className='transition-all duration-300 transform hover:scale-90'>
            <img src={cls.image} alt="Shoes" />
          </figure>
          <div className="px-12 py-8">
            <h2 className="text-2xl font-bold mb-2 mt-0">{cls.danceName}</h2>
            <p className='text-xl'>
              Instructor : <span className='text-2xl'>{cls.instructorName}</span>
            </p>
            <p className='text-lg'>
              Available seats: <span className='text-2xl'>{cls.availableSeats}</span>
            </p>
            <p className='text-xl'>
              Fees: <span className='text-orange-700 text-3xl'>${cls.price}</span>
            </p>
            <div className="card-actions justify-center mt-3">
              {user && user.email ? (
                <button
                  onClick={() => handleSelect(cls)}
                 
                  className="px-4 py-3 rounded-md hover:bg-blue-800 bg-red-500 text-white font-mono mt-4 w-full"
                >
                  Enroll Now
                </button>
              ) : (
                <Link to={'/login'}>
                  <button className="px-4 py-3 rounded-md hover:bg-blue-800 bg-red-500 text-white font-mono mt-4 w-[300px]">
                    Enroll Now
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ClassCard;
