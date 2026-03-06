import CateringSubPage from "@/components/CateringSubPage";

export const metadata = { title: "Gala Dinner Catering Dubai | Ricky's Restaurant" };

export default function GalaDinnerCatering() {
  return (
    <CateringSubPage
      title="Gala Dinners"
      subtitle="An evening of culinary theatre and refined elegance"
      heroImg="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=900&fit=crop"
      icon="✨"
      category="Corporate"
      description="A gala dinner is more than a meal — it's a statement. Ricky's Restaurant transforms gala evenings into extraordinary culinary experiences, combining theatrical presentation, sophisticated menus and impeccable service to create an evening your guests will never forget."
      longDesc="Whether you're hosting an awards ceremony, annual charity dinner, black-tie corporate event or a grand product launch gala, our team delivers a multi-course dining experience that matches the grandeur of the occasion. From amuse-bouche to dessert, every course is crafted with artistry and precision, complemented by flawless service that ensures the evening flows beautifully."
      features={[
        { icon: "🌟", title: "Multi-Course Menus", desc: "Sophisticated 4 to 7-course gala menus with amuse-bouche, palate cleansers and show-stopping mains" },
        { icon: "🎭", title: "Culinary Theatre", desc: "Dramatic plating and live finishing touches that create genuine wow moments at the table" },
        { icon: "🥂", title: "Mocktail Pairing", desc: "Curated non-alcoholic beverage pairings designed to complement each course perfectly" },
        { icon: "🎻", title: "Live Cooking Stations", desc: "Premium live carving, flambé or dessert stations that add entertainment and theatre" },
        { icon: "💎", title: "Luxury Tableware", desc: "Premium tableware, crystal glassware and custom linen to match your event's prestige" },
        { icon: "📋", title: "Full Event Planning", desc: "Comprehensive catering planning support from initial concept through to post-event review" },
      ]}
      gallery={[
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop",
      ]}
      includes={[
        "Multi-course gala menu",
        "Luxury tableware and crystal",
        "White-glove service staff",
        "Live cooking stations",
        "Mocktail pairing service",
        "Custom linen and décor",
        "Full event coordination",
        "Post-event cleanup",
      ]}
    />
  );
}
