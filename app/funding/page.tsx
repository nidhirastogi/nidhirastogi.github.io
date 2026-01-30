import Hero from '@/components/Hero';
import Card from '@/components/Card';

export default function Funding() {
  return (
    <div>
      <Hero
        title="Research Funding"
        subtitle="Supporting Innovation in AI Security"
        description="Our research is supported by internal RIT grants and external funding from federal agencies and industry partners"
      />

      {/* RIT Internal Funding */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">RIT Internal Research Funding</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                RIT Global
              </h3>
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                $35,000
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Explainable AI Framework for Trustworthy Human-Agent Interaction in Autonomous Vehicles
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                RIT ESL Global Cybersecurity Institute (GCI) Faculty Growth Fund
              </h3>
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                $22,000
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Robust and Explainable Models for Reliable Deep Learning in Autonomous Vehicles
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                RIT GCCIS Seed Funding
              </h3>
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                $12,000
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Multi-cloud MLOps Security Education
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                RIT AI Seed Funding
              </h3>
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                $5,000
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Robust and Explainable Models for Reliable Deep Learning in Autonomous Vehicles
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                RIT 2023 AI Seed Fund Award
              </h3>
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                ~$5,000
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                AI Research Initiative
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                RIT Grant Writers Boot Camp Award
              </h3>
              <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                $5,000
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Extracting threat intelligence signals from the Dark Web
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">07/22-06/23</p>
            </Card>
          </div>
        </div>
      </section>

      {/* External Grants */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">External Research Grants</h2>
          
          {/* Active Grants */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-6">Active Grants</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-navy-700 dark:text-navy-300">
                    Toyota Unrestricted Funding
                  </h4>
                  <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded">
                    Active
                  </span>
                </div>
                <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                  $70,000
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Human-AI Collaboration in Explainable Machine Learning for Autonomous Vehicle Cybersecurity
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2025</p>
              </Card>

              <Card>
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-navy-700 dark:text-navy-300">
                    Toyota Unrestricted Funding (Extra)
                  </h4>
                  <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded">
                    Active
                  </span>
                </div>
                <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                  $21,000
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Extra funding for exceptional performance - Concept-Based Explainable Machine Learning
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2024</p>
              </Card>
            </div>
          </div>

          {/* Completed Grants */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-6">Completed Grants</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <h4 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                  Argonne National Lab
                </h4>
                <div className="text-2xl font-bold text-navy-600 dark:text-navy-400 mb-2">
                  $66,000
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">(No F&A)</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  A Digital Cybersecurity Advisor for the Power Industry
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">10/23-09/24</p>
              </Card>

              <Card>
                <h4 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                  NSF SaTC TTP Small (2040209)
                </h4>
                <div className="text-2xl font-bold text-navy-600 dark:text-navy-400 mb-2">
                  ~$395,764 (My share: $9,990)
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  DeFake: Deploying a Tool for Robust Deepfake Detection
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">10/21-09/24</p>
              </Card>

              <Card>
                <h4 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                  INSuRE+C (NSA Collaborative)
                </h4>
                <div className="text-2xl font-bold text-navy-600 dark:text-navy-400 mb-2">
                  ~$66,000
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">(No F&A)</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Emergent (In)Security of Multi-Cloud Environments
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Summer 2023</p>
              </Card>

              <Card>
                <h4 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                  IBM AI Research Collaboration
                </h4>
                <div className="text-2xl font-bold text-navy-600 dark:text-navy-400 mb-2">
                  $200,000
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Trust using Deep Learning in Cybersecurity
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">01/21-12/21</p>
              </Card>

              <Card>
                <h4 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                  IBM AI Research Collaboration
                </h4>
                <div className="text-2xl font-bold text-navy-600 dark:text-navy-400 mb-2">
                  $150,000
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Gathering Threat Intelligence for Trust in Cybersecurity
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">01/20-12/20</p>
              </Card>

              <Card>
                <h4 className="text-xl font-bold text-navy-700 dark:text-navy-300 mb-3">
                  IBM-RPI AIHN
                </h4>
                <div className="text-2xl font-bold text-navy-600 dark:text-navy-400 mb-2">
                  $20 Million total (My share: $150,000)
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Health Empowerment by Analytics, Learning, and Semantics (HEALS)
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">01/17-12/22</p>
              </Card>
            </div>
          </div>

          {/* Pending Grants */}
          <div>
            <h3 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-6">Pending Grants</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-navy-700 dark:text-navy-300">
                    NSF SaTC: EDU: Project Nimbus
                  </h4>
                  <span className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 rounded">
                    Under Submission
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-600 dark:text-gray-400 mb-2">
                  $400,000 (My share: $210,000)
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Navigating AI Security and Data Governance in a Multi-Cloud Environment
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">10/25-09/28</p>
              </Card>

              <Card>
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-navy-700 dark:text-navy-300">
                    NSF REU Site
                  </h4>
                  <span className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 px-2 py-1 rounded">
                    Pending
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Trustworthy AI for Social Good
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Role: Senior Personnel</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Funding Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center">
              <div className="text-4xl font-bold text-navy-600 dark:text-navy-400 mb-2">$1M+</div>
              <div className="text-gray-600 dark:text-gray-400">Total Funding Secured</div>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400">Research Grants</div>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-navy-600 dark:text-navy-400 mb-2">6</div>
              <div className="text-gray-600 dark:text-gray-400">RIT Internal Awards</div>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-400">Students Supported</div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
