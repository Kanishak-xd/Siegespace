export default function Hero() {
    return (
      <section className="z-0 mt-20 sm:mt-20 md:mt-35 xl:mt-35 px-auto xl:px-auto md:px-15 sm:px-auto">
            <div className="mx-auto max-w-screen-lg px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:items-center sm:gap-8">
                    <div className="max-w-lg md:max-w-none flex flex-col justify-center items-start">
                        <p className="font-semibold sm:text-md md:text-xl  lg:text-2xl whitespace-nowrap">
                            I'm Kanishak, an aspiring <span className="intro-gradient">web developer </span>
                        </p>
                        <p className="font-semibold sm:text-md md:text-xl lg:text-2xl whitespace-nowrap">
                            with a passion for UI/UX & graphic design
                        </p>

                        <p className="mt-4 sm:text-md md:text-lg lg:text-[1.35rem] whitespace-nowrap text-neutral-500">
                            Currently studying at <span className="text-black">NIIT University</span><br/>
                            Graduated from <span className="text-black">DAV Public School</span>
                        </p>
                    </div>
    
                    <div className="flex justify-center items-center">
                        <img src="https://res.cloudinary.com/dykzzd9sy/image/upload/v1753401988/boy_h9zs9c.png"
                            className="xl:w-70 xl:h-70 lg:w-60 lg:h-60 md:w-50 md:h-50 w-50 h-50 hidden sm:block" alt="website-boy-mascot"
                        />
                    </div>
                </div>
            </div>
      </section>
    )
}
  