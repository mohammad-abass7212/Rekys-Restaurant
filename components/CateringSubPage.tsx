import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface CateringSubPageProps {
  title: string;
  subtitle: string;
  heroImg: string;
  icon: string;
  category: "Private" | "Corporate";
  description: string;
  longDesc: string;
  features: { icon: string; title: string; desc: string }[];
  gallery: string[];
  includes: string[];
}

const relatedLinks = {
  Private: [
    { label: "Wedding Catering", href: "/catering/wedding" },
    { label: "Birthday Party", href: "/catering/birthday" },
    { label: "Yacht Party", href: "/catering/yacht" },
    { label: "Special Occasion", href: "/catering/special-occasion" },
    { label: "Kids Party", href: "/catering/kids" },
    { label: "Get Together", href: "/catering/get-together" },
  ],
  Corporate: [
    { label: "Corporate Events", href: "/catering/corporate" },
    { label: "Business Lunches", href: "/catering/business-lunch" },
    { label: "State Party", href: "/catering/state-party" },
    { label: "Gala Dinners", href: "/catering/gala-dinner" },
  ],
};

export default function CateringSubPage({
  title,
  subtitle,
  heroImg,
  icon,
  category,
  description,
  longDesc,
  features,
  gallery,
  includes,
}: CateringSubPageProps) {
  return (
    <main className="bg-[#faf6f0] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-end pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImg}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1208]/30 via-[#1a1208]/50 to-[#1a1208]/95" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/catering" className="text-[#c8a96e]/60 hover:text-[#c8a96e] font-raleway text-xs tracking-widest uppercase transition-colors">
              Catering
            </Link>
            <span className="text-[#c8a96e]/30">›</span>
            <span className="text-[#c8a96e]/60 font-raleway text-xs tracking-widest uppercase">
              {category} Catering
            </span>
            <span className="text-[#c8a96e]/30">›</span>
            <span className="text-[#c8a96e] font-raleway text-xs tracking-widest uppercase">{title}</span>
          </div>
          <div className="text-5xl mb-4">{icon}</div>
          <p className="text-[#c8a96e] font-raleway text-sm tracking-[0.4em] uppercase mb-3">{category} Catering</p>
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-4">
            {title}
          </h1>
          <p className="font-cormorant text-2xl text-[#e8d5a3]/80 italic">{subtitle}</p>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">

              {/* Description */}
              <div>
                <p className="text-[#c8a96e] font-raleway text-sm tracking-[0.4em] uppercase mb-4">Overview</p>
                <h2 className="font-playfair text-4xl font-bold text-[#1a1208] mb-6">
                  About This <span className="italic text-[#c8a96e]">Service</span>
                </h2>
                <div className="h-px w-16 bg-[#c8a96e] mb-8" />
                <p className="text-[#2d1f0e]/70 font-raleway leading-relaxed text-lg mb-6">{description}</p>
                <p className="text-[#2d1f0e]/60 font-raleway leading-relaxed">{longDesc}</p>
              </div>

              {/* Features */}
              <div>
                <p className="text-[#c8a96e] font-raleway text-sm tracking-[0.4em] uppercase mb-4">Why Us</p>
                <h2 className="font-playfair text-3xl font-bold text-[#1a1208] mb-8">
                  What We <span className="italic text-[#c8a96e]">Offer</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {features.map((f) => (
                    <div key={f.title} className="bg-white rounded-2xl p-6 border border-[#c8a96e]/10 shadow-sm hover:shadow-md hover:border-[#c8a96e]/30 transition-all duration-300 group">
                      <div className="text-4xl mb-4">{f.icon}</div>
                      <h3 className="font-playfair text-[#1a1208] text-lg font-semibold mb-2 group-hover:text-[#c8a96e] transition-colors">{f.title}</h3>
                      <p className="text-[#2d1f0e]/60 text-sm font-raleway leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <p className="text-[#c8a96e] font-raleway text-sm tracking-[0.4em] uppercase mb-4">Gallery</p>
                <h2 className="font-playfair text-3xl font-bold text-[#1a1208] mb-8">
                  Event <span className="italic text-[#c8a96e]">Showcase</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {gallery.map((img, i) => (
                    <div key={i} className="img-hover-zoom rounded-xl overflow-hidden aspect-square">
                      <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">

              {/* Package includes */}
              <div className="bg-[#1a1208] rounded-2xl p-8 border border-[#c8a96e]/10">
                <h3 className="font-playfair text-[#c8a96e] text-xl font-semibold mb-6">Package Includes</h3>
                <ul className="space-y-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#e8d5a3]/70 font-raleway text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#c8a96e]/10 border border-[#c8a96e]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#c8a96e] text-xs">✓</span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/reservation" className="btn-gold text-[#1a1208] font-raleway font-600 text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-sm block text-center mt-8">
                  Get a Quote
                </Link>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-2xl p-8 border border-[#c8a96e]/10 shadow-sm">
                <h3 className="font-playfair text-[#1a1208] text-xl font-semibold mb-6">
                  {category} Services
                </h3>
                <ul className="space-y-2">
                  {relatedLinks[category].map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`flex items-center gap-3 py-2.5 px-3 rounded-lg font-raleway text-sm tracking-wider uppercase transition-all duration-200 ${
                          link.label === title
                            ? "bg-[#c8a96e]/10 text-[#c8a96e]"
                            : "text-[#2d1f0e]/60 hover:text-[#c8a96e] hover:bg-[#c8a96e]/5"
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${link.label === title ? "bg-[#c8a96e]" : "bg-[#c8a96e]/30"}`} />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Card */}
              <div className="bg-[#c8a96e]/10 rounded-2xl p-8 border border-[#c8a96e]/20">
                <h3 className="font-playfair text-[#1a1208] text-xl font-semibold mb-3">Ready to Plan?</h3>
                <p className="text-[#2d1f0e]/70 text-sm font-raleway mb-6 leading-relaxed">
                  Contact us today to discuss your event and get a personalised quote.
                </p>
                <div className="space-y-3 text-sm font-raleway text-[#2d1f0e]/70">
                  <div className="flex items-center gap-3">
                    <span className="text-[#c8a96e]">📞</span>
                    <a href="tel:+971543392616" className="hover:text-[#c8a96e] transition-colors">+971 54 339 2616</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#c8a96e]">📞</span>
                    <a href="tel:+97145147066" className="hover:text-[#c8a96e] transition-colors">+971 4 514 7066</a>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#c8a96e] mt-0.5">📍</span>
                    <span>Shop No. 5, Marina Pearl View Hotel Apt., Waterfront Al Masara Street, Dubai Marina</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[#c8a96e]">⏰</span>
                    <span>7:30 AM – 12:00 Midnight</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#1a1208] py-20 pattern-overlay relative">
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <p className="text-[#c8a96e] font-raleway text-sm tracking-[0.4em] uppercase mb-4">Let&apos;s Create</p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-8">
            An Unforgettable <span className="italic text-[#c8a96e]">Experience</span>
          </h2>
          <Link href="/reservation" className="btn-gold text-[#1a1208] font-raleway font-600 text-sm tracking-[0.2em] uppercase px-12 py-4 rounded-sm inline-block">
            Make a Reservation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
