import Hero from '@/components/Hero';
import Card from '@/components/Card';
import AI4SECLogo from '@/components/AI4SECLogo';

export default function Impact() {
  return (
    <div>
      <Hero
        title="Impact"
        subtitle="Awards, Grants, News & Open Source Contributions"
        description="Recognition, funding, and contributions to the AI security community"
      />

      {/* AI4SEC Branding */}
      <section className="py-8 bg-gradient-to-r from-navy-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <AI4SECLogo width={60} height={60} />
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300">AI4SEC Lab</h2>
              <p className="text-gray-600 dark:text-gray-300">Making Impact in AI Security Research</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Honors */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">🏆 Awards & Honors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                NeurIPS 2024 Spotlight Paper
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">Top 2% of accepted papers</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">CTIBench: A Large-Scale Benchmark</p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                Aspen Institute AI Fellow
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Selected for prestigious fellowship</p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                Best Paper Award - NDSS 2024
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Network and Distributed System Security Symposium</p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                Best Paper Award - ACSAC 2023
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Annual Computer Security Applications Conference</p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                Best Paper Award - UPSTAT 2023
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Upstate New York AI & ML Conference</p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                International Women in Cybersecurity Award
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Recognition for contributions to the field</p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                Industry Adoption
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Research used by Google, Microsoft, Cisco, TrendMicro</p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                15+ Awards Total
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Best papers, fellowships, and recognitions</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Grants */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">💰 Research Grants</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
            $395,000+ in active external funding from NSF, Toyota, IBM, and Argonne National Lab
          </p>
          <div className="max-w-5xl mx-auto space-y-6">
            <Card>
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                    NSF SaTC TTP Small - DeFake
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Deepfake Detection Research</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">National Science Foundation</p>
                </div>
                <div className="text-left sm:text-right mt-3 sm:mt-0">
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">~$395,764</div>
                  <div className="text-sm text-gray-500">Active</div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                    IBM AI Research
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Trust & Threat Intelligence</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Two-phase collaboration</p>
                </div>
                <div className="text-left sm:text-right mt-3 sm:mt-0">
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">$350,000</div>
                  <div className="text-sm text-gray-500">$200k + $150k</div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                    Toyota Infotech
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Explainable ML for Autonomous Vehicles</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Two-phase project</p>
                </div>
                <div className="text-left sm:text-right mt-3 sm:mt-0">
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">$91,000</div>
                  <div className="text-sm text-gray-500">$70k + $21k</div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                    Argonne National Laboratory
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">LLM Cybersecurity Advisor</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Department of Energy</p>
                </div>
                <div className="text-left sm:text-right mt-3 sm:mt-0">
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">$66,000</div>
                  <div className="text-sm text-gray-500">Active</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* News & Media */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">📰 News & Media Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                CTIBench Featured by Major Tech Companies
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our NeurIPS 2024 Spotlight paper on benchmarking LLMs for cybersecurity has been 
                featured and adopted by Google, Microsoft, Cisco, and TrendMicro for evaluating 
                their threat intelligence systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded">
                  Google
                </span>
                <span className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded">
                  Microsoft
                </span>
                <span className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded">
                  Cisco
                </span>
                <span className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded">
                  TrendMicro
                </span>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                TwiML AI Podcast Interview
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Featured on the This Week in Machine Learning & AI podcast discussing explainable 
                AI for cybersecurity applications and the importance of interpretability in 
                security-critical systems.
              </p>
              <span className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                Podcast • Interview
              </span>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                TechTarget Feature
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Research on automated threat intelligence featured in TechTarget's coverage of 
                emerging AI technologies in cybersecurity.
              </p>
              <span className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                Article • Industry News
              </span>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                InfoSecurity Magazine
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Work on malware detection and threat intelligence discussed in InfoSecurity 
                Magazine's analysis of AI-powered security solutions.
              </p>
              <span className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                Article • Analysis
              </span>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Source Projects */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">🌐 Open Source Projects</h2>
          <div className="space-y-6 max-w-5xl mx-auto">
            <Card>
              <div className="flex flex-col lg:flex-row justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                    LADDER - Android Malware Dataset
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A comprehensive dataset containing 250+ cyberthreat intelligence (CTI) reports 
                    related to Android malware. Includes structured information extracted from CTI 
                    reports, malware samples, and associated metadata.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm">Features:</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        250+ CTI reports • Malware samples • Structured metadata
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href="https://github.com/aiforsec/LADDER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>View on GitHub</span>
                </a>
                <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-4 py-2 rounded-lg text-sm font-medium">
                  Dataset
                </span>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col lg:flex-row justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                    CyNER - Cybersecurity Named Entity Recognition
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A specialized Named Entity Recognition (NER) library designed for cybersecurity 
                    domain. Automatically extracts security-relevant entities from text including 
                    malware names, CVE IDs, attack techniques, and IOCs.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm">Entities:</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Malware • CVEs • IOCs • Attack techniques
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href="https://github.com/aiforsec/CyNER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>View on GitHub</span>
                </a>
                <span className="inline-block bg-navy-100 dark:bg-navy-900 text-navy-800 dark:text-navy-200 px-4 py-2 rounded-lg text-sm font-medium">
                  Library
                </span>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col lg:flex-row justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                    TINKER - Knowledge Graph
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A comprehensive threat intelligence knowledge graph containing 52K triples and 
                    30K entities. Represents relationships between security concepts, threats, and 
                    mitigation strategies for automated reasoning.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm">Scale:</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        52K triples • 30K entities
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href="https://github.com/aiforsec/TINKER"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>View on GitHub</span>
                </a>
                <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-4 py-2 rounded-lg text-sm font-medium">
                  Knowledge Graph
                </span>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
