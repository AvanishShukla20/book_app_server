import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Login from './Login';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add your sign-up logic here
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-[90%] max-w-md">
        <h3 className="text-center text-2xl mb-6 text-gray-800 dark:text-white font-bold">Sign Up</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Name</label>
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 rounded-md outline-none dark:bg-gray-700 dark:text-white"
            />
            {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Email</label>
            <input
              {...register('email', { required: 'Email is required' })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md outline-none dark:bg-gray-700 dark:text-white"
            />
            {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Password</label>
            <input
              {...register('password', { required: 'Password is required' })}
              type="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 rounded-md outline-none dark:bg-gray-700 dark:text-white"
            />
            {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Phone</label>
            <input
              {...register('phone', { required: 'Phone number is required' })}
              type="text"
              placeholder="Enter contact number"
              className="w-full px-3 py-2 rounded-md outline-none dark:bg-gray-700 dark:text-white"
            />
            {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-300">Address</label>
            <input
              {...register('address', { required: 'Address is required' })}
              type="text"
              placeholder="Enter address"
              className="w-full px-3 py-2 rounded-md outline-none dark:bg-gray-700 dark:text-white"
            />
            {errors.address && <p className="text-sm text-red-600">{errors.address.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Home */}
        {/* Link to Home */}
<div className="mt-6 flex items-center justify-center">
  <Link
    to="/"
    className="bg-blue-500 hover:bg-gray-600 text-sm text-gray-800 dark:text-white py-2 px-4 rounded-md transition duration-200"
  >
    Home
  </Link>
</div>


        
      </div>
    </div>
  );
};

export default SignUp;
