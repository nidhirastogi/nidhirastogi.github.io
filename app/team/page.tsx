import Hero from '@/components/Hero';
import Card from '@/components/Card';

export default function Team() {
  return (
    <div>
      <Hero
        title="Research Team"
        subtitle="AI4SEC Lab at Rochester Institute of Technology"
        description="Meet our talented team of PhD students, MS students, and undergraduate researchers"
      />

      {/* PhD Students */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">PhD Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-navy-400 to-teal-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  MA
                </div>
                <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                  Md. Tanvirul Alam
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">PhD Student</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Research: Cyberthreat Intelligence, Machine Learning
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-navy-400 to-teal-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  DB
                </div>
                <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                  Dipkamal Bhusal
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">PhD Student</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Research: Explainable AI, Security
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-navy-400 to-teal-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  LN
                </div>
                <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                  Le Nguyen
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">PhD Student</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Research: AI Security, Data Science
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* MS Students */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">MS Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-300 to-navy-300 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                AM
              </div>
              <h3 className="font-bold text-navy-700 dark:text-navy-300">Ashim Mahara</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MS Student</p>
            </Card>

            <Card className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-300 to-navy-300 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                MK
              </div>
              <h3 className="font-bold text-navy-700 dark:text-navy-300">Monish Kumar</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MS Student</p>
            </Card>

            <Card className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-300 to-navy-300 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                BS
              </div>
              <h3 className="font-bold text-navy-700 dark:text-navy-300">Bharadwaj Sharma</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MS Student</p>
            </Card>

            <Card className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-300 to-navy-300 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                OC
              </div>
              <h3 className="font-bold text-navy-700 dark:text-navy-300">Omkar Chavan</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MS Student</p>
            </Card>

            <Card className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-300 to-navy-300 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                MG
              </div>
              <h3 className="font-bold text-navy-700 dark:text-navy-300">Megha Gupta</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MS Student</p>
            </Card>

            <Card className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-300 to-navy-300 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                PC
              </div>
              <h3 className="font-bold text-navy-700 dark:text-navy-300">Praveen C.</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MS Student</p>
            </Card>

            <Card className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-300 to-navy-300 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                RR
              </div>
              <h3 className="font-bold text-navy-700 dark:text-navy-300">Rigved Rakshit</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MS Student</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-navy-600 to-teal-500 text-white text-center p-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Research Team</h2>
              <p className="text-xl mb-8 text-gray-100">
                We're looking for motivated students interested in AI security, cyberthreat intelligence, 
                and explainable AI. We offer research opportunities for PhD, MS, and undergraduate students.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">What We Offer</h3>
                  <ul className="space-y-2 text-gray-100">
                    <li>✓ Cutting-edge research in AI and security</li>
                    <li>✓ Publications at top-tier venues (NeurIPS, NDSS, IEEE S&P, CCS)</li>
                    <li>✓ Industry collaborations (Google, Microsoft, Amazon, IBM)</li>
                    <li>✓ Funding opportunities and research assistantships</li>
                    <li>✓ Mentorship from award-winning faculty</li>
                  </ul>
                </div>
                <div className="pt-6">
                  <a
                    href="/contact"
                    className="inline-block bg-white text-navy-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Alumni */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Previous Research Students</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-4">
                Undergraduate Researchers (RPI, 2019-2021)
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                11 undergraduate researchers contributed to various projects in cybersecurity 
                and AI during my time at Rensselaer Polytechnic Institute.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
