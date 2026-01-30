import Link from 'next/link';
import Card from '@/components/Card';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-700 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Nidhi Rastogi</h1>
            <p className="text-2xl md:text-3xl text-gray-100 mb-6">
              Assistant Professor, Rochester Institute of Technology
            </p>
            <p className="text-lg text-gray-200 mb-8">
              Leading research in Cyberthreat Intelligence, Explainable AI, and Security • 
              60+ Publications • $395k+ in Active Research Grants • NeurIPS 2024 Spotlight Paper
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/research" className="btn-primary">
                Explore Research
              </Link>
              <Link href="/publications" className="btn-secondary">
                View Publications
              </Link>
              <Link href="/contact" className="bg-white text-navy-700 hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="text-4xl font-bold text-navy-600 dark:text-navy-400 mb-2">60+</div>
              <h3 className="text-xl font-semibold mb-2">Publications</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Peer-reviewed papers at A* venues including NeurIPS, IEEE S&P, CCS, USENIX Security
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">$395k+</div>
              <h3 className="text-xl font-semibold mb-2">Active Grants</h3>
              <p className="text-gray-600 dark:text-gray-300">
                From NSF, Toyota, Argonne National Lab, IBM Research
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-navy-600 dark:text-navy-400 mb-2">15+</div>
              <h3 className="text-xl font-semibold mb-2">Awards & Honors</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Including Aspen Institute AI Fellow, Best Paper Awards, International Women in Cybersecurity
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card href="/research">
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                Cyberthreat Intelligence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                CTIBench, TINKER, CyNER - Building benchmarks and tools for automated threat intelligence
              </p>
            </Card>
            <Card href="/research">
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                Explainable AI
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                FACE, PASA, MORPH - Making AI decisions transparent and trustworthy for security applications
              </p>
            </Card>
            <Card href="/research">
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                Android Malware Detection
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                LADDER dataset and machine learning approaches for mobile security
              </p>
            </Card>
            <Card href="/research">
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                Autonomous Vehicle Security
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explainable ML for AV security funded by Toyota Infotech
              </p>
            </Card>
            <Card href="/research">
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                Multi-Cloud Security
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Defending multi-cloud applications with IBM AI Research
              </p>
            </Card>
            <Card href="/research">
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                Knowledge Graphs
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building knowledge graphs for security with 52K triples and 30k entities
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Recent News</h2>
            <Link href="/news" className="text-navy-600 dark:text-navy-400 hover:underline">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">February 2024</div>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                Best Poster & Presentation Award at NDSS 2024
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our work on cyberthreat intelligence received the best poster award at NDSS 2024
              </p>
            </Card>
            <Card>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">October 2024</div>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                CTIBench Published at NeurIPS 2024 (Spotlight)
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Top 2% of accepted papers - Industry adoption by Google, Microsoft, Cisco, TrendMicro
              </p>
            </Card>
            <Card>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">July 2023</div>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                Aspen Institute AI Fellow
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Selected as Aspen Tech Policy Hub Fellow focusing on AI policy and governance
              </p>
            </Card>
            <Card>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">April 2023</div>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                Best Paper Award at UPSTAT Conference
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Recognition for outstanding research contribution at UPSTAT 2023
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy-600 to-teal-500 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Interested in Collaboration?</h2>
            <p className="text-xl mb-8 text-gray-100">
              I'm always looking for talented students and research collaborators in AI security and cyberthreat intelligence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/team" className="bg-white text-navy-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Join Our Team
              </Link>
              <Link href="/contact" className="bg-navy-800 hover:bg-navy-900 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
