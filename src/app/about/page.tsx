export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Hello! I'm a passionate developer who loves sharing knowledge and experiences through this blog. 
              I believe in the power of community learning and the importance of documenting our journey in software development.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">About This Blog</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This blog serves as a platform for sharing insights, tutorials, and experiences in software development. 
              I write about various topics including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
              <li>Web Development</li>
              <li>TypeScript and JavaScript</li>
              <li>Next.js and React</li>
              <li>Software Architecture</li>
              <li>Development Tools and Practices</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">My Journey</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I started my journey in software development with a passion for creating things that make a difference. 
              Through years of experience, I've learned the importance of continuous learning and sharing knowledge with others.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm always open to discussions, collaborations, and feedback. Feel free to reach out through:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>GitHub: <a href="https://github.com/yourusername" className="text-blue-600 dark:text-blue-400 hover:underline">@yourusername</a></li>
              <li>LinkedIn: <a href="https://linkedin.com/in/yourusername" className="text-blue-600 dark:text-blue-400 hover:underline">yourusername</a></li>
              <li>Email: <a href="mailto:your.email@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">your.email@example.com</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
} 