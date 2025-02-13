"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Phone,
  MessageSquare,
  Search,
  MessageSquareMore,
} from "lucide-react";
import Link from "next/link";

const customerData = [
  {
    id: 1,
    name: "Safat Jamil",
    phone: "01121454474",
    amount: 500,
    type: "debit",
    date: "12-12-2012",
  },
  {
    id: 2,
    name: "Safat Jamil",
    phone: "01121454474",
    amount: 500,
    type: "credit",
    date: "12-12-2012",
  },
  {
    id: 3,
    name: "Safat Jamil",
    phone: "01121454474",
    amount: 500,
    type: "debit",
    date: "12-12-2012",
  },
  {
    id: 4,
    name: "Safat Jamil",
    phone: "01121454474",
    amount: 500,
    type: "credit",
    date: "12-12-2012",
  },
  {
    id: 5,
    name: "Safat Jamil",
    phone: "01121454474",
    amount: 500,
    type: "debit",
    date: "12-12-2012",
  },
];

export default function CustomerDuesPage() {
  //   const [searchQuery, setSearchQuery] = useState("");

  //   const filteredCustomers = customerData.filter((customer) =>
  //     customer.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );

  //   const currentCustomer = filteredCustomers[0];

  return (
    <div className="min-h-screen max-w-[402px] mx-auto  px-4">
      {/* Header Search */}
      <div className="sticky top-0 bg-white p-4 flex items-center gap-3 mb-8">
        <Link href="/" className="p-1">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search customers..."
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-8 p-4 rounded-full border border-[#000] bg-white focus:outline-none focus:border-gray-300 text-base"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2">
            <Search className="h-5 w-5 text-[#000]" />
          </button>
        </div>
      </div>

      <div>
        <div className="py-4 flex justify-between border-b border-black mb-32">
          <div>
            <p className="text-[20px]">Safat Jamil</p>
            <p>01121454474</p>
          </div>
          <div className="flex gap-4 ">
            <Phone size={24} />
            <MessageSquareMore size={24} />
          </div>
        </div>
      </div>

      {customerData.map((data) => (
        <div key={data.id}>
          <div className="py-4 flex justify-between border-b border-black ">
            <div>
              <p className="text-[20px]">Safat Jamil</p>
              <p>01121454474</p>
            </div>
            <div className="flex gap-4 ">
              <Phone size={24} />
              <MessageSquareMore size={24} />
            </div>
          </div>
        </div>
      ))}

      {/* Add New Due Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4">
        <button className="w-full bg-green-500 text-white py-3 rounded-lg text-sm font-medium">
          Add new Due
        </button>
      </div>
    </div>
  );
}
