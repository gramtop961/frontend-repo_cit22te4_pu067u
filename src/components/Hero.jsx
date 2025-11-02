import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <p className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-blue-700 bg-blue-100/70 px-3 py-1.5 rounded-full">
          <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
          AI Engineer • Ex Full‑stack Developer
        </p>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Building Intelligent Products with Code and Creativity
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          I design, prototype, and ship AI-powered apps — from voice agents to
          production-grade systems — blending robust engineering with modern ML.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 md:gap-4">
          <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-300 text-gray-800 bg-white hover:bg-gray-50 font-semibold transition-colors">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
