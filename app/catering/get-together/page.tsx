import CateringSubPage from "@/components/CateringSubPage";

export const metadata = { title: "Get Together Catering Dubai | Ricky's Restaurant" };

export default function GetTogetherCatering() {
  return (
    <CateringSubPage
      title="Get Together"
      subtitle="Bringing people closer with exceptional food and warmth"
      heroImg="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=900&fit=crop"
      icon="🌟"
      category="Private"
      description="Sometimes the best moments happen when good friends and family gather together. Ricky's Restaurant makes every get-together memorable with warm, generous and delicious catering that brings people together over shared flavours."
      longDesc="Whether it's a backyard gathering, a casual reunion, a festive celebration or a simple dinner party at home, our get-together catering service delivers restaurant-quality food to your venue. We take care of everything — from menu planning and shopping to cooking and cleanup — so you can relax and enjoy every moment with your loved ones."
      features={[
        { icon: "🏡", title: "Home Catering", desc: "We bring the restaurant experience to your home, garden or preferred private venue" },
        { icon: "🍢", title: "Grazing Tables", desc: "Beautiful grazing tables and sharing platters perfect for informal social gatherings" },
        { icon: "🔥", title: "BBQ & Grills", desc: "Live BBQ and grill stations that double as entertainment and deliver incredible flavour" },
        { icon: "🌿", title: "Casual & Relaxed", desc: "Laid-back service style designed to match the warm, informal atmosphere of a get-together" },
        { icon: "📦", title: "Drop-off Options", desc: "Flexible drop-off catering options for those who prefer a self-serve approach" },
        { icon: "💰", title: "Flexible Budgets", desc: "Packages available for every budget, from small intimate gatherings to larger celebrations" },
      ]}
      gallery={[
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop",
      ]}
      includes={[
        "Personalised menu planning",
        "Full ingredient sourcing",
        "On-site cooking and preparation",
        "Serving staff (optional)",
        "Tableware and serving equipment",
        "Grazing table setup",
        "Drop-off or full-service options",
        "Complete cleanup",
      ]}
    />
  );
}
