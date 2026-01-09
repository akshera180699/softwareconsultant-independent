const projects = [
  {
    title: "Claims & EOB Reconciliation Platform",
    tech: "ASP.NET Core, SQL Server, CI/CD",
    slug: "claims-reconciliation",
  },
  {
    title: "Multi-Tenant Insurance Application",
    tech: ".NET Core, Identity, SQL Server",
    slug: "multi-tenant-app",
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <a
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">
              {project.title}
            </h2>
            <p className="text-gray-600 mt-2">
              {project.tech}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
