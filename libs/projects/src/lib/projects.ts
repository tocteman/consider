export interface Project {
  id: number;
  name: string;
  status: string;
}

export const exampleProjects: Project[] = [
  {
    id: 1,
    name: "Hydropulser Prototype",
    status: "in-progress"
  },
  {
    id: 2,
    name: "Test rewriter",
    status: "pending"
  },
  {
    id: 3,
    name: "Launch party",
    status: "completed"
  }
]
