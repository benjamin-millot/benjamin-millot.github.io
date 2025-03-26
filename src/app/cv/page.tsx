export default function CV() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Benjamin</h1>
          <div className="text-gray-600">
            <p>Email: your.email@example.com</p>
            <p>GitHub: github.com/yourusername</p>
            <p>LinkedIn: linkedin.com/in/yourusername</p>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">University Name</h3>
                  <p className="text-gray-600">Degree in Computer Science</p>
                </div>
                <div className="text-gray-600">2018 - 2022</div>
              </div>
              <p className="text-gray-600">GPA: 3.8/4.0</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Company Name</h3>
                  <p className="text-gray-600">Senior Software Engineer</p>
                </div>
                <div className="text-gray-600">2022 - Present</div>
              </div>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Led development of key features and improvements</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Implemented best practices and coding standards</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Previous Company</h3>
                  <p className="text-gray-600">Software Engineer</p>
                </div>
                <div className="text-gray-600">2020 - 2022</div>
              </div>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Developed and maintained web applications</li>
                <li>Collaborated with cross-functional teams</li>
                <li>Optimized application performance</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Programming Languages</h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>JavaScript/TypeScript</li>
                <li>Python</li>
                <li>Java</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Technologies</h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>React/Next.js</li>
                <li>Node.js</li>
                <li>Docker</li>
                <li>Git</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tools</h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>VS Code</li>
                <li>Figma</li>
                <li>Jira</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Soft Skills</h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Team Leadership</li>
                <li>Problem Solving</li>
                <li>Communication</li>
                <li>Agile Methodologies</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Project Name</h3>
              <p className="text-gray-600">A brief description of the project and its impact.</p>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Key achievements and technologies used</li>
                <li>Results and metrics</li>
                <li>Your role and contributions</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Publications</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">
                Author Name, "Title of the Publication," <em>Journal/Conference Name</em>, Year.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 