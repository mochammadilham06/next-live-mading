import React from "react";
import Link from "next/link";
import Card from "@live-component/Card";
const RegisterPage = () => {
  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto max-w-md grow">
        <Card ClassNames="rounded-xl">
          <h1 className="text-center font-bold my-5 text-2xl">REGISTER</h1>
          <form className="space-y-3">
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-slate-500"
                id="username"
                required
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-slate-500"
                id="email"
                required
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-slate-500"
                id="gender"
                required
                type="text"
                placeholder="Gender"
              />
            </div>
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Addres
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-slate-500"
                id="address"
                required
                type="text"
                placeholder="Address"
              />
            </div>
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-slate-500"
                id="username"
                required
                type="password"
                placeholder="***********"
              />
            </div>

            <div className="">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
              <h5 className="my-3 text-center">
                Already have ?{" "}
                <Link href={"/auth/login"} className="text-blue-500 font-bold">
                  Login
                </Link>
              </h5>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
