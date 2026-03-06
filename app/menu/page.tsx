"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const menuSections = [
  {
    id: "grill-feast",
    title: "Rickys Grill Feast",
    subtitle: "Signature Grill Selection",
    items: [
      {
        name: "Caesar Salad",
        desc: "Crisp romaine lettuce tossed with creamy Caesar dressing, Parmesan cheese and homemade croutons",
        img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
        tag: "Salads",
      },
      {
        name: "Grilled Chicken Bone",
        desc: "Grilled chicken bone as seasoned to perfection marinating with creamy flavors, served with your choice of delectables sides",
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
        name: "Mutton Kofta (Seekh Kabab)",
        desc: "A rich mutton kofta sauce made with sesame paste, garlic, lemon juice, olive oil and olive paste aromatics spices and grilled to perfection",
        img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
        tag: "Grills",
      },
      {
        name: "Seasoned Rice",
        desc: "Fully seasoned rice infused with spices, herbs and sautéed onions, offering a fragrant and flavorful complement to any dish",
        img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop",
        tag: "Sides",
      },
      {
        name: "Potato Wedges",
        desc: "Crispy potato wedges or golden French fries, seasoned to perfection and served with your choice of dipping sauce",
        img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=300&fit=crop",
        tag: "Sides",
      },
      {
        name: "French Fries",
        desc: "Extra crispy fries, perfectly crisp on the outside and fluffy on the inside, seasoned with your favorite dressing sauce",
        img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
        tag: "Sides",
      },
      {
        name: "Chicken Skewers",
        desc: "Tender chicken skewers marinated in a flavorful blend of spices, grilled to juicy perfection and served with your choice of dipping sauce",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        tag: "Grills",
      },
    ],
  },
  {
    id: "grill-paradise",
    title: "Rickys Grill Paradise",
    subtitle: "Premium Grill Experience",
    items: [
      {
        name: "Caesar Salad",
        desc: "Crisp romaine lettuce tossed with creamy Caesar dressing, Parmesan cheese and homemade croutons",
        img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
        tag: "Salads",
      },
      {
        name: "Hummus",
        desc: "Smooth and creamy chickpea hummus drizzled with extra virgin olive oil",
        img: "https://images.unsplash.com/photo-1571197119738-c1c3e0d96c10?w=400&h=300&fit=crop",
        tag: "Starters",
      },
      {
        name: "Tabina",
        desc: "Rich and creamy tahini sauce made with sesame paste, garlic, lemon juice, olive oil and a hint of cumin",
        img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&h=300&fit=crop",
        tag: "Dips",
      },
      {
        name: "Grilled Chicken Bone",
        desc: "Grilled chicken bone, seasoned to perfection with creamy flavors",
        img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=400&h=300&fit=crop",
        tag: "Grill",
      },
      {
        name: "Pasta (White or Pink)",
        desc: "Al dente pasta served with your choice of sauces, topped with freshly grated Parmesan cheese",
        img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
        tag: "Pasta",
      },
      {
        name: "Seasoned Rice",
        desc: "Fragrant seasoned rice complementing any main dish",
        img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop",
        tag: "Sides",
      },
      {
        name: "Potato Wedges or French Fries",
        desc: "Crispy potato wedges or golden French fries served with dipping sauce",
        img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=300&fit=crop",
        tag: "Sides",
      },
      {
        name: "Grilled Salmon and Seabass",
        desc: "Perfectly grilled fish fillets seasoned with herbs, served with Mediterranean accompaniments",
        img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
        tag: "Seafood",
      },
    ],
  },
  {
    id: "extravaganza",
    title: "Rickys Extravaganza",
    subtitle: "The Ultimate Feast",
    items: [
      {
        name: "Caesar Salad",
        desc: "Crisp romaine lettuce tossed with creamy Caesar dressing and homemade croutons",
        img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
        tag: "Salads",
      },
      {
        name: "Grilled Chicken Bone",
        desc: "Premium grilled chicken with signature seasoning",
        img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=400&h=300&fit=crop",
        tag: "Grill",
      },
      {
        name: "Hummus",
        desc: "Classic creamy hummus with olive oil drizzle",
        img: "https://images.unsplash.com/photo-1571197119738-c1c3e0d96c10?w=400&h=300&fit=crop",
        tag: "Starters",
      },
      {
        name: "Pasta (White or Pink)",
        desc: "Premium pasta with choice of sauces and toppings",
        img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
        tag: "Pasta",
      },
      {
        name: "Mutton Kofta (Seekh Kabab)",
        desc: "Aromatic spiced mutton skewers grilled to perfection",
        img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
        tag: "Grills",
      },
      {
        name: "Seasoned Rice",
        desc: "Herb-infused fragrant rice with spices",
        img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop",
        tag: "Sides",
      },
      {
        name: "Chicken Skewers",
        desc: "Juicy marinated chicken skewers with dipping sauce",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        tag: "Grills",
      },
      {
        name: "Slightly Fried Calamari",
        desc: "Golden calamari rings with crispy coating, served with aioli",
        img: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=400&h=300&fit=crop",
        tag: "Seafood",
      },
      {
        name: "Grilled Tiger Prawns",
        desc: "Large succulent tiger prawns grilled to perfection with lemon butter",
        img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop",
        tag: "Seafood",
      },
      {
        name: "Grilled Red Salmon and Seabass",
        desc: "Premium fish selection grilled to perfection",
        img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
        tag: "Seafood",
      },
      {
        name: "Shrimp Egg Fried Rice",
        desc: "Wok-fried rice with shrimp and scrambled eggs, seasoned to perfection",
        img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
        tag: "Rice",
      },
      {
        name: "Potato Wedges or French Fries",
        desc: "Crispy sides served with your choice of dip",
        img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&h=300&fit=crop",
        tag: "Sides",
      },
    ],
  },
  {
    id: "international",
    title: "Rickys International",
    subtitle: "World Flavors Collection",
    items: [
      {
        name: "Caesar Salad",
        desc: "Classic Caesar with homemade dressing and croutons",
        img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
        tag: "Salads",
      },
      {
        name: "Grilled Chicken Bone",
        desc: "International-style grilled chicken with global seasoning",
        img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=400&h=300&fit=crop",
        tag: "Grill",
      },
      {
        name: "Hummus",
        desc: "Traditional Middle Eastern hummus with pita",
        img: "https://images.unsplash.com/photo-1571197119738-c1c3e0d96c10?w=400&h=300&fit=crop",
        tag: "Starters",
      },
      {
        name: "Pasta (White or Pink)",
        desc: "Italian-inspired pasta with premium sauces",
        img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop",
        tag: "Pasta",
      },
      {
        name: "Mutton Kofta (Seekh Kabab)",
        desc: "South Asian spiced mutton skewers",
        img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
        tag: "Grills",
      },
      {
        name: "Chicken Skewers",
        desc: "Marinated chicken skewers from the Middle East",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        tag: "Grills",
      },
      {
        name: "Slightly Fried Calamari",
        desc: "Mediterranean-style calamari with lemon aioli",
        img: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=400&h=300&fit=crop",
        tag: "Seafood",
      },
      {
        name: "Grilled Tiger Prawns",
        desc: "Asian-spiced tiger prawns with aromatic herbs",
        img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop",
        tag: "Seafood",
      },
      {
        name: "Grilled Salmon and Seabass",
        desc: "Nordic-style salmon with European seabass",
        img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
        tag: "Seafood",
      },
      {
        name: "Shrimp Egg Fried Rice",
        desc: "Asian-inspired egg fried rice with fresh shrimp",
        img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
        tag: "Rice",
      },
    ],
  },
];

