"use client";

import { useState, FormEvent, useEffect } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Code2, Brain, TrendingUp, ArrowUpRight, Github, Linkedin, Mail, Check } from "react-icons/ai";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTIONS.map(s => {
        const el = document.getElementById(s.id);
        return { id: s.id, offset: el?.offsetTop ?? 0 };
      });
      
      const current = sections.reduce((prev, current) => {
        return Math.abs(current.offset - window.scrollY) < Math.abs(prev.offset - window.scrollY)
          ? current
          : prev;
      });
      setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          {/* Background Elements */}
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
            {/* Content */}
            <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }} className="space-y-6">
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

              {/* Stats */}
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

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-slate-200 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Mahmoud Abdelrauf"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-950/10 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white/50">
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
        <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
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
                    whileHover={{ y: -8, shadow: "0 20px 40px rgba(0,0,0,0.1)" }}
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

        {/* Skills Section */}
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-sm font-semibold text-sky-600 uppercase tracking-wider">Tech Stack</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 mt-2">Languages & Frameworks</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                "Python", "SQL", "C#", "C++", "Java", "JavaScript", "Dart",
                "React", "Next.js", "ASP.NET Core", "Flask", "Docker",
                "Git", "AWS", "Firebase", "PostgreSQL"
              ].map((tech, i) => (
                <motion.div
                  key={tech}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="p-4 bg-white border-2 border-slate-200 rounded-lg font-semibold text-slate-700 text-center hover:border-sky-400 hover:shadow-md transition cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-sm font-semibold text-sky-600 uppercase tracking-wider">Portfolio</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 mt-2">Featured Projects</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Pixalyze – Image Processing Platform",
                  description: "Full-stack platform for advanced image analysis with real-time visualization.",
                  tech: ["React", "Python", "OpenCV", "Flask"],
                  highlights: ["Histogram analysis", "Spatial filtering", "FFT transforms"],
                  link: "https://github.com/GoldenBoy13420/Pixalyze",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Economic Indicators Analysis",
                  description: "Data analysis of global economic trends and relationships.",
                  tech: ["Python", "Pandas", "Matplotlib", "Jupyter"],
                  highlights: ["World Bank data", "Statistical analysis", "Visualizations"],
                  link: "https://github.com/GoldenBoy13420",
                  color: "from-emerald-500 to-teal-500",
                },
                {
                  title: "Cancer Classification Pipeline",
                  description: "ML system for cancer type classification using mutation signatures.",
                  tech: ["Python", "XGBoost", "scikit-learn", "TensorFlow"],
                  highlights: ["Feature engineering", "Model optimization", "TCGA dataset"],
                  link: "https://github.com/GoldenBoy13420",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  title: "Dental Clinic API System",
                  description: "Backend system for patient management and appointments.",
                  tech: ["ASP.NET Core", "SQL", "REST API", "JWT"],
                  highlights: ["CRUD operations", "Role-based access", "Authentication"],
                  link: "https://github.com/GoldenBoy13420/ClinicalDentistSystem",
                  color: "from-orange-500 to-red-500",
                },
              ].map((project, i) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group p-6 bg-white border-2 border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-lg transition overflow-hidden"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 mb-2 group-hover:text-sky-600 transition">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1 text-sm text-slate-600 mb-4">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <ArrowUpRight className="w-3 h-3 text-sky-600" /> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-sky-600 font-semibold text-sm group-hover:gap-3 transition">
                    View on GitHub <ArrowUpRight className="w-4 h-4" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-sm font-semibold text-sky-600 uppercase tracking-wider">Testimonials</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 mt-2">Trusted by collaborators</h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  quote: "Mahmoud transformed our raw data into a polished, actionable product. His expertise in both ML and backend systems is exceptional.",
                  author: "Sara Hassan",
                  role: "Project Manager",
                },
                {
                  quote: "His attention to detail and problem-solving approach helped us optimize our data pipeline significantly. A true professional.",
                  author: "Omar Youssef",
                  role: "Data Analyst",
                },
                {
                  quote: "Clean code, clear communication, and reliable delivery. Mahmoud is exactly the kind of engineer you want on your team.",
                  author: "Laila Amin",
                  role: "Tech Lead",
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  className="p-6 bg-white border-2 border-slate-200 rounded-xl hover:border-sky-200 hover:shadow-lg transition"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-slate-950">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="text-sm font-semibold text-sky-600 uppercase tracking-wider">Let's Connect</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-950 mt-2">Ready to work together?</h2>
              <p className="text-lg text-slate-600 mt-4">Get in touch for collaboration, consulting, or just a friendly conversation.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Mail, label: "Email", value: "mahmoudabdelrauf84@gmail.com", href: "mailto:mahmoudabdelrauf84@gmail.com" },
                { icon: Linkedin, label: "LinkedIn", value: "mahmoud-abdelrauf", href: "https://www.linkedin.com/in/mahmoud-abdelrauf" },
                { icon: Github, label: "GitHub", value: "GoldenBoy13420", href: "https://github.com/GoldenBoy13420" },
              ].map((contact, i) => {
                const Icon = contact.icon;
                return (
                  <motion.a
                    key={i}
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-xl hover:border-sky-300 hover:shadow-lg transition text-center"
                  >
                    <div className="w-12 h-12 bg-sky-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-950 mb-1">{contact.label}</h3>
                    <p className="text-sm text-slate-600 hover:text-sky-600 transition">{contact.value}</p>
                  </motion.a>
                );
              })}
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <motion.footer
        className="border-t border-slate-200 bg-slate-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-slate-950 mb-4">Mahmoud A.</h3>
              <p className="text-sm text-slate-600">AI & Data Science Engineer</p>
            </div>
            {[
              { title: "Work", links: ["Portfolio", "GitHub", "Projects"] },
              { title: "Connect", links: ["Email", "LinkedIn", "Twitter"] },
              { title: "Resources", links: ["Blog", "Resume", "Talks"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-semibold text-slate-950 mb-3">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link} className="text-sm text-slate-600 hover:text-slate-900 transition cursor-pointer">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
            <p>© {new Date().getFullYear()} Mahmoud Abdelrauf. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-sky-700 transition z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={isScrolled ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronDown className="w-6 h-6 rotate-180" />
      </motion.button>
    </div>
  );
}

function ContactForm() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
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
      className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-xl"
    >
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-slate-950 mb-2">Name</label>
          <input
            type="text"
            required
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border-2 border-slate-300 focus:border-sky-500 focus:outline-none transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-950 mb-2">Email</label>
          <input
            type="email"
            required
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border-2 border-slate-300 focus:border-sky-500 focus:outline-none transition"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-slate-950 mb-2">Message</label>
        <textarea
          required
          rows={5}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border-2 border-slate-300 focus:border-sky-500 focus:outline-none transition resize-none"
          placeholder="Your message..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 disabled:bg-slate-400 transition flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }} className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </motion.button>

      <AnimatePresence>
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-4 p-4 bg-emerald-50 border-2 border-emerald-300 rounded-lg flex items-center gap-2 text-emerald-700"
          >
            <Check className="w-5 h-5" />
            <span>Thanks! I'll get back to you soon.</span>
          </motion.div>
        )}
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-4 p-4 bg-red-50 border-2 border-red-300 rounded-lg flex items-center gap-2 text-red-700"
          >
            <span>Something went wrong. Please try again.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
