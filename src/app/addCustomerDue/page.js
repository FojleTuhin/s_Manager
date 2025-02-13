"use client";

import { useState } from "react";
import {
  ChevronDown,
  Phone,
  MessageSquare,
  ArrowLeft,
  ChevronLeft,
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

// Mock customer data
const mockCustomers = [
  { id: 1, name: "Safat Jamil", phone: "01121454474", due: 500 },
  { id: 2, name: "Safin Jamil", phone: "01121454474", due: 1000 },
];

export default function CustomerForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [date, setDate] = useState();
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
    <div className="min-h-screen bg-background p-4 max-w-md mx-auto">
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
            id="amountDue"
            type="number"
            value={formData.amountDue}
            onChange={(e) =>
              setFormData({ ...formData, amountDue: e.target.value })
            }
          />
        </div>

        <div className=" p-4 bg-white">
          <div className="w-full text-center bg-[#4EA777] text-white py-3 rounded-[16px] text-sm font-medium">
            Save
          </div>
        </div>
      </div>
    </div>
  );
}
