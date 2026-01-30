'use client';

import { useState } from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import PublicationCard from '@/components/PublicationCard';
import AI4SECLogo from '@/components/AI4SECLogo';
import { publications, venues, years, topics } from '@/data/publications';

export default function ResearchPublications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVenue, setSelectedVenue] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      searchQuery === '' ||
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesVenue = selectedVenue === 'All' || pub.venue === selectedVenue;
    const matchesYear = selectedYear === 'All' || pub.year.toString() === selectedYear;
    const matchesTopic = selectedTopic === 'All' || pub.topics.includes(selectedTopic);

    return matchesSearch && matchesVenue && matchesYear && matchesTopic;
  });

  return (
    <div>
      <Hero
        title="Research & Publications"
        subtitle="AI4SEC Lab - AI Security & Cyberthreat Intelligence"
        description="Developing innovative solutions at the intersection of artificial intelligence, cybersecurity, and data science"
      />

      {/* AI4SEC Branding */}
      <section className="py-8 bg-gradient-to-r from-navy-50 to-teal-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <AI4SECLogo width={60} height={60} />
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300">AI4SEC Lab</h2>
              <p className="text-gray-600 dark:text-gray-300">Artificial Intelligence for Security Research</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Cyberthreat Intelligence */}
            <Card>
              <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-4">
                🔬 Cyberthreat Intelligence
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Building automated systems for extracting, analyzing, and operationalizing cyberthreat 
                intelligence from unstructured data sources.
              </p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-semibold">Key Projects:</span>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600 dark:text-gray-300">
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
                🤖 Explainable AI (XAI)
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Making AI decisions transparent, interpretable, and trustworthy for security-critical 
                applications through faithful concept extraction and explanation methods.
              </p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-semibold">Key Projects:</span>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600 dark:text-gray-300">
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
                📱 Android Malware Detection
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Developing machine learning approaches for detecting and classifying Android malware 
                using threat intelligence reports and behavioral analysis.
              </p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-semibold">Key Contributions:</span>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                    <li>LADDER - Android malware dataset (250+ CTI reports)</li>
                    <li>ML-based malware classification</li>
                    <li>Behavioral analysis for mobile security</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Multi-Cloud Security */}
            <Card>
              <h2 className="text-2xl font-bold text-navy-700 dark:text-navy-300 mb-4">
                ☁️ Multi-Cloud Security
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Developing defense mechanisms for applications deployed across multiple cloud 
                providers with complex security requirements.
              </p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-semibold">Key Work:</span>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Defending Multi-Cloud Applications (SACMAT 2024)</li>
                    <li>IBM AI Research collaboration: $200,000 + $150,000</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Publications</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            60+ peer-reviewed papers at top-tier venues including NeurIPS, IEEE S&P, CCS, USENIX Security, NDSS, and ACSAC
          </p>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div>
              <input
                type="text"
                placeholder="Search publications by title or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <select
                value={selectedVenue}
                onChange={(e) => setSelectedVenue(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-navy-500"
              >
                <option value="All">All Venues</option>
                {venues.map((venue) => (
                  <option key={venue} value={venue}>
                    {venue}
                  </option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-navy-500"
              >
                <option value="All">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year.toString()}>
                    {year}
                  </option>
                ))}
              </select>

              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-navy-500"
              >
                <option value="All">All Topics</option>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-300">
              Showing {filteredPublications.length} of {publications.length} publications
            </p>
          </div>

          {/* Publications List */}
          <div className="space-y-6">
            {filteredPublications.map((pub, index) => (
              <PublicationCard key={index} {...pub} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
