function Hero() {
  return (
    <>
      <div className="bp h-[100vh] grid grid-cols-1 md:grid-cols-2 text-white [clip-path:polygon(0_0,100%_0,100%_90%,50%_100%,0_90%)]">
        {/* content-side */}
        <div className="pt-[8vh] pl-10 flex flex-col justify-center gap-10">
          <h2 className="pl-4 text-4xl font-bold border-l-4 border-white text-g">
            I’m Rakesh Mahendren
          </h2>
          <p className="text-xl">
            Engineer by profession, entrepreneur by vision, and exporter by
            passion, I specialize in driving innovation, business growth, and
            international trade. With expertise in engineering solutions, global
            market expansion, and export operations, I help businesses scale and
            connect with global opportunities
          </p>
        </div>
        {/* image side */}
        <div className="flex items-end justify-center ">
          <img
            src="/images/heropic.png"
            alt="HERO"
            className="h-[90vh] relative z-10"
          />
          <div className="bg-[#BC96E6] absolute top-[40%] z-2 opacity-40 h-[400px] w-[400px] rounded-full"></div>
        </div>
        {/* <svg
          class="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="white"
            d="M0,224 C480,320 960,128 1440,224 L1440,320 L0,320 Z
M0,224 C480,320 960,128 1440,224 L1440,320 L0,320 Z
"
          ></path>
        </svg> */}
      </div>
    </>
  );
}

export default Hero;
