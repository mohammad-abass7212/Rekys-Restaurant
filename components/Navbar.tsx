"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const menuDropdown = [
  { label: "Grill Feast", href: "/menu#grill-feast" },
  { label: "Grill Paradise", href: "/menu#grill-paradise" },
  { label: "Extravaganza", href: "/menu#extravaganza" },
  { label: "International", href: "/menu#international" },
];

const cateringDropdown = {
  private: [
    { label: "Wedding Catering", href: "/catering/wedding" },
    { label: "Birthday Party Catering", href: "/catering/birthday" },
    { label: "Yacht Party Catering", href: "/catering/yacht" },
    { label: "Special Occasion Catering", href: "/catering/special-occasion" },
    { label: "Kids Party Catering", href: "/catering/kids" },
    { label: "Get Together", href: "/catering/get-together" },
  ],
  corporate: [
    { label: "Corporate Events", href: "/catering/corporate" },
    { label: "Business Lunches", href: "/catering/business-lunch" },
    { label: "State Party", href: "/catering/state-party" },
    { label: "Gala Dinners", href: "/catering/gala-dinner" },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cateringOpen, setCateringOpen] = useState(false);
  const [menuDropOpen, setMenuDropOpen] = useState(false);
  const [cateringSubOpen, setCateringSubOpen] = useState<
    "private" | "corporate" | null
  >(null);
  const [mobileCateringOpen, setMobileCateringOpen] = useState(false);
  const [mobileCateringSub, setMobileCateringSub] = useState<
    "private" | "corporate" | null
  >(null);
  const cateringRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        cateringRef.current &&
        !cateringRef.current.contains(e.target as Node)
      ) {
        setCateringOpen(false);
        setCateringSubOpen(null);
      }
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-glass ${
        scrolled
          ? "bg-[#1a1208]/95 shadow-2xl shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <div className="relative w-60 h-16">
              <Image
                src="https://rickyrestaurants.com/wp-content/uploads/2024/05/rickylogo-1536x345.png"
                alt="Ricky Restaurants Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* Home */}
            <Link
              href="/"
              className="text-[#e8d5a3]/80 hover:text-[#c8a96e] text-sm font-raleway tracking-widest uppercase transition-all duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c8a96e] group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* About */}
            <Link
              href="/#about"
              className="text-[#e8d5a3]/80 hover:text-[#c8a96e] text-sm font-raleway tracking-widest uppercase transition-all duration-300 relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c8a96e] group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Menu Dropdown */}
            <div
              className="relative"
              ref={menuRef}
              onMouseEnter={() => setMenuDropOpen(true)}
              onMouseLeave={() => setMenuDropOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-[#e8d5a3]/80 hover:text-[#c8a96e] text-sm font-raleway tracking-widest uppercase transition-all duration-300 relative group">
                Menu
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${menuDropOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c8a96e] group-hover:w-full transition-all duration-300"></span>
              </button>

              {/* Invisible bridge to prevent gap from closing dropdown */}
              <div className="absolute top-full left-0 w-full h-3" />

              <div
                className={`absolute top-[calc(100%+0.75rem)] left-0 w-56 bg-[#1a1208]/98 border border-[#c8a96e]/20 rounded-xl shadow-2xl shadow-black/40 overflow-hidden transition-all duration-300 ${menuDropOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
              >
                <div className="py-2">
                  <Link
                    href="/menu"
                    className="block px-5 py-3 text-[#e8d5a3]/60 hover:text-[#c8a96e] hover:bg-[#c8a96e]/5 text-xs tracking-widest uppercase font-raleway transition-colors border-b border-[#c8a96e]/10"
                  >
                    Full Menu
                  </Link>
                  {menuDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-5 py-3 text-[#e8d5a3]/70 hover:text-[#c8a96e] hover:bg-[#c8a96e]/5 text-xs tracking-widest uppercase font-raleway transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Catering Mega Dropdown */}
            <div
              className="relative"
              ref={cateringRef}
              onMouseEnter={() => setCateringOpen(true)}
              onMouseLeave={() => {
                setCateringOpen(false);
                setCateringSubOpen(null);
              }}
            >
              <button className="flex items-center gap-1.5 text-[#e8d5a3]/80 hover:text-[#c8a96e] text-sm font-raleway tracking-widest uppercase transition-all duration-300 relative group">
                Catering
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${cateringOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c8a96e] group-hover:w-full transition-all duration-300"></span>
              </button>

              {/* Invisible bridge to prevent gap from closing dropdown */}
              <div className="absolute top-full left-0 w-full h-3" />

              {/* Level 1 dropdown */}
              <div
                className={`absolute top-[calc(100%+0.75rem)] left-0 w-64 bg-[#1a1208]/98 border border-[#c8a96e]/20 rounded-xl shadow-2xl shadow-black/40 overflow-visible transition-all duration-300 ${cateringOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
              >
                <div className="py-2">
                  <Link
                    href="/catering"
                    className="block px-5 py-3 text-[#e8d5a3]/60 hover:text-[#c8a96e] hover:bg-[#c8a96e]/5 text-xs tracking-widest uppercase font-raleway transition-colors border-b border-[#c8a96e]/10"
                  >
                    All Catering Services
                  </Link>

                  {/* Private Catering */}
                  <div
                    className="relative"
                    onMouseEnter={() => setCateringSubOpen("private")}
                    onMouseLeave={() => setCateringSubOpen(null)}
                  >
                    <button
                      className={`w-full flex items-center justify-between px-5 py-3 text-xs tracking-widest uppercase font-raleway transition-colors ${cateringSubOpen === "private" ? "text-[#c8a96e] bg-[#c8a96e]/5" : "text-[#e8d5a3]/70 hover:text-[#c8a96e] hover:bg-[#c8a96e]/5"}`}
                    >
                      Private Catering
                      <svg
                        className="w-3 h-3"
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
                    </button>
                    {/* Sub-dropdown */}
                    <div
                      className={`absolute left-full top-0 w-64 bg-[#1a1208]/98 border border-[#c8a96e]/20 rounded-xl shadow-2xl shadow-black/40 transition-all duration-200 ${cateringSubOpen === "private" ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-2 pointer-events-none"}`}
                    >
                      <div className="py-2">
                        <div className="px-5 py-2 text-[#c8a96e]/50 text-[10px] tracking-[0.3em] uppercase font-raleway border-b border-[#c8a96e]/10 mb-1">
                          Private Events
                        </div>
                        {cateringDropdown.private.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-5 py-2.5 text-[#e8d5a3]/70 hover:text-[#c8a96e] hover:bg-[#c8a96e]/5 text-xs tracking-wider uppercase font-raleway transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Corporate Catering */}
                  <div
                    className="relative"
                    onMouseEnter={() => setCateringSubOpen("corporate")}
                    onMouseLeave={() => setCateringSubOpen(null)}
                  >
                    <button
                      className={`w-full flex items-center justify-between px-5 py-3 text-xs tracking-widest uppercase font-raleway transition-colors ${cateringSubOpen === "corporate" ? "text-[#c8a96e] bg-[#c8a96e]/5" : "text-[#e8d5a3]/70 hover:text-[#c8a96e] hover:bg-[#c8a96e]/5"}`}
                    >
                      Corporate Catering
                      <svg
                        className="w-3 h-3"
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
                    </button>
                    <div
                      className={`absolute left-full top-0 w-64 bg-[#1a1208]/98 border border-[#c8a96e]/20 rounded-xl shadow-2xl shadow-black/40 transition-all duration-200 ${cateringSubOpen === "corporate" ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-2 pointer-events-none"}`}
                    >
                      <div className="py-2">
                        <div className="px-5 py-2 text-[#c8a96e]/50 text-[10px] tracking-[0.3em] uppercase font-raleway border-b border-[#c8a96e]/10 mb-1">
                          Corporate Events
                        </div>
                        {cateringDropdown.corporate.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-5 py-2.5 text-[#e8d5a3]/70 hover:text-[#c8a96e] hover:bg-[#c8a96e]/5 text-xs tracking-wider uppercase font-raleway transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <Link
              href="/#contact"
              className="text-[#e8d5a3]/80 hover:text-[#c8a96e] text-sm font-raleway tracking-widest uppercase transition-all duration-300 relative group"
            >
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c8a96e] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/reservation"
              className="hidden sm:block btn-gold text-[#1a1208] font-raleway font-600 text-sm tracking-widest uppercase px-6 py-2.5 rounded-sm"
            >
              Reservation
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-[#c8a96e] p-2"
            >
              <div className="space-y-1.5">
                <span
                  className={`block w-6 h-0.5 bg-[#c8a96e] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-[#c8a96e] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-[#c8a96e] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-[600px] mt-4" : "max-h-0"}`}
        >
          <div className="bg-[#1a1208]/98 border border-[#c8a96e]/20 rounded-lg overflow-hidden">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block text-[#e8d5a3]/80 hover:text-[#c8a96e] font-raleway text-xs tracking-widest uppercase px-6 py-4 border-b border-[#c8a96e]/10 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#about"
              onClick={() => setMenuOpen(false)}
              className="block text-[#e8d5a3]/80 hover:text-[#c8a96e] font-raleway text-xs tracking-widest uppercase px-6 py-4 border-b border-[#c8a96e]/10 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/menu"
              onClick={() => setMenuOpen(false)}
              className="block text-[#e8d5a3]/80 hover:text-[#c8a96e] font-raleway text-xs tracking-widest uppercase px-6 py-4 border-b border-[#c8a96e]/10 transition-colors"
            >
              Menu
            </Link>

            {/* Mobile Catering Accordion */}
            <div>
              <button
                onClick={() => setMobileCateringOpen(!mobileCateringOpen)}
                className="w-full flex items-center justify-between text-[#e8d5a3]/80 hover:text-[#c8a96e] font-raleway text-xs tracking-widest uppercase px-6 py-4 border-b border-[#c8a96e]/10 transition-colors"
              >
                Catering
                <svg
                  className={`w-3 h-3 transition-transform ${mobileCateringOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${mobileCateringOpen ? "max-h-96" : "max-h-0"}`}
              >
                <div className="bg-[#0f0a04]/50">
                  {/* Private */}
                  <button
                    onClick={() =>
                      setMobileCateringSub(
                        mobileCateringSub === "private" ? null : "private",
                      )
                    }
                    className="w-full flex items-center justify-between px-8 py-3 text-[#c8a96e]/80 font-raleway text-xs tracking-widest uppercase border-b border-[#c8a96e]/10 transition-colors"
                  >
                    Private Catering
                    <svg
                      className={`w-3 h-3 transition-transform ${mobileCateringSub === "private" ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${mobileCateringSub === "private" ? "max-h-64" : "max-h-0"}`}
                  >
                    {cateringDropdown.private.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block px-12 py-2.5 text-[#e8d5a3]/50 hover:text-[#c8a96e] font-raleway text-xs tracking-wider uppercase transition-colors border-b border-[#c8a96e]/5"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  {/* Corporate */}
                  <button
                    onClick={() =>
                      setMobileCateringSub(
                        mobileCateringSub === "corporate" ? null : "corporate",
                      )
                    }
                    className="w-full flex items-center justify-between px-8 py-3 text-[#c8a96e]/80 font-raleway text-xs tracking-widest uppercase border-b border-[#c8a96e]/10 transition-colors"
                  >
                    Corporate Catering
                    <svg
                      className={`w-3 h-3 transition-transform ${mobileCateringSub === "corporate" ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${mobileCateringSub === "corporate" ? "max-h-64" : "max-h-0"}`}
                  >
                    {cateringDropdown.corporate.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block px-12 py-2.5 text-[#e8d5a3]/50 hover:text-[#c8a96e] font-raleway text-xs tracking-wider uppercase transition-colors border-b border-[#c8a96e]/5"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="block text-[#e8d5a3]/80 hover:text-[#c8a96e] font-raleway text-xs tracking-widest uppercase px-6 py-4 border-b border-[#c8a96e]/10 transition-colors"
            >
              Contact Us
            </Link>
            <div className="p-4">
              <Link
                href="/reservation"
                onClick={() => setMenuOpen(false)}
                className="block btn-gold text-[#1a1208] font-raleway font-600 text-xs tracking-widest uppercase px-6 py-3 rounded-sm text-center"
              >
                Reservation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
