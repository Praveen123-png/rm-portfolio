import { useEffect, useState } from "react";

function HeroSlider() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % 3); // 3 slides
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <span className="pl-15 my-10 pt-5 flex items-center" id="services">
        <span className="shrink-0 pe-4 text-gray-900 text-5xl font-bold">
          Service We Provide
        </span>
        <span className="h-1 rounded-full flex-1 bg-gradient-to-l from-transparent to-[#ffd700]"></span>
      </span>

      <div className="flex items-center justify-center rounded-2xl">
        <div className="relative rounded-2xl h-[70vh] w-[80vw] overflow-hidden">
          {/* 1️⃣ Slide 1 */}
          <div
            className={`absolute inset-0 w-full h-full  md:bg-[url('/images/dm.jpg')] bg-[url('/images/DMM.jpg')] bg-cover bg-center transition-opacity duration-1000
               ${slideIndex === 0 ? "opacity-100" : "opacity-0"}
               `}
            // style={{ backgroundImage: `url("/images/dm.jpg")` }}
          >
            <div className="relative z-10 flex items-center justify-start h-full text-white px-4">
              <div className="lg:max-w-3xl md:max-w-lg w-full md:block flex items-center justify-center flex-col pl-4">
                <p className="text-xl md:text-2xl text-gold font-bold pb-3">We Provide</p>
                <h1 className="text-4xl md:text-6xl md:text-start text-center md:w-fit w-[90vw] font-bold mb-4">
                  Digital Marketing Services
                </h1>
                <a
                  href="https://wa.me/919384721690?text=Can%20I%20We%20Talk%20About%20Digital%20Marketing%20Services!"
                  className="bg-gold md:mt-5 w-fit p-2 flex items-center justify-center font-bold text-black rounded-md hover:bg-[#ffd700] hover:scale-105 transition-all ease-in active:scale-[0.98] active:shadow-inner"
                  target="_blank"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          {/* 2️⃣ Slide 2 (Right aligned) */}
          <div
            className={`absolute inset-0 w-full h-full md:bg-[url('/images/dm-2.jpg')] bg-[url('/images/WM.jpg')]  bg-cover bg-center transition-opacity duration-1000
               ${slideIndex === 1 ? "opacity-100" : "opacity-0"}
            `}
            // style={{ backgroundImage: `url("/images/dm-2.jpg")` }}
          >
            <div className="relative z-10 flex items-center justify-end h-full text-white px-4">
              <div className="lg:max-w-2xl md:max-w-lg md:pr-10 text-center md:text-right">
                <p className="text-xl md:text-2xl text-gold font-bold pb-3">
                  Websites. Web Apps.
                </p>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  One partner for all your digital needs.
                </h1>
                <a
                  href="https://wa.me/919384721690?text=Can%20I%20We%20Talk%20About%20Websites!"
                  className="bg-gold mt-5 w-fit p-2 font-bold text-black rounded-md hover:bg-[#ffd700] hover:scale-105 transition-all ease-in active:scale-[0.98] active:shadow-inner"
                  target="_blank"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          {/* 3️⃣ Slide 3 */}
          <div
            className={`absolute inset-0 w-full h-full md:bg-[url('/images/dm-3.jpg')] bg-[url('/images/TM.jpg')]  bg-cover bg-center transition-opacity duration-1000 
              ${slideIndex === 2 ? "opacity-100" : "opacity-0"}
            `}
            // style={{ backgroundImage: `url("/images/dm-3.jpg")` }}
          >
            <div className="relative z-10 flex items-center justify-start h-full text-white px-4">
              <div className="lg:max-w-3xl md:block flex flex-col items-center md:max-w-lg pl-4">
                <p className="text-xl md:text-2xl text-gold font-bold pb-3">
                  Leading supplier of
                </p>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  premium fruits and vegetables
                </h1>
                <a
                  href="https://wa.me/919384721690?text=Can%20I%20We%20Talk%20About%20Fruits%20&%20Vegetables%20Trading!"
                  className="bg-gold md:mt-5 text-center w-fit p-2 flex items-center justify-center font-bold text-black rounded-md hover:bg-[#ffd700] hover:scale-105 transition-all ease-in active:scale-[0.98] active:shadow-inner"
                  target="_blank"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;
