import { User, GraduationCap } from 'lucide-react';

export default function AboutEducation() {
  return (
    <section id="about" className="relative w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 mx-auto md:mx-0 shadow-lg" />
            <h2 className="mt-6 text-2xl font-bold text-gray-900 flex items-center gap-2">
              <User className="h-6 w-6 text-blue-600" /> About
            </h2>
            <p className="mt-3 text-gray-600">
              I’m a developer turned AI engineer focused on building delightful, reliable products.
              I enjoy turning ambiguous ideas into polished experiences — with clean code, strong UX,
              and pragmatic machine learning.
            </p>
          </div>

          <div className="md:col-span-2" id="education">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-purple-600" /> Education
            </h3>
            <div className="mt-4 space-y-6">
              <div className="p-5 rounded-xl border border-gray-200 bg-white/80 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-900">B.S. in Computer Science</p>
                  <span className="text-sm text-gray-500">2016 — 2020</span>
                </div>
                <p className="text-gray-600">Focus on Software Engineering, Data Structures, and Applied Machine Learning.</p>
              </div>
              <div className="p-5 rounded-xl border border-gray-200 bg-white/80 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-900">Graduate Coursework in AI Systems</p>
                  <span className="text-sm text-gray-500">2021 — 2022</span>
                </div>
                <p className="text-gray-600">Specialized in LLM apps, information retrieval, and MLOps best practices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
