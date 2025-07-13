import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add login logic here
    document.getElementById('my_modal_3').close(); // close modal after submission (optional)
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        {/* 🟢 Form Starts Properly */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Close Button */}
          <button
            type="button"
            onClick={() => document.getElementById('my_modal_3').close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>

          <h3 className="text-center text-2xl my-4 text-gray-800 dark:text-white">Login</h3>

          {/* Email Field */}
          <div className="text-xl text-center">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              {...register('email', { required: 'Email is required' })}
              type="email"
              placeholder="Enter email id"
              className="w-80 px-3 py-1 border rounded-md outline-none"
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="text-xl text-center">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              {...register('password', { required: 'Password is required' })}
              type="password"
              placeholder="Enter password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
            />
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Login
            </button>

            <p className="mt-3 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Login;
