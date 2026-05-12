"use client";

import { useState, FormEvent, useEffect } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  AiOutlineMenu as Menu, 
  AiOutlineClose as X, 
  AiOutlineCode as Code2, 
  AiOutlineBulb as Brain, 
  AiOutlineLineChart as TrendingUp, 
  AiOutlineArrowUp as ArrowUpRight, 
  AiOutlineCheck as Check 
} from "react-icons/ai";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "reviews", label: "Testimonials" }, // Fixed: matching section id
  { id: "contact", label: "Contact" },
];

// Fixed: Properly defined animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { 
    transition: { 
      staggerChildren: 0.1, 
      delayChildren: 0.2 
    } 
  },
};

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Fixed: Improved scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header
      
      // Find the section that is currently in view
      let currentSection = "hero";
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentSection = section.id;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              className="flex flex-col gap-0.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#hero" className="text-lg font-bold text-slate-900 hover:text-slate-700 transition">
                Mahmoud A.
              </a>
              <span className="text-xs text-slate-500 font-medium">AI Engineer</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {SECTIONS.map((section) => (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                    activeSection === section.id
                      ? "text-sky-600 bg-sky-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.label}
                </motion.a>
              ))}
            </nav>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-3">
              <motion.a
                href="#contact"
                className="hidden sm:inline-flex px-4 py-2 bg-sky-600 text-white text-sm font-semibold rounded-lg hover:bg-sky-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in touch
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                className="lg:hidden border-t border-slate-200 bg-slate-50/80 backdrop-blur-sm"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-2 p-4">
                  {SECTIONS.map((section) => (
                    <motion.a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        activeSection === section.id
                          ? "text-sky-600 bg-sky-100"
                          : "text-slate-600 hover:bg-slate-200"
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      {section.label}
                    </motion.a>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <main className="relative pt-20 sm:pt-24">
        {/* Hero Section - Keep as is, it's fine */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          {/* ... rest of hero section remains the same ... */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl"
              animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-72 h-72 bg-violet-200/20 rounded-full blur-3xl"
              animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, delay: 0.5 }}
            />
          </div>

          <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={staggerContainer} 
              initial="initial" 
              whileInView="animate" 
              viewport={{ once: true }} 
              className="space-y-6"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-4 py-2 bg-sky-50 border border-sky-200 rounded-full w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
                </span>
                <span className="text-sm font-semibold text-sky-600">Available for opportunities</span>
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-950 leading-tight">
                Build with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-violet-600">intelligent data</span> & systems.
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                I design machine learning systems, analytics pipelines, and backend services that help teams make data-driven decisions and scale their impact.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                <motion.a
                  href="#projects"
                  className="px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View my work <ArrowUpRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-6 py-3 border-2 border-slate-300 text-slate-900 font-semibold rounded-lg hover:border-slate-400 hover:bg-slate-50 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start a conversation
                </motion.a>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200">
                {[
                  { value: "3+", label: "Years" },
                  { value: "12+", label: "Projects" },
                  { value: "10+", label: "Clients" },
                ].map((stat, i) => (
                  <motion.div key={i} whileHover={{ y: -4 }}>
                    <p className="text-2xl sm:text-3xl font-bold text-slate-950">{stat.value}</p>
                    <p className="text-sm text-slate-500">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-slate-200 shadow-2xl bg-gradient-to-br from-sky-100 to-violet-100"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Placeholder for image - add your actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                  <Image
                  src="/profile.jpg"
                  alt="Mahmoud Abdelrauf"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                </div>

               
              </motion.div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-950/10 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </section>

        {/* About Section - Keep as is */}
        <section id="about" className="scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8 bg-white/50">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-sm font-semibold text-sky-600 uppercase tracking-wider">About Me</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 mt-2">Passion for solving complex problems</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="space-y-4">
                {[
                  "I'm a Computer Science student specializing in AI, machine learning, and backend engineering. I combine strong technical foundations with practical problem-solving to build systems that create real impact.",
                  "My work focuses on turning complex data into actionable insights and building scalable solutions. Whether it's designing machine learning pipelines, architecting APIs, or solving algorithmic challenges, I bring precision and creativity to every project.",
                  "I believe great software comes from understanding the problem deeply, designing thoughtfully, and executing with excellence. Let's build something meaningful together.",
                ].map((text, i) => (
                  <motion.p key={i} variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed">
                    {text}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="space-y-4">
                {[
                  { title: "Machine Learning", items: ["Supervised learning", "Feature engineering", "Model optimization"] },
                  { title: "Backend Systems", items: ["REST APIs", "System design", "Data pipelines"] },
                  { title: "Tools & Platforms", items: ["Python, .NET, Java", "TensorFlow, scikit-learn", "PostgreSQL, Docker"] },
                ].map((group, i) => (
                  <motion.div key={i} variants={fadeInUp} className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200">
                    <h3 className="font-semibold text-slate-950 mb-2">{group.title}</h3>
                    <ul className="space-y-1 text-sm text-slate-600">
                      {group.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-sky-600" /> {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-sm font-semibold text-sky-600 uppercase tracking-wider">Experience</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 mt-2">Skills & Technologies</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Brain,
                  title: "AI & ML",
                  skills: ["TensorFlow", "PyTorch", "scikit-learn", "XGBoost", "Data analysis"],
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Code2,
                  title: "Backend Development",
                  skills: ["Python", "ASP.NET Core", "Java", "REST APIs", "SQL"],
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: TrendingUp,
                  title: "Data Engineering",
                  skills: ["ETL Pipelines", "Data cleaning", "Visualization", "Reporting", "Docker"],
                  color: "from-emerald-500 to-teal-500",
                },
              ].map((category, i) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-950 mb-3">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, j) => (
                        <span key={j} className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Skills Section - Keep as is */}
        <section id="skills" className="scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-3 mb-8">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Capabilities</span>
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Technical strengths and tooling</h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {[
                { title: "AI & ML", items: ["Supervised learning", "Feature engineering", "Model validation", "Python / scikit-learn"] },
                { title: "Data engineering", items: ["ETL pipelines", "SQL / Postgres", "Data cleaning", "APIs & automation"] },
                { title: "Software delivery", items: ["Backend APIs", "Docker", "Git workflows", "Technical documentation"] },
              ].map((group) => (
                <div key={group.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
                  <div className="mt-5 space-y-3 text-sm text-slate-600">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/80 p-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-3 mb-8">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Featured work</span>
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Selected projects with impact</h2>
              <p className="max-w-2xl text-sm leading-7 text-slate-600">A curated selection of projects that combine analytics, software engineering, and product thinking.</p>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              {[
                {
                  title: "Pixalyze – Image Processing Platform",
                  description: "A full-stack platform for image filtering, analysis, and visualization with Python backend and React front-end.",
                  details: ["Real-time histogram visualization", "Spatial filtering and frequency transforms", "Automated image preprocessing"],
                  badge: "Computer vision",
                  href: "https://github.com/GoldenBoy13420/Pixalyze",
                },
                {
                  title: "Economic Indicators Analysis",
                  description: "Exploratory analysis of global economic data to highlight relationships between GDP, internet access, and human development.",
                  details: ["World Bank and UNDP integration", "Time-series evaluation", "Statistical correlation storytelling"],
                  badge: "Data analysis",
                  href: "https://github.com/GoldenBoy13420",
                },
                {
                  title: "Cancer Classification Pipeline",
                  description: "Genomic mutation feature engineering and ML modeling for cancer type classification using TCGA datasets.",
                  details: ["Mutation signature engineering", "Gradient boosting models", "Performance evaluation and reporting"],
                  badge: "Machine learning",
                  href: "https://github.com/GoldenBoy13420",
                },
                {
                  title: "Dental Clinic API System",
                  description: "Backend service for patient management, appointments, and secure data flows with role-based access.",
                  details: ["RESTful endpoints", "CRUD resource design", "Authentication and authorization"],
                  badge: "Backend development",
                  href: "https://github.com/GoldenBoy13420/ClinicalDentistSystem",
                },
              ].map((project) => (
                <article key={project.title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                  <div className="bg-slate-950/5 p-6">
                    <div className="mb-4 inline-flex rounded-full bg-sky-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-700">
                      {project.badge}
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-950">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
                  </div>
                  <div className="space-y-3 border-t border-slate-200 p-6">
                    {project.details.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex text-sm font-semibold text-sky-700 transition hover:text-sky-900">
                      View details →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section - Fixed ID from "testimonials" to "reviews" */}
        <section id="reviews" className="scroll-mt-24 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-3 mb-8">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Reviews</span>
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Trusted by collaborators and stakeholders</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  quote: "Mahmoud translated a complex dataset into a clean, usable product quickly and professionally.",
                  name: "Sara Hassan",
                  role: "Project Manager",
                },
                {
                  quote: "He delivered thoughtful automation and clear insights that helped our team move faster.",
                  name: "Omar Youssef",
                  role: "Data Analyst",
                },
                {
                  quote: "The collaboration was smooth, and the final solution was well documented and reliable.",
                  name: "Laila Amin",
                  role: "Product Lead",
                },
              ].map((review) => (
                <div key={review.name} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <p className="text-base leading-8 text-slate-700">“{review.quote}”</p>
                  <p className="mt-6 text-sm font-semibold text-slate-950">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-3 mb-8">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Contact</span>
              <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Get in touch</h2>
              <p className="max-w-2xl text-sm leading-7 text-slate-600">Ready to discuss a project, collaboration, or internship? Send a message and I'll respond within one business day.</p>
            </div>

            <div className="grid gap-8 xl:grid-cols-[1fr_0.95fr]">
              <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-950/5 p-8 shadow-sm">
                <div className="rounded-[1.75rem] bg-white/95 p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-500">Contact details</p>
                  <div className="mt-6 space-y-4 text-sm text-slate-700">
                    <div>
                      <p className="font-semibold text-slate-950">Email</p>
                      <p className="text-slate-600">mahmoudabdelrauf84@gmail.com</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-950">Phone</p>
                      <p className="text-slate-600">+20 114 407 8696</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-950">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/mahmoud-abdelrauf" target="_blank" rel="noopener noreferrer" className="text-sky-700 transition hover:text-sky-900">linkedin.com/in/mahmoud-abdelrauf</a>
                    </div>
                  </div>
                </div>
                <div className="rounded-[1.75rem] bg-slate-100 p-6 text-sm leading-7 text-slate-700">
                  <p className="font-semibold text-slate-950">Open to</p>
                  <ul className="mt-4 space-y-2 list-disc pl-5 text-slate-600">
                    <li>AI / data science consulting</li>
                    <li>Custom analytics and automation</li>
                    <li>Backend and API development</li>
                    <li>Internships and collaborative projects</li>
                  </ul>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

        <footer className="max-w-7xl mx-auto rounded-[2rem] border border-slate-200 bg-white/90 p-8 text-center text-sm text-slate-500 shadow-sm">
          <p>© {new Date().getFullYear()} Mahmoud Abdelrauf. Built with Next.js and Tailwind CSS.</p>
        </footer>
      </main>
    </div>
  );
}

// ContactForm component - defined outside
function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate API call - replace with actual endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setSubmitStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-700">
          <span>Name</span>
          <input
            type="text"
            required
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-700">
          <span>Email</span>
          <input
            type="email"
            required
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            placeholder="your@email.com"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm text-slate-700">
        <span>Message</span>
        <textarea
          required
          rows={5}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 resize-none"
          placeholder="Tell me about your project..."
        />
      </label>
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/10 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Sending...
          </span>
        ) : (
          "Send message"
        )}
      </motion.button>

      <AnimatePresence>
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="rounded-3xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700"
          >
            Thanks! Your message has been received. I'll reply shortly.
          </motion.div>
        )}
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="rounded-3xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            Something went wrong. Please try again in a moment.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}