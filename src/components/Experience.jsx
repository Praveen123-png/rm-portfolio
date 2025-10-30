function Experience() {
  return (
    <>
      <span className="pl-15 flex items-center my-10">
        <span className="shrink-0 pe-4 text-gray-900 text-5xl font-bold">Experience</span>

        <span className="h-1 rounded-full flex-1 bg-gradient-to-l from-transparent to-[#ffd700]"></span>
      </span>

      <ol
        className="relative md:inline-block hidden py-20 space-y-35 px-20 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-gray-200"
        id="experience"
      >
        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-left group-even:order-last">
            <span className="size-3 shrink-0 rounded-full bg-[#FFD700]"></span>

            <div
              data-aos="fade-up-right"
              data-aos-easing="linear"
              data-aos-duration="300"
            >
              <div className="-mt-2 hover:-translate-y-3 hover:bg-violet-200 transition-all ease-linear bg-violet-100 rounded-2xl p-5">
                <time className="text-sm font-medium text-gray-700">
                  Jan 2022 - May 2022
                </time>

                <h3 className="text-xl font-bold text-gray-900">
                  Full-Stack Developer Intern - Xlicon Business Services Pvt. Ltd.
                </h3>

                <p className="mt-0.5 text-md pt-3 text-gray-700">
                  Worked as a <strong>Full-Stack Developer Intern</strong> at{" "}
                  <strong>Xlicon Business Services</strong>, where I built a web
                  application for a fishing company to streamline inventory tracking and
                  material procurement. Gained hands-on experience in{" "}
                  <strong>C#, .NET, and Visual Basic</strong> while improving backend
                  logic and data management efficiency.
                </p>
              </div>
            </div>
          </div>

          <div aria-hidden="true"></div>
        </li>

        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full bg-[#FFD700]"></span>

            <div data-aos="fade-up-left" data-aos-easing="linear" data-aos-duration="300">
              <div className="-mt-2 hover:-translate-y-3 hover:bg-violet-200 transition-all ease-linear bg-violet-100 rounded-2xl p-5">
                <time className="text-sm font-medium text-gray-700">
                  Aug 2022 - Feb 2025
                </time>

                <h3 className="text-xl font-bold text-gray-900">
                  Software Engineer - Ebitaus Private Limited
                </h3>

                <p className="mt-0.5 text-md pt-3 text-gray-700">
                  Served as a <strong>Software Engineer</strong> at{" "}
                  <strong>Ebitaus Pvt Ltd</strong>, developing modern, responsive web
                  applications using <strong>Angular, Node.js, and PostgreSQL</strong>.
                  Focused on improving performance, usability, and scalability. Led UI/UX
                  enhancements for major products such as
                  <strong> VGN Smart Call</strong> and <strong>School Chimes</strong>,
                  achieving over 70% better client engagement and smoother communication
                  systems.
                </p>
              </div>
            </div>
          </div>

          <div aria-hidden="true"></div>
        </li>

        <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-left group-even:order-last">
            <span className="size-3 shrink-0 rounded-full bg-[#FFD700]"></span>

            <div
              data-aos="fade-up-right"
              data-aos-easing="linear"
              data-aos-duration="300"
            >
              <div className="-mt-2 hover:-translate-y-3 hover:bg-violet-200 transition-all ease-linear bg-violet-100 rounded-2xl p-5">
                <time className="text-sm font-medium text-gray-700">
                  Mar 2025 - Present
                </time>

                <h3 className="text-xl font-bold text-gray-900">
                  Business Development Executive & Channel Partner - Multiple IT Firms
                </h3>

                <p className="mt-0.5 text-md pt-3 text-gray-700">
                  Currently working as a <strong>Business Development Executive</strong>{" "}
                  and
                  <strong> Channel Partner</strong> for multiple{" "}
                  <strong>IT companies</strong>, focusing on strategic partnerships, lead
                  generation, and growth. Also manages an{" "}
                  <strong>import and export business</strong> in fruits and vegetables,
                  expanding cross-industry expertise in technology and trade operations.
                </p>
              </div>
            </div>
          </div>

          <div aria-hidden="true"></div>
        </li>
      </ol>
      {/* for mobile */}
      <ol className="relative md:hidden block px-10 space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200">
        <li className="relative -ms-1.5 flex items-start gap-4">
          <span className="size-3 shrink-0 rounded-full bg-[#FFD700]"></span>

          <div className="-mt-2 ">
            <time className="text-xs/none font-medium text-gray-700">
              Jan 2022 - May 2022
            </time>

            <h3 className="text-lg font-bold text-gray-900">
              Full-Stack Developer Intern - Xlicon Business Services Pvt. Ltd.
            </h3>

            <p className="mt-0.5 text-sm text-gray-700">
              Worked as a <strong>Full-Stack Developer Intern</strong> at{" "}
              <strong>Xlicon Business Services</strong>, where I built a web application
              for a fishing company to streamline inventory tracking and material
              procurement. Gained hands-on experience in{" "}
              <strong>C#, .NET, and Visual Basic</strong> while improving backend logic
              and data management efficiency.
            </p>
          </div>
        </li>

        <li className="relative -ms-1.5 flex items-start gap-4">
          <span className="size-3 shrink-0 rounded-full bg-[#FFD700]"></span>

          <div className="-mt-2">
            <time className="text-xs/none font-medium text-gray-700">
              Aug 2022 - Feb 2025
            </time>

            <h3 className="text-lg font-bold text-gray-900">
              Software Engineer - Ebitaus Private Limited
            </h3>

            <p className="mt-0.5 text-sm text-gray-700">
              Served as a <strong>Software Engineer</strong> at{" "}
              <strong>Ebitaus Pvt Ltd</strong>, developing modern, responsive web
              applications using <strong>Angular, Node.js, and PostgreSQL</strong>.
              Focused on improving performance, usability, and scalability. Led UI/UX
              enhancements for major products such as
              <strong> VGN Smart Call</strong> and <strong>School Chimes</strong>,
              achieving over 70% better client engagement and smoother communication
              systems.
            </p>
          </div>
        </li>

        <li className="relative -ms-1.5 flex items-start gap-4">
          <span className="size-3 shrink-0 rounded-full bg-[#FFD700]"></span>

          <div className="-mt-2">
            <time className="text-xs/none font-medium text-gray-700">
              Mar 2025 – Present
            </time>

            <h3 className="text-lg font-bold text-gray-900">
              Business Development Executive & Channel Partner — Multiple IT Firms
            </h3>

            <p className="mt-0.5 text-sm text-gray-700">
              Currently working as a <strong>Business Development Executive</strong> and
              <strong> Channel Partner</strong> for multiple <strong>IT companies</strong>
              , focusing on strategic partnerships, lead generation, and growth. Also
              manages an <strong>import and export business</strong> in fruits and
              vegetables, expanding cross-industry expertise in technology and trade
              operations.
            </p>
          </div>
        </li>
      </ol>
    </>
  );
}

export default Experience;
