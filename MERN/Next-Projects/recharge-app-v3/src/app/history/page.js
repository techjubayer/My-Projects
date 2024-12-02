"use client";
import React, { useState } from "react";
import BackHeader from "../components/BackHeader";
import BottomBar from "../components/BottomBar";
import { CiBoxList } from "react-icons/ci";
import { CiMobile1 } from "react-icons/ci";
import { CgListTree } from "react-icons/cg";
import { RiListCheck2 } from "react-icons/ri";

import { IoMdCopy } from "react-icons/io";
import Image from "next/image";

export default function HistoryPay() {
  const [activeTab, setActiveTab] = useState("Recharge");

  const rechargeHistroy = [
    {
      operator: "Jio",
      icUrl: "https://app.billhub.in/operators/jio.png",
      amount: 15,
      txnId: "1774863454323242",
      number: "8638199107",
      service: "Prepaid",
      operatorRef: "G87343746TYGEUH",
    },
    {
      operator: "Jio",
      icUrl: "https://app.billhub.in/operators/jio.png",
      amount: 299,
      txnId: "1774863454323242",
      number: "8638199107",
      service: "Prepaid",
      operatorRef: "G87343746TYGEUH",
    },
    {
      operator: "Voda Idea",
      icUrl: "https://app.billhub.in/operators/vi.png",
      amount: 666,
      txnId: "1774863454323242",
      number: "8638199107",
      service: "Prepaid",
      operatorRef: "G87343746TYGEUH",
    },
    {
      operator: "Jio",
      icUrl: "https://app.billhub.in/operators/jio.png",
      amount: 299,
      txnId: "1774863454323242",
      number: "8638199107",
      service: "Prepaid",
      operatorRef: "G87343746TYGEUH",
    },
    {
      operator: "Voda Idea",
      icUrl: "https://app.billhub.in/operators/vi.png",
      amount: 666,
      txnId: "1774863454323242",
      number: "8638199107",
      service: "Prepaid",
      operatorRef: "G87343746TYGEUH",
    },
    {
      operator: "Voda Idea",
      icUrl: "https://app.billhub.in/operators/vi.png",
      amount: 666,
      txnId: "1774863454323242",
      number: "8638199107",
      service: "Prepaid",
      operatorRef: "G87343746TYGEUH",
    },
  ];

  const tabs = [
    {
      operator: "Recharge",
      icon: CiMobile1,
    },
    {
      operator: "Addmoney",
      icon: RiListCheck2,
    },
    {
      operator: "Ledger",
      icon: CiBoxList,
    },
    {
      operator: "Reffer",
      icon: CgListTree,
    },
  ];

  return (
    <div className="pb-20">
      <BackHeader title="History" />
      <div className="flex overflow-x-auto no-scrollbar -mb-px text-sm font-medium text-center border-b border-gray-200 dark:border-gray-700 dark:bg-black">
        {tabs.map((tab) => (
          <div className="me-2 shrink-0" key={tab.operator}>
            <button
              onClick={() => setActiveTab(tab.operator)}
              className={`inline-flex items-center justify-center gap-1 text-center p-4 border-b-2 ${
                activeTab === tab.operator
                  ? "text-[var(--primary)] border-[var(--primary)]"
                  : "border-transparent"
              }`}
            >
              <tab.icon size={20} />
              {tab.operator}
            </button>
          </div>
        ))}
      </div>
      <div className="p-4">
        {/* Render content based on active tab */}
        <p className="text-gray-700 dark:text-gray-300 font-bold">
          {activeTab} History{" "}
        </p>

        {rechargeHistroy.map((value, index) => (
          <div
            className="my-4 px-4 rounded-md dark:bg-black border-b border-gray-300 border-opacity-50 shadow-md"
            key={index}
          >
            
            <div className="my-2 flex gap-3 items-center  py-1 border-b border-gray-300 border-opacity-40">
              <Image
                className="object-scale-down"
                width={34}
                height={34}
                src={value.icUrl}
                alt=""
              />
              <div>
                <p className="font-bold mb-1 text-sm">
                  {value.operator} | {value.service}
                </p>
                <p className="text-sm">{value.number}</p>
              </div>
              <div className="ml-auto text-center">
                <p className="font-bold">₹ {value.amount}</p>
                <span className="bg-green-800 rounded-xl px-2 py-0.5 text-xs text-white">
                  Success
                </span>
              </div>
            </div>
            <div className="">
              <div className="pb-2 text-sm flex justify-between items-center">
                <p>Transaction Id: {value.txnId}</p>
                <IoMdCopy size={20} />
              </div>
              <div className="pb-2 text-sm flex justify-between items-center">
                <p>Operator Ref: {value.operatorRef}</p>
                <IoMdCopy size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <BottomBar />
    </div>
  );
}
