import Hero from '@/components/Hero';
import Card from '@/components/Card';

export default function About() {
  return (
    <div>
      <Hero
        title="About Nidhi Rastogi"
        subtitle="Assistant Professor at Rochester Institute of Technology"
        description="Leading researcher in Cyberthreat Intelligence, Explainable AI, and Security"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">Biography</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I am an Assistant Professor at the Rochester Institute of Technology (RIT) and an 
                Affiliate Faculty at the ESL Global Cybersecurity Institute. My research focuses on 
                developing innovative solutions at the intersection of artificial intelligence and 
                cybersecurity, with particular emphasis on Cyberthreat Intelligence, Explainable AI, 
                and Data Science for Security.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                My work has been recognized with multiple awards including Best Paper Awards at NDSS'24, 
                ACSAC'23, and UPSTAT'23, and a NeurIPS 2024 Spotlight Paper (top 2% of accepted papers). 
                I am an Aspen Institute AI Fellow and recipient of the International Women in Cybersecurity 
                Award. My research has been adopted by industry leaders including Google, Microsoft, Cisco, 
                and TrendMicro.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I lead an active research lab with 3 PhD students, 6 MS students, and 11 undergraduate 
                researchers. We have published 60+ peer-reviewed papers at top-tier venues and secured 
                over $395,000 in active research grants from NSF, Toyota, Argonne National Laboratory, 
                and IBM Research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Research Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="text-center">
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                Cyberthreat Intelligence
              </h3>
            </Card>
            <Card className="text-center">
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                Explainable AI
              </h3>
            </Card>
            <Card className="text-center">
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                Data Science
              </h3>
            </Card>
            <Card className="text-center">
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                Network Graphs
              </h3>
            </Card>
            <Card className="text-center">
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                Multimodal Data
              </h3>
            </Card>
            <Card className="text-center">
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                System Security
              </h3>
            </Card>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300">
                    Ph.D. in Computer Science
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Rensselaer Polytechnic Institute</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Advisor: Dr. James A. Hendler
                  </p>
                </div>
                <div className="text-right text-gray-600 dark:text-gray-400">
                  Jan 2013 - Mar 2018
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300">
                    M.S. in Computer Science
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">University of Cincinnati</p>
                </div>
                <div className="text-right text-gray-600 dark:text-gray-400">
                  Sep 2006 - Dec 2008
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300">
                    Assistant Professor
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Rochester Institute of Technology</p>
                </div>
                <div className="text-right text-gray-600 dark:text-gray-400">
                  Aug 2021 - Present
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300">
                    Affiliate Faculty
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">ESL Global Cybersecurity Institute, RIT</p>
                </div>
                <div className="text-right text-gray-600 dark:text-gray-400">
                  Present
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300">
                    Research Scientist
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Rensselaer Polytechnic Institute</p>
                </div>
                <div className="text-right text-gray-600 dark:text-gray-400">
                  Aug 2019 - Aug 2021
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300">
                    Postdoctoral Associate
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Rensselaer Polytechnic Institute</p>
                </div>
                <div className="text-right text-gray-600 dark:text-gray-400">
                  Dec 2018 - Jul 2019
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-navy-600 to-teal-500 text-white">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href="mailto:nxrvse@rit.edu" className="hover:underline">
                    nxrvse@rit.edu
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p>513-417-7449</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Office</h3>
                  <p>Rochester Institute of Technology<br />Rochester, NY</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Social</h3>
                  <div className="space-y-1">
                    <a href="https://www.linkedin.com/in/rastoginidhi" target="_blank" rel="noopener noreferrer" className="block hover:underline">
                      LinkedIn: rastoginidhi
                    </a>
                    <a href="https://github.com/aiforsec" target="_blank" rel="noopener noreferrer" className="block hover:underline">
                      GitHub: aiforsec
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
