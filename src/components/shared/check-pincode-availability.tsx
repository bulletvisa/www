"use client";

import { useState } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const CheckPincodeAvailability: React.FC = () => {
  const [pincode, setPincode] = useState("");
  const [isPincodeSubmitted, setIsPincodeSubmitted] = useState(false);

  const handlePincodeChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setPincode(event.target.value);
  };

  const handleCheck = () => {
    if (isPincodeSubmitted) {
      setPincode("");
      setIsPincodeSubmitted(false);
    } else {
      setIsPincodeSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">Check Serviceability</h3>
        <p className="text-foreground/80">
          Enter you pincode to see if your area is Serviceability
        </p>
      </div>
      <div className="flex items-center justify-between w-full md:w-80 p-1 border rounded-xl">
        <Input
          className="border-0 outline-none"
          placeholder="Enter pincode"
          value={pincode}
          onChange={handlePincodeChange}
        />

        <Button
          disabled={
            !z
              .string()
              .regex(/^\d{6}$/)
              .safeParse(pincode).success
          }
          onClick={handleCheck}
        >
          {isPincodeSubmitted ? "Change" : "Check"}
        </Button>
      </div>

      {isPincodeSubmitted && (
        <div className="flex items-center gap-1">
          <CheckCircle2 fill="green" className="text-white inline" />
          <p>
            Get it delivered by{" "}
            <span className="font-semibold">+5 working days</span>
          </p>
        </div>
      )}
    </div>
  );
};
