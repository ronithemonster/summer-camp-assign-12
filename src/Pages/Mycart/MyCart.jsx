import useCart from "../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const handlePayment = (item) => {
    const price = item.price;
    localStorage.setItem("price", price);

    console.log("single payment", item);
  };

  return (
    <div className="pt-12 uppercase">
      <div className="">
        <h2 className="text-xl">My Total Classes: {cart.length} </h2>
      </div>
      <div className="overflow-x-auto w-full pt-12">
        <table className="table w-full ">
          {/* head */}
          <thead className="bg-red-500 text-white">
            <tr>
              <th>NO.</th>
              <th>Dance/AVATAR</th>
              <th>Dance Name</th>
              <th>Fees</th>
              <th>Action</th>
              <th>pay</th>
            </tr>
          </thead>
          <tbody className="bg-green-100">
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-left">${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost bg-red-600  text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
                {/* to={'/dashboard/payment'} */}
                <td>
                  <Link to={"/dashboard/payment"}>
                    <button
                      onClick={() => handlePayment(item)}
                      className="btn btn-warning btn-sm"
                    >
                      PAY
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* 
            <div>
               
          
          <h2 className="text-3xl mb-8"> Payment here </h2>
          <Elements stripe={stripePromise}>
              <CheckoutForm   cart={cart} price={price} ></CheckoutForm>
          </Elements>
      </div> */}
    </div>
  );
};

export default MyCart;
