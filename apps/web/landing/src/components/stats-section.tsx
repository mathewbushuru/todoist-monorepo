import thirtyMillionImg from "/30million.avif";
import billionImg from "/billion.avif";
import countriesImg from "/countries.avif";
import proUsersImg from "/prousers.avif";

function StatsSection() {
  return (
    <>
    {/* Stats  */}
    <div className="mx-auto my-16 flex flex-col p-8 text-center sm:px-28 sm:tracking-wide lg:max-w-5xl lg:flex-row lg:text-left xl:max-w-7xl">
        <div className="">
          <div className="mx-auto text-2xl font-semibold sm:max-w-md sm:text-3xl">
            A task manager you can trust for life
          </div>
          <div className="mx-auto mt-2 font-light tracking-wide text-muted sm:mt-4 sm:max-w-md sm:text-lg">
            We've been building Todoist for 16 years and 117 days.{" "}
            <span className="text-link">We're in it for the long haul.</span>
          </div>
        </div>
        {/* Stats grid  */}
        <div className="mx-auto mt-8 grid grid-cols-2 gap-x-12 gap-y-8 px-2 sm:px-16 lg:grid-cols-4 lg:gap-x-28 lg:px-28 xl:max-w-7xl ">
          <div className="flex flex-col items-center text-center lg:min-w-max ">
            <img
              src={thirtyMillionImg}
              alt="With you everywhere"
              className="w-24 lg:w-32"
            />
            <div className="mt-4 font-medium">30+ million</div>
            <div className="font-light tracking-wide text-muted sm:text-lg">
              app downloads
            </div>
          </div>
          <div className="flex flex-col items-center text-center lg:min-w-max">
            <img
              src={billionImg}
              alt="With you everywhere"
              className="w-24 lg:w-32"
            />
            <div className="mt-4 font-medium">2 billion+</div>
            <div className="font-light tracking-wide text-muted sm:text-lg">
              tasks completed
            </div>
          </div>
          <div className="flex flex-col items-center text-center lg:min-w-max lg:max-w-lg">
            <img
              src={countriesImg}
              alt="With you everywhere"
              className="w-24 lg:w-32"
            />
            <div className="mt-4 font-medium">160+ countries</div>
            <div className="font-light tracking-wide text-muted sm:text-lg">
              worldwide
            </div>
          </div>
          <div className="flex flex-col items-center text-center lg:min-w-max lg:max-w-lg">
            <img
              src={proUsersImg}
              alt="With you everywhere"
              className="w-24 lg:w-32"
            />
            <div className="mt-4 font-medium">1 million+</div>
            <div className="font-light tracking-wide text-muted sm:text-lg">
              Pro users
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StatsSection