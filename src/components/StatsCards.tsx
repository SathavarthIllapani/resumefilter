import { Users, UserCheck, MapPin, GraduationCap } from "lucide-react";
import type { Candidate } from "@/data/candidates";

interface StatsCardsProps {
  total: number;
  shortlisted: number;
  candidates: Candidate[];
}

const StatsCards = ({ total, shortlisted, candidates }: StatsCardsProps) => {
  const locations = new Set(candidates.map((c) => c.location)).size;
  const avgExp = candidates.length
    ? (candidates.reduce((s, c) => s + c.experience, 0) / candidates.length).toFixed(1)
    : "0";

  const cards = [
    { label: "Total Candidates", value: total, icon: Users, color: "bg-primary/10 text-primary" },
    { label: "Shortlisted", value: shortlisted, icon: UserCheck, color: "bg-success/10 text-success" },
    { label: "Locations", value: locations, icon: MapPin, color: "bg-secondary/10 text-secondary" },
    { label: "Avg Experience", value: `${avgExp} yrs`, icon: GraduationCap, color: "bg-accent/10 text-accent-foreground" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="bg-card rounded-lg p-5 shadow-card hover:shadow-card-hover transition-shadow duration-200"
        >
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-lg ${card.color}`}>
              <card.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{card.label}</p>
              <p className="text-2xl font-heading font-bold text-card-foreground">{card.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
