interface ProjectCardData {
  id: number;
  heading: string;
  subheading: string;
  description: string;
  thumbnail: string;
  link: string;
}

export default function ProjectCard({ projectCardData }: { projectCardData: ProjectCardData }) {
  const { heading, subheading, description, thumbnail, link } = projectCardData;
  return (
    <>
        <a href={ link } className="max-w-full p-4 border-1 border-black rounded-xl hover:scale-101 hover:cursor-pointer shadow-lg dark:bg-neutral-50 dark:text-neutral-900">
            <img src={ thumbnail } alt="project-thumbnail" 
              className="object-cover object-center w-full rounded-xl xl:h-82 lg:h-62 md:h-62 sm:h-62 h-42 dark:bg-gray-500" 
            />
            <div className="mt-1 mb-1">
              <p className="text-[1.3rem] sm:text-[1.3rem] md:text-[1.6rem] xl:text-[2rem] font-bold tracking-wide">
                { heading }
              </p>
              <p className="text-[0.9rem] sm:text-[0.9rem] md:text-[1.2rem] xl:text-[1.5rem] text-neutral-800 font-semibold tracking-wide">
                { subheading }
              </p>
            </div>
            <p className="dark:text-neutral-600 text-[0.8rem] sm:text-[0.8rem] md:text-1 xl:text-xl">
              { description }
            </p>
        </a>
    </>
  );
}
