"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    guests: "",
    date: "",
    time: "",
    comments: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#faf6f0] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-72 sm:h-80 flex items-end pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=600&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1208]/40 to-[#1a1208]/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-[#c8a96e] font-raleway text-sm tracking-[0.4em] uppercase mb-3">
            Book Your Table
          </p>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-white">
            <span className="italic text-[#c8a96e]">Reservation</span>
          </h1>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-8">🎉</div>
              <h2 className="font-playfair text-4xl font-bold text-[#1a1208] mb-4">
                Reservation{" "}
                <span className="italic text-[#c8a96e]">Confirmed!</span>
              </h2>
              <p className="text-[#2d1f0e]/70 font-raleway mb-8">
                Thank you! We&apos;ll be in touch shortly to confirm your
                reservation.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-gold text-[#1a1208] font-raleway font-600 text-sm tracking-[0.2em] uppercase px-10 py-4 rounded-sm"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-14">
                <p className="text-[#c8a96e] font-raleway text-sm tracking-[0.4em] uppercase mb-4">
                  Reserve
                </p>
                <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#1a1208]">
                  Your Table <span className="italic text-[#c8a96e]">Awaits</span>
                </h2>
                <div className="divider-gold max-w-xs mx-auto mt-6">
                  <span className="text-[#c8a96e]">✦</span>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl shadow-[#c8a96e]/10 border border-[#c8a96e]/10 p-8 sm:p-12">
                <div className="space-y-6">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#2d1f0e]/70 font-raleway text-xs tracking-widest uppercase mb-3">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full border border-[#c8a96e]/20 rounded-lg px-4 py-3 font-raleway text-[#1a1208] placeholder-[#2d1f0e]/30 focus:outline-none focus:border-[#c8a96e] transition-colors bg-[#faf6f0]/50"
                      />
                    </div>
                    <div>
                      <label className="block text-[#2d1f0e]/70 font-raleway text-xs tracking-widest uppercase mb-3">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full border border-[#c8a96e]/20 rounded-lg px-4 py-3 font-raleway text-[#1a1208] placeholder-[#2d1f0e]/30 focus:outline-none focus:border-[#c8a96e] transition-colors bg-[#faf6f0]/50"
                      />
                    </div>
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-[#2d1f0e]/70 font-raleway text-xs tracking-widest uppercase mb-3">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="+971 50 000 0000"
                      className="w-full border border-[#c8a96e]/20 rounded-lg px-4 py-3 font-raleway text-[#1a1208] placeholder-[#2d1f0e]/30 focus:outline-none focus:border-[#c8a96e] transition-colors bg-[#faf6f0]/50"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[#2d1f0e]/70 font-raleway text-xs tracking-widest uppercase mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full border border-[#c8a96e]/20 rounded-lg px-4 py-3 font-raleway text-[#1a1208] placeholder-[#2d1f0e]/30 focus:outline-none focus:border-[#c8a96e] transition-colors bg-[#faf6f0]/50"
                    />
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#2d1f0e]/70 font-raleway text-xs tracking-widest uppercase mb-3">
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full border border-[#c8a96e]/20 rounded-lg px-4 py-3 font-raleway text-[#1a1208] focus:outline-none focus:border-[#c8a96e] transition-colors bg-[#faf6f0]/50"
                      />
                    </div>
                    <div>
                      <label className="block text-[#2d1f0e]/70 font-raleway text-xs tracking-widest uppercase mb-3">
                        Time
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full border border-[#c8a96e]/20 rounded-lg px-4 py-3 font-raleway text-[#1a1208] focus:outline-none focus:border-[#c8a96e] transition-colors bg-[#faf6f0]/50"
                      >
                        <option value="">Select time</option>
                        {[
                          "12:00 PM",
                          "1:00 PM",
                          "2:00 PM",
                          "3:00 PM",
                          "7:00 PM",
                          "8:00 PM",
                          "9:00 PM",
                          "10:00 PM",
                          "11:00 PM",
                        ].map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-[#2d1f0e]/70 font-raleway text-xs tracking-widest uppercase mb-3">
                      Number of Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full border border-[#c8a96e]/20 rounded-lg px-4 py-3 font-raleway text-[#1a1208] focus:outline-none focus:border-[#c8a96e] transition-colors bg-[#faf6f0]/50"
                    >
                      <option value="">Select guests</option>
                      {["1", "2", "3", "4", "5", "6", "7-10", "10-20", "20+"].map(
                        (n) => (
                          <option key={n} value={n}>
                            {n} {parseInt(n) === 1 ? "Guest" : "Guests"}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  {/* Comments */}
                  <div>
                    <label className="block text-[#2d1f0e]/70 font-raleway text-xs tracking-widest uppercase mb-3">
                      Special Requests / Comments
                    </label>
                    <textarea
                      name="comments"
                      value={formData.comments}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Any dietary requirements, special occasions, or specific requests..."
                      className="w-full border border-[#c8a96e]/20 rounded-lg px-4 py-3 font-raleway text-[#1a1208] placeholder-[#2d1f0e]/30 focus:outline-none focus:border-[#c8a96e] transition-colors bg-[#faf6f0]/50 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    className="w-full btn-gold text-[#1a1208] font-raleway font-600 text-sm tracking-[0.2em] uppercase py-5 rounded-lg mt-4"
                  >
                    Confirm Reservation
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
