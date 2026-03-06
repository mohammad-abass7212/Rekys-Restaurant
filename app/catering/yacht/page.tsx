import CateringSubPage from "@/components/CateringSubPage";

export const metadata = { title: "Yacht Party Catering Dubai | Ricky's Restaurant" };

export default function YachtCatering() {
  return (
    <CateringSubPage
      title="Yacht Party Catering"
      subtitle="Sail in luxury with exceptional cuisine on Dubai's waters"
      heroImg="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&h=900&fit=crop"
      icon="⛵"
      category="Private"
      description="Experience the ultimate in luxury dining as you cruise Dubai's stunning coastline. Ricky's Restaurant specialises in premium yacht party catering, delivering exceptional flavours with flawless onboard service — from intimate sunset dinners to lavish party cruises."
      longDesc="Our yacht catering menus feature the finest seafood, sophisticated finger food, elegant main courses and decadent desserts, all presented with style and precision. We understand the unique challenges of onboard catering and ensure every detail — from marine-safe packaging to temperature control — is expertly managed so your event is seamless and spectacular."
      features={[
        { icon: "🦞", title: "Premium Seafood", desc: "Fresh lobster, prawns, oysters and premium fish expertly prepared for your cruise" },
        { icon: "🥂", title: "Beverages & Cocktails", desc: "Curated drinks menus including mocktails, fresh juices and premium non-alcoholic options" },
        { icon: "🍱", title: "Marine-Safe Packaging", desc: "All food presented in elegant, marine-safe packaging that maintains quality on the water" },
        { icon: "👨‍🍳", title: "Onboard Service Team", desc: "Dedicated service staff who accompany your cruise to ensure impeccable table service" },
        { icon: "🌅", title: "Sunset Dining", desc: "Specially curated sunset dining experiences with light bites and elegant canapés" },
        { icon: "🎵", title: "Event Coordination", desc: "Full coordination with your yacht charter company for a perfectly integrated experience" },
      ]}
      gallery={[
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=400&fit=crop",
      ]}
      includes={[
        "Premium seafood selection",
        "Canape and finger food platters",
        "Onboard service staff",
        "Marine-safe presentation",
        "Curated beverages menu",
        "Sunset dining package (optional)",
        "Full cleanup after cruise",
        "Yacht charter coordination",
      ]}
    />
  );
}
