type Project = {
  title: string;
  domain: string;
  techStack: string[];
  highlights: string[];
  description: string;
};

const projects: Record<string, Project> = {
  "mortgage-risk-analysis": {
    title: "Mortgage Risk Analysis & Document Intelligence Platform",
    domain: "Finance / Mortgage / Risk Analytics",
    techStack: [
      "ASP.NET",
      "Oracle Database",
      "DevExpress",
      "AI / LLM Integration",
      "Multi-Tenant Architecture",
      "Azure Hosting",
      "GitHub Source Control",
    ],
    highlights: [
      "Automated mortgage and loan risk analysis with detailed report generation",
      "PDF scanning and processing of large, scanned financial documents using DevExpress",
      "AI-powered document question-answering on uploaded files",
      "Analyst workflow to accept, edit, or override AI-generated answers",
      "Secure multi-tenant architecture ensuring complete data isolation",
      "Optimized performance for high-volume document processing",
    ],
    description:
      "A scalable mortgage and loan analysis system with AI-driven document intelligence. The platform enables analysts to extract insights from complex financial documents while maintaining security, performance, and multi-tenant isolation.",
  },

  "healthcare-security": {
    title: "Healthcare Security & Authentication System",
    domain: "Healthcare / Security / Compliance",
    techStack: [
      "ASP.NET",
      "SQL Server",
      "Role-Based Access Control",
      "Centralized Logging",
      "Audit & Compliance Tracking",
      "GitHub Source Control",
    ],
    highlights: [
      "Dynamic password policy configuration managed entirely by Super Admins",
      "Customizable rules for password length, complexity, expiration, and reuse",
      "Account lockout and security constraint configuration without code changes",
      "Centralized logging for auditing and compliance tracking",
      "Designed following healthcare security best practices",
    ],
    description:
      "A security-focused authentication system that provides administrators full control over password policies and security rules, ensuring compliance and audit readiness in healthcare environments.",
  },

  "gps-tracking": {
    title: "Real-Time Vehicle GPS Tracking System",
    domain: "Transportation / Fleet Management / IoT",
    techStack: [
      "ASP.NET (VB.NET)",
      "SQL Server",
      "Verizon GPS APIs",
      "Real-Time Location Processing",
      "GitHub Source Control",
    ],
    highlights: [
      "Live vehicle location tracking using third-party GPS services",
      "Real-time processing and storage of continuous location updates",
      "Reliable integration with Verizon GPS APIs",
      "Backend services optimized for long-running tracking sessions",
      "Designed for scalability and operational stability",
    ],
    description:
      "A real-time fleet tracking solution that enables continuous monitoring of vehicle locations through reliable GPS integrations, supporting operational efficiency and live reporting.",
  },
    "claims-reconciliation": {
    title: "Claims & EOB Reconciliation Platform",
    domain: "Healthcare / Security / Compliance",
    techStack: [
      "ASP.NET",
      "SQL Server",
      "Claims Processing",
      "GitHub Source Control",
    ],
    highlights: [
      "Automated reconciliation of insurance claims with EOB data",
      "Secure data handling for sensitive financial information",
      "Scalable architecture for high-volume claim processing",
    ],
    description:
      "A secure and scalable system to reconcile insurance claims with EOB data.",
  },
  "multi-tenant-app": {
    title: "Multi-Tenant Insurance Application",
    domain: "Insurance / SaaS",
    techStack: [
      "ASP.NET",
      "SQL Server",
      "Multi-Tenant Architecture",
      "GitHub Source Control",
    ],
    highlights: [
      "Successfully converted single-tenant architecture to secure multi-tenant platform",
      "Complete data isolation between tenants",
      "Scalable infrastructure supporting multiple clients",
    ],
    description:
      "Converted a single-tenant application into a secure multi-tenant platform.",
  },
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
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
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold">
        {project.title}
      </h1>

      {/* Domain */}
      <div>
        <h2 className="text-lg font-semibold">Domain</h2>
        <p className="text-white-70">{project.domain}</p>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-lg font-semibold">Overview</h2>
        <p className="text-white-70 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Key Highlights */}
      <div>
        <h2 className="text-lg font-semibold">Key Highlights</h2>
        <ul className="list-disc list-inside space-y-2 text-white-700">
          {project.highlights.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-lg font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm border rounded-full bg-gray-50"
              style={{ color: "black" }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}

// type Project = {
//   title: string;
//   description: string;
// };

// const projects: Record<string, Project> = {
//   "mortgage-risk-analysis": {
//     title: "Mortgage Risk Analysis & Document Intelligence Platform",
//     description:
//       "A scalable mortgage and loan analysis system with AI-powered document intelligence. The platform processes scanned PDFs using DevExpress, enables AI-based question answering on uploaded files, and allows analysts to accept, edit, or override AI-generated responses. Built with a secure multi-tenant architecture to isolate client data.",
//   },

//   "healthcare-security": {
//     title: "Healthcare Security & Authentication System",
//     description:
//       "A healthcare-focused authentication system featuring dynamic password policy configuration. Super Admins can define password complexity, expiration, reuse rules, and lockout policies without code changes. Includes centralized logging for auditing and compliance.",
//   },

//   "gps-tracking": {
//     title: "Real-Time Vehicle GPS Tracking System",
//     description:
//       "A live vehicle tracking solution integrating third-party GPS services to monitor real-time locations. Backend services process continuous location updates and store tracking data efficiently for fleet monitoring and reporting.",
//   },
//   "claims-reconciliation": {
//     title: "Claims & EOB Reconciliation Platform",
//     description:
//       "A secure and scalable system to reconcile insurance claims with EOB data.",
//   },
//   "multi-tenant-app": {
//     title: "Multi-Tenant Insurance Application",
//     description:
//       "Converted a single-tenant application into a secure multi-tenant platform.",
//   },
  
// };

// export async function generateStaticParams() {
//   return [
//     { slug: "claims-reconciliation" },
//     { slug: "multi-tenant-app" },
//   ];
// }

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const project = projects[slug];

//   if (!project) {
//     return (
//       <div className="p-10 text-red-600">
//         Project not found: {slug}
//       </div>
//     );
//   }

//   return (
//     <main className="max-w-3xl mx-auto px-6 py-16">
//       <h1 className="text-3xl font-bold mb-4">
//         {project.title}
//       </h1>
//       <p className="text-gray-700">
//         {project.description}
//       </p>
//     </main>
//   );
// }
