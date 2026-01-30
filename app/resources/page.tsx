import Hero from '@/components/Hero';
import Card from '@/components/Card';

export default function Resources() {
  return (
    <div>
      <Hero
        title="Open Source Resources"
        subtitle="Datasets, Tools, and Code"
        description="Making research reproducible and accessible through open-source contributions"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* LADDER Dataset */}
            <Card>
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                    LADDER - Android Malware Dataset
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A comprehensive dataset containing 250+ cyberthreat intelligence (CTI) reports 
                    related to Android malware. The dataset includes structured information extracted 
                    from CTI reports, malware samples, and associated metadata.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm">Features:</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        250+ CTI reports • Malware samples • Structured metadata
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm">Use Cases:</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Malware detection • Threat intelligence • ML training
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

            {/* CyNER */}
            <Card>
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                    CyNER - Cybersecurity Named Entity Recognition
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A specialized Named Entity Recognition (NER) library designed for cybersecurity 
                    domain. Automatically extracts security-relevant entities from text including 
                    malware names, CVE IDs, attack techniques, indicators of compromise (IOCs), and more.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm">Entities:</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Malware • CVEs • IOCs • Attack techniques • Threat actors
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm">Technology:</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Python • spaCy • Transformer models
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

            {/* TINKER */}
            <Card>
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                    TINKER - Knowledge Graph Framework
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A comprehensive framework for building and deploying cybersecurity knowledge graphs. 
                    Includes 52,000+ knowledge graph triples representing relationships between 30,000+ 
                    unique security entities including malware, vulnerabilities, attack patterns, and defenses.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm">Scale:</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        52K triples • 30K entities • Multiple relations
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm">Applications:</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Threat intelligence • Reasoning • Query answering
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
                  Framework
                </span>
              </div>
            </Card>

            {/* MALOnt */}
            <Card>
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                    MALOnt - Malware Ontology
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A formal ontology for representing malware and threat intelligence concepts. 
                    Provides a structured vocabulary and semantic relationships for describing 
                    malware behaviors, capabilities, and relationships.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm">Coverage:</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Malware taxonomy • Behaviors • Attack patterns
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm">Format:</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        OWL • RDF • JSON-LD
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href="https://github.com/aiforsec/MALOnt"
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
                  Ontology
                </span>
              </div>
            </Card>

            {/* XAI Analysis Code */}
            <Card>
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                    XAI for Security - Analysis Code
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Code and tools for applying explainable AI techniques to security applications. 
                    Includes implementations of FACE, MORPH, and other XAI methods for malware 
                    detection and threat analysis.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-sm">Methods:</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        FACE • MORPH • Concept extraction • Attribution
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href="https://github.com/aiforsec/XAI-Security"
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
                  Code
                </span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Usage Stats */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Community Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <div className="text-4xl font-bold text-navy-600 dark:text-navy-400 mb-2">5</div>
              <div className="text-gray-600 dark:text-gray-400">Open Source Projects</div>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">250+</div>
              <div className="text-gray-600 dark:text-gray-400">Data Samples</div>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-navy-600 dark:text-navy-400 mb-2">52K</div>
              <div className="text-gray-600 dark:text-gray-400">Knowledge Triples</div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
