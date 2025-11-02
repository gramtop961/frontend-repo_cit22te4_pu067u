import { Github, ExternalLink, Mail, Linkedin, MapPin, Phone } from 'lucide-react';

const projects = [
  {
    title: 'Voice AI Agent',
    description:
      'A production-ready voice assistant with streaming STT/TTS, function calling, and memory.',
    tech: ['React', 'FastAPI', 'WebRTC', 'OpenAI'],
    live: '#',
    repo: '#',
  },
  {
    title: 'RAG Knowledge Base',
    description:
      'Retrieval-augmented generation system with chunking, embeddings, and semantic search.',
    tech: ['Python', 'LangChain', 'Vector DB'],
    live: '#',
    repo: '#',
  },
  {
    title: 'AI Portfolio',
    description:
      'This site — featuring a Spline hero, clean sections, and smooth navigation.',
    tech: ['Vite', 'Tailwind', 'Spline'],
    live: '#',
    repo: '#',
  },
];

export default function ProjectsContact() {
  return (
    <section id="projects" className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
          >
            <Github className="h-4 w-4" /> View GitHub
          </a>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="h-40 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-orange-400/20" />
              <div className="p-5">
                <p className="text-lg font-semibold text-gray-900">{p.title}</p>
                <p className="mt-1 text-sm text-gray-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={p.live}
                    className="inline-flex items-center gap-1.5 text-sm text-blue-700 hover:text-blue-900 font-semibold"
                  >
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                  <a
                    href={p.repo}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-700 hover:text-gray-900 font-semibold"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="contact" className="mt-20 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-gray-900">Contact</h3>
            <p className="mt-2 text-gray-600">
              Interested in collaborating or hiring? Reach out — I’m open to freelance and full‑time roles
              building AI-first products.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="h-5 w-5 text-blue-600" />
                <a href="mailto:you@example.com" className="hover:underline">you@example.com</a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Linkedin className="h-5 w-5 text-blue-600" />
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:underline">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Github className="h-5 w-5 text-blue-600" />
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline">
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>+1 (555) 123‑4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>Remote • Worldwide</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input className="h-11 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="h-11 px-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
              </div>
              <div className="md:col-span-2 flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea rows={5} className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell me about your project..." />
              </div>
              <div className="md:col-span-2">
                <button className="w-full h-11 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
