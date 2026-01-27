export default function Home() {
  const techStack = [
    'Next.js',
    'React',
    'Tailwind CSS',
    'SQL',
    'JavaScript',
    'Java',
    'C',
    'Python',
    'PHP',
    'C#',
    'HTML & CSS',
    '.NET',
    'ASP.NET',
    'TypeScript',
    'Git',
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Zulhanif Zairudin
            </span>
          </h1>
          <p className="mb-8 text-xl leading-8 text-gray-300">
          An aspiring computer science graduate learning frontend and backend development, 
          with a strong interest in building real-world applications and understanding 
          industry best practices. I enjoy solving problems and writing clean, 
          maintainable code.
          </p>
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 shadow-sm transition-all hover:shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="/projects"
              className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              View Projects
            </a>
            <a
              href="https://github.com/zulhanifzairudin"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-gray-600 bg-gray-800 px-6 py-3 text-base font-semibold text-gray-300 transition-all hover:border-gray-500 hover:bg-gray-700"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
