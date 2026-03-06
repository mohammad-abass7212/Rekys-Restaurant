import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f0a04] text-[#e8d5a3]/70 pattern-overlay relative">
      {/* Top decorative border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c8a96e] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full border-2 border-[#c8a96e] flex items-center justify-center">
                <span className="text-[#c8a96e] font-playfair font-bold text-2xl">
                  R
                </span>
              </div>
              <div>
                <div className="text-[#c8a96e] font-playfair font-bold text-xl">
                  RICKY&apos;S
                </div>
                <div className="text-[#e8d5a3]/50 text-xs tracking-[0.3em] uppercase">
                  Restaurant
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              One of the finest restaurants in Dubai. Experience authentic
              flavors crafted with the perfect combination of spices.
            </p>
            <div className="flex gap-4">
              {["f", "in", "t"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-[#c8a96e]/40 rounded-full flex items-center justify-center text-[#c8a96e] hover:bg-[#c8a96e] hover:text-[#1a1208] transition-all duration-300 text-xs font-bold"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#c8a96e] font-playfair text-lg font-semibold mb-6 tracking-wide">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-[#c8a96e] mt-0.5">📍</span>
                <span>
                  Shop No. 5, Marina Pearl View Hotel Apt., Waterfront Al Masara Street, Dubai Marina
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#c8a96e]">📞</span>
                <a href="tel:+971543392616" className="hover:text-[#c8a96e] transition-colors">
                  +971 54 339 2616
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#c8a96e]">📞</span>
                <a href="tel:+97145147066" className="hover:text-[#c8a96e] transition-colors">
                  +971 4 514 7066
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#c8a96e]">⏰</span>
                <span>7:30 AM – 12:00 Midnight</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#c8a96e] font-playfair text-lg font-semibold mb-6 tracking-wide">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Yacht Party Catering in Dubai",
                "Birthday Party Catering",
                "Wedding Catering in Dubai",
                "Business Party Catering",
                "Private Catering",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="/catering"
                    className="hover:text-[#c8a96e] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c8a96e] group-hover:w-2 transition-all"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#c8a96e] font-playfair text-lg font-semibold mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Reservation", href: "/reservation" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Catering Menu", href: "/menu" },
                { label: "Private Catering", href: "/catering" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#c8a96e] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c8a96e] group-hover:w-2 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#c8a96e]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#e8d5a3]/40 text-center">
            © {new Date().getFullYear()} Ricky&apos;s Restaurant. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#c8a96e]"></div>
            <span className="text-xs text-[#c8a96e]/60 tracking-widest uppercase">
              Dubai, UAE
            </span>
            <div className="w-1 h-1 rounded-full bg-[#c8a96e]"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
