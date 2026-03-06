import CateringSubPage from "@/components/CateringSubPage";

export const metadata = { title: "State Party Catering Dubai | Ricky's Restaurant" };

export default function StatePartyCatering() {
  return (
    <CateringSubPage
      title="State Party"
      subtitle="Grand-scale catering for prestigious official gatherings"
      heroImg="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=900&fit=crop"
      icon="🏛️"
      category="Corporate"
      description="State parties and official receptions demand catering at the highest level — impeccable presentation, flawless service and cuisine worthy of the most distinguished guests. Ricky's Restaurant brings the sophistication and expertise required for prestigious official gatherings."
      longDesc="From diplomatic receptions and official government functions to national celebrations and high-profile institutional events, our state party catering service operates with the precision and gravitas these occasions demand. Our experienced team understands protocol, dietary requirements of international guests and the logistical complexity of large-scale official events."
      features={[
        { icon: "🎖️", title: "Protocol Awareness", desc: "Full understanding of formal event protocols, seating arrangements and service etiquette" },
        { icon: "🌍", title: "International Cuisine", desc: "Multi-cultural menus accommodating guests from around the world with authentic flavours" },
        { icon: "🔒", title: "Discretion Assured", desc: "Complete confidentiality and professional discretion for high-profile official events" },
        { icon: "👔", title: "Formal Service", desc: "Impeccably dressed service staff trained in formal silver service and fine dining protocols" },
        { icon: "📐", title: "Large Scale Expertise", desc: "Proven experience managing catering for hundreds to thousands of guests flawlessly" },
        { icon: "🏆", title: "Premium Quality", desc: "Only the finest ingredients and most sophisticated culinary techniques for your prestige event" },
      ]}
      gallery={[
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=400&fit=crop",
      ]}
      includes={[
        "Protocol-aware service planning",
        "Multi-cultural menu options",
        "Formal silver service staff",
        "Premium tableware and linen",
        "Floral and décor coordination",
        "International dietary requirements",
        "Full venue setup and breakdown",
        "Complete post-event cleanup",
      ]}
    />
  );
}
