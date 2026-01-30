'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import PublicationCard from '@/components/PublicationCard';

// Sample publications data - in a real app, this would come from a database or markdown files
const publications = [
  {
    id: 1,
    title: 'FACE: Faithful Automatic Concept Extraction from Vision Transformers via Text Encoders',
    authors: 'Nidhi Rastogi, et al.',
    venue: 'NeurIPS',
    year: 2025,
    type: 'Conference',
    topics: ['Explainable AI', 'Machine Learning'],
  },
  {
    id: 2,
    title: 'CTIBench: A Benchmark for Evaluating LLMs in Cyber Threat Intelligence',
    authors: 'Nidhi Rastogi, et al.',
    venue: 'NeurIPS',
    year: 2024,
    type: 'Conference',
    award: 'Spotlight Paper (Top 2%)',
    topics: ['Cyberthreat Intelligence', 'LLMs'],
  },
  {
    id: 3,
    title: 'MORPH: Concept Drift Adaptation Through Model Morphing for Malware Detection',
    authors: 'Nidhi Rastogi, et al.',
    venue: 'NDSS',
    year: 2024,
    type: 'Conference',
    award: 'Best Poster & Presentation',
    topics: ['Malware Detection', 'Machine Learning'],
  },
  {
    id: 4,
    title: 'Defending Multi-Cloud Applications from Access Control Vulnerabilities',
    authors: 'Nidhi Rastogi, et al.',
    venue: 'SACMAT',
    year: 2024,
    type: 'Conference',
    topics: ['Cloud Security', 'Access Control'],
  },
  {
    id: 5,
    title: 'TINKER: A Framework for Building and Deploying Knowledge Graphs',
    authors: 'Nidhi Rastogi, et al.',
    venue: 'IEEE S&P Workshop',
    year: 2022,
    type: 'Workshop',
    topics: ['Knowledge Graphs', 'Cyberthreat Intelligence'],
  },
  {
    id: 6,
    title: 'CyNER: A Named Entity Recognition Library for Cybersecurity',
    authors: 'Nidhi Rastogi, et al.',
    venue: 'ACM CCS Workshop',
    year: 2023,
    type: 'Workshop',
    topics: ['NLP', 'Cyberthreat Intelligence'],
  },
  {
    id: 7,
    title: 'LADDER: A Large-Scale Dataset for Android Malware Detection',
    authors: 'Nidhi Rastogi, et al.',
    venue: 'ACSAC',
    year: 2023,
    type: 'Conference',
    award: 'Best Poster & Presentation',
    topics: ['Malware Detection', 'Datasets'],
  },
  {
    id: 8,
    title: 'Explainable Machine Learning for Autonomous Vehicle Security',
    authors: 'Nidhi Rastogi, et al.',
    venue: 'IEEE VehicleSec',
    year: 2023,
    type: 'Workshop',
    topics: ['Explainable AI', 'Autonomous Vehicles'],
  },
];

const venues = ['All', 'NeurIPS', 'NDSS', 'IEEE S&P', 'CCS', 'USENIX Security', 'ACSAC', 'SACMAT'];
const years = ['All', '2025', '2024', '2023', '2022', '2021', '2020'];
const topics = ['All', 'Cyberthreat Intelligence', 'Explainable AI', 'Malware Detection', 'Machine Learning', 'Cloud Security'];

export default function Publications() {
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
        title="Publications"
        subtitle="60+ Peer-Reviewed Papers"
        description="Research published at top-tier venues including NeurIPS, IEEE S&P, CCS, USENIX Security, NDSS, and ACSAC"
      />

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div>
              <input
                type="text"
                placeholder="Search publications by title or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-navy-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Venue
                </label>
                <select
                  value={selectedVenue}
                  onChange={(e) => setSelectedVenue(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                >
                  {venues.map((venue) => (
                    <option key={venue} value={venue}>
                      {venue}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Year
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Topic
                </label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                >
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400">
              Showing {filteredPublications.length} of {publications.length} publications
            </div>
          </div>

          {/* Publications List */}
          <div className="space-y-6">
            {filteredPublications.map((pub) => (
              <PublicationCard
                key={pub.id}
                title={pub.title}
                authors={pub.authors}
                venue={pub.venue}
                year={pub.year}
                type={pub.type}
                award={pub.award}
              />
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No publications found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Publication Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-600 dark:text-navy-400 mb-2">60+</div>
              <div className="text-gray-600 dark:text-gray-400">Total Publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400">A* Venues</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-navy-600 dark:text-navy-400 mb-2">5</div>
              <div className="text-gray-600 dark:text-gray-400">Best Paper Awards</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">1</div>
              <div className="text-gray-600 dark:text-gray-400">Spotlight Paper</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
