"use client";

import { useEffect, useState } from "react";
import { CalendarIcon, CheckCircle2, MapPin } from "lucide-react";
import { format, addBusinessDays, startOfDay } from "date-fns";
import { formatInTimeZone, toDate } from "date-fns-tz";
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
import { TIMEZONE } from "@/constants/index";

type VisaEtaModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onApply: (date: Date) => void;
};

export const VisaEtaModal: React.FC<VisaEtaModalProps> = (props) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [etaChecked, setEtaChecked] = useState(false);

  const handleCalendarInputClick = () => {
    setIsCalendarOpen((isCalendarOpen) => !isCalendarOpen);
  };

  const handleDateChange = (newDate: Date | undefined) => {
    if (newDate) {
      setDate(newDate);
    } else {
      setDate(undefined);
    }
    setIsCalendarOpen(false);
    setEtaChecked(false);
  };

  const handleCheckEtaButtonClick = () => {
    if (etaChecked && date) {
      console.log("Applying date (local):", date.toString());
      console.log(
        "Applying date (IST):",
        formatInTimeZone(date, TIMEZONE, "PPP pp"),
      );
      props.onApply(date);
    } else {
      setEtaChecked(true);
    }
  };

  useEffect(() => {
    if (props.isOpen) {
      setIsCalendarOpen(false);
      setDate(undefined);
      setEtaChecked(false);
    }
  }, [props.isOpen]);

  return (
    <Dialog modal open={props.isOpen} onOpenChange={props.onClose}>
      <DialogContent className="max-w-sm w-full">
        <DialogHeader>
          <DialogTitle>Check visa estimate time of arrival</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label className="text-foreground/75">
              Enter your application date (IST)
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
                    {date ? (
                      formatInTimeZone(date, TIMEZONE, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
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
                  disabled={(date) =>
                    date <
                    startOfDay(toDate(new Date(), { timeZone: TIMEZONE }))
                  }
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
              <span className="text-primary font-semibold">
                {formatInTimeZone(addBusinessDays(date!, 5), TIMEZONE, "PPP")}
              </span>
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
