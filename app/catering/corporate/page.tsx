import CateringSubPage from "@/components/CateringSubPage";

export const metadata = { title: "Corporate Catering Dubai | Ricky's Restaurant" };

export default function CorporateCatering() {
  return (
    <CateringSubPage
      title="Corporate Events"
      subtitle="Elevating corporate hospitality with culinary excellence"
      heroImg="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=900&fit=crop"
      icon="🏢"
      category="Corporate"
      description="In the corporate world, hospitality speaks volumes. Ricky's Restaurant delivers sophisticated corporate catering that impresses clients, motivates teams and elevates every business occasion — from working lunches to product launches and end-of-year galas."
      longDesc="We understand that corporate events carry a brand reputation. Our professional catering team delivers flawlessly executed menus with impeccable timing, elegant presentation and expert service. From intimate boardroom lunches to large-scale corporate events, we handle every detail so your event reflects your company's standards of excellence."
      features={[
        { icon: "🤝", title: "Client Entertainment", desc: "Impress your most important clients with a culinary experience that reflects your brand's prestige" },
        { icon: "⏱️", title: "Punctual Delivery", desc: "Strict time management ensuring food arrives at exactly the right moment every time" },
        { icon: "📋", title: "Corporate Invoicing", desc: "Professional invoicing and billing suitable for corporate accounting and expense management" },
        { icon: "🍱", title: "Working Lunches", desc: "Efficient, nutritious working lunch packages that keep teams energised and productive" },
        { icon: "🎗️", title: "Branded Experiences", desc: "Catering setups that can be customised to reflect your brand colours and corporate identity" },
        { icon: "📊", title: "Volume Pricing", desc: "Competitive volume pricing for regular corporate clients and large-scale events" },
      ]}
      gallery={[
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1571197119738-c1c3e0d96c10?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=400&fit=crop",
      ]}
      includes={[
        "Dedicated corporate account manager",
        "Custom menu for your event type",
        "Professional service staff",
        "Branded presentation options",
        "Corporate invoicing",
        "Setup and breakdown",
        "Dietary accommodations",
        "Post-event cleanup",
      ]}
    />
  );
}
