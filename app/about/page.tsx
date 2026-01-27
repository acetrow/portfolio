import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center text-sm font-medium text-gray-400 transition-colors hover:text-blue-400"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            About Me
          </h1>
          <p className="text-lg text-gray-300">
            Computer Science student passionate about building real-world applications
          </p>
        </div>

        {/* Contact Information */}
        <div className="mb-12 rounded-lg bg-gray-800 p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-white">Contact Information</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:muhammadzulhanif0802@gmail.com" className="hover:text-blue-400 transition-colors">
                muhammadzulhanif0802@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+60143924292" className="hover:text-blue-400 transition-colors">
                (+60) 143924292
              </a>
            </div>
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Penang, Malaysia</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/zulhanif-zairudin-852942220/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-700"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/zulhanifzairudin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-gray-600"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Education */}
        <div className="mb-12 rounded-lg bg-gray-800 p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-white">Education</h2>
          <div className="space-y-8">
            <div>
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">Lancaster University</h3>
                <span className="text-sm text-gray-400">Oct 2022 - July 2025</span>
              </div>
              <p className="mb-3 text-gray-300">BSc (Hons) Computer Science</p>
              <ul className="ml-6 list-disc space-y-1 text-gray-400">
                <li>Relevant modules: Software Development, Databases, Computer Networks, Digital Systems, Software Design, Operating System, Distributed System, Artificial Intelligence, Security and Risk, Media Coding & Processing</li>
              </ul>
            </div>

            <div>
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">MARA Banting College</h3>
                <span className="text-sm text-gray-400">Sep 2020 - May 2022</span>
              </div>
              <p className="mb-3 text-gray-300">International Baccalaureate, 35 points</p>
              <ul className="ml-6 list-disc space-y-1 text-gray-400">
                <li>Relevant modules: Mathematics AA HL, Physics HL, English HL, ITGS SL, Malay SL, Chemistry SL</li>
              </ul>
            </div>

            <div>
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">SMKA Al-Irshad</h3>
                <span className="text-sm text-gray-400">Jan 2015 - Nov 2019</span>
              </div>
              <p className="mb-3 text-gray-300">High School</p>
              <ul className="ml-6 list-disc space-y-1 text-gray-400">
                <li>Malaysian Certificate of Education (SPM) Best Achiever Award, (10A)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-12 rounded-lg bg-gray-800 p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-white">Professional Experience</h2>
          <div className="space-y-8">
            <div>
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">Ernst & Young</h3>
                <span className="text-sm text-gray-400">July 2024 – Aug 2024</span>
              </div>
              <p className="mb-3 text-gray-300">Technology Consultant Intern</p>
              <ul className="ml-6 list-disc space-y-2 text-gray-400">
                <li>Assisted in deploying an e-invoicing solution using SAP tools, improving efficiency across invoice workflows.</li>
                <li>Conducted end-to-end testing of SAP-based e-invoice software, identifying and resolving 15+ data issues to ensure system compliance.</li>
                <li>Gained deep insights into invoice processes, including digitization and compliance.</li>
                <li>Demonstrated problem-solving skills and collaboration in a team environment to meet project objectives.</li>
              </ul>
            </div>

            <div>
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">TALITA LAPTOP</h3>
                <span className="text-sm text-gray-400">July 2023 - Sep 2023</span>
              </div>
              <p className="mb-3 text-gray-300">IT Support and Marketing Intern</p>
              <ul className="ml-6 list-disc space-y-2 text-gray-400">
                <li>Repaired and upgraded laptops to enhance performance and user experience.</li>
                <li>Designed promotional materials such as posters and catalogues to market shop products effectively.</li>
                <li>Interacted with customers, providing excellent service and offering personalized product suggestions to meet their individual needs</li>
              </ul>
            </div>

            <div>
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-semibold text-white">Freelance Web Developer</h3>
                <span className="text-sm text-gray-400">July 2023 – Aug 2023</span>
              </div>
              <ul className="ml-6 list-disc space-y-2 text-gray-400">
                <li>Delivered an educational website for a primary school teacher, featuring interactive lessons on healthy habits.</li>
                <li>Collaborated closely with the teacher to design and implement engaging features.</li>
                <li>Successfully met project deadlines and ensured timely delivery of the website.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12 rounded-lg bg-gray-800 p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-white">Skills</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'C', 'C#', 'JavaScript', 'TypeScript', 'PHP', 'SQL'].map((skill) => (
                  <span key={skill} className="rounded-lg bg-gray-700 px-3 py-1 text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'ASP.NET Core', 'Unity'].map((skill) => (
                  <span key={skill} className="rounded-lg bg-gray-700 px-3 py-1 text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">Web & Backend Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['RESTful APIs', 'HTML5', 'CSS3', 'Tailwind CSS', 'MySQL', 'SQL Server'].map((skill) => (
                  <span key={skill} className="rounded-lg bg-gray-700 px-3 py-1 text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'Linux', 'Jenkins', 'Swagger', 'Dapper ORM'].map((skill) => (
                  <span key={skill} className="rounded-lg bg-gray-700 px-3 py-1 text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['English (fluent)', 'Malay (fluent)', 'Mandarin (intermediate)', 'Arabic (intermediate)'].map((skill) => (
                  <span key={skill} className="rounded-lg bg-gray-700 px-3 py-1 text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Leadership, Volunteering and Achievements */}
        <div className="mb-12 rounded-lg bg-gray-800 p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-white">Leadership, Volunteering and Achievements</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">Model United Nations Conference</h3>
              <p className="mb-2 text-sm text-gray-400">Aug 2020</p>
              <ul className="ml-6 list-disc space-y-1 text-gray-400">
                <li>Delegate of Mexico in SOCHUM</li>
                <li>Collaborated with global delegates to address social and humanitarian challenges as Mexico's representative</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">Head of Prefect Committee</h3>
              <p className="mb-2 text-sm text-gray-400">Jan 2017 - Nov 2019</p>
              <ul className="ml-6 list-disc space-y-1 text-gray-400">
                <li>Setting and enforcing rules and standards for the prefect team</li>
                <li>Leading team meetings and delegating tasks</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Featured Projects Summary */}
        <div className="rounded-lg bg-gray-800 p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-white">Featured Projects</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">Payroll Management System (ASP.NET Core Web API + React)</h3>
              <p className="text-gray-400">Built a fullstack payroll system using ASP.NET Core and React, implementing RESTful APIs, clean architecture, and business-rule–driven salary calculations.</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">Webflow to Next.js Migration (Next.js, TypeScript)</h3>
              <p className="text-gray-400">Migrated a static Webflow site into a production-ready Next.js App Router application, handling dynamic routing, asset normalization, and animation re-initialization.</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">Developer Portfolio Website (Next.js, TypeScript)</h3>
              <p className="text-gray-400">Developed a responsive portfolio website with dynamic project pages and filtering using Next.js and TypeScript.</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-white">Book Library Management System (PHP + MySQL)</h3>
              <p className="text-gray-400">Developed a database-driven PHP and MySQL web application with full CRUD functionality, server-side validation, and responsive UI.</p>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-blue-700"
            >
              View All Projects
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

