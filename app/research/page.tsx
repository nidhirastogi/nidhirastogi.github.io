import Hero from '@/components/Hero';
import Card from '@/components/Card';

export default function Research() {
  return (
    <div>
      <Hero
        title="Research"
        subtitle="AI Security & Cyberthreat Intelligence"
        description="Developing innovative solutions at the intersection of artificial intelligence, cybersecurity, and data science"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cyberthreat Intelligence */}
            <Card>
              <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-4">
                Cyberthreat Intelligence
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Building automated systems for extracting, analyzing, and operationalizing cyberthreat 
                intelligence from unstructured data sources.
              </p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-semibold">Key Projects:</span>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>CTIBench - LLM benchmark for cybersecurity (NeurIPS 2024 Spotlight)</li>
                    <li>TINKER - Knowledge graph with 52K triples, 30k entities</li>
                    <li>CyNER - Named Entity Recognition library for cybersecurity</li>
                    <li>MALOnt - Malware ontology for threat intelligence</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <span className="inline-block bg-navy-100 dark:bg-navy-900 text-navy-800 dark:text-navy-200 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    NeurIPS 2024
                  </span>
                  <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    Industry Adoption
                  </span>
                </div>
              </div>
            </Card>

            {/* Explainable AI */}
            <Card>
              <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-4">
                Explainable AI (XAI)
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Making AI decisions transparent, interpretable, and trustworthy for security-critical 
                applications through faithful concept extraction and explanation methods.
              </p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-semibold">Key Projects:</span>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>FACE - Faithful Automatic Concept Extraction (NeurIPS 2025)</li>
                    <li>PASA - Privacy-preserving explanations</li>
                    <li>MORPH - Concept drift adaptation for malware (NDSS 2024)</li>
                    <li>XAI for security operations (Amazon Research collaboration)</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <span className="inline-block bg-navy-100 dark:bg-navy-900 text-navy-800 dark:text-navy-200 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    NeurIPS 2025
                  </span>
                  <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    NDSS 2024
                  </span>
                </div>
              </div>
            </Card>

            {/* Android Malware Detection */}
            <Card>
              <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-4">
                Android Malware Detection
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Developing machine learning approaches for detecting and classifying Android malware 
                using threat intelligence reports and behavioral analysis.
              </p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-semibold">Key Contributions:</span>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>LADDER - Android malware dataset (250+ CTI reports)</li>
                    <li>ML-based malware classification</li>
                    <li>Behavioral analysis for mobile security</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Autonomous Vehicle Security */}
            <Card>
              <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-4">
                Autonomous Vehicle Security
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Applying explainable machine learning to enhance the security and safety of 
                autonomous vehicle systems.
              </p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-semibold">Funding:</span>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Toyota Infotech: $70,000 + $21,000</li>
                    <li>Focus: Explainable ML for AV security</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Multi-Cloud Security */}
            <Card>
              <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-4">
                Multi-Cloud Security
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Developing defense mechanisms for applications deployed across multiple cloud 
                providers with complex security requirements.
              </p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-semibold">Key Work:</span>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Defending Multi-Cloud Applications (SACMAT 2024)</li>
                    <li>IBM AI Research collaboration: $200,000 + $150,000</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Knowledge Graphs for Security */}
            <Card>
              <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-4">
                Knowledge Graphs for Security
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Building comprehensive knowledge graphs to represent security concepts, threats, 
                and relationships for automated reasoning and analysis.
              </p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-semibold">Contributions:</span>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>52K knowledge graph triples</li>
                    <li>30K unique entities</li>
                    <li>Ontology development for threat intelligence</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Research Funding</h2>
          <div className="max-w-5xl mx-auto space-y-6">
            <Card>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                    NSF SaTC TTP Small - DeFake
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Deepfake Detection Research</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">~$395,764</div>
                  <div className="text-sm text-gray-500">Active</div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                    IBM AI Research
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Trust & Threat Intelligence</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">$350,000</div>
                  <div className="text-sm text-gray-500">$200k + $150k</div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                    Toyota Infotech
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">Explainable ML for Autonomous Vehicles</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">$91,000</div>
                  <div className="text-sm text-gray-500">$70k + $21k</div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                    Argonne National Lab
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">LLM Cybersecurity Advisor</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">$66,000</div>
                  <div className="text-sm text-gray-500">Active</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Active Collaborations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="text-center">
              <h3 className="font-bold text-navy-700 dark:text-navy-300">Amazon Research</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Explainable AI for Security Ops
              </p>
            </Card>
            <Card className="text-center">
              <h3 className="font-bold text-navy-700 dark:text-navy-300">UT El Paso</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Security Research
              </p>
            </Card>
            <Card className="text-center">
              <h3 className="font-bold text-navy-700 dark:text-navy-300">U Alabama</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                AI Security
              </p>
            </Card>
            <Card className="text-center">
              <h3 className="font-bold text-navy-700 dark:text-navy-300">George Mason</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Collaborative Research
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
