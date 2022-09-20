import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import Navbar from "../components/Navbar";
import { signup } from '../api/auth';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutateAsync, isError, error } = useMutation(signup)

  const signupHandler = async (ev) => {
    ev.preventDefault();
    const data = await mutateAsync({ name, email, password })

    if (data.status === 201) {
      localStorage.setItem('user', data.data)
      toast.success('User created successfully. Please now login...')
      navigate('/login')
    }
  };

  if (isError) {
    toast.error(error.response.data.message)
  }

  return (
    <div className="w-full flex flex-wrap">
      <div className="w-1/2 shadow-2xl">
        <img
          className="object-cover w-full h-screen hidden md:block"
          src="https://source.unsplash.com/Am1io6KusFM"
          alt="Background"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col">
        <Navbar />

        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Join Us.</p>
          <form className="flex flex-col pt-3 md:pt-8" onSubmit={signupHandler}>
            <div className="flex flex-col pt-4">
              <label htmlFor="name" className="text-lg">
                Name
              </label>
              <input
                required
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                type="text"
                id="name"
                placeholder="John Smith"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                required
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                type="email"
                id="email"
                placeholder="your@email.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label htmlFor="password" className="text-lg">
                Password
              </label>
              <input
                required
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                type="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <input
              type="submit"
              value="Sign Up"
              className="dark:bg-gray-900 text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 cursor-pointer"
            />
          </form>
          <div className="text-center pt-12 pb-12">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="underline font-semibold">
                Log in here.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
