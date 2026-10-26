import Image from "next/image";

const features = [
  {
    icon: "/ShieldCheck.png",
    title: "Safe & Secure",
    body: "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: "/MapTrifold.png",
    title: "Expert Guides",
    body: "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: "/Headset.png",
    title: "24/7 Support",
    body: "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
];

export function WhyChoose() {
  return (
    <section className="bg-[#E8F6FB] py-20">
      <div className="mx-auto max-w-[940px] px-4 text-center">
        <h2 className="text-[48px] leading-tight text-[#1c1c1c]">
          Why Choose Wanderlust
        </h2>
        <p className="mt-2 text-[16px] text-[#6b6b6b]">
          Your trusted partner for exceptional travel experiences
        </p>

        <div className="mt-6 grid grid-cols-3 gap-5">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-8 text-left">
              <Image
                src={feature.icon}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <h3 className="mt-5 text-2xl text-[#2a2a2a]">{feature.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#595959]">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
