import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Terminal,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Career AI Pilot",
    type: "HACKATHON / AI",
    description:
      "An AI-powered career assistant built with a team I led during a hackathon.",
    tags: ["AI", "n8n", "Product Development"],
    color: "from-blue-500/20 to-cyan-400/5",
  },
  {
    number: "02",
    name: "Forma AI",
    type: "GENERATIVE FORMS",
    description:
      "Dynamic form rendering with reusable React components and structured inputs.",
    tags: ["React", "JavaScript", "Forms"],
    color: "from-violet-500/20 to-blue-500/5",
  },
  {
    number: "03",
    name: "Audit Trail",
    type: "TEAM PROJECT",
    description:
      "A shipment audit application exploring event timelines and historical states.",
    tags: ["React", "Event History", "UI"],
    color: "from-cyan-500/20 to-teal-400/5",
  },
];

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080B12] text-slate-100">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(37,99,235,0.15),transparent_40%)]" />
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-30" />

      {/* Navigation */}
      <header className="relative z-10 border-b border-white/[0.08]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 font-mono text-sm font-bold text-blue-400">
              CK
            </span>
            <span className="font-semibold tracking-tight">
              chandan<span className="text-blue-400">.dev</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a className="transition hover:text-white" href="#home">
              Home
            </a>
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>

          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-full border border-blue-400/30 px-4 py-2 text-sm text-blue-300 transition hover:bg-blue-500/10"
          >
            Explore work
            <ArrowUpRight
              size={15}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-32"
      >
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs tracking-wide text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
            BCA STUDENT · DEVELOPER · BUILDER
          </div>

          <p className="mb-4 font-mono text-sm text-blue-400">
            {"// Hello, world. I'm Chandan."}
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Turning ideas
            <br />
            into{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              digital things.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I build web experiences, explore AI-powered products, and turn
            concepts into working projects. This is where my work, experiments,
            and developer journey come together.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-xl bg-blue-500 px-6 py-3.5 font-medium text-white transition hover:bg-blue-400"
            >
              Explore my projects
              <ArrowDownRight
                size={18}
                className="transition group-hover:translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 text-slate-200 transition hover:border-white/25 hover:bg-white/[0.04]"
            >
              Let's connect
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/[0.08] pt-7">
            <div>
              <p className="font-mono text-2xl font-semibold text-white">01</p>
              <p className="mt-1 text-xs text-slate-500">
                Team lead · Hackathon
              </p>
            </div>
            <div>
              <p className="font-mono text-2xl font-semibold text-white">
                AI + Web
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Areas of exploration
              </p>
            </div>
            <div>
              <p className="font-mono text-2xl font-semibold text-white">
                2027
              </p>
              <p className="mt-1 text-xs text-slate-500">Expected graduation</p>
            </div>
          </div>
        </div>

        {/* Developer workspace */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/[0.08] blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0D121D]/95 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-xs text-slate-500">
                developer.workspace
              </span>
              <Terminal size={16} className="text-blue-400" />
            </div>

            <div className="space-y-7 p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-blue-400">
                    CURRENT PROFILE
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    Chandan K R
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Developer in progress. Builder by practice.
                  </p>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                  <Code2 size={23} />
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-black/20 p-4 font-mono text-xs leading-7 sm:text-sm">
                <p className="text-slate-500">{"// Areas I'm building in"}</p>
                <p>
                  <span className="text-violet-300">const</span>{" "}
                  <span className="text-cyan-300">interests</span> = [
                </p>
                <p className="pl-5 text-emerald-300">"Web Development",</p>
                <p className="pl-5 text-emerald-300">
                  "Artificial Intelligence",
                </p>
                <p className="pl-5 text-emerald-300">"Software Engineering"</p>
                <p>];</p>
                <p className="mt-2 text-slate-500">
                  {"// Learn. Build. Improve. Repeat."}
                </p>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-200">
                    Current toolkit
                  </p>
                  <Sparkles size={16} className="text-blue-400" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "React", "Python", "Git"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/[0.08] pt-5 text-xs">
                <span className="text-slate-500">
                  STATUS: LEARNING & BUILDING
                </span>
                <span className="font-mono text-blue-400">v1.0.0</span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-xl border border-white/10 bg-[#111827] px-4 py-3 shadow-xl sm:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
              <Code2 size={18} />
            </div>
            <div>
              <p className="text-xs font-medium text-white">
                Built through practice
              </p>
              <p className="mt-1 text-[11px] text-slate-500">
                One project at a time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected projects */}
      <section
        id="projects"
        className="relative z-10 border-t border-white/[0.08] bg-[#0B0F18]/80"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="font-mono text-xs tracking-[0.2em] text-blue-400">
                01 / SELECTED BUILDS
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Ideas made tangible<span className="text-blue-400">.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-400">
              A selection of products and experiments I've worked on, learned
              from, and helped bring to life.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
              >
                <div
                  className={`relative flex h-40 items-center justify-between overflow-hidden bg-gradient-to-br ${project.color} p-6`}
                >
                  <span className="font-mono text-sm text-slate-400">
                    /PROJECT_{project.number}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/20 text-blue-300 transition group-hover:scale-110">
                    <Code2 size={23} />
                  </div>
                  <span className="absolute bottom-4 left-6 font-mono text-[10px] tracking-[0.2em] text-slate-400">
                    {project.type}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <ArrowUpRight
                      size={18}
                      className="text-slate-500 transition group-hover:text-blue-400"
                    />
                  </div>
                  <p className="mt-3 min-h-16 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/[0.05] px-2.5 py-1 text-[11px] text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="relative z-10 border-t border-white/[0.08]"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-blue-400">
              02 / THE PERSON BEHIND THE CODE
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Curious mind.
              <br />
              <span className="text-slate-500">Practical builder.</span>
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-slate-400 sm:text-base">
            <p>
              I'm Chandan, a BCA student developing my skills in web development
              and software engineering through hands-on projects and
              internships.
            </p>
            <p>
              I also enjoy exploring AI-powered applications. During a
              hackathon, I led a team working on Career AI Pilot, combining
              product ideas with AI and workflow automation.
            </p>
            <p>
              My goal is to keep learning, build useful software, and grow into
              an engineer who can take an idea from concept to implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 border-t border-white/[0.08]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.10] via-[#0D121D] to-cyan-500/[0.05] p-8 sm:p-12">
            <p className="font-mono text-xs tracking-[0.2em] text-blue-400">
              03 / LET'S CONNECT
            </p>
            <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl">
                  Have something interesting in mind?
                </h2>
                <p className="mt-4 max-w-lg leading-7 text-slate-400">
                  Open to connecting with developers, teams, and people building
                  useful things.
                </p>
              </div>
              <a
                href="mailto:YOUR_EMAIL@example.com"
                className="inline-flex w-fit items-center gap-3 rounded-xl bg-blue-500 px-5 py-3.5 font-medium text-white transition hover:bg-blue-400"
              >
                Email me
                <ArrowUpRight size={18} />
              </a>
            </div>
            <p className="mt-10 text-xs text-slate-500">
              Replace the placeholder email and add your real social profile
              links before publishing.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} Chandan K R · Built with React.</p>
          <div className="flex gap-5">
            <a href="#home" className="transition hover:text-white">
              Back to top ↑
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
