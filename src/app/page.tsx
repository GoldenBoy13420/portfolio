"use client";

import Link from "next/link";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects-1", label: "Projects" },
  { id: "projects-2", label: "More Work" },
  { id: "contact", label: "Contact" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold tracking-wide text-slate-600">
            Elsa · Portfolio
          </span>
          <nav className="hidden gap-4 text-sm font-medium text-slate-600 sm:flex">
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full px-3 py-1 transition hover:bg-slate-100 hover:text-slate-900"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        {/* 1. Hero */}
        <section
          id="hero"
          className="flex min-h-[80vh] flex-col justify-center gap-8 py-16"
        >
          <div className="inline-flex max-w-max items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500" />
            Open to: Junior Software & AI Engineer · Data Scientist
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              <span className="block text-slate-500 text-base font-medium mb-2">
                Hi, I&apos;m
              </span>
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
                Elsa
              </span>
            </h1>

            <h2 className="max-w-2xl text-xl font-semibold text-slate-800 sm:text-2xl">
              Junior Software &amp; AI Engineer · Data Scientist
            </h2>

            <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
              I build intelligent, production-ready software that connects{" "}
              <span className="font-semibold text-slate-800">
                machine learning, data science, and modern engineering
              </span>
              . From data pipelines and models to APIs and clean UIs, I enjoy
              turning messy data into useful products.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects-1"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
              >
                View my projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Contact me
              </a>
            </div>
          </div>
        </section>

        {/* 2. Skills */}
        <section id="skills" className="space-y-6 py-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Skills
            </h3>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              What I work with
            </p>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              A blend of software engineering, machine learning, and data tools
              to ship intelligent products end-to-end.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Programming &amp; Frameworks
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Python
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  TypeScript / JavaScript
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  React / Next.js
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Node.js
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                ML &amp; Data Science
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  scikit-learn
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Pandas
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  NumPy
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  NLP / CV basics
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Data &amp; DevOps
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  SQL
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  REST APIs
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Git &amp; GitHub
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Docker (basics)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Projects main */}
        <section id="projects-1" className="space-y-6 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Projects
              </h3>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                Selected work
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-lg">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  End-to-end ML · API
                </div>
                <h4 className="text-lg font-semibold text-slate-900">
                  Intelligent churn prediction dashboard
                </h4>
                <p className="text-sm text-slate-600">
                  Built a full pipeline to predict customer churn and expose
                  model predictions through a REST API with a clean web
                  dashboard for non-technical stakeholders.
                </p>
                <p className="text-xs font-medium text-slate-500">
                  Python · scikit-learn · FastAPI · React · SQL
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-slate-50 px-3 py-1 text-slate-600">
                  Data cleaning &amp; feature engineering
                </span>
                <span className="rounded-full bg-slate-50 px-3 py-1 text-slate-600">
                  Model evaluation &amp; monitoring basics
                </span>
              </div>
            </article>

            <article className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-500/60 hover:shadow-lg">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-semibold text-indigo-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  NLP · Full-stack
                </div>
                <h4 className="text-lg font-semibold text-slate-900">
                  AI-powered support ticket triage
                </h4>
                <p className="text-sm text-slate-600">
                  Classified incoming support tickets into priority and topic
                  using NLP models, with a simple web interface for agents to
                  review and override predictions.
                </p>
                <p className="text-xs font-medium text-slate-500">
                  Python · NLP · FastAPI · Next.js
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-slate-50 px-3 py-1 text-slate-600">
                  Text preprocessing &amp; embeddings
                </span>
                <span className="rounded-full bg-slate-50 px-3 py-1 text-slate-600">
                  UI for human-in-the-loop
                </span>
              </div>
            </article>
          </div>
        </section>

        {/* 4. More projects */}
        <section id="projects-2" className="space-y-6 py-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              More work
            </h3>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              Additional projects &amp; experiments
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white/60 p-4 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Analytics · Dashboards
              </p>
              <p className="mt-2 font-semibold">
                Sales performance analytics with interactive BI dashboard
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Designed metrics, built SQL queries, and created interactive
                dashboards to help stakeholders monitor performance and spot
                anomalies quickly.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white/60 p-4 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Computer Vision
              </p>
              <p className="mt-2 font-semibold">
                Image classification prototype for quality control
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Trained and evaluated CNN-based models on small datasets,
                including augmentation and error analysis to understand model
                failures.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white/60 p-4 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Learning &amp; Experiments
              </p>
              <p className="mt-2 font-semibold">
                Small experiments in MLOps, monitoring, and LLMs
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Exploring experiment tracking, simple CI workflows, and LLM
                prompts for coding assistance and data exploration.
              </p>
            </article>
          </div>
        </section>

        {/* 5. Contact */}
        <section id="contact" className="space-y-6 py-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Contact
            </h3>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              Let&apos;s work together
            </p>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              I&apos;m looking for opportunities as a{" "}
              <span className="font-semibold text-slate-800">
                Junior Software &amp; AI Engineer or Data Scientist
              </span>
              . Feel free to reach out if you&apos;d like to discuss a role,
              project, or collaboration.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
            <form className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5 text-sm">
                  <label className="block text-xs font-medium text-slate-600">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1.5 text-sm">
                  <label className="block text-xs font-medium text-slate-600">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-sm">
                <label className="block text-xs font-medium text-slate-600">
                  Message
                </label>
                <textarea
                  className="min-h-[120px] w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500"
                  placeholder="Tell me a bit about what you have in mind..."
                />
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
              >
                Send (not wired yet)
              </button>
            </form>

            <div className="space-y-3 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Links</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://github.com/your-username"
                    className="text-blue-700 underline-offset-4 hover:underline"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/your-username"
                    className="text-blue-700 underline-offset-4 hover:underline"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:you@example.com"
                    className="text-blue-700 underline-offset-4 hover:underline"
                  >
                    you@example.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200 py-6 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Elsa. Built with Next.js &amp;
            Tailwind CSS.
          </p>
        </footer>
      </main>
    </div>
  );
}