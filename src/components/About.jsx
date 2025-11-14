function About() {
  return (
    <div className="mt-10" id="about">
      <div className="">
        <div className="w-full p-2 lg:p-10 bg-[url('/images/waves-2.svg')] bg-bottom bg-cover">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div className="p-5 rounded-xl lg:col-span-2 text-[#210b2c]">
              <div className="flex justify-center items-center gap-5">
                <h2
                  className="text-5xl font-semibold"
                  data-aos="fade-up"
                  data-aos-duration="300"
                >
                  Let's know more about me
                </h2>
                <span className="h-1 rounded-full flex-1 bg-gradient-to-l from-transparent to-[#ffd700]"></span>
              </div>
              <div className="mt-10">
                {/* <div className="p-5 pl-0 rounded-xl text-[#210b2c]">
                  <p className="text-2xl font-bold ">This is Rakesh</p>
                </div> */}

                <div
                  className="p-5 pl-0 rounded-xl lg:col-span-3 text-gray-900"
                  data-aos="fade-right"
                  data-aos-duration="300"
                >
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
                <div
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="300"
                >
                  <div className="rounded space-y-5 mb-10  hover:-translate-y-3 transition-all ease-linear">
                    {/* <h2 className="text-gray-900">(01)</h2> */}
                    {/* <hr className="w-[80%] mt-2 text-black" /> */}

                    <h2 className="text-[#210b2c] text-2xl">
                      Professional Experience
                    </h2>

                    <p className="text-gray-900">
                      Boosting business growth through strategic marketing,
                      client engagement, and performance-driven campaigns -
                      enhancing brand visibility and lasting relationships.
                    </p>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-easing="linear"
                  data-aos-duration="300"
                >
                  <div
                    className="rounded space-y-5 mb-10  hover:-translate-y-3 transition-all ease-linear"
                    data-aos-duration="300"
                  >
                    {/* <h2 className="text-gray-900">(02)</h2> */}
                    {/* <hr className="w-[80%] mt-2 text-black" /> */}

                    <h2 className="text-[#210b2c] text-2xl">
                      Software Development
                    </h2>

                    <p className="text-gray-900">
                      Building scalable web applications with Angular and
                      Node.js, delivering responsive UIs, seamless APIs, and
                      efficient backend integrations through collaborative
                      development and clean coding practices.
                    </p>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-delay="300"
                  data-aos-duration="300"
                >
                  <div className="rounded space-y-5 mb-10  hover:-translate-y-3 transition-all ease-linear">
                    {/* <h2 className="text-gray-900">(03)</h2> */}
                    {/* <hr className="w-[80%] mt-2 text-black" /> */}
                    <h2 className="text-[#210b2c] text-2xl">Freelance works</h2>
                    <p className="text-gray-900">
                      Alongside my career, I freelance as a branding and
                      advertising consultant, helping businesses craft impactful
                      digital identities that connect with audiences and drive
                      growth.
                    </p>
                  </div>
                </div>
                <div
                  className=""
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-delay="300"
                  data-aos-duration="300"
                >
                  <div className="rounded space-y-5 mb-10  hover:-translate-y-3 transition-all ease-linear">
                    {/* <h2 className="text-gray-900">(04)</h2> */}
                    {/* <hr className="w-[80%] mt-2 text-black" /> */}
                    <h2 className="text-[#210b2c] text-2xl">My key focus</h2>
                    <p className="text-gray-900">
                      Specializing in personal branding, creative direction, and
                      social media growth — helping professionals build a strong
                      online identity through impactful design, targeted ads,
                      and strategic digital consulting.
                    </p>
                  </div>
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
