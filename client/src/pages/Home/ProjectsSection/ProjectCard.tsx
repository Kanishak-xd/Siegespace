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
        <a href={ link } className="max-w-full p-4 border-1 border-black rounded-xl hover:scale-101 hover:cursor-pointer shadow-lg dark:bg-neutral-900 dark:text-white">
            <img src={ thumbnail } alt="project-thumbnail" 
              className="object-cover object-center w-full rounded-xl xl:h-82 lg:h-62 md:h-62 sm:h-62 h-42" 
            />
            <div className="mt-1 mb-1">
              <div className="flex justify-start items-center">
                <p className="text-[1.3rem] sm:text-[1.3rem] md:text-[1.6rem] xl:text-[2rem] font-bold tracking-wide text-foreground">
                  { heading }
                </p>
                <img src="https://cdn-icons-png.flaticon.com/512/60/60947.png" alt="top-right-icon" className="h-3 w-3 ml-1 md:h-3 md:w-3 xl:h-4 xl:w-4" />
              </div>
              <p className="text-[0.9rem] sm:text-[0.9rem] md:text-[1.2rem] xl:text-[1.5rem] text-neutral-800 dark:text-neutral-400 font-semibold tracking-wide">
                { subheading }
              </p>
            </div>
            <p className="text-[0.8rem] sm:text-[0.8rem] md:text-1 xl:text-[1.15rem] text-neutral-800 dark:text-neutral-400">
              { description }
            </p>
        </a>
    </>
  );
}
