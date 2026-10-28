import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Testimonial = {
  image: string;
  quote: string;
  name: string;
  location: string;
};

const testimonials: Testimonial[] = [
  // Real testimonials from the design
  {
    image: "/person2.png",
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    name: "Michael Chen",
    location: "Singapore",
  },
  {
    image: "/person1.png",
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations, The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    name: "Sarah Johnson",
    location: "New York, USA",
  },
  // DUMMY slides — placeholder images/quotes to keep the carousel arrows active.
  // Replace with real testimonials and photos later.
  {
    image: "/destinations/image1.png",
    quote:
      '"Exploring The Ancient Ruins Of Rome Was A Once-In-A-Lifetime Experience. Every Corner Held A New Story And Our Guide Made History Come Alive."',
    name: "Alex Rivera",
    location: "Toronto, Canada",
  },
  {
    image: "/destinations/image2.png",
    quote:
      '"The Sunsets In Santorini Were Absolutely Breathtaking. From The Cuisine To The Hospitality, Every Moment Of This Trip Exceeded Expectations."',
    name: "Emily Davis",
    location: "London, UK",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-235 px-4">
        <Carousel opts={{ align: "start", loop: true }} className="relative">
          <div className="mb-8">
            <h2 className="text-[38px] leading-tight text-[#1c1c1c]">
              What Travelers Say
            </h2>
            <p className="mt-1.5 text-sm text-[#6b6b6b]">
              Real experiences from our happy travelers
            </p>
          </div>

          <CarouselPrevious className="top-1 right-11 bottom-auto left-auto my-0" />
          <CarouselNext className="top-1 right-0 bottom-auto left-auto my-0" />

          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="basis-full sm:basis-[calc(50%-8px)]"
              >
                <div className="flex h-full min-h-43.75 gap-4 rounded-md border border-[#ececec] bg-white p-5">
                  <div className="flex flex-1 flex-col justify-between">
                    <p className="text-[14px] leading-[1.65] text-[#1f1f1f]">
                      {testimonial.quote}
                    </p>
                    <div className="mt-4">
                      <p className="text-sm text-[#15A1BF]">
                        — {testimonial.name}
                      </p>
                      <p className="mt-1 text-xs text-[#8a8a8a]">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={128}
                    height={144}
                    className="h-36 w-32 shrink-0 rounded-sm object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
