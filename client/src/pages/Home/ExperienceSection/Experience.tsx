import ExpCard from "./ExpCard";

export default function Experience() {
  return (
    <section className="z-0 xl:mt-15 md:mt-10 sm:mt-0 px-auto xl:px-auto md:px-15 sm:px-auto">
        <div className="mx-auto max-w-screen-lg py-8 p-5 sm:p-10 md:p-5 lg:p-5 xl:p-5">
            <p className="text-xl sm:text-xl md:text-2xl xl:text-3xl font-bold">Experience and Achievements</p>
            <div className="mt-4 grid grid-cols-2 grid-rows-3 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-2 gap-4">
                <ExpCard />
                <ExpCard />
                <ExpCard />
                <ExpCard />
                <ExpCard />
                <ExpCard />
            </div>
        </div>
    </section>
  )
}
