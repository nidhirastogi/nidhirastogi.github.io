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

      {/* PhD Students (Primary Advisor) */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">PhD Students (Primary Advisor)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-navy-400 to-teal-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  MA
                </div>
                <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                  Md. Tanvirul Alam
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">PhD Student, RIT</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">2021-Present</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Research: Cyberthreat Intelligence
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
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">PhD Student, RIT</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">2021-Present</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Research: Explainable AI Framework
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
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">PhD Student, RIT</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">2024-Present</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Research: Threat Intelligence for National Security
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-navy-400 to-teal-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  RF
                </div>
                <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                  Romy Fieblinger
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">M.S. Thesis</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">06/23-Present</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  University of Applied Sciences, Mittweida, Germany
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-navy-400 to-teal-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  MR
                </div>
                <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                  Morgan Reece
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">PhD Student (Co-advisor)</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">2022-Present</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Multi-cloud Security, Mississippi State University
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-teal-300 to-navy-300 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                  AS
                </div>
                <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                  Ajay Ashok Shewale
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">PhD Graduate, 2023</p>
                <p className="text-sm text-teal-600 dark:text-teal-400 mb-3">Now at Amazon Web Services</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* MS Students */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">MS Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-300 to-navy-300 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                AM
              </div>
              <h3 className="font-bold text-navy-700 dark:text-navy-300">Ashim Mahara</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MS Student</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">08/23-Present</p>
            </Card>

            <Card className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-300 to-navy-300 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                MK
              </div>
              <h3 className="font-bold text-navy-700 dark:text-navy-300">Monish Kumar Manikya Veerabhadran</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MS Student</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">01/23-12/23</p>
            </Card>

            <Card className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-300 to-navy-300 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                BK
              </div>
              <h3 className="font-bold text-navy-700 dark:text-navy-300">Bharadwaj Sharma Kasturi</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MS Student</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">08/23-12/23</p>
            </Card>

            <Card className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-300 to-navy-300 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                OC
              </div>
              <h3 className="font-bold text-navy-700 dark:text-navy-300">Omkar Chavan</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MS Student</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">12/22-06/23</p>
            </Card>

            <Card className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-300 to-navy-300 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                MG
              </div>
              <h3 className="font-bold text-navy-700 dark:text-navy-300">Megha Gupta</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MS Student</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">01/22-08/22</p>
            </Card>

            <Card className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-300 to-navy-300 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                PC
              </div>
              <h3 className="font-bold text-navy-700 dark:text-navy-300">Praveen Chandrashekaran</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MS Student</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">08/22-12/22</p>
              <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">Now at BMW</p>
            </Card>

            <Card className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-teal-300 to-navy-300 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                RR
              </div>
              <h3 className="font-bold text-navy-700 dark:text-navy-300">Rigved Rakshit</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">MS Student</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">01/22-08/22</p>
              <p className="text-xs text-teal-600 dark:text-teal-400 mt-1">Now at Schlumberger SLB</p>
            </Card>
          </div>
        </div>
      </section>

      {/* PhD Committee Member */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">PhD Committee Member</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-lg font-bold text-navy-700 dark:text-navy-300 mb-2">Ali Khalid</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">RIT</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">2023-Present</p>
            </Card>

            <Card>
              <h3 className="text-lg font-bold text-navy-700 dark:text-navy-300 mb-2">Narayanan Asuri Krishnan</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">RIT</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">2023-Present</p>
            </Card>

            <Card>
              <h3 className="text-lg font-bold text-navy-700 dark:text-navy-300 mb-2">Hrushikesh Mukherjee</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">University of Florida</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">08/22-Present</p>
            </Card>

            <Card>
              <h3 className="text-lg font-bold text-navy-700 dark:text-navy-300 mb-2">Morgan Reece</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Mississippi State University</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">08/22-Present</p>
            </Card>

            <Card>
              <h3 className="text-lg font-bold text-navy-700 dark:text-navy-300 mb-2">PhD Committee</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">George Mason University</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">2024-Present</p>
            </Card>

            <Card>
              <h3 className="text-lg font-bold text-navy-700 dark:text-navy-300 mb-2">PhD Committee</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">University of Texas at El Paso</p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">2024-Present</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Undergraduate & High School Researchers */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Undergraduate & High School Researchers</h2>
          
          <div className="space-y-8">
            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                High School Students
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-300">Ayushi Mehrotra</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Troy High School, Fullerton, CA | CyberVSR Scholar, RIT
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Jun'23-Present</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 dark:text-gray-300">Krishna Narayanasamy</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Archbishop Mitty High School, San Jose, CA
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">Jun'23-Aug'23</p>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                Undergraduate Researchers (RPI, 2019-2021)
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ruisi Jian, Megan Goulet, Chuqiao Gu, Qicheng Ma, Destin Yee, Sean Hale, 
                Jared Gridley, Aaron Hill, Lydia Zhou, Ryan Christian, Thomas Hopkins
              </p>
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
    </div>
  );
}
