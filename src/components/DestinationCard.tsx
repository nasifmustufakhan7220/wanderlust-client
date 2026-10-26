
import Image from "next/image";
import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";

export interface IDestination {
  _id: string;
  name: string;
  country: string;
  category: string;
  price: string;
  duration: string;
  imageUrl:string;
  departureDate: string;
  description?: string;
}


const DestinationCard = ({ destination } : {destination: IDestination}) => {
  return (
    <div className="group w-full min-w-0 bg-white mt-8">
      {/* Destination Image */}
      <div className="relative aspect-[2.05/1] w-full overflow-hidden bg-gray-100">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Rating Badge */}
        
      </div>

      {/* Destination Details */}
      <div className="pt-2">
        {/* Location */}
        <div className="mb-1 flex items-center gap-1 text-[11px] text-[#666666]">
          <MapPin size={12} strokeWidth={1.8} />
          <span>{destination.country}</span>
        </div>

        {/* Title and Price */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[14px] font-normal leading-5 text-[#171717]">
            {destination.name}
          </h3>

          <p className="shrink-0 whitespace-nowrap text-[14px] leading-5 text-black">
            ${destination.price}
            <span className="text-[10px] text-[#777777]">/Person</span>
          </p>
        </div>

        {/* Duration */}
        <div className="mt-1 flex items-center gap-1 text-[11px] text-[#666666]">
          <CalendarDays size={12} strokeWidth={1.8} />
          <span>{destination.duration}</span>
        </div>

        {/* Booking Link */}
        <a
          href={`/destinations/${destination._id}`}
          className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-medium text-[#009fc7] underline underline-offset-2 transition-colors hover:text-[#007b9b]"
        >
          BOOK NOW
          <ArrowUpRight size={14} strokeWidth={1.7} />
        </a>
      </div>
    </div>
  );
};

export default DestinationCard;
