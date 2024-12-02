import BottomBar from "./components/BottomBar";

import { LuBadgeDollarSign } from "react-icons/lu";
import { AiFillAlipayCircle } from "react-icons/ai";
import { AiFillCalculator } from "react-icons/ai";
import IconElectricity from "./icons/electricity";
import LandLineIcon from "./icons/landLine";
import WalletSummery from "./icons/walletSummery";
import IconHistory from "./icons/History";
import IconAddMoney from "./icons/IconAddMoney";
import Carousel from "./components/Carousel";
import IconPercent from "./icons/IconPercent";
import HomeHeader from "./components/HomeHeader";
import Link from "next/link";

export default function Home() {
  const servieThemeData = [
    { label: "Margin", icon: IconElectricity },
    { label: "Profit", icon: LandLineIcon },
    { label: "Revenue", icon: AiFillAlipayCircle },
    { label: "Expense", icon: AiFillCalculator },
    { label: "Balance", icon: LuBadgeDollarSign },
    { label: "Growth", icon: LuBadgeDollarSign },
    { label: "Savings", icon: LuBadgeDollarSign },
    { label: "Investment", icon: LuBadgeDollarSign },
    { label: "Income", icon: LuBadgeDollarSign },
    { label: "Debt", icon: LuBadgeDollarSign },
  ];
  const headerThemeData = [
    { label: "Add Money", icon: IconAddMoney, href: "/addmoney" },
    { label: "Summery", icon: WalletSummery, href: "/addmoney" },
    { label: "History", icon: IconHistory, href: "/history" },
    { label: "Margin", icon: IconPercent, href: "/margin" },
  ];

  return (
    <>
      <div className="bg-gradient-to-br to-[var(--primary-dark)] from-[var(--primary)] dark:to-black dark:from-gray-900">
        <div className="relative pb-16">
          <div className="p-2">
            <HomeHeader />
            <div className="flex justify-center items-center flex-col text-white my-4">
              <p className="text-sm p-2">Available Balance</p>
              <p className="text-4xl">₹ 490.98</p>
            </div>
          </div>

          <div className="absolute -bottom-10 w-full px-7">
            <div className="flex justify-between text-blake bg-white dark:text-white dark:border border-gray-400 dark:bg-neutral-900 rounded-md p-4 shadow-lg">
              {headerThemeData.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center flex-col"
                >
                  <item.icon size={30} />
                  <span className="text-sm mt-2">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 p-2 pb-28 bg-white dark:bg-black rounded-t-xl">
          <div className="my-4">
            <h4 className="text-lg font-bold">Services</h4>
          </div>

          <div className="grid grid-cols-4 gap-2 my-4">
            {servieThemeData.map((item, index) => (
              <div key={index} className="flex items-center flex-col">
                <i className="cursor-pointer active:bg-slate-300 dark:active:bg-gray-100 text-primary bg-gray-50 dark:bg-gray-900 rounded-full border border-opacity-50 border-gray-300 shadow-md p-3">
                  <item.icon size={28} className={"dark:text-white"} />
                </i>
                <span className="text-sm py-2">{item.label}</span>
              </div>
            ))}
          </div>

          <Carousel />
        </div>
      </div>
      <BottomBar />
    </>
  );
}
