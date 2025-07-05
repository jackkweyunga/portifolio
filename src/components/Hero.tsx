export default function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-20">
      <div className="text-center px-4 max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
            Jack Kweyunga
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-normal mb-8">
            DevSecOps Engineer | Co-founder of Seede XR | Electronics Engineer
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm text-secondary">
            <span>TypeScript</span>
            <span>•</span>
            <span>Python</span>
            <span>•</span>
            <span>Rust</span>
            <span>•</span>
            <span>Docker</span>
            <span>•</span>
            <span>Electronics</span>
            <span>•</span>
            <span className="text-primary">XR Learning</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-3 text-white rounded hover:opacity-90 transition-all duration-200"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border text-secondary rounded transition-all duration-200 hover:opacity-90"
            style={{ borderColor: 'var(--color-secondary)' }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}