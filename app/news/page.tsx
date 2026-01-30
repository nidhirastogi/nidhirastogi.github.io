import Hero from '@/components/Hero';
import Card from '@/components/Card';

export default function News() {
  return (
    <div>
      <Hero
        title="News & Media"
        subtitle="Press Coverage & Media Mentions"
        description="Featured in major tech publications and media outlets"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Recent Media Coverage */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Recent Media Coverage</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    Magazine • Feature
                  </span>
                </Card>

                <Card>
                  <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                    RIT News Coverage
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Multiple features in RIT News highlighting research achievements, grant awards, 
                    and collaborations with industry partners.
                  </p>
                  <span className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                    University News
                  </span>
                </Card>

                <Card>
                  <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                    International Media
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Featured in New York Times India and HuffPost discussing AI policy, cybersecurity 
                    research, and technology impact on society.
                  </p>
                  <span className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                    International Press
                  </span>
                </Card>
              </div>
            </div>

            {/* Awards & Recognition */}
            <div className="pt-8">
              <h2 className="text-3xl font-bold mb-8">Awards & Recognition</h2>
              <div className="space-y-4">
                <Card>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                        🏆 NeurIPS 2024 Spotlight Paper
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        CTIBench selected as Spotlight Paper (Top 2% of accepted papers)
                      </p>
                      <span className="text-sm text-gray-500 dark:text-gray-400">October 2024</span>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                        🏆 Best Poster & Presentation Award, NDSS 2024
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        Recognition for MORPH: Concept Drift Adaptation for Malware Detection
                      </p>
                      <span className="text-sm text-gray-500 dark:text-gray-400">February 2024</span>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                        🏆 Best Poster & Presentation Award, ACSAC 2023
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        LADDER Android Malware Dataset recognized at ACSAC 2023
                      </p>
                      <span className="text-sm text-gray-500 dark:text-gray-400">December 2023</span>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                        🏆 Aspen Institute AI Fellow
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        Selected as Aspen Tech Policy Hub Fellow for contributions to AI policy
                      </p>
                      <span className="text-sm text-gray-500 dark:text-gray-400">July 2023</span>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                        🏆 Best Paper Award, UPSTAT Conference
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        Outstanding research contribution in explainable AI for security
                      </p>
                      <span className="text-sm text-gray-500 dark:text-gray-400">April 2023</span>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                        🏆 International Women in Cybersecurity Award
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        Recognition for contributions to cybersecurity research and education
                      </p>
                      <span className="text-sm text-gray-500 dark:text-gray-400">July 2020</span>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                        🏆 IBM Graduate Research Fellow
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        Selected as IBM Graduate Research Fellow
                      </p>
                      <span className="text-sm text-gray-500 dark:text-gray-400">June 2015</span>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                        🏆 Aspen Tech Policy Hub - Best Policy Award Runner-Up
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        Recognition for AI policy contributions
                      </p>
                      <span className="text-sm text-gray-500 dark:text-gray-400">2023</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Speaking Engagements */}
            <div className="pt-8">
              <h2 className="text-3xl font-bold mb-8">Recent Speaking Engagements</h2>
              <div className="space-y-4">
                <Card>
                  <h3 className="text-lg font-bold text-navy-700 dark:text-navy-300 mb-2">
                    University of North Dakota
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    "Building Trust in AI-Driven Security Systems"
                  </p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2025</span>
                </Card>

                <Card>
                  <h3 className="text-lg font-bold text-navy-700 dark:text-navy-300 mb-2">
                    Aspen Cyber Summit
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Panel discussion on AI policy and governance
                  </p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2023</span>
                </Card>

                <Card>
                  <h3 className="text-lg font-bold text-navy-700 dark:text-navy-300 mb-2">
                    USENIX Enigma 2022
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Keynote on cyberthreat intelligence automation
                  </p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">2022</span>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
