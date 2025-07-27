export default function ExpCard() {
    return (
        <>
            <a href="" className="max-w-full p-2 sm:p-2 md:p-3 xl:p-4 border-1 border-black rounded-lg hover:scale-101 hover:cursor-pointer shadow-lg dark:bg-neutral-50 dark:text-neutral-900">
                <img src="" alt="experience-achievement-thumbnail" 
                    className="object-cover object-center w-full rounded-md xl:h-64 lg:h-62 md:h-62 sm:h-30 h-30 dark:bg-gray-500" 
                />
                <div>
                    <p className="mt-1 sm:mt-1 md:mt-2 xl:mt-3 text-[0.8rem]/4 sm:text-[0.9rem] md:text-[1.2rem] xl:text-[1.5rem] text-neutral-800 font-semibold tracking-wide">
                        Heading
                    </p>
                    <p className="xl:mt-1 md:mt-1 sm:mt-0 mt-0 dark:text-neutral-600 text-[0.8rem] sm:text-[0.8rem] md:text-1 xl:text-[1.15rem]">
                        Description
                    </p>
                </div>
            </a>
        </>
    );
}
  