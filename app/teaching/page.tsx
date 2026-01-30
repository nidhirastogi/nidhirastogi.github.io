import Hero from '@/components/Hero';
import Card from '@/components/Card';

export default function Teaching() {
  return (
    <div>
      <Hero
        title="Teaching"
        subtitle="Data Science & AI Courses at RIT"
        description="Educating the next generation of data scientists and AI security researchers"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Current Courses */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Current Courses (2025)</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                        DSCI 789: Explainable AI
                      </h3>
                      <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-sm">
                        Fall 2025
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Advanced graduate course covering interpretability and explainability in AI systems, 
                    with focus on security applications. Topics include concept extraction, attribution 
                    methods, and faithful explanations.
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-semibold">Topics:</span>
                      <ul className="list-disc list-inside ml-4 mt-1">
                        <li>Concept-based explanations</li>
                        <li>Attention mechanisms</li>
                        <li>Counterfactual explanations</li>
                        <li>XAI for security</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-2">
                        DSCI 633: Foundations of Data Science
                      </h3>
                      <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-sm">
                        Fall 2025
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Core graduate course introducing fundamental concepts in data science including 
                    statistical analysis, machine learning, data visualization, and practical 
                    applications.
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-semibold">Topics:</span>
                      <ul className="list-disc list-inside ml-4 mt-1">
                        <li>Statistical foundations</li>
                        <li>Machine learning algorithms</li>
                        <li>Data preprocessing & visualization</li>
                        <li>Practical applications</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Past Courses */}
            <div className="pt-8">
              <h2 className="text-3xl font-bold mb-6">Past Courses</h2>
              <div className="space-y-4">
                <Card>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-navy-700 dark:text-navy-300 mb-2">
                        DSCI 789: Explainable AI
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Graduate level course on AI interpretability
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm">
                        Fall 2024
                      </span>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-navy-700 dark:text-navy-300 mb-2">
                        DSCI 633: Foundations of Data Science
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Core graduate course in data science
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm">
                        Fall 2023
                      </span>
                      <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm">
                        Fall 2022
                      </span>
                      <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm">
                        Fall 2021
                      </span>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-navy-700 dark:text-navy-300 mb-2">
                        DSCI 602: Applied Data Science II
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Advanced applied data science techniques
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm">
                        Fall 2023
                      </span>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-navy-700 dark:text-navy-300 mb-2">
                        DSCI 601: Applied Data Science I
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Introduction to applied data science
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm">
                        Spring 2023
                      </span>
                      <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm">
                        Spring 2022
                      </span>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-navy-700 dark:text-navy-300 mb-2">
                        Introduction to Cloud Security
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Udacity online course
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm">
                        Online
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Advising */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Student Mentorship</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <div className="text-4xl font-bold text-navy-600 dark:text-navy-400 mb-2">3</div>
              <div className="text-gray-600 dark:text-gray-400">PhD Students</div>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">6+</div>
              <div className="text-gray-600 dark:text-gray-400">MS Students</div>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-bold text-navy-600 dark:text-navy-400 mb-2">11+</div>
              <div className="text-gray-600 dark:text-gray-400">Undergrads</div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
