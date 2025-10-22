function About() {
  return (
    // <div className="my-200">
    //   <div className="md:px-30 sm:px-20 px-5 lg:space-y-7 space-y-4">
    //     <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
    //       <div className="p-4 bg-[#d8bfff] rounded-xl lg:col-span-2">
    //         <p className=" py-1 px-2 text-xs border border-black rounded-full w-fit">
    //           • About me
    //         </p>
    //         <h4 className="mt-4 text-3xl">
    //           Hi 👋, I am <span className="font-semibold text-p">Rakesh</span> a passionate
    //           Software Developer.
    //         </h4>
    //         passionate about building scalable, efficient, and user-focused digital
    //         products. I turn ideas into clean, functional code. out.
    //       </div>

    //       <div className="rounded-xl flex flex-col justify-center items-center text-xl bg-gray-300 p-4">
    //         <span className="text-6xl font-bold text-[#b730fb]">4+</span>
    //         <p>years of experience</p>
    //       </div>

    //       <div className="rounded-xl flex flex-col justify-center items-center text-xl bg-gray-300">
    //         <span className="text-4xl font-semibold text-[#b730fb]">Full Stack</span>
    //         <p>Developer</p>
    //       </div>
    //     </div>

    //     <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
    //       <div className="h-32 rounded-xl bg-gray-300 lg:col-span-2"></div>

    //       <div className="h-32 rounded-xl bg-gray-300"></div>
    //     </div>
    //   </div>
    // </div>
    <div className="mt-10">
      <div className="">
        {/* <div className="bg-gradient-to-br from-[#210b2c] to-[#5c2a72] w-full rounded-2xl p-2 lg:p-10"> */}
        <div className="w-full p-2 lg:p-10 bg-[url('/images/waves-2.svg')] bg-bottom bg-cover">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            {/* <div className=" p-5 lg:pb-20 rounded-xl text-[#210b2c] flex justify-center items-end">
              <p>Passionate about turning ideas into impactful digital experiences.</p>
            </div> */}

            <div className="p-5 rounded-xl lg:col-span-2 text-[#210b2c]">
              <h2 className="text-5xl font-semibold">
                Let's know more about me
              </h2>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-10">
                <div className="p-5 pl-0 rounded-xl text-[#210b2c]">
                  <p className="text-lg">This is me</p>
                </div>

                <div className="p-5 pl-0 rounded-xl lg:col-span-2 text-gray-900">
                  <p className="">
                    I'm a{" "}
                    <span className="font-semibold text-xl">
                      versatile professional
                    </span>{" "}
                    with <span className="font-semibold text-xl">3+</span> years
                    of experience in IT software development and digital
                    marketing sales. To combine my{" "}
                    <span className="font-semibold text-xl">
                      technical and marketing expertise
                    </span>{" "}
                    to deliver business-driven digital solutions -{" "}
                    <span className="font-semibold text-xl">
                      building systems that not only perform but also sell.
                    </span>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 mt-10">
                <div className=" rounded space-y-5 mb-10">
                  <h2 className="text-gray-900">(01)</h2>
                  <hr className="w-[80%] mt-2 text-black" />

                  <h2 className="text-[#210b2c] text-2xl">
                    Professional Experience
                  </h2>
                </div>

                <div className=" rounded space-y-5 mb-10">
                  <h2 className="text-gray-900">(02)</h2>
                  <hr className="w-[80%] mt-2 text-black" />

                  <h2 className="text-[#210b2c] text-2xl">
                    Software Development
                  </h2>

                  <h2 className="text-[#210b2c] text-2xl">
                    Software Development
                  </h2>

                  <p className="text-gray-900">
                    Building scalable web applications with Angular and Node.js,
                    delivering responsive UIs, seamless APIs, and efficient
                    backend integrations through collaborative development and
                    clean coding practices.
                  </p>
                </div>

                <div className=" rounded space-y-5 mb-10">
                  <h2 className="text-gray-900">(03)</h2>
                  <hr className="w-[80%] mt-2 text-black" />
                  <h2 className="text-[#210b2c] text-2xl">Freelance works</h2>
                  <p className="text-gray-900">
                    Alongside my career, I freelance as a branding and
                    advertising consultant, helping businesses craft impactful
                    digital identities that connect with audiences and drive
                    growth.
                  </p>
                </div>

                <div className=" rounded space-y-5 mb-10">
                  <h2 className="text-gray-900">(04)</h2>
                  <hr className="w-[80%] mt-2 text-black" />
                  <h2 className="text-[#210b2c] text-2xl">My key focus</h2>
                  <p className="text-gray-900">
                    Specializing in personal branding, creative direction, and
                    social media growth — helping professionals build a strong
                    online identity through impactful design, targeted ads, and
                    strategic digital consulting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/waves.svg" alt="" className="w-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

export default About;
