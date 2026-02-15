import { Search, Filter, RotateCcw } from "lucide-react";
import { allSkills, allLocations, allEducation } from "@/data/candidates";

interface FilterPanelProps {
  selectedSkills: string[];
  onSkillToggle: (skill: string) => void;
  minExperience: number;
  onMinExperienceChange: (val: number) => void;
  searchQuery: string;
  onSearchChange: (val: string) => void;
  selectedLocation: string;
  onLocationChange: (val: string) => void;
  selectedEducation: string;
  onEducationChange: (val: string) => void;
  onReset: () => void;
}

const FilterPanel = ({
  selectedSkills,
  onSkillToggle,
  minExperience,
  onMinExperienceChange,
  searchQuery,
  onSearchChange,
  selectedLocation,
  onLocationChange,
  selectedEducation,
  onEducationChange,
  onReset,
}: FilterPanelProps) => {
  return (
    <div className="bg-card rounded-lg shadow-card p-5 space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-primary" />
          <h3 className="font-heading font-semibold text-card-foreground">Filters</h3>
        </div>
        <button
          onClick={onReset}
          className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          Reset
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by name..."
          className="w-full pl-9 pr-3 py-2 rounded-md border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Required Skills */}
      <div>
        <label className="text-sm font-medium text-card-foreground mb-2 block">Required Skills</label>
        <div className="flex flex-wrap gap-2">
          {allSkills.map((skill) => {
            const active = selectedSkills.includes(skill);
            return (
              <button
                key={skill}
                onClick={() => onSkillToggle(skill)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-150 ${
                  active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {skill}
              </button>
            );
          })}
        </div>
      </div>

      {/* Min Experience */}
      <div>
        <label className="text-sm font-medium text-card-foreground mb-2 block">
          Min. Experience: <span className="text-primary font-bold">{minExperience}+ years</span>
        </label>
        <input
          type="range"
          min={0}
          max={8}
          value={minExperience}
          onChange={(e) => onMinExperienceChange(Number(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>0</span>
          <span>8+</span>
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="text-sm font-medium text-card-foreground mb-2 block">Location</label>
        <select
          value={selectedLocation}
          onChange={(e) => onLocationChange(e.target.value)}
          className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">All Locations</option>
          {allLocations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      {/* Education */}
      <div>
        <label className="text-sm font-medium text-card-foreground mb-2 block">Education</label>
        <select
          value={selectedEducation}
          onChange={(e) => onEducationChange(e.target.value)}
          className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">All Education</option>
          {allEducation.map((edu) => (
            <option key={edu} value={edu}>{edu}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
