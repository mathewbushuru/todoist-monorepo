import {
  ChevronRightIcon,
  TwitterIcon,
  YoutubeIcon,
  FacebookIcon,
  InstagramIcon,
} from "lucide-react";

function Footer() {
  return (
    <>
      {/* Footer  */}
      <div className=" bg-footer pb-8 pl-14 pt-8 tracking-tight text-popover-foreground sm:flex sm:justify-between ">
        <div className="max-w-xs pr-12 text-lg leading-6 tracking-normal sm:pt-8">
          Join millions of people who organize work and life with Todoist.
        </div>

        <div>
          <div className="pb-4 pt-8 font-bold">Features</div>
          <div className="flex items-center justify-between pb-2 pr-10">
            <span className="">How it works</span>
            <ChevronRightIcon className="w-5 sm:hidden" />
          </div>
          <div className="flex items-center justify-between pb-2 pr-10">
            <span className="">For Teams</span>
            <ChevronRightIcon className="w-5 sm:hidden" />
          </div>
          <div className="flex items-center justify-between pb-2 pr-10">
            <span className="">Pricing</span>
            <ChevronRightIcon className="w-5 sm:hidden" />
          </div>
          <div className="flex items-center justify-between border-b pb-8 pr-10 sm:border-b-0">
            <span className="">Templates</span>
            <ChevronRightIcon className="w-5 sm:hidden" />
          </div>
        </div>

        <div>
          <div className="pb-4 pt-8 font-bold">Resources</div>
          <div className="flex items-center justify-between pb-2 pr-10">
            <span className="">Download Apps</span>
            <ChevronRightIcon className="w-5 sm:hidden" />
          </div>
          <div className="flex items-center justify-between pb-2 pr-10">
            <span className="">Help Center</span>
            <ChevronRightIcon className="w-5 sm:hidden" />
          </div>
          <div className="flex items-center justify-between pb-2 pr-10">
            <span className="">Productivity Methods</span>
            <ChevronRightIcon className="w-5 sm:hidden" />
          </div>
          <div className="flex items-center justify-between pb-2 pr-10">
            <span className="">Integrations</span>
            <ChevronRightIcon className="w-5 sm:hidden" />
          </div>
          <div className="flex items-center justify-between pb-2 pr-10">
            <span className="">Channel Partners</span>
            <ChevronRightIcon className="w-5 sm:hidden" />
          </div>
          <div className="flex items-center justify-between pb-2 pr-10">
            <span className="">Developer API</span>
            <ChevronRightIcon className="w-5 sm:hidden" />
          </div>
          <div className="flex items-center justify-between border-b pb-10 pr-10 sm:border-b-0">
            <span className="">Status</span>
            <ChevronRightIcon className="w-5 sm:hidden" />
          </div>
        </div>

        <div>
          <div className="pb-4 pt-8 font-bold">Company</div>
          <div className="flex items-center justify-between pb-2 pr-10">
            <span className="">About Us</span>
            <ChevronRightIcon className="w-5 sm:hidden" />
          </div>
          <div className="flex items-center justify-between pb-2 pr-10">
            <span className="">Careers</span>
            <ChevronRightIcon className="w-5 sm:hidden" />
          </div>
          <div className="flex items-center justify-between pb-2 pr-10">
            <span className="">Blog</span>
            <ChevronRightIcon className="w-5 sm:hidden" />
          </div>
          <div className="flex items-center justify-between pb-2 pr-10">
            <span className="">Press</span>
            <ChevronRightIcon className="w-5 sm:hidden" />
          </div>
          <div className="flex items-center justify-between border-b pb-10 pr-10 sm:border-b-0">
            <span className="">Twist</span>
            <ChevronRightIcon className="w-5 sm:hidden" />
          </div>
        </div>

        <div className="flex gap-6 pb-4 pt-8 sm:flex-col sm:pr-10 lg:pr-14">
          <TwitterIcon className="w-6" />
          <YoutubeIcon className="w-6" />
          <FacebookIcon className="w-6" />
          <InstagramIcon className="w-6" />
        </div>
      </div>
    </>
  );
}

export default Footer;
