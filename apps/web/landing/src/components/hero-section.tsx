import { Button } from "ui";

import heroImg from "/hero.avif";

function HeroSection() {
  return (
    <div className="mx-auto flex flex-col items-center gap-4 pt-36 text-center sm:pt-44 lg:pt-52 xl:max-w-7xl">
        <h1 className="max-w-xs px-4 text-4xl font-semibold sm:max-w-lg sm:px-0 sm:text-5xl sm:font-bold sm:leading-tight sm:tracking-wide lg:max-w-xl lg:text-6xl lg:leading-tight ">
          Organize your work and life, finally.
        </h1>
        <div className="px-6 text-lg tracking-wide sm:max-w-lg sm:text-2xl sm:leading-normal ">
          Become focused, organized, and calm with Todoist. The world's #1 task
          manager and to-do list app.
        </div>
        <Button className="mb-2 mt-2 font-normal tracking-wide sm:mb-0 sm:mt-4 sm:h-12 ">
          Start for free
        </Button>
        <img src={heroImg} alt="hero image" className="lg:max-w-5xl" />
      </div>
  )
}

export default HeroSection