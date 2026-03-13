"use client";

import Link from "next/link";
import Image from "next/image";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
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
          className="flex min-h-[80vh] flex-col justify-center gap-10 py-16 md:flex-row md:items-center"
        >
          <div className="space-y-6 md:flex-1">
            <div className="inline-flex max-w-max items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500" />
              AI &amp; Data Science Engineer · Computer Science Student
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              <span className="block text-slate-500 text-base font-medium mb-2">
                Hi, I&apos;m Mahmoud Abdelrauf —
              </span>
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
                AI &amp; Data Science Engineer
              </span>
            </h1>

            <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
              Building intelligent systems and data-driven solutions.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
              >
                View projects
              </a>
            </div>
          </div>

          <div className="mt-6 flex justify-center md:mt-0 md:flex-1">
            <div className="relative h-64 w-48 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-lg sm:h-80 sm:w-56">
              <Image
                src="/profile.jpg"
                alt="Portrait photo of Mahmoud Abdelrauf"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* 2. About */}
        <section id="about" className="space-y-6 py-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              About me
            </h3>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              Passionate about AI, data, and useful software
            </p>
          </div>

          <div className="max-w-3xl text-sm text-slate-600">
            <p>
              I&apos;m a Computer Science student passionate about Artificial
              Intelligence and Data Science. I enjoy exploring data, building
              machine learning models, and developing backend systems that turn
              analysis into real, usable applications.
            </p>
            <p className="mt-3">
              My interests include machine learning, backend development, and
              building intelligent applications that solve real-world problems
              with clear, measurable results.
            </p>
          </div>
        </section>

        {/* 3. Skills */}
        <section id="skills" className="space-y-6 py-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Skills
            </h3>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              What I work with
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Programming
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                {["Python", "SQL", "C#"].map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-white px-3 py-1 shadow-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Data science &amp; AI
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                {[
                  "Machine learning",
                  "Data analysis",
                  "Feature engineering",
                  "Model evaluation",
                  "Data visualization",
                ].map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-white px-3 py-1 shadow-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Tools
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                {["Git & GitHub", "Jupyter Notebook", "Firebase", "PyQt5"].map(
                  (s) => (
                    <span
                      key={s}
                      className="rounded-full bg-white px-3 py-1 shadow-sm"
                    >
                      {s}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Projects */}
        <section id="projects" className="space-y-6 py-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Projects
            </h3>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              Selected work
            </p>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Key projects focused on real datasets, clear evaluation, and
              practical software delivery.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-lg">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Algorithms · GUI
                </div>
                <h4 className="text-lg font-semibold text-slate-900">
                  TSP Solver
                </h4>
                <p className="text-sm text-slate-600">
                  Solves the Traveling Salesman Problem using multiple
                  algorithms (Nearest Neighbor, Brute Force, Genetic Algorithm)
                  with GUI visualization.
                </p>
                <p className="text-xs font-medium text-slate-500">
                  Algorithms · Optimization · GUI visualization
                </p>
              </div>
            </article>

            <article className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-indigo-500/60 hover:shadow-lg">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-semibold text-indigo-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  Mobile · Cloud
                </div>
                <h4 className="text-lg font-semibold text-slate-900">
                  Nota Smart Notes App
                </h4>
                <p className="text-sm text-slate-600">
                  A smart notes and journaling app built with Flutter and
                  Firebase to help users create, manage, and organize notes
                  efficiently.
                </p>
                <p className="text-xs font-medium text-slate-500">
                  Flutter · Firebase · Auth · Cloud storage
                </p>
              </div>
            </article>

            <article className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-500/60 hover:shadow-lg">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-sky-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-600" />
                  Backend · REST APIs
                </div>
                <h4 className="text-lg font-semibold text-slate-900">
                  Dental Clinic Information System
                </h4>
                <p className="text-sm text-slate-600">
                  Backend system to manage patient records, appointments, and
                  clinical workflows using RESTful APIs.
                </p>
                <p className="text-xs font-medium text-slate-500">
                  REST APIs · Database · Backend architecture
                </p>
              </div>
            </article>

            <article className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-lg">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  ML · Classification
                </div>
                <h4 className="text-lg font-semibold text-slate-900">
                  Parkinson&apos;s Disease Detection
                </h4>
                <p className="text-sm text-slate-600">
                  Machine learning classification using XGBoost to detect
                  Parkinson&apos;s disease from biomedical data.
                </p>
                <p className="text-xs font-medium text-slate-500">
                  XGBoost · Feature engineering · Model evaluation
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* 5. Experience / activities */}
        <section id="experience" className="space-y-6 py-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Experience / activities
            </h3>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              Academic and project-based experience
            </p>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              A concise overview of learning-by-building in AI, data science,
              and software development.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Academic projects
              </p>
              <p className="mt-2">
                Built ML and software projects from scratch, including data
                preparation, model training, evaluation, and basic deployment
                through APIs or apps.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Team collaboration
              </p>
              <p className="mt-2">
                Worked in small teams using Git/GitHub, clear task breakdowns,
                and iterative development to deliver features on time.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Achievements */}
        <section id="achievements" className="space-y-6 py-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Achievements
            </h3>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              Highlights and recognition
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Participation
              </p>
              <p className="mt-2 font-semibold text-slate-900">
                Research / presentations
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Add academic participation, presentations, or research work here
                (replace this placeholder).
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Technical
              </p>
              <p className="mt-2 font-semibold text-slate-900">
                Notable technical projects
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Add anything you&apos;re proud of: competitions, hackathons, or
                outstanding project outcomes.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Certificates
              </p>
              <p className="mt-2 font-semibold text-slate-900">
                Courses &amp; certifications
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Add relevant certificates here (e.g., ML, data analysis, cloud).
              </p>
            </article>
          </div>
        </section>

        {/* 7. Contact */}
        <section id="contact" className="space-y-6 py-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Contact
            </h3>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              Let&apos;s connect
            </p>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Want to collaborate or discuss an opportunity? The fastest way is
              email.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
            <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">
                Direct message
              </p>
              <p className="text-sm text-slate-600">
                Email me with a short description of what you need, and I&apos;ll
                reply as soon as possible.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:mahmoud@example.com"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                >
                  Email Mahmoud
                </a>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Links</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="mailto:mahmoud@example.com"
                    className="text-blue-700 underline-offset-4 hover:underline"
                  >
                    mahmoud@example.com
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
                    href="https://github.com/your-username"
                    className="text-blue-700 underline-offset-4 hover:underline"
                  >
                    GitHub
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