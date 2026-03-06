import CateringSubPage from "@/components/CateringSubPage";

export const metadata = { title: "Wedding Catering Dubai | Ricky's Restaurant" };

export default function WeddingCatering() {
  return (
    <CateringSubPage
      title="Wedding Catering"
      subtitle="Making your special day truly unforgettable"
      heroImg="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=900&fit=crop"
      icon="💍"
      category="Private"
      description="Your wedding day deserves nothing but perfection. At Ricky's Restaurant, we craft bespoke wedding menus that reflect your love story, combining the finest ingredients with culinary artistry to create a feast your guests will talk about for years."
      longDesc="From intimate garden ceremonies to grand ballroom receptions, our wedding catering team handles every detail with precision and passion. We work closely with couples to design custom menus that honour cultural traditions while embracing modern flavours. Our professional service staff, elegant presentation, and impeccable attention to detail ensure your wedding feast is as beautiful as the day itself."
      features={[
        { icon: "👨‍🍳", title: "Expert Wedding Chefs", desc: "Our dedicated wedding culinary team has years of experience crafting memorable wedding menus" },
        { icon: "🌸", title: "Custom Menu Design", desc: "Fully personalised menus designed around your preferences, theme and cultural requirements" },
        { icon: "🍽️", title: "Elegant Presentation", desc: "Stunning food presentation that complements your wedding décor and photography" },
        { icon: "🥗", title: "Dietary Options", desc: "Full accommodation for allergies, vegetarian, vegan, halal and other dietary requirements" },
        { icon: "👥", title: "Professional Staff", desc: "Experienced service staff dressed to complement your event's formality and style" },
        { icon: "🎂", title: "Wedding Cake Service", desc: "Beautiful custom wedding cakes crafted by our in-house patissiers to your specification" },
      ]}
      gallery={[
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop",
      ]}
      includes={[
        "Custom menu consultation",
        "Full setup and breakdown",
        "Professional service staff",
        "Elegant tableware and linen",
        "Dietary accommodations",
        "Wedding cake service",
        "Live cooking stations (optional)",
        "Post-event cleanup",
      ]}
    />
  );
}
