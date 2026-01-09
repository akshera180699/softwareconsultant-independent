type Project = {
  title: string;
  description: string;
};

const projects: Record<string, Project> = {
  "claims-reconciliation": {
    title: "Claims & EOB Reconciliation Platform",
    description:
      "A secure and scalable system to reconcile insurance claims with EOB data.",
  },
  "multi-tenant-app": {
    title: "Multi-Tenant Insurance Application",
    description:
      "Converted a single-tenant application into a secure multi-tenant platform.",
  },
};

export async function generateStaticParams() {
  return [
    { slug: "claims-reconciliation" },
    { slug: "multi-tenant-app" },
  ];
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return (
      <div className="p-10 text-red-600">
        Project not found: {slug}
      </div>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-4">
        {project.title}
      </h1>
      <p className="text-gray-700">
        {project.description}
      </p>
    </main>
  );
}
