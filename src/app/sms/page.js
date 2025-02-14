"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function SMSPage() {
  return (
    <div className="min-h-screen bg-white p-4 max-w-md mx-auto">
      {/* Header */}
      <div className="mb-6">
        <Link href="/" className="p-2">
          <ArrowLeft className="h-5 w-5" />
        </Link>
      </div>

      {/* Recipient Info */}
      <div className="space-y-4 mb-6">
        <div className="space-y-1">
          <p className="text-sm text-black">To</p>
          <p className="font-medium">Safat Jamil</p>
          <p className="text-sm text-black">01121454474</p>
        </div>

        {/* Message Input */}
        <Textarea
          placeholder="Message..."
          className="min-h-[100px] border rounded-md"
        />

        {/* Send Button */}
        <div className="flex gap-2 items-center">
          <Button className=" bg-[#4EA777]  text-white">Send Message</Button>
          <p className="text-sm  ml-2">(0 credit left)</p>
        </div>
      </div>

      {/* SMS Packages */}
      <div className="space-y-4">
        <h3 className="font-medium">Buy SMS</h3>
        <div className="grid grid-cols-3 gap-3">
          <button className="p-4 border rounded-lg text-center hover:border-[#4EA777] transition-colors">
            <div className="font-medium">5 SMS</div>
            <div className="text-sm text-black">10 Taka</div>
          </button>
          <button className="p-4 border rounded-lg text-center bg-[#4EA777] text-white">
            <div className="font-medium">10 SMS</div>
            <div className="text-sm text-green-100">15 Taka</div>
          </button>
          <button className="p-4 border rounded-lg text-center hover:border-[#4EA777] transition-colors">
            <div className="font-medium">15 SMS</div>
            <div className="text-sm text-black">20 Taka</div>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-[#4EA777]"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
