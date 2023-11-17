import { ArrowRightIcon } from "lucide-react";
import { Button } from "ui";

import withYouEverywhereImg from "/with-you-everywhere.webp";
import templateForThatImg from "/template-for-that.webp";
import makeTodoistYoursImg from "/make-todoist-yours.webp";
import connectOtherToolsImg from "/connect-other-tools.webp";
import productivityImg from "/productivity.webp";

function LinksSection() {
  return (
    <>
    {/* Links section intro */}
    <div className="mx-auto p-10 text-center sm:px-28 sm:tracking-wide lg:max-w-5xl lg:text-left xl:max-w-7xl">
        <div className="text-2xl font-semibold sm:text-3xl">
          Delightfully simple and deceptively powerful task management
        </div>
        <div className="py-2 text-lg font-normal text-muted sm:text-xl lg:max-w-2xl">
          30 million+ people organize billions of tasks in Todoist for their
          work, education and personal life.
        </div>
      </div>

      {/* Links grid  */}
      <div className="mx-auto grid grid-cols-1 gap-y-8 px-10 sm:grid-cols-2 sm:gap-x-8 sm:px-16 lg:px-28 xl:max-w-7xl">
        <div className="flex flex-col items-center gap-2 text-center lg:max-w-lg lg:items-start lg:text-left">
          <img
            src={withYouEverywhereImg}
            alt="With you everywhere"
            className="w-24 border"
          />
          <div className="font-medium">With you everywhere</div>
          <div className="font-light tracking-wide text-muted sm:text-lg">
            Use Todoist’s apps, extensions and widgets on any device or
            platform.{" "}
          </div>
          <Button variant="link" className="h-0 gap-1 px-0">
            <ArrowRightIcon className="w-4" />
            Download apps
          </Button>
        </div>

        <div className="flex flex-col items-center gap-2 text-center lg:max-w-lg lg:items-start lg:text-left">
          <img
            src={templateForThatImg}
            alt="With you everywhere"
            className="w-24 border"
          />
          <div className="font-medium">There’s a template for that</div>
          <div className="font-light tracking-wide text-muted sm:text-lg">
            Project templates are available to get you started with whatever’s
            on your plate.
          </div>
          <Button variant="link" className="h-0 gap-1 px-0">
            <ArrowRightIcon className="w-4" />
            Start with templates
          </Button>
        </div>

        <div className="flex flex-col items-center gap-2 text-center lg:max-w-lg lg:items-start lg:text-left">
          <img
            src={makeTodoistYoursImg}
            alt="With you everywhere"
            className="w-24 border"
          />
          <div className="font-medium">Make Todoist yours</div>
          <div className="font-light tracking-wide text-muted sm:text-lg lg:items-start">
            Customize your to-do list with filters, labels, priorities, and
            more.
          </div>
          <Button variant="link" className="h-0 gap-1 px-0">
            <ArrowRightIcon className="w-4" />
            See all features
          </Button>
        </div>

        <div className="flex flex-col items-center gap-2 text-center lg:max-w-lg lg:items-start lg:text-left">
          <img
            src={connectOtherToolsImg}
            alt="With you everywhere"
            className="w-24 border"
          />
          <div className="font-medium">Connect with your other tools</div>
          <div className="font-light tracking-wide text-muted sm:text-lg">
            Link Todoist with your calendar, voice assistant, and 70+ other
            tools.
          </div>
          <Button variant="link" className="h-0 gap-1 px-0">
            <ArrowRightIcon className="w-4" />
            Install integrations
          </Button>
        </div>

        <div className="flex flex-col items-center gap-2 text-center lg:max-w-lg lg:items-start lg:text-left">
          <img
            src={productivityImg}
            alt="With you everywhere"
            className="w-24 border"
          />
          <div className="font-medium">Productivity Methods</div>
          <div className="font-light tracking-wide text-muted sm:text-lg">
            Personal productivity recommendations based on your unique traits
            and strengths.
          </div>
          <Button variant="link" className="h-0 gap-1 px-0">
            <ArrowRightIcon className="w-4" />
            Take the quiz
          </Button>
        </div>
      </div>
    </>
  )
}

export default LinksSection