import { useState, useMemo, useCallback } from "react";
import { Briefcase } from "lucide-react";
import { defaultCandidates, type Candidate } from "@/data/candidates";
import StatsCards from "@/components/StatsCards";
import FilterPanel from "@/components/FilterPanel";
import CandidateTable from "@/components/CandidateTable";
import DashboardCharts from "@/components/DashboardCharts";

const Index = () => {
  const [candidates] = useState<Candidate[]>(defaultCandidates);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [minExperience, setMinExperience] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedEducation, setSelectedEducation] = useState("");
  const [shortlistedIds, setShortlistedIds] = useState<Set<number>>(new Set());

  const filteredCandidates = useMemo(() => {
    return candidates.filter((c) => {
      if (searchQuery && !c.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      if (selectedSkills.length > 0 && !selectedSkills.every((s) => c.skills.includes(s))) return false;
      if (c.experience < minExperience) return false;
      if (selectedLocation && c.location !== selectedLocation) return false;
      if (selectedEducation && c.education !== selectedEducation) return false;
      return true;
    });
  }, [candidates, selectedSkills, minExperience, searchQuery, selectedLocation, selectedEducation]);

  const handleSkillToggle = useCallback((skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  }, []);

  const handleToggleShortlist = useCallback((id: number) => {
    setShortlistedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleAutoShortlist = useCallback(() => {
    setShortlistedIds(new Set(filteredCandidates.map((c) => c.id)));
  }, [filteredCandidates]);

  const handleExport = useCallback(() => {
    const shortlisted = candidates.filter((c) => shortlistedIds.has(c.id));
    const header = "Name,Skills,Experience,Education,Location,Email";
    const rows = shortlisted.map(
      (c) => `${c.name},"${c.skills.join(", ")}",${c.experience},${c.education},${c.location},${c.email}`
    );
    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "shortlisted_candidates.csv";
    a.click();
    URL.revokeObjectURL(url);
  }, [candidates, shortlistedIds]);

  const handleReset = useCallback(() => {
    setSelectedSkills([]);
    setMinExperience(0);
    setSearchQuery("");
    setSelectedLocation("");
    setSelectedEducation("");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-hero px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-foreground/15 rounded-lg">
              <Briefcase className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-primary-foreground">
                HR Resume Filter
              </h1>
              <p className="text-sm text-primary-foreground/70">
                Smart candidate screening & analytics
              </p>
            </div>
          </div>
          <button
            onClick={handleAutoShortlist}
            className="px-4 py-2 rounded-md bg-primary-foreground/15 text-primary-foreground text-sm font-medium hover:bg-primary-foreground/25 transition-colors backdrop-blur-sm"
          >
            Auto-Shortlist Filtered ({filteredCandidates.length})
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        <StatsCards
          total={candidates.length}
          shortlisted={shortlistedIds.size}
          candidates={candidates}
        />

        <DashboardCharts candidates={candidates} />

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          <FilterPanel
            selectedSkills={selectedSkills}
            onSkillToggle={handleSkillToggle}
            minExperience={minExperience}
            onMinExperienceChange={setMinExperience}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedLocation={selectedLocation}
            onLocationChange={setSelectedLocation}
            selectedEducation={selectedEducation}
            onEducationChange={setSelectedEducation}
            onReset={handleReset}
          />
          <CandidateTable
            candidates={filteredCandidates}
            shortlistedIds={shortlistedIds}
            onToggleShortlist={handleToggleShortlist}
            onExport={handleExport}
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
