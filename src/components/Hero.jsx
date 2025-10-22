function Hero() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#210b2c] to-[#5c2a72] h-[100vh] grid grid-cols-1 md:grid-cols-2 text-white">
        {/* content-side */}
        <div className="pt-[8vh] pl-10 flex flex-col justify-center gap-10">
          <h2 className="pl-4 lg:text-4xl md:text-3xl text-2xl font-bold border-l-4 border-white text-g">
            I’m Rakesh Mahendren
          </h2>
          <p className="md:text-xl text-sm md:inline-block">
            <span className="tg font-bold">Engineer</span> by profession,
            <span className="tg font-bold"> Entrepreneur</span> by vision, and
            <span className="tg font-bold"> Exporter</span> by passion — I drive
            innovation, business growth, and global trade. With expertise in
            engineering solutions and international markets, I help businesses
            expand and connect worldwide.
          </p>
        </div>
        {/* image side */}
        <div className="flex items-end justify-center ">
          <img
            src="/images/heropic.png"
            alt="HERO"
            className="lg:h-[90vh] pt-15 md:pt-0 md:h-[80vh] h-50vh relative z-10"
          />
          <div className="bg-[#BC96E6] hidden lg:block absolute top-[40%] z-2 opacity-40 h-[450px] w-[450px] rounded-full"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
