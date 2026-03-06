"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const menuItems = [
  {
    name: "Caesar Salad",
    desc: "Crisp romaine lettuce tossed with creamy Caesar dressing, Parmesan cheese and homemade croutons",
    img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
    tag: "Salads",
  },
  {
    name: "Grilled Chicken Bone",
    desc: "Grilled chicken bone as seasoned to perfection marinating with creamy flavors served with your choice of delectables sides",
    img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=400&h=300&fit=crop",
    tag: "Grill",
  },
  {
    name: "Hummus",
    desc: "Smooth and creamy chickpea hummus drizzled with extra virgin olive oil, mixed with tahini, salt lemon juice",
    img: "https://images.unsplash.com/photo-1571197119738-c1c3e0d96c10?w=400&h=300&fit=crop",
    tag: "Starters",
  },
  {
    name: "Pasta (White or Pink)",
    desc: "Al dente pasta served with your choice of creamy white sauce or tangy pink sauce, topped with freshly grated Parmesan cheese",
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
    tag: "Pasta",
  },
  {
    name: "Mutton Kofta",
    desc: "A rich mutton kofta sauce made with sesame paste, garlic, lemon juice, olive oil and olive paste",
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
    tag: "Grills",
  },
  {
    name: "Seasoned Rice",
    desc: "Fully seasoned rice infused with spices, herbs and sautéed onions, offering a fragrant and flavorful complement to any dish",
    img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop",
    tag: "Sides",
  },
];

const cateringTypes = [
  {
    title: "Wedding Catering",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
    icon: "💍",
  },
  {
    title: "Special Occasion",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
    icon: "🎉",
  },
  {
    title: "Birthday Party",
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=400&fit=crop",
    icon: "🎂",
  },
  {
    title: "Kids Party",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
    icon: "🎈",
  },
  {
    title: "State Party",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
    icon: "🏛️",
  },
  {
    title: "Yacht Party",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
    icon: "⛵",
  },
];

