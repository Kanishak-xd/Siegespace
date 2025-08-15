import ProjectCard from "./ProjectCard"
import ProjectCardData from "./Projects.json";

export default function Projects() {
  return (
    <section className="z-0 xl:mt-15 md:mt-10 sm:mt-0 px-auto xl:px-auto md:px-15 sm:px-auto bg-background dark:bg-neutral-950">
        <div className="mx-auto max-w-screen-lg py-8 p-5 sm:p-10 md:p-5 lg:p-5 xl:p-5">
            <p className="text-xl sm:text-xl md:text-2xl xl:text-3xl font-bold text-foreground">Featured work</p>
            <div className="mt-4 grid grid-cols-1 grid-rows-4 sm:grid-cols-1 sm:grid-rows-4 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-2 xl:grid-rows-2 gap-8">
                {ProjectCardData.map((project) => (
                  <ProjectCard key={ project.id } projectCardData={ project } />
                ))}
            </div>
        </div>
    </section>
  )
}
