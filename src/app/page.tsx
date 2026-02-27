"use client";

import Link from "next/link";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "education-experience", label: "Background" },
  { id: "skills", label: "Skills" },
  { id: "snapshot", label: "Highlights" },
  { id: "workflow", label: "Data workflow" },
  { id: "projects-1", label: "Featured projects" },
  { id: "projects-2", label: "Other projects" },
  { id: "services", label: "Services" },
  { id: "achievements", label: "Achievements" },
  { id: "focus", label: "Focus" },
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
                Hi, I&apos;m Elsa —
              </span>
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
                Data science–focused full‑stack engineer
              </span>
            </h1>

            <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
              I work with{" "}
              <span className="font-semibold text-slate-800">
                real data to uncover insights
              </span>
              , turn those insights into{" "}
              <span className="font-semibold text-slate-800">
                machine learning solutions
              </span>
              , and then wrap everything in{" "}
              <span className="font-semibold text-slate-800">
                usable products and APIs
              </span>
              .
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects-1"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
              >
                View my projects
              </a>
            </div>
          </div>
        </section>

        {/* 2. About */}
        <section id="about" className="space-y-6 py-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              About
            </h3>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              Curious about data, focused on decisions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[3fr,2fr]">
            <div className="space-y-3 text-sm text-slate-600">
              <p className="max-w-2xl">
                I&apos;m a junior engineer who enjoys asking questions of data,
                exploring patterns, and turning those insights into decisions,
                not just visualizations. I&apos;m happiest when I can connect
                the dots between business goals, data, and engineering.
              </p>
              <p className="max-w-2xl">
                I like to iterate in small experiments, learn from what the data
                tells us, and then ship something slightly better each time.
                For me, code is a tool to support curiosity and decision-making,
                not an end goal by itself.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Core expertise
              </p>
              <ul className="grid gap-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>
                    Data exploration &amp; analysis: EDA, cleaning, and feature
                    engineering
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  <span>
                    Machine learning &amp; evaluation: modeling, metrics, and
                    validation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>
                    Data products &amp; deployment: APIs, dashboards, and
                    integrations
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Education & experience */}
        <section
          id="education-experience"
          className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 px-6 py-12"
        >
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Education &amp; experience
            </h3>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              Where I&apos;m coming from
            </p>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              A quick snapshot of my formal background and the experiences that
              shaped how I think about data and software.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Education
              </p>
              <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4">
                <p className="font-semibold text-slate-900">
                  Your degree / program
                </p>
                <p className="text-xs text-slate-500">
                  University name · Years · City (if relevant)
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Relevant focus areas: data structures &amp; algorithms, machine
                  learning, databases, statistics, and software engineering
                  fundamentals.
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Experience
              </p>
              <div className="space-y-2 rounded-2xl border border-slate-200 bg-white p-4">
                <p className="font-semibold text-slate-900">
                  Internships / projects / volunteering
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Briefly list roles or key projects where you applied data,
                  ML, or software engineering in practice, even if they were
                  academic or freelance.
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Focus on situations where you helped make a decision, improve
                  a process, or ship something used by others.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Skills */}
        <section id="skills" className="space-y-6 py-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Skills
            </h3>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              What I work with
            </p>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              A data-first skill set that covers analysis, modeling, and the
              engineering needed to turn models into products.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* 1. Data & analytics (first) */}
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Data &amp; analytics
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  SQL &amp; databases
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Exploratory data analysis (EDA)
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Data cleaning &amp; quality
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Dashboards / reporting (basics)
                </span>
              </div>
            </div>

            {/* 2. Machine learning */}
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Machine learning
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  scikit-learn
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Pandas &amp; NumPy
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Feature engineering
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Metrics &amp; validation
                </span>
              </div>
            </div>

            {/* 3. Backend engineering */}
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Backend engineering
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Python · FastAPI / Django (basics)
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  REST APIs &amp; integration
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Authentication &amp; simple auth flows
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Testing &amp; debugging mindset
                </span>
              </div>
            </div>

            {/* 4. Frontend */}
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Frontend
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  React &amp; Next.js
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  TypeScript / JavaScript
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Tailwind CSS
                </span>
                <span className="rounded-full bg-white px-3 py-1 shadow-sm">
                  Building simple, clean UIs
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Snapshot / highlights */}
        <section
          id="snapshot"
          className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 px-6 py-10"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Highlights
              </h3>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                Snapshot of what I&apos;ve done
              </p>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                A quick overview before you dive into individual projects.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Projects shipped
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                6+
              </p>
              <p className="mt-1 text-xs text-slate-600">
                End-to-end projects combining backend, ML, and simple UIs.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                AI integrations
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                3+
              </p>
              <p className="mt-1 text-xs text-slate-600">
                NLP / ML models integrated into real applications and APIs.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Academic experience
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                UGRF
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Undergraduate research / project presentation experience.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Strength
              </p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                Backend-first
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Comfortable owning APIs, data models, and integrations first.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Data workflow */}
        <section
          id="workflow"
          className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 px-6 py-12"
        >
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Data workflow
            </h3>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              How I usually approach problems
            </p>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              A simple, systematic process I try to follow from idea to
              deployed solution.
            </p>
          </div>

          <ol className="grid gap-4 text-sm text-slate-700 md:grid-cols-5">
            <li className="rounded-2xl bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                1 · Define
              </p>
              <p className="mt-2">
                Clarify the problem, who it affects, and what success looks
                like in measurable terms.
              </p>
            </li>
            <li className="rounded-2xl bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                2 · Explore data
              </p>
              <p className="mt-2">
                Inspect data sources, run EDA, understand distributions, leaks,
                and quality issues.
              </p>
            </li>
            <li className="rounded-2xl bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                3 · Engineer features
              </p>
              <p className="mt-2">
                Create and select features that capture useful signal while
                keeping things interpretable.
              </p>
            </li>
            <li className="rounded-2xl bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                4 · Train &amp; evaluate
              </p>
              <p className="mt-2">
                Train models, compare baselines, choose metrics, and validate
                with held-out data.
              </p>
            </li>
            <li className="rounded-2xl bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                5 · Deploy &amp; monitor
              </p>
              <p className="mt-2">
                Wrap the solution in an API or UI, ship it, and monitor basic
                performance and feedback.
              </p>
            </li>
          </ol>
        </section>

        {/* 7. Featured projects */}
        <section id="projects-1" className="space-y-6 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Featured projects
              </h3>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                2–3 heavier, end-to-end builds
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
                  Built a full pipeline on a real customer dataset to predict
                  churn, evaluated multiple models, and exposed predictions
                  through a REST API with a web dashboard for stakeholders.
                </p>
                <p className="text-xs font-medium text-slate-500">
                  Python · scikit-learn · FastAPI · React · SQL · AUC / F1
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-slate-50 px-3 py-1 text-slate-600">
                  Real-world dataset &amp; EDA
                </span>
                <span className="rounded-full bg-slate-50 px-3 py-1 text-slate-600">
                  Feature engineering &amp; model selection
                </span>
                <span className="rounded-full bg-slate-50 px-3 py-1 text-slate-600">
                  API + dashboard deployment
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
                  Built an NLP pipeline on historical ticket data to predict
                  topic and priority, evaluated models with clear metrics, and
                  deployed the system behind an API and review UI for agents.
                </p>
                <p className="text-xs font-medium text-slate-500">
                  Python · NLP · FastAPI · Next.js · F1 / accuracy
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-slate-50 px-3 py-1 text-slate-600">
                  Text preprocessing &amp; feature design
                </span>
                <span className="rounded-full bg-slate-50 px-3 py-1 text-slate-600">
                  Model evaluation &amp; error analysis
                </span>
                <span className="rounded-full bg-slate-50 px-3 py-1 text-slate-600">
                  Deployed API + review UI
                </span>
              </div>
            </article>
          </div>
        </section>

        {/* 8. Other projects */}
        <section id="projects-2" className="space-y-6 py-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Other projects
            </h3>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              Compact cards for more work
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

        {/* 9. Offered services */}
        <section id="services" className="space-y-6 py-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Offered services
            </h3>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              How I can help you
            </p>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Clear ways I can contribute as a junior engineer on freelance
              projects or in a team.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Data analysis &amp; dashboards
              </p>
              <p className="mt-2">
                Explore datasets, clean and transform data, and build simple
                dashboards or reports that support better decisions.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                ML models &amp; evaluation
              </p>
              <p className="mt-2">
                Train baseline and improved models, compare them with clear
                metrics, and communicate trade-offs in plain language.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Data products &amp; APIs
              </p>
              <p className="mt-2">
                Wrap models and data logic into simple APIs or internal tools
                that others can actually use in their workflow.
              </p>
            </article>
          </div>
        </section>

        {/* 10. Achievements & testimonials */}
        <section id="achievements" className="space-y-6 py-16">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Achievements &amp; testimonials
            </h3>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              Proof beyond the projects
            </p>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Awards, recognitions, and feedback that add extra trust on top of
              the work itself.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Achievement
              </p>
              <p className="mt-2 font-semibold">
                UGRF presenter / competition participation
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Short one-liner about what you presented or achieved, focused
                on impact or what you learned.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Achievement
              </p>
              <p className="mt-2 font-semibold">
                Any award, scholarship, or notable result
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Replace this with something specific when you have it, or keep
                it hidden until then.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Testimonial (placeholder)
              </p>
              <p className="mt-2 text-xs text-slate-600">
                &quot;Here you can add a short quote from a mentor, teammate, or
                client about what it&apos;s like to work with you.&quot;
              </p>
            </article>
          </div>
        </section>

        {/* 11. What I'm focused on */}
        <section
          id="focus"
          className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 px-6 py-12"
        >
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              What I&apos;m focused on
            </h3>
            <p className="mt-2 text-2xl font-semibold text-slate-900">
              Currently exploring &amp; leveling up
            </p>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              I like to keep learning and experimenting so I can bring fresh
              ideas to the teams I work with.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Production-grade ML
              </p>
              <p className="mt-2">
                Making models easier to deploy, monitor, and iterate on using
                simple MLOps tools and good engineering practices.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Modern web for AI
              </p>
              <p className="mt-2">
                Building clean, responsive UIs in Next.js that make ML &amp;
                data insights understandable to non-technical users.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                LLMs &amp; automation
              </p>
              <p className="mt-2">
                Experimenting with LLMs, prompts, and small automations that
                help with coding, analysis, and developer experience.
              </p>
            </div>
          </div>
        </section>

        {/* 12. Contact */}
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
            <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">
                Best way to reach me
              </p>
              <p className="text-sm text-slate-600">
                Send me a short message with who you are, what you&apos;re
                working on, and how I can help. I&apos;ll reply as soon as I
                can.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:you@example.com"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-700 via-indigo-600 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                >
                  Email me about a role
                </a>
              </div>
            </div>

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