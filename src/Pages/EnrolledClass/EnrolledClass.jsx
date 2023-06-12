import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const EnrolledClass = () => {
  const [data, setData] = useState([]);
  const [dances, setDances] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `http://localhost:5000/payments?email=${user?.email}`
    ).then((res) =>
      res.json().then((data) => {
        setData(data);
        setDances(data.map((item) => item.danceName).flat());
      })
    );
  }, []);

  return (
    <div className="pt-12">
      <h2 className="text-2xl pb-8">My Purchased Classes : {dances.length} </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="bg-red-500 text-white">
            <tr>
              <th>serial</th>
              <th>Class Name </th>
              <th>Available Seat </th>
            </tr>
          </thead>
          <tbody className="bg-green-100">
            {dances.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>

                <td>{user} </td>

                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClass;
