export default function Hero() {
    return (
      <section className="z-0 mt-10">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 md:items-center md:gap-8">
                <div className="max-w-lg md:max-w-none ">
                    <p className="font-semibold text-xl sm:text-xs md:text-xl  lg:text-2xl whitespace-nowrap">
                        I'm Kanishak, an aspiring <span className="intro-gradient">web developer </span>
                    </p>
                    <p className="font-semibold text-xl sm:text-xs md:text-xl lg:text-2xl whitespace-nowrap">
                        with a knack for UI/UX & graphic design
                    </p>

                    <p className="mt-4 text-xl sm:text-xs md:text-xl lg:text-2xl whitespace-nowrap">
                        Currently studying at NIIT University<br/>
                        Graduated from DAV Public School
                    </p>
                </div>
  
                <div className="flex justify-center items-center">
                    <img src="https://res.cloudinary.com/dykzzd9sy/image/upload/v1753401988/boy_h9zs9c.png"
                        className="w-75 h-75" alt="website-boy-mascot"
                    />
                </div>
              </div>
          </div>
      </section>
    )
}
  