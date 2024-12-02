"use client";

import { useState } from "react";
import BackHeader from "../components/BackHeader";
import BottomBar from "../components/BottomBar";
import Button_I from "../components/Botton";

export default function Settings() {
  const [formData, setFormData] = useState({
    username: "",
    about: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "United States",
    streetAddress: "",
    city: "",
    region: "",
    postalCode: "",
    comments: true,
    candidates: false,
    offers: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submission logic here (e.g., API calls)
  };

  return (
    <div className="pb-20">
      <BackHeader title="My Account" />

      <form onSubmit={handleSubmit} className="p-2">
        <div className="space-y-12">
          {/* Profile Section */}
          <div className="p-4">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block">
                  Username
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white dark:bg-black pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="block min-w-0 grow py-3 pl-1 pr-3  placeholder:text-gray-400 focus:outline-none dark:bg-black"
                      placeholder="User name"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="username" className="block ">
                  Phone
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white dark:bg-black  pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="block min-w-0 grow py-3 pl-1 pr-3  placeholder:text-gray-400 focus:outline-none dark:bg-black"
                      placeholder="User name"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="username" className="block ">
                  Email
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white dark:bg-black pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="block min-w-0 grow py-3 pl-1 pr-3  placeholder:text-gray-400 focus:outline-none dark:bg-black"
                      placeholder="User name"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="username" className="block ">
                  Sex
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white dark:bg-black pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="block min-w-0 grow py-3 pl-1 pr-3  placeholder:text-gray-400 focus:outline-none dark:bg-black"
                      placeholder="User name"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block ">
                  Address
                </label>
                <div className="mt-2">
                  <textarea
                    name="about"
                    id="about"
                    rows="3"
                    value={formData.about}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white dark:bg-black px-3 py-1.5  outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  ></textarea>
                </div>
              </div>

              <Button_I />
            </div>
          </div>
        </div>
      </form>

      <BottomBar />
    </div>
  );
}
