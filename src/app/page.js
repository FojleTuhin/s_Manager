"use client";

import {
  ArrowLeft,
  Download,
  Users,
  Truck,
  Search,
  ChevronLeft,
  Plus,
  Calendar1,
} from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div className="min-h-screen max-w-[402px] mx-auto bg-gray-50 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 p-4">
        <button className="">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button className="rounded-lg bg-[#4EA777] p-2">
          <Download className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-2 gap-4 mb-4 p-4">
        <Link
          href="#"
          className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-[#000000]"
        >
          <div className="mb-2 flex justify-between items-center">
            <Users className="h-12 w-12" />
            <Plus className="h-6 w-6" />
          </div>
          <span className="text-sm text-center">Add Customer Due</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-[#000000]"
        >
          <div className="mb-2 flex justify-between items-center">
            <Truck className="h-12 w-12" />
            <Plus className="h-6 w-6" />
          </div>
          <span className="text-sm text-center">Add Suppliers Due</span>
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="space-y-4 mb-6 p-4">
        <div className="bg-[#B9B9B9] p-4 rounded-lg text-[#000000]">
          <Link href="/customerDues" className="">
            <div className="flex justify-between mb-4 items-center">
              <h3 className="w320:text-[16px] text-[12px]">
                Total Customers Due
              </h3>
              <p className="w320:text-[24px] text-[20px] ">Tk 20,000</p>
            </div>
            <div className="flex justify-end">
              <Link href="#" className="text-[12px] underline">
                View All
              </Link>
            </div>
          </Link>
        </div>
        <div className="bg-[#B9B9B9] p-4 rounded-lg text-[#000000]">
          <Link href="/supplierDues" className="">
            <div className="flex justify-between mb-4 items-center">
              <h3 className="w320:text-[16px] text-[12px]">
                Total Suppliers Due
              </h3>
              <p className="w320:text-[24px] text-[20px] ">Tk 5000</p>
            </div>
            <div className="flex justify-end">
              <Link href="#" className="text-[12px] underline">
                View All
              </Link>
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className=" mb-5">
        <div className="flex justify-between items-center mb-4 bg-[#E0E0E0] p-4">
          <h3 className="font-medium">Recent</h3>
          <Search className="h-5 w-5" />
        </div>

        <div className="space-y-4 p-4">
          {[
            { name: "Safat Jamil", date: "12-12-2012", amount: -500 },
            { name: "Safat Jamil", date: "12-12-2012", amount: 500 },
            { name: "Safat Jamil", date: "12-12-2012", amount: -500 },
          ].map((transaction, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-4 border-b border-black"
            >
              <div>
                <h4 className="">{transaction.name}</h4>
                <div className="flex gap-[6px] items-center">
                  <Calendar1 size={14} />
                  <p className="text-[12px] text-[#000000]">
                    {transaction.date}
                  </p>
                </div>
              </div>
              <span
                className={`font-semibold ${
                  transaction.amount > 0 ? "text-[#1AC225]" : "text-[#C21A1A]"
                }`}
              >
                {transaction.amount > 0 ? "+" : ""} TK{" "}
                {Math.abs(transaction.amount)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
