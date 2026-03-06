import CateringSubPage from "@/components/CateringSubPage";

export const metadata = { title: "Kids Party Catering Dubai | Ricky's Restaurant" };

export default function KidsCatering() {
  return (
    <CateringSubPage
      title="Kids Party Catering"
      subtitle="Fun, colourful and delicious food little ones will love"
      heroImg="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1920&h=900&fit=crop"
      icon="🎈"
      category="Private"
      description="Kids' parties call for food that's as fun as it is delicious! At Ricky's Restaurant, we create playful, colourful and child-friendly menus that make little ones smile while giving parents peace of mind about quality and safety."
      longDesc="We know that feeding children at parties requires a special approach — food needs to be inviting, easy to eat, allergy-aware and genuinely tasty. Our kids' catering team specialises in creating vibrant, themed food setups that become part of the party entertainment, from character-shaped sandwiches to colourful dessert bars and interactive food stations."
      features={[
        { icon: "🌈", title: "Fun & Colourful", desc: "Vibrant, themed food displays that become part of the party decoration and entertainment" },
        { icon: "🥗", title: "Healthy Options", desc: "Nutritious, child-friendly food that parents feel good about serving at their little one's party" },
        { icon: "⚠️", title: "Allergy Awareness", desc: "Strict allergy management protocols with full ingredient transparency for parents" },
        { icon: "🎠", title: "Interactive Stations", desc: "Fun food stations where kids can customise their own snacks and treats" },
        { icon: "🧁", title: "Character Desserts", desc: "Themed cupcakes, cakes and sweets featuring beloved characters and party themes" },
        { icon: "👶", title: "All Age Groups", desc: "Separate menus for toddlers, young children and older kids to suit every age" },
      ]}
      gallery={[
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
      ]}
      includes={[
        "Themed food setup and presentation",
        "Child-friendly menu options",
        "Allergy management protocols",
        "Custom birthday cake",
        "Interactive food stations",
        "Snack and sweets table",
        "Service staff",
        "Full cleanup",
      ]}
    />
  );
}
