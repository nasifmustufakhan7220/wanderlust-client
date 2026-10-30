import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MapPin, CalendarDays, Check, Star } from "lucide-react";
import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";
import BookingDestination from "../Booking/BookingDestination";
import { IDestination } from "./DestinationCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

// Get destination details from backend
export const getDetails = async (id: string) => {
  const jwtToken = await auth.api.getToken({
    headers: await headers(),
  });

  const token = jwtToken?.token;

  const res = await fetch(`http://localhost:8000/destinations/${id}`, {
     headers: {
      authorization: `Bearer ${token}`
    }
  });
  if (!res.ok) throw new Error("Failed to fetch destinations");
  return res.json();
};

const DestinationDetailsCard = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const detail: IDestination = await getDetails(id);

  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-8 lg:px-11">
      <div className="mx-auto max-w-7xl">
        {/* Back, Edit and Cancel buttons */}
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/destinations"
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-black"
          >
            <ArrowLeft size={14} />
            Back to Destinations
          </Link>

          <div className="flex gap-2">
            <EditDialog detail={detail} />

            <DeleteDialog detail={detail} />
          </div>
        </div>

        {/* Destination image */}
        <div className="relative h-52 w-full overflow-hidden sm:h-64 md:h-72">
          <Image
            src={detail.imageUrl}
            alt={detail.name}
            fill
            unoptimized
            priority
            className="object-cover"
          />
        </div>

        {/* Destination information and booking card */}
        <div className="mt-6 grid grid-cols-1 gap-8 border-t border-gray-100 pt-6 lg:grid-cols-3 lg:gap-10">
          {/* Left side */}
          <div className="lg:col-span-2">
            {/* Country */}
            <div className="mb-2 flex items-center gap-1.5 text-xs text-gray-500">
              <MapPin size={13} />
              {detail.country}
            </div>

            {/* Destination name */}
            <h1 className="text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl">
              {detail.name}
            </h1>

            {/* Category and duration */}
            <div className="mt-2 flex gap-3">
              <div className="flex items-center gap-2 text-gray-600 font-medium">
                <Star
                  size={12}
                  fill="currentColor"
                  className="text-green-600"
                />
                <span className="text-[15px]">4.5</span>
              </div>

              <span className="flex items-center gap-1 font-medium text-black">
                <CalendarDays size={13} className="text-gray-500" />
                {detail.duration}
              </span>
            </div>

            {/* Overview */}
            <section className="mt-6">
              <h2 className="text-lg font-medium text-gray-900">Overview</h2>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                {detail.description}
              </p>
            </section>

            {/* Highlights */}
            <section className="mt-5">
              <h2 className="text-lg font-medium text-gray-900">Highlights</h2>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                Explore {detail.name} in {detail.country} and enjoy everything
                this destination has to offer.
              </p>

              <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                <p className="flex items-start gap-2 text-xs leading-5 text-gray-500">
                  <Check size={14} className="mt-0.5 shrink-0 text-green-600" />
                  Explore {detail.country}
                </p>

                <p className="flex items-start gap-2 text-xs leading-5 text-gray-500">
                  <Check size={14} className="mt-0.5 shrink-0 text-green-600" />
                  Discover local attractions
                </p>

                <p className="flex items-start gap-2 text-xs leading-5 text-gray-500">
                  <Check size={14} className="mt-0.5 shrink-0 text-green-600" />
                  Enjoy your trip
                </p>

                <p className="flex items-start gap-2 text-xs leading-5 text-gray-500">
                  <Check size={14} className="mt-0.5 shrink-0 text-green-600" />
                  Experience a new destination
                </p>
              </div>
            </section>

            {/* Static Itinerary */}
            <section className="mt-8">
              <h2 className="text-xl font-medium tracking-tight text-gray-900">
                Itinerary
              </h2>

              <div className="mt-3 space-y-4">
                {/* Day 1 */}
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-cyan-700 text-sm text-cyan-800">
                    01
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      Arrival & Beach Welcome
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Discover the magic of Bali with pristine beaches, ancient
                      temples, and vibrant culture. Experience luxury resorts,
                      tropical landscapes, and unforgettable sunsets.
                    </p>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-cyan-700 text-sm text-cyan-800">
                    02
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      Cultural Temple Tour
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Visit iconic temples including Tanah Lot and Uluwatu.
                      Watch traditional Kecak dance at sunset.
                    </p>
                  </div>
                </div>

                {/* Day 3 */}
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-cyan-700 text-sm text-cyan-800">
                    03
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      Beach & Water Activities
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Enjoy snorkeling, surfing lessons, or simply relax on
                      pristine beaches. Evening beach barbecue.
                    </p>
                  </div>
                </div>

                {/* Day 4 */}
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-cyan-700 text-sm text-cyan-800">
                    04
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      Rice Terraces & Spa
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Explore Tegallalang Rice Terraces and enjoy a traditional
                      Balinese massage.
                    </p>
                  </div>
                </div>

                {/* Day 5 */}
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-cyan-700 text-sm text-cyan-800">
                    05
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      Mount Batur Sunrise Trek
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Early morning volcano trek to watch the sunrise. Return
                      for breakfast and rest.
                    </p>
                  </div>
                </div>

                {/* Day 6 */}
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-cyan-700 text-sm text-cyan-800">
                    06
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      Free Day & Shopping
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Explore Ubud markets, art galleries, or enjoy resort
                      amenities.
                    </p>
                  </div>
                </div>

                {/* Day 7 */}
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-cyan-700 text-sm text-cyan-800">
                    07
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      Departure
                    </h3>
                    <p className="mt-1 text-sm leading-5 text-gray-500">
                      Final breakfast and transfer to airport with unforgettable
                      memories.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Static Traveler Reviews */}
            <section className="mt-8 pb-5">
              <h2 className="text-xl font-medium tracking-tight text-gray-900">
                Traveler Reviews
              </h2>

              <div className="mt-3 space-y-3">
                {/* Review 1 */}
                <div className="flex items-start gap-3 border border-gray-100 p-4 sm:gap-4">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150"
                    alt="Michael Chen"
                    width={70}
                    height={70}
                    unoptimized
                    className="size-14 shrink-0 rounded-full object-cover sm:size-17.5"
                  />

                  <div className="min-w-0">
                    <div className="flex gap-1 text-green-600">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index} className="text-lg leading-5">
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="mt-2 text-sm text-gray-800">
                      Absolutely Incredible Experience! The Itinerary Was
                      Perfect And Our Guide Was Amazing.
                    </p>

                    <p className="mt-2 text-xs text-cyan-700">— Michael Chen</p>

                    <p className="mt-0.5 text-[10px] text-gray-500">
                      March 2026
                    </p>
                  </div>
                </div>

                {/* Review 2 */}
                <div className="flex items-start gap-3 border border-gray-100 p-4 sm:gap-4">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
                    alt="David Brown"
                    width={70}
                    height={70}
                    unoptimized
                    className="size-14 shrink-0 rounded-full object-cover sm:size-17.5"
                  />

                  <div className="min-w-0">
                    <div className="flex gap-1 text-green-600">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index} className="text-lg leading-5">
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="mt-2 text-sm text-gray-800">
                      This Trip Exceeded All My Expectations. Every Detail Was
                      Thoughtfully Planned.
                    </p>

                    <p className="mt-2 text-xs text-cyan-700">— David Brown</p>

                    <p className="mt-0.5 text-[10px] text-gray-500">
                      February 2026
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right side: Booking card */}
          <BookingDestination detail={detail} />
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsCard;
