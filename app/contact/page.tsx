import Hero from '@/components/Hero';
import Card from '@/components/Card';

export default function Contact() {
  return (
    <div>
      <Hero
        title="Contact"
        subtitle="Get In Touch"
        description="Interested in research collaboration, joining our team, or have questions? I'd love to hear from you."
      />

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <Card>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-navy-600 dark:text-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-700 dark:text-navy-300 mb-1">Email</h3>
                      <a href="mailto:nxrvse@rit.edu" className="text-gray-600 dark:text-gray-300 hover:text-navy-600 dark:hover:text-navy-400">
                        nxrvse@rit.edu
                      </a>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-navy-600 dark:text-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-700 dark:text-navy-300 mb-1">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">513-417-7449</p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-navy-600 dark:text-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-700 dark:text-navy-300 mb-1">Office</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Rochester Institute of Technology<br />
                        Rochester, NY
                      </p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-navy-600 dark:text-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-700 dark:text-navy-300 mb-1">Social Media</h3>
                      <div className="space-y-2">
                        <div>
                          <a
                            href="https://www.linkedin.com/in/rastoginidhi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-navy-600 dark:hover:text-navy-400"
                          >
                            LinkedIn: rastoginidhi
                          </a>
                        </div>
                        <div>
                          <a
                            href="https://github.com/aiforsec"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-navy-600 dark:hover:text-navy-400"
                          >
                            GitHub: aiforsec
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Opportunities */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Opportunities</h2>
              
              <div className="space-y-6">
                <Card>
                  <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                    For Prospective Students
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    I'm always looking for motivated students interested in AI security, 
                    cyberthreat intelligence, and explainable AI. We have opportunities for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>PhD students (fully funded positions)</li>
                    <li>MS students (research assistantships available)</li>
                    <li>Undergraduate researchers</li>
                  </ul>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    When contacting me, please include your CV, research interests, and how 
                    your background aligns with our research areas.
                  </p>
                </Card>

                <Card>
                  <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                    For Researchers & Collaborators
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    I actively collaborate with researchers from academia and industry on 
                    projects related to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Cyberthreat intelligence and automation</li>
                    <li>Explainable AI for security applications</li>
                    <li>AI/ML for malware detection and analysis</li>
                    <li>Security policy and governance</li>
                  </ul>
                </Card>

                <Card>
                  <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                    For Industry Partners
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    I work with industry partners on research projects, consulting, and 
                    educational initiatives. Our lab has experience collaborating with 
                    Google, Microsoft, Amazon, IBM, Cisco, and other leading tech companies.
                  </p>
                </Card>

                <Card className="bg-gradient-to-r from-navy-600 to-teal-500 text-white">
                  <h3 className="text-xl font-bold mb-3">Quick Response</h3>
                  <p className="text-gray-100">
                    I typically respond to emails within 2-3 business days. For urgent matters, 
                    please indicate "URGENT" in your subject line.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas for Reference */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Research Interests</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Cyberthreat Intelligence',
              'Explainable AI',
              'Data Science',
              'Network Graphs',
              'Multimodal Data',
              'System Security',
              'Android Malware',
              'Autonomous Vehicles',
              'Multi-Cloud Security',
              'Knowledge Graphs',
            ].map((interest) => (
              <span
                key={interest}
                className="inline-block bg-white dark:bg-gray-700 text-navy-700 dark:text-navy-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
