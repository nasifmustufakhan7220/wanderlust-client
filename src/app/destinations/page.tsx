export const instant = false;
import DestinationSkeleton from "@/components/Destination/DestinationCardSkeleton";
import DestinationsApi, { getAllDestinations } from "@/components/Destination/DestinationsApi";

import { Suspense } from "react";


const DestinationsPage = async() => {
    const count = await getAllDestinations();
  return (
    <div className="mt-20 w-full bg-white px-5 py-8 sm:px-10 md:px-[5.7%]">
      <div className="mb-9">
        <h1 className="text-3xl font-normal tracking-[-1.5px] text-black sm:text-4xl md:text-[48px] md:leading-[1.2]">
          Explore All Destinations
        </h1>

        <p className="mt-3 text-sm text-[#777477] sm:text-base">
          Find your perfect travel experience from our curated collection
        </p>
      </div>

      {/* Filters */}
      
      <Suspense fallback={<DestinationSkeleton count={count.length}/>}>
        <DestinationsApi />
      </Suspense>
    </div>
  );
};

export default DestinationsPage;
