import DestinationCard, { IDestination } from "./DestinationCard";
import Sorting from "./Sorting";


export const getAllDestinations = async () => {
  const res = await fetch("http://localhost:8000/destinations");
  return res.json();
};
const DestinationsApi = async () => {
  const destinations: IDestination[] = await getAllDestinations();

  return (
    <section className="w-full bg-white px-5 py-8 sm:px-10 md:px-[5.7%]">
      {/* Heading */}
      <div className="mb-9">
        <h1 className="text-3xl font-normal tracking-[-1.5px] text-black sm:text-4xl md:text-[48px] md:leading-[1.2]">
          Explore All Destinations
        </h1>

        <p className="mt-3 text-sm text-[#777477] sm:text-base">
          Find your perfect travel experience from our curated collection
        </p>
      </div>

      {/* Filters */}
      <div >
        <Sorting destinations={destinations}/>
      </div>

      <div className="grid grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </section>
  );
};

export default DestinationsApi;
