import CateringSubPage from "@/components/CateringSubPage";

export const metadata = {
  title: "Birthday Party Catering Dubai | Ricky's Restaurant",
};

export default function BirthdayCatering() {
  return (
    <CateringSubPage
      title="Birthday Party Catering"
      subtitle="Celebrate every year with flavours that bring joy"
      heroImg="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1920&h=900&fit=crop"
      icon="🎂"
      category="Private"
      description="Birthdays deserve to be celebrated in style. Whether it's a milestone birthday, a surprise party or an intimate gathering, Ricky's Restaurant creates personalised birthday catering experiences that make every moment delicious and memorable."
      longDesc="From themed buffets to plated dinners and dessert stations, we tailor every birthday package to suit the guest of honour's tastes and the event's atmosphere. Our team coordinates seamlessly with your venue and decorators to deliver a flawless, stress-free experience so you can focus on celebrating."
      features={[
        {
          icon: "🎂",
          title: "Custom Birthday Cakes",
          desc: "Stunning bespoke cakes designed to match the birthday theme and the guest of honour's taste",
        },
        {
          icon: "🍕",
          title: "Themed Buffets",
          desc: "Creative buffet layouts designed to match your party theme, from casual to black-tie",
        },
        {
          icon: "🧒",
          title: "All Age Groups",
          desc: "Menus crafted for every age group, from children's parties to milestone adult celebrations",
        },
        {
          icon: "🎪",
          title: "Live Stations",
          desc: "Interactive food stations like BBQ, dessert bars and carving stations to entertain guests",
        },
        {
          icon: "📦",
          title: "Flexible Packages",
          desc: "Choose from various package sizes suitable for intimate gatherings or large celebrations",
        },
        {
          icon: "🌿",
          title: "Dietary Inclusive",
          desc: "Full range of dietary options including vegan, gluten-free and allergen-aware menus",
        },
      ]}
      gallery={[
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop",
      ]}
      includes={[
        "Custom birthday cake",
        "Themed buffet setup",
        "Professional service staff",
        "Tableware and decorative elements",
        "Dietary accommodations",
        "Dessert station",
        "Setup and breakdown",
        "Post-event cleanup",
      ]}
    />
  );
}
