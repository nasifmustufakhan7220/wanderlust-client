"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IDestination } from "./DestinationCard";


const Sorting = ({ destinations } : {destinations: IDestination[]}) => {
    console.log(destinations);
  return (
    <div className="grid grid-cols-1 border border-[#cccccc] sm:grid-cols-3">
      <div>
        <Select defaultValue="CATEGORY">
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <option>Beach</option>
              <option>Mountain</option>
              <option>Adventure</option>
              <option value="">Cultural</option>
              <option value="">Wildlife</option>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Select defaultValue="PRICE RANGE">
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <option>Beach</option>
              <option>Mountain</option>
              <option>Adventure</option>
              <option value="">Cultural</option>
              <option value="">Wildlife</option>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Select defaultValue="SORT BY">
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <option>Beach</option>
              <option>Mountain</option>
              <option>Adventure</option>
              <option value="">Cultural</option>
              <option value="">Wildlife</option>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Sorting;
