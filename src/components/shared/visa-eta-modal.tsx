"use client";

import { useEffect, useState } from "react";
import { CalendarIcon, CheckCircle2, MapPin } from "lucide-react";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

type VisaEtaModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
};

export const VisaEtaModal: React.FC<VisaEtaModalProps> = ({
  isOpen,
  onClose,
  onApply,
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const [date, setDate] = useState<Date>();
  const [etaChecked, setEtaChecked] = useState(false);

  const handleCalendarInputClick = () => {
    setIsCalendarOpen((isCalendarOpen) => !isCalendarOpen);
  };

  const handleDateChange = (newDate: Date | undefined) => {
    setIsCalendarOpen(false);
    setDate(newDate);
    setEtaChecked(false);
  };

  const handleCheckEtaButtonClick = () => {
    if (etaChecked) {
      onApply();
    } else {
      setEtaChecked(true);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsCalendarOpen(false);
      setDate(undefined);
      setEtaChecked(false);
    }
  }, [isOpen]);

  return (
    <Dialog modal open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm w-full">
        <DialogHeader>
          <DialogTitle>Check visa estimate time of arrival</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label className="text-foreground/75">
              Enter you departure date
            </Label>
            <Popover open={isCalendarOpen}>
              <PopoverTrigger onClick={handleCalendarInputClick} asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "justify-between text-left font-normal",
                    !date && "text-muted-foreground",
                  )}
                >
                  <div className="flex items-center gap-2">
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                    {etaChecked && date && (
                      <CheckCircle2 fill="green" className="text-white" />
                    )}
                  </div>
                  <CalendarIcon className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateChange}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          {!etaChecked ? (
            <div className="flex flex-col gap-2">
              <Label className="text-foreground/75">
                Enter your departure country
              </Label>
              <div className="flex items-center justify-between border px-4 py-2 rounded-md opacity-75">
                <p>India</p>
                <MapPin className="h-4 w-4" />
              </div>
            </div>
          ) : (
            <p className="text-foreground/75">
              Get it delivered by{" "}
              <span className="text-primary font-semibold">16th May 2024</span>{" "}
              if applied within{" "}
              <span className="text-green-700 font-semibold">1 hr 15 mins</span>
            </p>
          )}

          <Button
            className="w-full"
            onClick={handleCheckEtaButtonClick}
            disabled={!date}
          >
            {!etaChecked ? "Check ETA" : "Apply Now"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
