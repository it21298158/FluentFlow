import React from "react";

const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:w-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        <img
          src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="absolute top-0 left-0 min-h-full ob"
          alt=""
        />
        <div className="relative z-10 max-w-screen-lg mx-auto grid grid-cols h-full items-center">
          <div className="col-span-6">
            <h1 className="text-red-200 font-extrabold text-7xl mb-8">
              FLUENT FLOW
            </h1>
            <h1 className="text-white font-extrabold text-5xl mb-8">
              Discover a new way to learn English with our interactive tool!
            </h1>
            <p className="text-stone-100 text-base">
              Fluent Flow is developed for University undergraduates to enhance
              their own skills in reading, speaking and writing.
            </p>
            <button
              className="mt-8 text-white uppercase py-4 text-base font-light px-10 border border-white hover:bg-white hover:bg-opacity-10"
              onClick={() => {
                document.getElementById("Second-Section").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Get started
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div id="Second-Section" className="bg-[#f7d0b6] py-20">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <div className="max-w-xl">
            <h2 className="font-black text-sky-950 text-3xl mb-4">
              As emerging leaders in this field, we're dedicated to helping
              students worldwide excel in English!
            </h2>
            <p className="text-base text-sky-950">
              Welcome to Fluent Flow, where learning English is an exciting
              journey!
            </p>
          </div>
          <button
            className="text-sky-950 uppercase py-3 text-base px-10 border border-sky-950 hover:bg-sky-950 hover:bg-opacity-10"
            onClick={() => {
              document.getElementById("Third-Section").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Get started
          </button>
        </div>
      </div>

      {/* Third Section */}
      <div id="Third-Section" className="flex min-h-screen items-center justify-center">
        <div className="relative flex w-full max-w-[100rem] flex-row rounded-xl bg-sky-950 bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-3/5 shrink-0 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img
              src="https://images.pexels.com/photos/4476140/pexels-photo-4476140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6 w-2/5">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              startups
            </h6>
            <h4 className="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">
              Speaking
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-white antialiased">
              Enhance your English skills with our comprehensive speaking
              section. Practice speaking like a native to increase your word
              flow rate, reduce thought and output lag, and boost your
              confidence.<br></br>
              Our interactive platform allows you to practice listening and
              speaking, providing a platform to sharpen your listening and
              speaking skills.
            </p>
            <a href="/speechTranscript">
              <button
                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="flex items-center justify-center">
        <div className="relative flex w-full max-w-[100rem] flex-row rounded-xl bg-sky-950 bg-clip-border text-gray-700 shadow-md">
          {/* Text Section */}
          <div className="p-6 w-2/5">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              startups
            </h6>
            <h4 className="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">
              Reading
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-white antialiased">
              Explore the world of English literature with our reading section,
              designed to cultivate a reading habit and improve your English
              proficiency. Dive into engaging texts and enhance your vocabulary
              and comprehension skills.
              <br></br>
            </p>
            <a href="#">
              <button
                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
          {/* Image Section */}
          <div className="relative m-0 w-3/5 shrink-0 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img
              src="https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Fifth Section */}
      <div className="flex min-h-screen items-center justify-center">
        <div className="relative flex w-full max-w-[100rem] flex-row rounded-xl bg-sky-950 bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 w-3/5 shrink-0 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6 w-2/5">
            <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
              startups
            </h6>
            <h4 className="text-[#f7d0b6] font-black text-5xl leading-snug mb-10">
              Vocabulary
            </h4>
            <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-white antialiased">
              Elevate your vocabulary and enhance your writing with our Synonyms
              Finder tool. Simply enter your sentences and discover a wealth of
              synonyms to enrich your language and improve your writing skills.
            </p>
            <a href="/synonymsGenorator">
              <button
                className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
