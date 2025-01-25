export const sampleProjects = [
  {
    id: "sample-1",
    name: "The Metropolitan",
    location: "Downtown Financial District",
    status: "Active",
    target_amount: 500000,
    raised_amount: 325000,
    investor_count: 45,
    deadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
    progress: 65,
    created_at: new Date().toISOString(),
    user_id: "sample"
  },
  {
    id: "sample-2",
    name: "Sunset Residences",
    location: "Coastal Boulevard",
    status: "Planning",
    target_amount: 750000,
    raised_amount: 187500,
    investor_count: 28,
    deadline: new Date(Date.now() + 120 * 24 * 60 * 60 * 1000).toISOString(),
    progress: 25,
    created_at: new Date().toISOString(),
    user_id: "sample"
  },
  {
    id: "sample-3",
    name: "Green Valley Complex",
    location: "Tech Hub District",
    status: "Active",
    target_amount: 1200000,
    raised_amount: 960000,
    investor_count: 72,
    deadline: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(),
    progress: 80,
    created_at: new Date().toISOString(),
    user_id: "sample"
  }
]