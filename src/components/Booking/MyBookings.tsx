import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import BookingCard from "./BookingCard";

export interface IBooking {
  _id: string;
  userName: string;
  email: string;
  image: string;
  name: string;
  country: string;
  category: string;
  price: string;
  duration: string;
  departureDate: string;
  imageUrl: string;
  description: string;
  bookingDate: string;
  status: boolean | string;
}

const MyBookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const email = session?.user?.email;

  console.log("email", email);
  const jwtToken = await auth.api.getToken({
    headers: await headers(),
  });

  const token = jwtToken?.token;
  console.log(token);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/booking/${email}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const bookings: IBooking[] = await res.json();

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-4">
        {bookings.map((booking) => (
          <BookingCard key={booking._id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
