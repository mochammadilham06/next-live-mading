import Card from "@live-component/Card";
import Layout from "@live-component/Layout";
import React from "react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto max-w-md grow">
        <Card ClassNames="rounded-xl">
          <h1 className="text-center font-bold my-5 text-2xl">LOGIN</h1>
          <form className="space-y-5">
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
                type="text"
                placeholder="Username"
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
                type="password"
                placeholder="***********"
              />
            </div>

            <div className="">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <h5 className="my-3 text-center">
                Dont have a account ?{" "}
                <Link
                  href={"/auth/register"}
                  className="text-blue-500 font-bold"
                >
                  Register
                </Link>
              </h5>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
