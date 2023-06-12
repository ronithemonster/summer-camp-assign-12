import React, { useEffect, useState } from "react";
import axios from "axios";
import ClassCard from "./ClassCard";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const PopularClass = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/classes";
    axios
      .get(url)
      .then((res) => {
        setClasses(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <section className="bg-slate-900  mt-8 mb-8 pl-5 pr-8 pb-10 pt-10">
      <div data-aos="fade-right" className="text-center">
        <h6 className="text-xl font-semibold pt-3 pb-3 uppercase text-red-400">
          ---------- Our Class ------------
        </h6>
        <h2 className="text-4xl font-bold pt-3 pb-3 uppercase text-white">
          <Fade delay={1e3} cascade damping={1e-1}>
            choose your dance style
          </Fade>
        </h2>
      </div>
      <div className="flex justify-between align-middle items-center mt-3 mb-4">
        <p className="pt-3 pb-2 text-white ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, <br /> pulvinar dapibus leo.
        </p>
        <button className=" px-4 py-3 rounded-md w-2/12 mr-8 bg-red-500 text-white  mt-4 ">
          {" "}
          <Link to="/classes"> All Classes </Link>{" "}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {classes.slice(0, 6).map((singleClass) => (
          <ClassCard key={singleClass._id} singleClass={singleClass} />
        ))}
      </div>
    </section>
  );
};

export default PopularClass;