export default function MenuPage() {
  const [activeSection, setActiveSection] = useState("grill-feast");

  const currentSection =
    menuSections.find((s) => s.id === activeSection) || menuSections[0];

  return (
    <main className="bg-[#faf6f0] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-end pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=600&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1208]/50 to-[#1a1208]/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <p className="text-[#c8a96e] font-raleway text-sm tracking-[0.4em] uppercase mb-3">
            Explore
          </p>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-white">
            Catering <span className="italic text-[#c8a96e]">Menu</span>
          </h1>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-[#1a1208] sticky top-16 z-30 border-b border-[#c8a96e]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-none gap-0">
            {menuSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex-shrink-0 px-6 py-5 font-raleway text-xs sm:text-sm tracking-[0.15em] uppercase font-500 border-b-2 transition-all duration-300 whitespace-nowrap ${
                  activeSection === section.id
                    ? "border-[#c8a96e] text-[#c8a96e]"
                    : "border-transparent text-[#e8d5a3]/50 hover:text-[#e8d5a3]"
                }`}
              >
                {section.title.replace("Rickys ", "")}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#1a1208] mb-3">
            {currentSection.title.replace("Rickys ", "Ricky's ")}
          </h2>
          <p className="text-[#c8a96e] font-raleway text-sm tracking-[0.3em] uppercase">
            {currentSection.subtitle}
          </p>
          <div className="divider-gold max-w-xs mx-auto mt-6">
            <span className="text-[#c8a96e]">✦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentSection.items.map((item) => (
            <div
              key={item.name}
              className="menu-card bg-white rounded-2xl overflow-hidden shadow-lg shadow-[#c8a96e]/5 border border-[#c8a96e]/10 group"
            >
              <div className="img-hover-zoom">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-52 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#c8a96e] text-xs tracking-widest uppercase font-raleway font-500 bg-[#c8a96e]/10 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-playfair text-[#1a1208] text-xl font-semibold mb-3 group-hover:text-[#c8a96e] transition-colors">
                  {item.name}
                </h3>
                <p className="text-[#2d1f0e]/60 text-sm leading-relaxed font-raleway">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1208] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-[#c8a96e] font-raleway text-sm tracking-[0.4em] uppercase mb-4">
            Ready to Order?
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-8">
            Make Your <span className="italic text-[#c8a96e]">Reservation</span>
          </h2>
          <a
            href="/reservation"
            className="btn-gold text-[#1a1208] font-raleway font-600 text-sm tracking-[0.2em] uppercase px-12 py-4 rounded-sm inline-block"
          >
            Book a Table
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