export default function Home() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addRevealRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <main className="bg-[#faf6f0] overflow-hidden">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1208]/60 via-[#1a1208]/50 to-[#1a1208]/80"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full border border-[#c8a96e]/10 animate-float"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full border border-[#c8a96e]/10 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-slide-up">
            <p className="text-[#c8a96e] font-raleway text-sm tracking-[0.4em] uppercase mb-4">
              Welcome To
            </p>
          </div>
          <div className="animate-slide-up-delay">
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-6">
              Ricky&apos;s{" "}
              <span className="italic text-[#c8a96e]">Restaurant</span>
            </h1>
          </div>
          <div className="animate-slide-up-delay">
            <p className="font-cormorant text-2xl sm:text-3xl md:text-4xl text-[#e8d5a3] italic mb-4">
              Eat What Makes You Happy
            </p>
          </div>
          <div className="animate-slide-up-delay-2">
            <p className="text-white/70 font-raleway text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover the finest flavors of Dubai with our signature blend of
              spices and culinary excellence
            </p>
          </div>
          <div className="animate-slide-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#about"
              className="btn-gold text-[#1a1208] font-raleway font-600 text-sm tracking-[0.2em] uppercase px-10 py-4 rounded-sm"
            >
              Discover More
            </Link>
            <Link
              href="/reservation"
              className="border border-[#c8a96e] text-[#c8a96e] hover:bg-[#c8a96e] hover:text-[#1a1208] font-raleway font-600 text-sm tracking-[0.2em] uppercase px-10 py-4 rounded-sm transition-all duration-300"
            >
              Book a Table
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
          <span className="text-[#c8a96e]/60 text-xs tracking-widest uppercase font-raleway">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#c8a96e] to-transparent"></div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 lg:py-32 bg-[#faf6f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="relative" ref={addRevealRef as any}>
              <div className="grid grid-cols-2 gap-4">
                <div className="img-hover-zoom rounded-2xl overflow-hidden shadow-2xl shadow-[#c8a96e]/10 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=500&fit=crop"
                    alt="Restaurant ambiance"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="img-hover-zoom rounded-2xl overflow-hidden shadow-2xl shadow-[#c8a96e]/10">
                  <img
                    src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=500&fit=crop"
                    alt="Delicious food"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="img-hover-zoom rounded-2xl overflow-hidden shadow-2xl shadow-[#c8a96e]/10">
                  <img
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
                    alt="Fine dining"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="img-hover-zoom rounded-2xl overflow-hidden shadow-2xl shadow-[#c8a96e]/10 -mt-4">
                  <img
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop"
                    alt="Fresh ingredients"
                    className="w-full h-40 object-cover"
                  />
                </div>
              </div>
              {/* Experience badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#1a1208] border border-[#c8a96e]/30 rounded-2xl p-6 shadow-xl">
                <div className="text-[#c8a96e] font-playfair text-4xl font-bold">
                  15+
                </div>
                <div className="text-[#e8d5a3]/70 text-xs tracking-widest uppercase mt-1">
                  Years Experience
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className="reveal lg:pl-8"
              ref={addRevealRef as any}
            >
              <p className="text-[#c8a96e] font-raleway text-sm tracking-[0.4em] uppercase mb-4">
                About Us
              </p>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#1a1208] leading-tight mb-6">
                Eat What Makes{" "}
                <span className="italic text-[#c8a96e]">You Happy</span>
              </h2>
              <div className="h-px w-16 bg-[#c8a96e] mb-8"></div>
              <p className="text-[#2d1f0e]/70 font-raleway leading-relaxed text-base mb-6">
                Ricky&apos;s Restaurant is one of the finest restaurants to dine
                in with the best combination of spices according to your taste.
                Our professional staff is at your service with food delivery,
                event catering, dine-in services.
              </p>
              <p className="text-[#2d1f0e]/70 font-raleway leading-relaxed text-base mb-10">
                Experience the art of fine dining with flavors crafted from
                authentic recipes passed down through generations, elevated with
                modern culinary techniques.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { num: "500+", label: "Menu Items" },
                  { num: "10K+", label: "Happy Guests" },
                  { num: "50+", label: "Events / Month" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-playfair text-3xl font-bold text-[#c8a96e]">
                      {stat.num}
                    </div>
                    <div className="text-[#2d1f0e]/60 text-xs tracking-widest uppercase mt-1 font-raleway">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/menu"
                className="btn-gold text-[#1a1208] font-raleway font-600 text-sm tracking-[0.2em] uppercase px-10 py-4 rounded-sm inline-block"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="bg-[#1a1208] py-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <blockquote className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-[#e8d5a3] italic leading-relaxed">
            &ldquo;Great food is like great sex.{" "}
            <span className="text-[#c8a96e]">The more you have</span>, the more
            you want.&rdquo;
          </blockquote>
          <p className="text-[#c8a96e]/60 font-raleway text-sm tracking-widest uppercase mt-6">
            — Gael Greene
          </p>
        </div>
      </div>

      {/* ── CATERING ── */}
      <section
        id="catering"
        className="py-24 lg:py-32 bg-[#faf6f0] pattern-overlay"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" ref={addRevealRef as any}>
            <p className="text-[#c8a96e] font-raleway text-sm tracking-[0.4em] uppercase mb-4">
              Catering
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#1a1208] leading-tight mb-6">
              Organising Private &{" "}
              <span className="italic text-[#c8a96e]">Corporate Parties</span>
            </h2>
            <div className="divider-gold max-w-xs mx-auto mb-8">
              <span className="text-[#c8a96e] text-xl">✦</span>
            </div>
            <p className="text-[#2d1f0e]/70 max-w-2xl mx-auto leading-relaxed font-raleway">
              Are you planning a private party, birthday, small or large event,
              wedding or outdoor food catering? Treat your friends and your
              clients with the best combination of flavors. We create a holiday
              atmosphere and deliver the freshest and finest food to your place.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cateringTypes.map((type, i) => (
              <div
                key={type.title}
                className="reveal group cursor-pointer"
                ref={addRevealRef as any}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="img-hover-zoom rounded-2xl overflow-hidden shadow-lg shadow-[#c8a96e]/10 relative">
                  <img
                    src={type.img}
                    alt={type.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/90 via-[#1a1208]/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-3xl mb-2 block">{type.icon}</span>
                    <h3 className="font-playfair text-white text-xl font-semibold">
                      {type.title}
                    </h3>
                    <div className="h-0.5 bg-[#c8a96e] w-0 group-hover:w-16 transition-all duration-500 mt-2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/catering"
              className="border-2 border-[#c8a96e] text-[#c8a96e] hover:bg-[#c8a96e] hover:text-[#1a1208] font-raleway font-600 text-sm tracking-[0.2em] uppercase px-12 py-4 rounded-sm transition-all duration-300"
            >
              View All Catering Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── MENU PREVIEW ── */}
      <section className="py-24 lg:py-32 bg-[#1a1208]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c8a96e] font-raleway text-sm tracking-[0.4em] uppercase mb-4">
              Catering Menu
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Grill <span className="italic text-[#c8a96e]">Feast</span>
            </h2>
            <div className="divider-gold max-w-xs mx-auto mb-8">
              <span className="text-[#c8a96e] text-xl">✦</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, i) => (
              <div
                key={item.name}
                className="menu-card bg-[#2d1f0e]/50 border border-[#c8a96e]/10 rounded-2xl overflow-hidden group"
              >
                <div className="img-hover-zoom">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-52 object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[#c8a96e] text-xs tracking-widest uppercase font-raleway mb-2 block">
                    {item.tag}
                  </span>
                  <h3 className="font-playfair text-white text-xl font-semibold mb-3">
                    {item.name}
                  </h3>
                  <p className="text-[#e8d5a3]/50 text-sm leading-relaxed font-raleway">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/menu"
              className="btn-gold text-[#1a1208] font-raleway font-600 text-sm tracking-[0.2em] uppercase px-12 py-4 rounded-sm inline-block"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── DELIVERY CTA ── */}
      <section className="py-20 bg-[#faf6f0] relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#c8a96e] font-raleway text-sm tracking-[0.4em] uppercase mb-4">
                Get Delivery
              </p>
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#1a1208] leading-tight mb-6">
                On Your{" "}
                <span className="italic text-[#c8a96e]">Desired Time</span>
              </h2>
              <p className="text-[#2d1f0e]/70 font-raleway leading-relaxed mb-8">
                We deliver at any time of the day promptly and at the highest
                quality. You can be rest assured that your event and especially
                the food — is in the right hands.
              </p>
              <Link
                href="/#contact"
                className="btn-gold text-[#1a1208] font-raleway font-600 text-sm tracking-[0.2em] uppercase px-10 py-4 rounded-sm inline-block"
              >
                Order Now
              </Link>
            </div>
            <div className="relative">
              <div className="img-hover-zoom rounded-3xl overflow-hidden shadow-2xl shadow-[#c8a96e]/20">
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=500&fit=crop"
                  alt="Healthy delicious food"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-[#c8a96e]/10 border border-[#c8a96e]/30 flex items-center justify-center animate-float">
                <span className="text-3xl">🍴</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-[#1a1208]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c8a96e] font-raleway text-sm tracking-[0.4em] uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white leading-tight">
              Reserve Your{" "}
              <span className="italic text-[#c8a96e]">Experience</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "📍",
                title: "Location",
                info: "Marina Pearl Area Apt., Waterfront Mina Seyahi Street, Dubai",
              },
              {
                icon: "📞",
                title: "Phone",
                info: "+971 04 306 2015\n+971 54 546 5026",
              },
              { icon: "⏰", title: "Hours", info: "Open Daily\n12:00 PM - 12:00 AM" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#2d1f0e]/40 border border-[#c8a96e]/10 rounded-2xl p-8 text-center group hover:border-[#c8a96e]/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-playfair text-[#c8a96e] text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-[#e8d5a3]/60 font-raleway text-sm leading-relaxed whitespace-pre-line">
                  {item.info}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/reservation"
              className="btn-gold text-[#1a1208] font-raleway font-600 text-sm tracking-[0.2em] uppercase px-16 py-5 rounded-sm inline-block text-base"
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
