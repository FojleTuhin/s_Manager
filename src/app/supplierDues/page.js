"use client";

import { useState } from "react";
import { ArrowLeft, Phone, Search, MessageSquareMore, X } from "lucide-react";
import Link from "next/link";

const customerData = [
  {
    id: 1,
    name: "Safat Jamil",
    phone: "01121454474",
    amount: 500,
    type: "debit",
    date: "12-12-2012",
    product: {
      name: "Alu",
      quantity: "1kg",
      details: "This product is expensive",
      price: 40,
    },
  },
  {
    id: 2,
    name: "John Doe",
    phone: "01234567890",
    amount: 750,
    type: "credit",
    date: "15-01-2023",
    product: {
      name: "Rice",
      quantity: "2kg",
      details: "Premium quality rice",
      price: 120,
    },
  },
  {
    id: 3,
    name: "Jane Smith",
    phone: "09876543210",
    amount: 300,
    type: "debit",
    date: "20-02-2023",
    product: {
      name: "Potato",
      quantity: "5kg",
      details: "Fresh potatoes",
      price: 50,
    },
  },
  {
    id: 4,
    name: "Alice Johnson",
    phone: "05551234567",
    amount: 1000,
    type: "credit",
    date: "05-03-2023",
    product: {
      name: "Onion",
      quantity: "2kg",
      details: "Fresh onions",
      price: 30,
    },
  },
  {
    id: 5,
    name: "Bob Williams",
    phone: "07890123456",
    amount: 250,
    type: "debit",
    date: "10-04-2023",
    product: {
      name: "Garlic",
      quantity: "1kg",
      details: "Fresh garlic",
      price: 20,
    },
  },
];

export default function CustomerDuesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState();

  const filteredCustomers = customerData.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className=" max-w-[402px] mx-auto px-4 relative">
      {/* Header Search */}
      <div className="sticky top-0 bg-white p-4 flex items-center gap-3 mb-8">
        <Link href="/" className="p-1">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search customers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-8 p-4 rounded-full border border-[#000] bg-white focus:outline-none focus:border-gray-300 text-base"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2">
            <Search className="h-5 w-5 text-[#000]" />
          </button>
        </div>
      </div>

      {/* Filtered Customers Section */}
      {searchQuery && (
        <div className="mb-8">
          {/* <h2 className="text-lg font-semibold mb-4">Search Results</h2> */}
          {filteredCustomers.length > 0 ? (
            filteredCustomers.map((data) => (
              <div
                onClick={() => setSelectedCustomer(data)}
                key={data.id}
                className="mb-4 last:mb-0 cursor-pointer"
              >
                <div className="py-4 flex justify-between border-b border-black">
                  <div>
                    <p className="text-[20px]">{data.name}</p>
                    <p>{data.phone}</p>
                  </div>
                  <div className="flex gap-4">
                    <Phone size={24} />
                    <MessageSquareMore size={24} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No results found</p>
          )}
        </div>
      )}

      {/* Total Customer Dues Section */}
      <div className="mt-8">
        <p className="text-[18px] font-semibold mb-6">Total Customer Dues</p>

        {customerData.map((data) => (
          <div onClick={() => setSelectedCustomer(data)} key={data.id}>
            <div className="py-4 flex justify-between border-b border-black cursor-pointer">
              <div>
                <div className=" gap-6 items-center flex">
                  <p className="text-[20px]">{data.name}</p>
                  <p className="font-semibold text-right">
                    <span
                      className={`${
                        data.type === "credit"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {data.amount}
                    </span>
                  </p>
                </div>
                <p>{data.phone}</p>
              </div>
              <div className="flex gap-4">
                <a href={`tel:+${data.phone}`}>
                  <Phone size={24} />
                </a>
                <MessageSquareMore size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCustomer && (
        <div className="fixed inset-0 bg-black/20 z-50 flex items-start justify-center pt-16  animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-[402px] p-4 pb-12  rounded-lg shadow-lg animate-in slide-in-from-bottom duration-300">
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setSelectedCustomer(null)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="py-4 flex justify-between border-b border-black">
              <div>
                <div className=" gap-6 items-center flex">
                  <p className="text-[20px]">{selectedCustomer.name}</p>
                </div>
                <p>{selectedCustomer.phone}</p>
              </div>
              <div className="flex gap-4">
                <a href={`tel:+${selectedCustomer.phone}`}>
                  <Phone size={24} />
                </a>
                <MessageSquareMore size={24} />
              </div>
            </div>

            <div className="mt-6">
              <p className="text-[12px] mb-2">Product</p>
              <p className="text-[20px]">{selectedCustomer.product.name}</p>
            </div>
            <div className="mt-6">
              <p className="text-[12px] mb-2">Quantity</p>
              <p className="text-[20px]">{selectedCustomer.product.quantity}</p>
            </div>
            <div className="mt-6">
              <p className="text-[12px] mb-2">Product details</p>
              <p className="text-[20px]">{selectedCustomer.product.details}</p>
            </div>
            <div className="mt-6 mb-6">
              <p className="text-[12px] mb-2">Price</p>
              <p className="text-[20px]">৳ {selectedCustomer.product.price}</p>
            </div>
          </div>
        </div>
      )}

      {/* Add New Due Button */}
      <div className=" p-4 bg-white">
        <button className="w-full bg-[#4EA777] text-white py-3 rounded-[16px] text-sm font-medium">
          Add new Due
        </button>
      </div>
    </div>
  );
}
