"use client";

import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import ThemeSwitcher from "./ThemeSwitcher";
// import { useRouter } from "next/router";

export default function BackHeader({ title = "Page Title" }) {
  const router = useRouter();

  const handleBack = () => {
    if (router.asPath !== "/") {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="p-3 flex gap-4 items-center text-white bg-[var(--primary)] dark:bg-black">
      <button
        onClick={handleBack}
        className="p-2 bg-gray-100 bg-opacity-20 rounded-xl"
        aria-label="Go Back"
      >
        <IoMdArrowRoundBack size={28} />
      </button>
      <h4 className="font-extrabold text-lg">{title}</h4>
      <div className="ml-auto">
        <ThemeSwitcher />
      </div>
    </div>
  );
}
