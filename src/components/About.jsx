function About() {
  return (
    <div className="mt-10">
      <div className="md:px-30 sm:px-20 px-5 lg:space-y-7 space-y-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          <div className="p-4 bg-[#d8bfff] rounded-xl lg:col-span-2">
            <p className=" py-1 px-2 text-xs border border-black rounded-full w-fit">
              • About me
            </p>
            <h4 className="mt-4 text-3xl">
              Hi 👋, I am <span className="font-semibold text-p">Rakesh</span> a
              passionate Software Developer.
            </h4>
            passionate about building scalable, efficient, and user-focused
            digital products. I turn ideas into clean, functional code. out.
          </div>

          <div className="rounded-xl flex flex-col justify-center items-center text-xl bg-gray-300 p-4">
            <span className="text-6xl font-bold text-[#b730fb]">4+</span>
            <p>years of experience</p>
          </div>

          <div className="rounded-xl flex flex-col justify-center items-center text-xl bg-gray-300">
            <span className="text-4xl font-semibold text-[#b730fb]">
              Software
            </span>
            <p>Engineer</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="h-32 rounded-xl bg-gray-300 lg:col-span-2"></div>

          <div className="h-32 rounded-xl bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
