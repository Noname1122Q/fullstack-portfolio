import React from "react";

const Experience = () => {
  return (
    <section className="flex flex-col max-w-3xl">
      <h1 className="text-3xl font-semibold text-white mb-6 tracking-tight">
        Engineering Experience
      </h1>

      <div className="space-y-6 text-slate-400 leading-relaxed text-[15px]">
        <div>
          <h2 className="text-white font-medium text-lg">
            Independent Software Projects
          </h2>
          <p className="mt-2">
            Designed, developed, and deployed multiple full-stack and backend
            systems including SaaS platforms, analytics dashboards, and
            cloud-hosted Spring Boot services.
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Built production-ready applications with authentication, database
              design, and API integrations.
            </li>
            <li>
              Deployed containerized backend services to Azure with CI/CD
              workflows.
            </li>
            <li>
              Implemented OAuth flows, async scheduling systems, and
              multi-account integrations.
            </li>
            <li>
              Focused on scalability, clean architecture, and maintainable code
              structure.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
