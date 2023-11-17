import getMoreDoneImg from "/get-more-done.webp";
import clearYourMindImg from "/clear-your-mind.webp";

function FeaturesSection() {
  return (
    <>
      {/* 1st Features section  */}
      <div className="flex flex-col items-center gap-12 p-8 sm:flex-row sm:justify-center lg:gap-24">
        <div className="text-center sm:max-w-sm sm:text-left lg:max-w-md lg:p-12">
          <div className="my-1 text-sm sm:text-base">Get more done</div>
          {[
            "Add your tasks.",
            "Organize your life.",
            "Achieve more every day.",
          ].map((value, index) => {
            return (
              <div key={index} className="text-2xl font-semibold sm:text-3xl">
                {value}
              </div>
            );
          })}
          <div className="py-4 font-light tracking-wide text-muted sm:text-lg">
            Add tasks like “Read work emails every day at 10am” to fill your
            to-do list in seconds using Todoist’s powerful natural language
            recognition and recurring dates.
          </div>
        </div>
        <img src={getMoreDoneImg} alt="#" className="max-w-xs lg:max-w-xl" />
      </div>

      {/* 2nd Features section  */}
      <div className="flex flex-col items-center gap-12 p-8 sm:flex-row-reverse sm:justify-center lg:gap-24">
        <div className="text-center sm:max-w-sm sm:text-left lg:max-w-md">
          <div className="my-1 text-sm sm:text-base">Clear your mind</div>
          <div className="text-2xl font-semibold sm:text-3xl">
            Reach the mental clarity you've been longing for.
          </div>
          <div className="py-4 font-light tracking-wide text-muted sm:text-lg">
            Your to-do lists are automatically sorted into Today, Upcoming and
            custom Filter views to help you focus on your most important things.
          </div>
        </div>
        <img src={clearYourMindImg} alt="#" className="max-w-xs lg:max-w-xl" />
      </div>
    </>
  );
}

export default FeaturesSection;
