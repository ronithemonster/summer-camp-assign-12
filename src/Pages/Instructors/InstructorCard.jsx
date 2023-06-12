import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const InstructorCard = ({ instructor }) => {
  const { name, image, email } = instructor;
  console.log(instructor)
  return (
    <div className="card card-compact w-96 h-96 bg-base-100 shadow-md hover:bg-red-100">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body text-center flex flex-col justify-center items-center">
        <h2 className="text-2xl">{name}</h2>
        <div className="flex gap-6 text-center items-center justify-center mt-4">
          <div className="tooltip" data-tip="Facebok">
            <button className="btn btn-circle btn-outline text-blue-400 btn-sm">
              <FaFacebook />
            </button>
          </div>
          <div className="tooltip" data-tip={email}>
            <button className="btn btn-circle btn-outline text-blue-400 btn-sm">
              <SiGmail />
            </button>
          </div>
          <div className="tooltip" data-tip="017451641">
            <button className="btn btn-circle btn-outline text-blue-400 btn-sm">
              <BsTelephoneFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
