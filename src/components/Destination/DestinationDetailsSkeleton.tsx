
import { CalendarDays, MapPin, Star } from "lucide-react";

export default function DestinationDetailsSkeleton() {
  return (
    <main className="mx-auto mt-5 w-full max-w-300 animate-pulse px-5 py-4 sm:px-8">
      {/* Back link and actions */}
      <div className="mb-4 flex items-center justify-between">
        <div className="h-3 w-28 rounded bg-gray-200" />

        <div className="flex gap-2">
          <div className="h-7 w-14 rounded bg-gray-200" />
          <div className="h-7 w-16 rounded bg-gray-200" />
        </div>
      </div>

      {/* Destination banner */}
      <div className="h-37.5 w-full rounded-sm bg-gray-200 sm:h-55" />

      <div className="my-5 border-t border-gray-200" />

      {/* Main content and booking card */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_330px]">
        {/* Left content */}
        <div className="min-w-0 space-y-6">
          {/* Location and title */}
          <section>
            <div className="mb-2 flex items-center gap-2">
              <MapPin size={12} className="text-gray-300" />
              <div className="h-3 w-20 rounded bg-gray-200" />
            </div>

            <div className="h-6 w-56 max-w-full rounded bg-gray-200" />

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <div className="h-3 w-10 rounded bg-gray-200" />
              <div className="h-3 w-16 rounded bg-gray-200" />
              <div className="h-3 w-24 rounded bg-gray-200" />
            </div>
          </section>

          {/* Overview */}
          <section>
            <div className="mb-3 h-4 w-20 rounded bg-gray-200" />

            <div className="space-y-2">
              <div className="h-3 w-full rounded bg-gray-200" />
              <div className="h-3 w-full rounded bg-gray-200" />
              <div className="h-3 w-11/12 rounded bg-gray-200" />
              <div className="h-3 w-2/3 rounded bg-gray-200" />
            </div>
          </section>

          {/* Highlights */}
          <section>
            <div className="mb-3 h-4 w-24 rounded bg-gray-200" />
            <div className="mb-3 h-3 w-full rounded bg-gray-200" />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {Array.from({ length: 4 }, (_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-3 w-3 shrink-0 rounded-full bg-gray-200" />
                  <div className="h-3 w-36 max-w-full rounded bg-gray-200" />
                </div>
              ))}
            </div>
          </section>

          {/* Itinerary */}
          <section>
            <div className="mb-4 h-4 w-20 rounded bg-gray-200" />

            <div className="space-y-4">
              {Array.from({ length: 7 }, (_, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200">
                    <div className="h-3 w-3 rounded-full bg-gray-200" />
                  </div>

                  <div className="flex-1 pt-1">
                    <div className="mb-2 h-3 w-40 max-w-full rounded bg-gray-200" />
                    <div className="mb-1 h-3 w-full rounded bg-gray-200" />
                    <div className="h-3 w-4/5 rounded bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Traveler reviews */}
          <section>
            <div className="mb-4 h-4 w-32 rounded bg-gray-200" />

            <div className="space-y-3">
              {Array.from({ length: 2 }, (_, i) => (
                <div
                  key={i}
                  className="flex gap-3 border border-gray-200 p-3"
                >
                  <div className="h-10 w-10 shrink-0 rounded-full bg-gray-200" />

                  <div className="flex-1 space-y-2 pt-1">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }, (_, j) => (
                        <Star
                          key={j}
                          size={10}
                          className="text-gray-200"
                        />
                      ))}
                    </div>

                    <div className="h-3 w-full rounded bg-gray-200" />
                    <div className="h-3 w-3/4 rounded bg-gray-200" />
                    <div className="h-2 w-24 rounded bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Booking sidebar */}
        <aside>
          <div className="border border-gray-200 p-4 shadow-sm lg:sticky lg:top-6">
            <div className="mb-2 h-3 w-20 rounded bg-gray-200" />
            <div className="mb-2 h-6 w-24 rounded bg-gray-200" />
            <div className="mb-5 h-2 w-16 rounded bg-gray-200" />

            {/* Date input */}
            <div className="mb-3 flex h-9 items-center justify-between border border-gray-200 px-2">
              <div className="h-3 w-24 rounded bg-gray-200" />
              <CalendarDays size={13} className="text-gray-200" />
            </div>

            {/* Book button */}
            <div className="mb-4 h-9 w-full rounded bg-gray-200" />

            {/* Booking benefits */}
            <div className="space-y-3">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-gray-200" />
                  <div className="h-3 w-4/5 rounded bg-gray-200" />
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
