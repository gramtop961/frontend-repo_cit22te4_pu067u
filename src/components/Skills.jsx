import { Code } from 'lucide-react';

const skills = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
  Frontend: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
  Backend: ['FastAPI', 'Node.js', 'MongoDB', 'PostgreSQL'],
  AI: ['OpenAI', 'RAG', 'Vector DBs', 'Whisper / TTS', 'LangChain'],
  DevOps: ['Docker', 'CI/CD', 'Vercel', 'AWS'],
};

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 bg-gradient-to-b from-white to-purple-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Code className="h-6 w-6 text-indigo-600" /> Skills
        </h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="p-5 rounded-xl border border-gray-200 bg-white/80 shadow-sm">
              <p className="font-semibold text-gray-900">{group}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
