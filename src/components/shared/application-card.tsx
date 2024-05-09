"use client";

import { useState } from "react";
import { ChevronUp, Minus, Plus, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { VisaEtaModal } from "@/components/shared/visa-eta-modal";
import { cn } from "@/lib/utils";
import { ACCOUNT_WEBSITE_URL } from "@/constants";

type ApplicationCardProps = {
  data: {
    governmentFees: number;
    swiftFees: number;
    gstPercentage: number;
  };
};

export const ApplicationCard: React.FC<ApplicationCardProps> = (props) => {
  const [travelerCount, setTravelerCount] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const [isVisaETAModalOpen, setIsVisaETAModalOpen] = useState(false);

  const handleTravelerCountPlus = () => {
    setTravelerCount(travelerCount + 1);
  };

  const handleTravelerCountMinus = () => {
    if (travelerCount > 1) {
      setTravelerCount(travelerCount - 1);
    }
  };

  const handleExpandButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleStartApplication = () => {
    setIsVisaETAModalOpen(true);
  };

  const handleVisaEtaModalClose = () => {
    setIsVisaETAModalOpen(false);
  };

  const handleApplyApplication = () => {
    const searchParams = new URLSearchParams();

    searchParams.set("travelerCount", travelerCount.toString());
    searchParams.set("visaCountry", "SINGAPORE");

    window.location.href = `${ACCOUNT_WEBSITE_URL}/application?${searchParams}`;
  };

  return (
    <>
      <Card className="border w-full lg:w-1/3 rounded-xl h-max flex flex-col z-20 fixed bottom-0 lg:sticky lg:top-6 right-0">
        <CardHeader
          className={cn("duration-300 transition-all", !isExpanded && "pb-0")}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <UserRound size={16} />
              <h1 className="text-foreground/75">Travelers</h1>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="p-1.5 border rounded cursor-pointer"
                onClick={handleTravelerCountMinus}
              >
                <Minus size={16} />
              </div>
              <p>{travelerCount}</p>
              <div
                className="p-1.5 border rounded cursor-pointer"
                onClick={handleTravelerCountPlus}
              >
                <Plus size={16} />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="overflow-hidden transition-max-height duration-300">
            <div
              className={`${
                isExpanded ? "max-h-96" : "max-h-0"
              } transition-max-height duration-300 space-y-3`}
            >
              <Separator />
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <p className="text-foreground/75">Government Fees</p>
                  <p>
                    Rs{" "}
                    {(props.data.governmentFees * travelerCount).toLocaleString(
                      "en-IN",
                    )}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-foreground/75">Shift Fee</p>
                  <p>
                    Rs{" "}
                    {(props.data.swiftFees * travelerCount).toLocaleString(
                      "en-IN",
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Separator />
          <div
            onClick={handleExpandButtonClick}
            className="flex items-center justify-between cursor-pointer relative"
          >
            <ChevronUp
              className={cn(
                "transition-all duration-300 h-4 w-4 absolute top-0 left-1/2",
                isExpanded && "rotate-180",
              )}
            />

            <p className="text-foreground/75">Total</p>
            <div className="flex items-center gap-1">
              <div className="flex flex-col items-end">
                <p>
                  Rs{" "}
                  {(
                    (props.data.governmentFees + props.data.swiftFees) *
                    travelerCount
                  ).toLocaleString("en-IN")}
                </p>
                <p className="text-xs">
                  Includes {props.data.gstPercentage}% GST
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleStartApplication}>
            Start Application
          </Button>
        </CardFooter>
      </Card>

      <VisaEtaModal
        isOpen={isVisaETAModalOpen}
        onClose={handleVisaEtaModalClose}
        onApply={handleApplyApplication}
      />
    </>
  );
};
