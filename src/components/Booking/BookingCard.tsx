"use client";
import Image from "next/image";
import { CalendarDays, CircleCheck, Eye, MapPin, Trash2 } from "lucide-react";
import { IBooking } from "./MyBookings";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const BookingCard = ({ booking }: { booking: IBooking }) => {
  const handelDeleteBooking = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}booking/${id}`,{
        method: "DELETE"
    });
    const data = await res.json();
    if(data.deletedCount > 0){
        toast.success(`${booking.name} cencel booking successfully!`);
        redirect('/my-booking');
    };
  };
  return (
    <div>
      <article
        key={booking._id}
        className="flex flex-col gap-5 border border-gray-200 bg-white p-4 sm:flex-row sm:items-center"
      >
        {/* Destination Image */}
        <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-44 sm:w-[32%]">
          <Image
            src={booking.imageUrl}
            alt={booking.name}
            fill
            sizes="(max-width: 640px) 100vw, 32vw"
            className="object-cover"
          />
        </div>

        {/* Booking Details */}
        <div className="flex min-w-0 flex-1 flex-col">
          <span
            className={`mb-1 flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${
              booking.status === true
                ? "bg-green-50 text-green-600"
                : booking.status === "Pending"
                  ? "bg-amber-50 text-amber-600"
                  : "bg-red-50 text-red-600"
            }`}
          >
            <CircleCheck size={14} />
            {booking.status ? "Confirmed" : "Pending"}
          </span>

          <h2 className="font-serif text-2xl font-semibold tracking-tight text-gray-950">
            {booking.name}
          </h2>

          <div className="mt-3 flex flex-col gap-2 text-sm text-gray-500">
            <p className="flex items-center gap-2">
              <CalendarDays size={15} />
              Departure: {booking.departureDate}
            </p>

            <p className="flex items-center gap-2">
              <MapPin size={16} />
              Booking email: {booking.email}
            </p>
          </div>

          {/* Price and Buttons */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-3xl font-semibold tracking-tight text-cyan-600">
              ${booking.price}
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handelDeleteBooking(booking._id)}
                type="button"
                className="flex items-center gap-2 border border-red-400 px-4 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50"
              >
                <Trash2 size={15} />
                Cancel
              </button>

              <button
                type="button"
                className="flex items-center gap-2 bg-cyan-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-cyan-700"
              >
                <Eye size={16} />
                View
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BookingCard;
