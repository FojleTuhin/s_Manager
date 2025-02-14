"use client";

import { useState } from "react";
import {
  ChevronDown,
  Phone,
  MessageSquare,
  ArrowLeft,
  ChevronLeft,
  X,
  MessageSquareMore,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import Link from "next/link";
import Image from "next/image";
import img from "../../../public/Frame 267.png";

// Mock customer data
const mockCustomers = [
  { id: 1, name: "Safat Jamil", phone: "01121454474", due: 500 },
  { id: 2, name: "Safin Jamil", phone: "01121454474", due: 1000 },
];

export default function CustomerForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [date, setDate] = useState();
  const [save, setSave] = useState(false);
  const [formData, setFormData] = useState({
    customerName: "",
    phoneNumber: "",
    productName: "",
    productDescription: "",
    quantity: "",
    sellingPrice: "",
    amountPaid: "",
    amountDue: "",
  });

  const filteredCustomers = searchTerm
    ? mockCustomers.filter((customer) =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
    setFormData({
      ...formData,
      customerName: customer.name,
      phoneNumber: customer.phone,
    });
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-background p-4 max-w-md mx-auto relative">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/" variant="ghost" size="icon" className="h-8 w-8">
          <ChevronLeft className="h-6 w-6" />
        </Link>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="customerName">Customers Name</Label>
          <div className="relative">
            <Input
              required
              id="customerName"
              value={selectedCustomer ? selectedCustomer.name : searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setSelectedCustomer(null);
              }}
              className="w-full"
            />
            {selectedCustomer && (
              <div className="absolute right-2 top-2 flex gap-2">
                {/* <Phone className="h-5 w-5 text-muted-foreground" /> */}
                <a href={`tel:+${selectedCustomer.phone}`}>
                  <Phone className="h-5 w-5" />
                </a>
                <MessageSquare className="h-5 w-5 " />
              </div>
            )}
          </div>

          {/* Search Results */}
          {searchTerm && !selectedCustomer && filteredCustomers.length > 0 && (
            <div className="mt-1 border rounded-lg divide-y">
              {filteredCustomers.map((customer) => (
                <div
                  key={customer.id}
                  className="p-3 cursor-pointer hover:bg-muted"
                  onClick={() => handleCustomerSelect(customer)}
                >
                  <div className="flex justify-between">
                    <div>
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {customer.phone}
                      </div>
                    </div>
                    <div className="text-red-500 font-medium">
                      {customer.due}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedCustomer && (
          <div className="text-sm  ">
            Previous Due -{" "}
            <span className="text-[#C21A1A]">{selectedCustomer.due}</span>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            required
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            placeholder="01XXX-XXX-XX"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="productName">Product Name</Label>
          <Input
            required
            id="productName"
            value={formData.productName}
            onChange={(e) =>
              setFormData({ ...formData, productName: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="productDescription">Product Description</Label>
          <Input
            id="productDescription"
            value={formData.productDescription}
            onChange={(e) =>
              setFormData({ ...formData, productDescription: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity</Label>
          <div className="relative">
            <Input
              required
              id="quantity"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
              className="pr-8"
            />
            {/* <ChevronDown className="absolute right-2 top-2.5 h-5 w-5 text-muted-foreground" /> */}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="sellingPrice">Selling Price</Label>
          <Input
            required
            id="sellingPrice"
            type="number"
            value={formData.sellingPrice}
            onChange={(e) =>
              setFormData({ ...formData, sellingPrice: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <Label>Due Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                {date ? date.toDateString() : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="amountPaid">Amount Paid</Label>
          <Input
            required
            id="amountPaid"
            type="number"
            value={formData.amountPaid}
            onChange={(e) =>
              setFormData({ ...formData, amountPaid: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="amountDue">Amount Due</Label>
          <Input
            required
            id="amountDue"
            type="number"
            value={formData.amountDue}
            onChange={(e) =>
              setFormData({ ...formData, amountDue: e.target.value })
            }
          />
        </div>

        <div className=" p-4 bg-white">
          <button
            onClick={() => setSave(true)}
            className="w-full text-center bg-[#4EA777] text-white py-3 rounded-[16px] text-sm font-medium"
          >
            Save
          </button>
        </div>
      </div>

      <div>
        {save && (
          <div className="fixed inset-0 bg-black/20 z-50 flex items-start justify-center pt-16  animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-[402px] p-4   rounded-lg shadow-lg animate-in slide-in-from-bottom duration-300">
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setSave(false)}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex justify-center mb-5">
                <Image src={img} alt="img" className="w-[180px]" />
              </div>

              <div className="flex justify-between items-center mb-5 py-4">
                <div>
                  <p>Safat Jamil</p>
                  <p>019882823423</p>
                </div>

                <div>
                  <p>12 Dec</p>
                </div>
              </div>

              <div className="flex justify-between mb-3">
                <p>Total Amount</p>
                <p>TK 1600</p>
              </div>
              <div className="flex justify-between mb-3">
                <p>Total Due Paid</p>
                <p className="text-[#1AC225]">TK 400</p>
              </div>
              <div className="flex justify-between mb-8 text-[24px] font-semibold">
                <p>Current Due</p>
                <p className="text-[#C21A1A]">-TK 1200</p>
              </div>

              <div className=" p-4 bg-white">
                <div className="w-full bg-[#4EA777] text-white text-center py-3 rounded-[16px] text-sm font-medium">
                  <Link href="/">Back to home</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
