"use client";
import { useSession } from "@/lib/auth-client";

import { ArrowRight, Check } from "lucide-react";
import toast from "react-hot-toast";
import { IDestination } from "../Destination/DestinationCard";

const BookingDestination = ({ detail }: { detail: IDestination }) => {
    const {data:session} = useSession();
    const handelBooking = async(e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const departureDate = e.target.departureDate.value;
        const data = {
            userName: session?.user?.name,
            email: session?.user?.email,
            image: session?.user?.image,
            ...detail,
            departureDate:departureDate,
            bookingDate: new Date(),
            status: false
        }

        const res = await fetch('http://localhost:8000/booking',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        const bookingData = await res.json();

        if(bookingData){
            toast.success(`${data?.name} booking succesfully`);
        };

    }
  return (
    <aside className="h-fit border border-gray-100 p-3 shadow-md">
      <p className="text-xs text-gray-500">Starting from</p>

      <p className="text-2xl font-semibold tracking-tight text-cyan-600">
        ${detail.price}
      </p>

      <p className="text-xs text-gray-500">per person</p>

      {/* Departure date */}
      <form onSubmit={handelBooking}>
        <input
          defaultValue={detail.departureDate}
          type="date"
          name="departureDate"
          className="mt-7 h-8 w-full border border-gray-100 bg-gray-50 px-2 text-xs text-gray-700 outline-none"
        />

        {/* Book now button */}
        <button
          type="submit"
          className="mt-5 flex h-8 w-full items-center justify-center gap-2 bg-cyan-600 text-xs font-medium text-white transition hover:bg-cyan-700"
        >
          Book Now
          <ArrowRight size={14} />
        </button>
      </form>

      {/* Benefits */}
      <div className="mt-3 space-y-1.5">
        <p className="flex items-center gap-1.5 text-[10px] text-gray-500">
          <Check size={12} className="text-green-600" />
          Free cancellation up to 7 days
        </p>

        <p className="flex items-center gap-1.5 text-[10px] text-gray-500">
          <Check size={12} className="text-green-600" />
          Travel insurance included
        </p>

        <p className="flex items-center gap-1.5 text-[10px] text-gray-500">
          <Check size={12} className="text-green-600" />
          24/7 customer support
        </p>
      </div>
    </aside>
  );
};

export default BookingDestination;
