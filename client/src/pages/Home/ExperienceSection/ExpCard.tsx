interface ExperienceData {
    id: number;
    heading: string;
    description: string;
    thumbnail: string;
    detailedContent: string[];
}

interface ExpCardProps {
    experienceCardData: ExperienceData;
    onCardClick: (experience: ExperienceData) => void;
}

export default function ExpCard({ experienceCardData, onCardClick }: ExpCardProps) {
    const { heading, description, thumbnail } = experienceCardData;
    
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onCardClick(experienceCardData);
    };

    return (
        <>
            <div onClick={handleClick}
                className="max-w-full p-2 sm:p-2 md:p-3 xl:p-4 border-1 border-black rounded-lg hover:scale-101 hover:cursor-pointer shadow-lg dark:bg-neutral-50 dark:text-neutral-900"
            >
                <img src={ thumbnail } alt="experience-achievement-thumbnail" 
                    className="object-cover object-center w-full rounded-md xl:h-64 lg:h-62 md:h-62 sm:h-30 h-30 dark:bg-gray-500" 
                />
                <div>
                    <p className="mt-1 sm:mt-1 md:mt-1 xl:mt-2 text-[0.8rem]/4 sm:text-[0.8rem]/4 md:text-[1.2rem]/6 xl:text-[1.5rem]/7 text-neutral-800 font-semibold tracking-wide">
                        { heading }
                    </p>
                    <p className="xl:mt-1 md:mt-2 sm:mt-1 mt-1 dark:text-neutral-600 text-[0.7rem]/3 sm:text-[0.7rem]/3 md:text-[1rem] xl:text-[1.15rem]/6">
                        { description }
                    </p>
                </div>
            </div>
        </>
    );
}
  