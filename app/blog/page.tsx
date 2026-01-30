import Hero from '@/components/Hero';
import Card from '@/components/Card';

export default function Blog() {
  return (
    <div>
      <Hero
        title="Blog & Updates"
        subtitle="Research Updates & Insights"
        description="Latest news about research projects, publications, and industry insights"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-navy-600 text-white rounded-lg px-3 py-2 text-center">
                    <div className="text-2xl font-bold">25</div>
                    <div className="text-xs">FEB 2024</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                    NDSS 2024: Best Poster Award for MORPH
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Our work on concept drift adaptation for malware detection received the Best 
                    Poster & Presentation Award at the Network and Distributed System Security 
                    Symposium (NDSS) 2024. MORPH addresses the challenge of maintaining accurate 
                    malware detection as threat landscapes evolve.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-navy-100 dark:bg-navy-900 text-navy-800 dark:text-navy-200 px-3 py-1 rounded-full text-sm">
                      Awards
                    </span>
                    <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-sm">
                      Research
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-navy-600 text-white rounded-lg px-3 py-2 text-center">
                    <div className="text-2xl font-bold">15</div>
                    <div className="text-xs">OCT 2024</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                    CTIBench: NeurIPS 2024 Spotlight Paper
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Thrilled to announce that our paper "CTIBench: A Benchmark for Evaluating LLMs 
                    in Cyber Threat Intelligence" has been accepted as a Spotlight Paper at NeurIPS 
                    2024 (top 2% of accepted papers)! This work has already been adopted by major 
                    tech companies including Google, Microsoft, Cisco, and TrendMicro.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">
                      🏆 Spotlight
                    </span>
                    <span className="inline-block bg-navy-100 dark:bg-navy-900 text-navy-800 dark:text-navy-200 px-3 py-1 rounded-full text-sm">
                      Publications
                    </span>
                    <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-sm">
                      Industry Impact
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-navy-600 text-white rounded-lg px-3 py-2 text-center">
                    <div className="text-2xl font-bold">20</div>
                    <div className="text-xs">JUL 2023</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                    Selected as Aspen Institute AI Fellow
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Honored to be selected as an Aspen Tech Policy Hub Fellow for 2023. Looking 
                    forward to contributing to AI policy discussions and working on responsible AI 
                    governance frameworks with fellow researchers and policymakers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-navy-100 dark:bg-navy-900 text-navy-800 dark:text-navy-200 px-3 py-1 rounded-full text-sm">
                      Awards
                    </span>
                    <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-sm">
                      Policy
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-navy-600 text-white rounded-lg px-3 py-2 text-center">
                    <div className="text-2xl font-bold">05</div>
                    <div className="text-xs">APR 2023</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                    Best Paper Award at UPSTAT Conference
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Our research on explainable AI for security applications received the Best Paper 
                    Award at the UPSTAT 2023 conference. This recognition highlights the importance 
                    of interpretability in security-critical AI systems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">
                      🏆 Best Paper
                    </span>
                    <span className="inline-block bg-navy-100 dark:bg-navy-900 text-navy-800 dark:text-navy-200 px-3 py-1 rounded-full text-sm">
                      Awards
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-navy-600 text-white rounded-lg px-3 py-2 text-center">
                    <div className="text-2xl font-bold">10</div>
                    <div className="text-xs">DEC 2023</div>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                    ACSAC 2023: LADDER Dataset Recognition
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    The LADDER Android malware dataset received Best Poster & Presentation Award at 
                    the Annual Computer Security Applications Conference (ACSAC) 2023. The dataset 
                    contains 250+ CTI reports and is now publicly available for the research community.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">
                      🏆 Best Poster
                    </span>
                    <span className="inline-block bg-navy-100 dark:bg-navy-900 text-navy-800 dark:text-navy-200 px-3 py-1 rounded-full text-sm">
                      Datasets
                    </span>
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
