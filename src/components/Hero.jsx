function Hero() {
  return (
    <>
      <div className="bg-[#210B2C] h-[100vh] pt-100 grid grid-cols-1 md:grid-cols-2 text-white">
        {/* content-side ’ */}
        <div className="pt-[8vh] pl-10 flex flex-col justify-center gap-10">
          <h2 className="pl-4 text-4xl font-bold border-l-4 border-white text-[#FFD166]">
            I'm Rakesh Mahendren
          </h2>
          <p className="text-xl">
            Engineer by profession, entrepreneur by vision, and exporter by passion, I
            specialize in driving innovation, business growth, and international trade.
            With expertise in engineering solutions, global market expansion, and export
            operations, I help businesses scale and connect with global opportunities
          </p>
        </div>
        {/* image side */}
        <div className="flex items-end justify-center ">
          <img
            src="/images/heropic.png"
            alt="HERO"
            className="h-[90vh] object-center object-cover relative z-10"
          />
          <div className="bg-[#BC96E6] absolute top-[40%] z-2 opacity-40 sm:h-[400px] sm:w-[400px] h-[300px] w-[300px] rounded-full"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
