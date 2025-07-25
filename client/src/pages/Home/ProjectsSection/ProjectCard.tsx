export default function ProjectCard() {
  return (
    <>
        <div className="max-w-full p-4 border-1 border-black rounded-xl hover:scale-101 hover:cursor-pointer shadow-lg dark:bg-neutral-50 dark:text-neutral-900">
            <img src="" alt="project-thumbnail" className="object-cover object-center w-full rounded-xl h-82 dark:bg-gray-500" />
            <div className="mt-1 mb-1">
                <h2 className="text-[2rem] font-bold tracking-wide">PROJECT HEADING</h2>
                <h3 className="text-2xl text-neutral-800 font-semibold tracking-wide">Project subheading</h3>
            </div>
            <p className="dark:text-neutral-600 text-xl">Some additional text about the project, maximum two lines,
                otherwise it will overflow</p>
        </div>
    </>
  );
}
