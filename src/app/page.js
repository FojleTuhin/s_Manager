"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
  Download,
  Users,
  Truck,
  Search,
  ChevronLeft,
  Plus,
  Calendar1,
  X,
  CalendarIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [download, setDownload] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <div className="min-h-screen max-w-[402px] mx-auto bg-gray-50 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 p-4">
        <button className="">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => setDownload(true)}
          className="rounded-lg bg-[#4EA777] p-2"
        >
          <Download className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-2 gap-4 mb-4 p-4">
        <Link
          href="/addCustomerDue"
          className="flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-[#000000]"
        >
          <div className="mb-2 flex justify-between items-center">
            <Users className="h-12 w-12" />
            <Plus className="h-6 w-6" />
          </div>
          <span className="text-sm text-center">Add Customer Due</span>
        </Link>
        <Link
          href="/addSupplierDue"
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
              <p className="text-[12px] underline">View All</p>
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
              <p className="text-[12px] underline">View All</p>
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

      {download && (
        <div className="fixed inset-0 bg-black/20 z-50 flex items-start justify-center pt-16 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-[402px] p-4 rounded-lg shadow-lg animate-in slide-in-from-bottom duration-300">
            <div className="flex justify-end">
              <button
                onClick={() => setDownload(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4 space-y-6">
              {/* Starting Date */}
              <div className="space-y-2">
                <label className="text-lg font-medium">Starting</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal h-12"
                    >
                      {startDate ? (
                        format(startDate, "PPP")
                      ) : (
                        <span className="text-muted-foreground">
                          Pick a date
                        </span>
                      )}
                      <CalendarIcon className="ml-auto h-5 w-5 text-gray-400" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Finishing Date */}
              <div className="space-y-2">
                <label className="text-lg font-medium">Finishing</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal h-12"
                    >
                      {endDate ? (
                        format(endDate, "PPP")
                      ) : (
                        <span className="text-muted-foreground">
                          Pick a date
                        </span>
                      )}
                      <CalendarIcon className="ml-auto h-5 w-5 text-gray-400" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex justify-center">
                <Button
                  className="bg-[#4EA777] hover:bg-[#4EA777]/90 text-white py-6 text-lg rounded-lg px-8"
                  onClick={() => {
                    console.log("Download clicked", { startDate, endDate });
                    // setDownload(false);
                  }}
                >
                  Download Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
