import { Download, UserCheck, UserX } from "lucide-react";
import type { Candidate } from "@/data/candidates";

interface CandidateTableProps {
  candidates: Candidate[];
  shortlistedIds: Set<number>;
  onToggleShortlist: (id: number) => void;
  onExport: () => void;
}

const CandidateTable = ({ candidates, shortlistedIds, onToggleShortlist, onExport }: CandidateTableProps) => {
  return (
    <div className="bg-card rounded-lg shadow-card overflow-hidden">
      <div className="flex items-center justify-between p-5 border-b border-border">
        <div>
          <h3 className="font-heading font-semibold text-card-foreground">
            Candidates <span className="text-muted-foreground font-normal text-sm">({candidates.length})</span>
          </h3>
        </div>
        <button
          onClick={onExport}
          disabled={shortlistedIds.size === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Download className="w-4 h-4" />
          Export Shortlist ({shortlistedIds.size})
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-left px-5 py-3 font-medium text-muted-foreground">Name</th>
              <th className="text-left px-5 py-3 font-medium text-muted-foreground">Skills</th>
              <th className="text-left px-5 py-3 font-medium text-muted-foreground">Exp.</th>
              <th className="text-left px-5 py-3 font-medium text-muted-foreground">Education</th>
              <th className="text-left px-5 py-3 font-medium text-muted-foreground">Location</th>
              <th className="text-center px-5 py-3 font-medium text-muted-foreground">Action</th>
            </tr>
          </thead>
          <tbody>
            {candidates.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-12 text-muted-foreground">
                  No candidates match your filters.
                </td>
              </tr>
            ) : (
              candidates.map((c) => {
                const isShortlisted = shortlistedIds.has(c.id);
                return (
                  <tr
                    key={c.id}
                    className={`border-t border-border transition-colors ${
                      isShortlisted ? "bg-success/5" : "hover:bg-muted/30"
                    }`}
                  >
                    <td className="px-5 py-3 font-medium text-card-foreground">{c.name}</td>
                    <td className="px-5 py-3">
                      <div className="flex flex-wrap gap-1">
                        {c.skills.map((s) => (
                          <span
                            key={s}
                            className="px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary font-medium"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-5 py-3 text-card-foreground">{c.experience} yrs</td>
                    <td className="px-5 py-3 text-card-foreground">{c.education}</td>
                    <td className="px-5 py-3 text-card-foreground">{c.location}</td>
                    <td className="px-5 py-3 text-center">
                      <button
                        onClick={() => onToggleShortlist(c.id)}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                          isShortlisted
                            ? "bg-success text-success-foreground hover:bg-success/90"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {isShortlisted ? (
                          <>
                            <UserCheck className="w-3 h-3" /> Shortlisted
                          </>
                        ) : (
                          <>
                            <UserX className="w-3 h-3" /> Shortlist
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidateTable;
