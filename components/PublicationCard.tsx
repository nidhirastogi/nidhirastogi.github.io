import Card from './Card';

interface PublicationCardProps {
  title: string;
  authors: string;
  venue: string;
  year: number;
  type?: string;
  pdf?: string;
  code?: string;
  slides?: string;
  award?: string;
}

export default function PublicationCard({
  title,
  authors,
  venue,
  year,
  type,
  pdf,
  code,
  slides,
  award,
}: PublicationCardProps) {
  return (
    <Card>
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-navy-700 dark:text-navy-300 leading-tight">
          {title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-400">{authors}</p>
        
        <div className="flex items-center space-x-3">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {venue} {year}
          </span>
          {type && (
            <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
              {type}
            </span>
          )}
        </div>

        {award && (
          <div className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-semibold">
            🏆 {award}
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-2">
          {pdf && (
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-navy-600 hover:bg-navy-700 text-white px-3 py-1 rounded transition-colors"
            >
              PDF
            </a>
          )}
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded transition-colors"
            >
              Code
            </a>
          )}
          {slides && (
            <a
              href={slides}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded transition-colors"
            >
              Slides
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
