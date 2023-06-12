import axios from "axios";
import React, { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";
import Loader from "../../components/Loader/Loader";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
  const [loading, setLoading] = useState(false);
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/instructors";
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        const uniqueInstructors = removeDuplicateInstructors(res.data);
        console.log(res);
        // console.log(res.data);
        // console.log(uniqueInstructors);
        setInstructors(uniqueInstructors);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const removeDuplicateInstructors = (instructors) => {
    const uniqueInstructors = [];
    const instructorIds = new Set();

    for (const instructor of instructors) {
      if (!instructorIds.has(instructor._id)) {
        uniqueInstructors.push(instructor);
        instructorIds.add(instructor._id);
      }
    }

    return uniqueInstructors;
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-6 pt-16">
      <Helmet>
        <title>Flaire | Instructors</title>
      </Helmet>
      {instructors.map((instructor) => (
        <InstructorCard key={instructor._id} instructor={instructor} />
      ))}
    </div>
  );
};

export default Instructors;
