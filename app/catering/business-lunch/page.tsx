import CateringSubPage from "@/components/CateringSubPage";

export const metadata = {
  title: "Business Lunch Catering Dubai | Ricky's Restaurant",
};

export default function BusinessLunchCatering() {
  return (
    <CateringSubPage
      title="Business Lunches"
      subtitle="Nourishing your team and impressing your clients"
      heroImg="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1920&h=900&fit=crop"
      icon="🍱"
      category="Corporate"
      description="A great business lunch does more than feed people — it creates the right environment for productive conversations, stronger relationships and sharper thinking. Ricky's Restaurant provides premium business lunch catering that keeps your team and clients nourished and impressed."
      longDesc="From individually portioned box lunches for video calls to elegant boardroom spreads, our business lunch catering is designed for the modern workplace. We prioritise fresh, nutritious options that sustain energy throughout the afternoon, presented professionally and delivered with precision so your meetings stay on schedule."
      features={[
        {
          icon: "🥗",
          title: "Nutritious Menus",
          desc: "Health-conscious menus designed to sustain energy and mental clarity throughout the workday",
        },
        {
          icon: "📦",
          title: "Individual Box Lunches",
          desc: "Elegantly packaged individual lunches ideal for hybrid meetings, training days and seminars",
        },
        {
          icon: "🍽️",
          title: "Boardroom Spreads",
          desc: "Sophisticated shared spreads perfect for client presentations and executive meetings",
        },
        {
          icon: "⚡",
          title: "Express Service",
          desc: "Rapid, reliable delivery timed to your meeting schedule with no disruption to your workflow",
        },
        {
          icon: "♻️",
          title: "Sustainable Packaging",
          desc: "Eco-friendly packaging options that align with your company's sustainability commitments",
        },
        {
          icon: "🔄",
          title: "Regular Packages",
          desc: "Weekly and monthly subscription packages for offices requiring regular lunch catering",
        },
      ]}
      gallery={[
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1571197119738-c1c3e0d96c10?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=400&fit=crop",
      ]}
      includes={[
        "Custom nutritious menu",
        "Individual or shared format",
        "Professional packaging",
        "Punctual delivery",
        "Dietary labelling",
        "Beverages and drinks",
        "Disposable cutlery (if needed)",
        "Corporate invoice",
      ]}
    />
  );
}
