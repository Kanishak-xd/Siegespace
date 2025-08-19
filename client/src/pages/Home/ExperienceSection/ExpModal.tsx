import { useState } from 'react';

interface ExperienceData {
    id: number;
    heading: string;
    description: string;
    thumbnail: string | string[];
    detailedContent: string[];
}

interface ExpModalProps {
    experience: ExperienceData;
    onClose: () => void;
}

export default function ExpModal({ experience, onClose }: ExpModalProps) {
    const { heading, detailedContent, thumbnail } = experience;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevious = () => {
        if (Array.isArray(thumbnail)) {
            setCurrentImageIndex((prev) => 
                prev === 0 ? thumbnail.length - 1 : prev - 1
            );
        }
    };

    const handleNext = () => {
        if (Array.isArray(thumbnail)) {
            setCurrentImageIndex((prev) => 
                prev === thumbnail.length - 1 ? 0 : prev + 1
            );
        }
    };

    const hasMultipleImages = Array.isArray(thumbnail) && thumbnail.length > 1;

    return (
      <div className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div className="w-full max-w-md rounded-lg bg-white dark:bg-neutral-900 p-6 shadow-lg max-h-[90vh] overflow-y-auto">
          <div className="flex items-start justify-between">
            <h2 id="modalTitle" className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
              {heading}
            </h2>
            <button 
                type="button" 
                aria-label="Close"
                onClick={onClose}
                className="-me-4 -mt-4 rounded-md p-2 text-gray-400 dark:text-white transition-colors hover:bg-gray-200 dark:hover:bg-neutral-800  hover:text-gray-600 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
  
          <div className="mt-4 text-pretty text-gray-700 dark:text-gray-300">
            {detailedContent.map((paragraph, index) => (
              <p key={index} className="mb-2">
                {paragraph}
              </p>
            ))}
            {thumbnail && (
              <div className="mt-6 relative">
                {Array.isArray(thumbnail) ? (
                  <div className="relative">
                    <img
                      src={thumbnail[currentImageIndex]}
                      alt={`${heading} - Image ${currentImageIndex + 1}`}
                      className="w-full rounded-lg object-cover"
                    />
                    {hasMultipleImages && (
                      <>
                        <button
                          onClick={handlePrevious}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all hover:scale-110"
                          aria-label="Previous image"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={handleNext}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all hover:scale-110"
                          aria-label="Next image"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                          {currentImageIndex + 1} / {thumbnail.length}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <img
                    src={thumbnail}
                    alt={heading}
                    className="w-full rounded-lg object-cover"
                  />
                )}
              </div>
            )}
          </div>
  
          <footer className="mt-6 flex justify-end gap-2">
            <button 
                type="button" 
                onClick={onClose}
                className="rounded bg-gray-100 dark:bg-neutral-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-400 transition-colors hover:bg-gray-200 dark:hover:bg-neutral-700"
            >
              Close
            </button>
          </footer>
        </div>
      </div>
    );
  }