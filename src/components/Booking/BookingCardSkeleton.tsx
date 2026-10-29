
import { CalendarDays, Eye, MapPin, Trash2 } from "lucide-react";

type BookingSkeletonProps = {
  count: number;
};

export default function BookingSkeleton({
  count,
}: BookingSkeletonProps) {
  return (
    <section className="mx-auto w-full max-w-[1800px] animate-pulse space-y-4 px-5 py-6 sm:px-10 lg:px-[5.7%]">
      {Array.from({ length: count }, (_, index) => (
        <article
          key={index}
          className="flex flex-col gap-4 border border-gray-200 p-4 sm:flex-row sm:items-center"
        >
          {/* Destination image */}
          <div className="h-44 w-full shrink-0 bg-gray-200 sm:w-[32%] lg:w-[32%]" />

          {/* Booking information */}
          <div className="flex min-w-0 flex-1 flex-col">
            {/* Pending badge */}
            <div className="mb-2 h-7 w-20 rounded-full bg-gray-200" />

            {/* Destination title */}
            <div className="mb-4 h-6 w-56 max-w-full rounded bg-gray-200" />

            {/* Departure date */}
            <div className="mb-3 flex items-center gap-2">
              <CalendarDays size={16} className="text-gray-200" />
              <div className="h-3 w-40 max-w-full rounded bg-gray-200" />
            </div>

            {/* Booking email */}
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-gray-200" />
              <div className="h-3 w-64 max-w-full rounded bg-gray-200" />
            </div>

            {/* Price */}
            <div className="mt-5 h-7 w-24 rounded bg-gray-200" />
          </div>

          {/* Action buttons */}
          <div className="flex shrink-0 items-center gap-3 sm:self-end">
            <div className="flex h-10 w-25 items-center justify-center gap-2 border border-gray-200">
              <Trash2 size={15} className="text-gray-200" />
              <div className="h-3 w-10 rounded bg-gray-200" />
            </div>

            <div className="flex h-10 w-21.75 items-center justify-center gap-2 bg-gray-200">
              <Eye size={15} className="text-gray-300" />
              <div className="h-3 w-7 rounded bg-gray-300" />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
