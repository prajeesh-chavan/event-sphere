"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/Components/ui/button";
import { Calendar } from "@/Components/ui/calendar";
import { IoIosArrowDown } from "react-icons/io";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";

export function DatePicker() {
  const [date, setDate] = React.useState(new Date());
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

  return (
    <div
      className={cn(
        "border-2 h-10",
        isPopoverOpen ? "ring-2 ring-sky-300 ring-offset-2" : ""
      )}
    >
      <Popover onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            variant={"danger"}
            size="sm"
            className="w-full justify-between rounded-none"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Date</span>}
            <IoIosArrowDown className="ml-6 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 m-2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
