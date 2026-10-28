import MyBookings from "@/components/Booking/MyBookings";
import { Suspense } from "react";

const MyBookingPage = async () => {
  return (
    <div className="mt-20 mb-20 w-full bg-white px-5 py-8 sm:px-10 md:px-[5.7%]">
      <div className="mb-9">
        <h1 className="text-3xl font-normal tracking-[-1.5px] text-black sm:text-4xl md:text-[48px] md:leading-[1.2]">
          My Bookings
        </h1>

        <p className="mt-3 text-sm text-[#777477] sm:text-base">
          Manage and view your upcoming travel plans
        </p>
      </div>
      <Suspense fallback={<p>Loading....</p>}>
        <MyBookings />
      </Suspense>
    </div>
  );
};

export default MyBookingPage;
