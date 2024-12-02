"use client";

import { useState } from "react";
import BackHeader from "../components/BackHeader";
import BottomBar from "../components/BottomBar";

export default function AddMoneyPage() {
  const [formData, setFormData] = useState({
    amount: 0,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (value > 10000) {
      setError("Amount cannot exceed ₹10,000");
    } else {
      setError(""); // Clear error if validation passes
    }
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const isSubmitDisabled = !formData.amount;

  return (
    <div className="pb-20">
      <BackHeader title="Add Money" />

      <div className="p-2">
        <div className="my-5 text-center">
          <p className="p-2">Enter your amount in rupees</p>
          <div
            className={`relative flex items-center pl-3 border-b-2 transition-all duration-300 ${
              error
                ? "border-red-500"
                : "border-gray-300 focus-within:border-blue-600"
            }`}
          >
            <label
              className={`absolute text-2xl ${
                error ? "text-red-500 opacity-100" : "opacity-70"
              }`}
            >
              ₹
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              max={10000}
              value={formData.amount > 0 ? formData.amount : ""}
              onChange={handleChange}
              className={`block w-full text-3xl text-center py-3 placeholder:text-gray-400 focus:outline-none bg-transparent ${
                error ? "text-red-500 placeholder:text-red-300" : ""
              }`}
              placeholder="0"
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2 text-left">{error}</p>
          )}
        </div>

        <div className="my-5 grid grid-cols-3 gap-x-1 gap-y-5 text-center items-center justify-center px-10">
          {[5000, 2000, 1000, 500, 200, 100].map((value) => (
            <p
              key={value}
              className="cursor-pointer border bg-slate-100 dark:bg-gray-900 rounded-2xl p-1 font-light hover:bg-gray-200 dark:hover:bg-gray-800"
              onClick={() =>
                setFormData((prev) => ({ ...prev, amount: value }))
              }
            >
              <span className="text-xs">+ </span>₹ {value}
            </p>
          ))}
        </div>

        <button
          disabled={isSubmitDisabled || formData.amount <= 0 || error}
          className={`my-5 border border-opacity-10 w-full rounded-md text-white py-3 font-bold bg-[var(--primary)] cursor-pointer active:bg-slate-300 
    ${
      isSubmitDisabled || formData.amount <= 0 || error
        ? "disabled:opacity-50"
        : ""
    }`}
        >
          {formData.amount <= 0 ? "Enter Amount" : "Pay ₹" + formData.amount}
        </button>
      </div>

      <BottomBar />
    </div>
  );
}
