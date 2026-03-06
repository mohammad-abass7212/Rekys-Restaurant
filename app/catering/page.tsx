import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const cateringPackages = [
  {
    category: "Private Catering",
    icon: "🏡",
    desc: "From intimate family celebrations to lavish private parties, we bring exceptional food to your personal occasions.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=500&fit=crop",
    href: "/catering/wedding",
    services: [
      { label: "Wedding Catering", href: "/catering/wedding", icon: "💍" },
      {
        label: "Birthday Party Catering",
        href: "/catering/birthday",
        icon: "🎂",
      },
      { label: "Yacht Party Catering", href: "/catering/yacht", icon: "⛵" },
      {
        label: "Special Occasion",
        href: "/catering/special-occasion",
        icon: "🎉",
      },
      { label: "Kids Party Catering", href: "/catering/kids", icon: "🎈" },
      { label: "Get Together", href: "/catering/get-together", icon: "🌟" },
    ],
  },
  {
    category: "Corporate Catering",
    icon: "🏢",
    desc: "Elevate your corporate hospitality with sophisticated, professional catering for business events of every scale.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
    href: "/catering/corporate",
    services: [
      { label: "Corporate Events", href: "/catering/corporate", icon: "🏢" },
      {
        label: "Business Lunches",
        href: "/catering/business-lunch",
        icon: "🍱",
      },
      { label: "State Party", href: "/catering/state-party", icon: "🏛️" },
      { label: "Gala Dinners", href: "/catering/gala-dinner", icon: "✨" },
    ],
  },
];

export default function CateringPage() {
  return (
    <main className="bg-[#faf6f0] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=800&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1208]/30 via-[#1a1208]/50 to-[#1a1208]/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-[#c8a96e] font-raleway text-sm tracking-[0.4em] uppercase mb-4">
            Our Services
          </p>
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
            Catering <span className="italic text-[#c8a96e]">Excellence</span>
          </h1>
          <p className="text-[#e8d5a3]/80 font-raleway text-lg max-w-2xl leading-relaxed">
            Organising private & corporate parties across Dubai with the finest
            culinary experience
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-[#faf6f0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="divider-gold mb-8">
            <span className="text-[#c8a96e] text-xl">✦</span>
          </div>
          <p className="text-[#2d1f0e]/70 font-raleway leading-relaxed text-lg">
            Are you planning a private party, birthday, small or large event,
            wedding or outdoor food catering? Treat your friends and your
            clients with the best combination of flavors. We create a holiday
            atmosphere and deliver the freshest and finest food to your place.
            Any time of the day promptly and at the highest quality, we cater
            the best for you.
          </p>
          <div className="divider-gold mt-8">
            <span className="text-[#c8a96e] text-xl">✦</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[#faf6f0] pattern-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {cateringPackages.map((cat) => (
              <div
                key={cat.category}
                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-[#c8a96e]/10 border border-[#c8a96e]/10 group"
              >
                {/* Image header */}
                <div className="img-hover-zoom relative h-64">
                  <img
                    src={cat.img}
                    alt={cat.category}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/90 via-[#1a1208]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-4xl mb-2 block">{cat.icon}</span>
                    <h2 className="font-playfair text-3xl font-bold text-white">
                      {cat.category}
                    </h2>
                    <div className="h-0.5 bg-[#c8a96e] w-12 mt-3 group-hover:w-20 transition-all duration-500" />
                  </div>
                </div>
                {/* Body */}
                <div className="p-8">
                  <p className="text-[#2d1f0e]/70 font-raleway leading-relaxed mb-8">
                    {cat.desc}
                  </p>
                  <ul className="space-y-3">
                    {cat.services.map((svc) => (
                      <li key={svc.label}>
                        <Link
                          href={svc.href}
                          className="flex items-center gap-4 p-4 rounded-xl border border-[#c8a96e]/10 hover:border-[#c8a96e]/40 hover:bg-[#c8a96e]/5 transition-all duration-300 group/item"
                        >
                          <span className="text-2xl">{svc.icon}</span>
                          <span className="font-raleway text-sm tracking-widest uppercase text-[#2d1f0e]/70 group-hover/item:text-[#c8a96e] transition-colors flex-1">
                            {svc.label}
                          </span>
                          <svg
                            className="w-4 h-4 text-[#c8a96e]/40 group-hover/item:text-[#c8a96e] group-hover/item:translate-x-1 transition-all"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#1a1208]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c8a96e] font-raleway text-sm tracking-[0.4em] uppercase mb-4">
              Why Us
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white">
              Why Choose{" "}
              <span className="italic text-[#c8a96e]">Ricky&apos;s</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "👨‍🍳",
                title: "Expert Chefs",
                desc: "Our professional chefs bring years of culinary expertise to every event",
              },
              {
                icon: "🕐",
                title: "Timely Service",
                desc: "We pride ourselves on punctual delivery and seamless event execution",
              },
              {
                icon: "🌿",
                title: "Fresh Ingredients",
                desc: "Only the finest and freshest ingredients are used in all our dishes",
              },
              {
                icon: "💫",
                title: "Custom Menus",
                desc: "Every menu is tailored to your preferences, dietary needs and event theme",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#2d1f0e]/40 border border-[#c8a96e]/10 rounded-2xl p-8 text-center hover:border-[#c8a96e]/30 transition-all duration-300 group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-playfair text-[#c8a96e] text-xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-[#e8d5a3]/50 text-sm leading-relaxed font-raleway">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#faf6f0]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#1a1208] mb-6">
            Plan Your{" "}
            <span className="italic text-[#c8a96e]">Perfect Event</span>
          </h2>
          <p className="text-[#2d1f0e]/70 font-raleway mb-10 leading-relaxed">
            Contact us today to discuss your event requirements and let us
            create an unforgettable culinary experience for you and your guests.
          </p>
          <Link
            href="/reservation"
            className="btn-gold text-[#1a1208] font-raleway font-600 text-sm tracking-[0.2em] uppercase px-12 py-4 rounded-sm inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
