import CateringSubPage from "@/components/CateringSubPage";

export const metadata = { title: "Special Occasion Catering Dubai | Ricky's Restaurant" };

export default function SpecialOccasionCatering() {
  return (
    <CateringSubPage
      title="Special Occasion Catering"
      subtitle="Every milestone deserves a magnificent celebration"
      heroImg="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&h=900&fit=crop"
      icon="🎉"
      category="Private"
      description="Life's most precious moments deserve extraordinary food. From anniversaries and graduations to engagements, baby showers and religious celebrations, Ricky's Restaurant creates bespoke catering experiences tailored to your unique occasion."
      longDesc="We understand that every special occasion is different. That's why we take the time to understand the significance of your event and design a culinary experience that honours it. Our team combines creativity and culinary expertise to deliver menus that are both visually stunning and deliciously memorable."
      features={[
        { icon: "🎊", title: "Bespoke Menu Design", desc: "Every menu is crafted uniquely for your occasion, reflecting the significance of your celebration" },
        { icon: "🌺", title: "Themed Presentation", desc: "Food presentation and styling tailored to complement your event's theme and décor" },
        { icon: "🥂", title: "Milestone Celebrations", desc: "Perfect for anniversaries, engagements, graduations and other life milestones" },
        { icon: "🕌", title: "Cultural Occasions", desc: "Menus designed to honour cultural and religious celebrations with authentic flavours" },
        { icon: "📸", title: "Photo-Ready Setups", desc: "Stunning food presentations designed to photograph beautifully for your memories" },
        { icon: "🌟", title: "VIP Treatment", desc: "Premium service ensuring every guest feels valued and every detail is perfect" },
      ]}
      gallery={[
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1571197119738-c1c3e0d96c10?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=400&fit=crop",
      ]}
      includes={[
        "Personalised menu consultation",
        "Themed food presentation",
        "Professional service staff",
        "Elegant tableware and linen",
        "Specialty dessert creations",
        "Dietary accommodations",
        "Full venue setup",
        "Post-event cleanup",
      ]}
    />
  );
}
