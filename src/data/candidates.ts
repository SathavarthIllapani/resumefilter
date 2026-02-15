export interface Candidate {
  id: number;
  name: string;
  skills: string[];
  experience: number;
  education: string;
  location: string;
  email: string;
}

export const defaultCandidates: Candidate[] = [
  { id: 1, name: "Rahul Sharma", skills: ["Python", "SQL", "Excel"], experience: 3, education: "BTech", location: "Hyderabad", email: "rahul.s@email.com" },
  { id: 2, name: "Sneha Reddy", skills: ["Java", "Spring", "SQL"], experience: 2, education: "BTech", location: "Bangalore", email: "sneha.r@email.com" },
  { id: 3, name: "Arjun Patel", skills: ["Python", "Excel"], experience: 1, education: "BSc", location: "Chennai", email: "arjun.p@email.com" },
  { id: 4, name: "Priya Nair", skills: ["SQL", "PowerBI", "Excel"], experience: 4, education: "MBA", location: "Hyderabad", email: "priya.n@email.com" },
  { id: 5, name: "Vikram Desai", skills: ["Python", "SQL", "Machine Learning"], experience: 5, education: "MTech", location: "Pune", email: "vikram.d@email.com" },
  { id: 6, name: "Ananya Iyer", skills: ["Python", "SQL", "Tableau"], experience: 3, education: "BTech", location: "Bangalore", email: "ananya.i@email.com" },
  { id: 7, name: "Karthik Menon", skills: ["Java", "Python", "AWS"], experience: 6, education: "MTech", location: "Chennai", email: "karthik.m@email.com" },
  { id: 8, name: "Divya Krishnan", skills: ["Excel", "PowerBI", "SQL"], experience: 2, education: "BBA", location: "Mumbai", email: "divya.k@email.com" },
  { id: 9, name: "Ravi Kumar", skills: ["Python", "R", "SQL", "Excel"], experience: 4, education: "MSc", location: "Hyderabad", email: "ravi.k@email.com" },
  { id: 10, name: "Meera Joshi", skills: ["Java", "Spring", "Docker"], experience: 3, education: "BTech", location: "Pune", email: "meera.j@email.com" },
  { id: 11, name: "Suresh Babu", skills: ["Python", "SQL", "PowerBI", "Excel"], experience: 7, education: "MBA", location: "Bangalore", email: "suresh.b@email.com" },
  { id: 12, name: "Lakshmi Venkat", skills: ["SQL", "Tableau", "Excel"], experience: 2, education: "BCom", location: "Chennai", email: "lakshmi.v@email.com" },
  { id: 13, name: "Amit Gupta", skills: ["Python", "Machine Learning", "TensorFlow"], experience: 4, education: "MTech", location: "Delhi", email: "amit.g@email.com" },
  { id: 14, name: "Pooja Srinivasan", skills: ["Python", "SQL", "Excel", "R"], experience: 3, education: "MSc", location: "Hyderabad", email: "pooja.s@email.com" },
  { id: 15, name: "Naveen Reddy", skills: ["Java", "SQL", "AWS", "Docker"], experience: 5, education: "BTech", location: "Bangalore", email: "naveen.r@email.com" },
];

export const allSkills = Array.from(
  new Set(defaultCandidates.flatMap((c) => c.skills))
).sort();

export const allLocations = Array.from(
  new Set(defaultCandidates.map((c) => c.location))
).sort();

export const allEducation = Array.from(
  new Set(defaultCandidates.map((c) => c.education))
).sort();
