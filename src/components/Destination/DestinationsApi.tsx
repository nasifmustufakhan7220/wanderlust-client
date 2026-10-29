import DestinationCard, { IDestination } from "./DestinationCard";
import Sorting from "@/components/Destination/Sorting";

export const getAllDestinations = async () => {
  const res = await fetch("http://localhost:8000/destinations");
  if(!res.ok) throw new Error("Failed to fetch destinations");
  return res.json();
};

const DestinationsApi = async () => {
  const destinations: IDestination[] = await getAllDestinations();
  
  return (
    <section className="">
      {/* Heading */}
      <div>
        <Sorting destinations={destinations} />
      </div>

      <div className="grid grid-cols-3 mt-8 gap-5 mb-8">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </section>
  );
};

export default DestinationsApi;
