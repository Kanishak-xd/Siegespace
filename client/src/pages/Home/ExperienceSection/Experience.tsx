import { useState } from "react";
import ExpCard from "./ExpCard";
import ExpModal from "./ExpModal";
import ExperienceData from "./Experience.json"

// Import the interface from ExpCard to ensure type consistency
interface ExperienceData {
    id: number;
    heading: string;
    description: string;
    thumbnail: string | string[];
    detailedContent: string[];
}

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (experience: ExperienceData) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  return (
    <section className="z-0 xl:mt-15 md:mt-10 sm:mt-0 px-auto xl:px-auto md:px-15 sm:px-auto bg-background dark:bg-neutral-950">
        <div className="mx-auto max-w-screen-lg py-8 p-5 sm:p-10 md:p-5 lg:p-5 xl:p-5">
            <p className="text-xl sm:text-xl md:text-2xl xl:text-3xl font-bold text-foreground">Experience and Achievements</p>
            <div className="mt-4 grid grid-cols-2 grid-rows-3 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-2 gap-4">
                {ExperienceData.map((experience) => (
                    <ExpCard 
                        key={experience.id} 
                        experienceCardData={experience}
                        onCardClick={handleCardClick}
                    />
                ))}
            </div>
        </div>
        
        {isModalOpen && selectedExperience && (
            <ExpModal 
                experience={selectedExperience}
                onClose={handleCloseModal} 
            />
        )}
    </section>
  )
}
