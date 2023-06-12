import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { saveUser } from "../../components/SaveUser/SaveUser";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // Handle google signin
  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        saveUser(result?.user);
        // saveUser(result.user)
        Swal.fire({
          position: "top-middle",
          icon: "success",
          title: "User Logged in Successfully",

          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        // setLoading(false)
        console.log(err.message);
        toast.error(err.message);
      });
  };

  const onSubmit = (data) => {
    setLoading(true);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      console.log(data);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = {
            name: data.name,
            email: data.email,
            photo: data.photoURL,
            role: 'admin'
          };
          fetch(`http://localhost:5000/users/${email}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.upsertedId) {
                Swal.fire({
                  position: "top-middle",
                  icon: "success",
                  title: "User created Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  return (
    <div className=" pt-20 bg-slate-100 shadow-md  grid grid-cols-2 py-10 gap-x-10">
      <div className="items-center py-36 px-36 ">
        <iframe
          className="h-96 w-96"
          src="https://embed.lottiefiles.com/animation/107385"
        ></iframe>
                
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md bg-white rounded px-8 pt-6 pb-8 shadow-lg"
      >
        <h2 className="text-2xl text-center text-gray-700 font-bold mb-2">
          Register
        </h2>

        <div className="mb-2">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-blue-500"
          />
          {errors.name && (
            <span role="alert" className="text-red-500 text-xs">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={`w-full px-3 py-2 rounded border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-blue-500`}
          />
          {errors.email && (
            <span role="alert" className="text-red-500 text-xs">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\W).+$/,
                message:
                  "Password must contain at least one capital letter and one special character",
              },
            })}
            className={`w-full px-3 py-2 rounded border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-blue-500`}
          />
          {errors.password && (
            <span role="alert" className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="mb-2">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className={`w-full px-3 py-2 rounded border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-blue-500`}
          />
          {errors.confirmPassword && (
            <span role="alert" className="text-red-500 text-xs">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <div className="mb-2">
          <label
            htmlFor="photoUrl"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Photo URL
          </label>
          <input
            type="text"
            id="photoUrl"
            {...register("photoURL")}
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-rose-500 w-full rounded-md py-3 text-white"
        >
          {loading ? (
            <FaSpinner className="m-auto animate-spin" size={24} />
          ) : (
            "Register"
          )}
        </button>

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </form>
    </div>
  );
};

export default Register;
