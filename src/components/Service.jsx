import { useEffect, useState } from "react";

function HeroSlider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      image: "/images/dm-3.jpg",
      heading: "premium fruits and vegetables",
      text: "Leading supplier of",
    },
    {
      image: "/images/dm.jpg",
      heading: "Digital Marketing Services",
      text: "We Provide",
    },
    {
      image: "/images/dm-2.jpg",
      heading: "One partner for all your digital needs.",
      text: "Websites. Web Apps.",
    },
  ];

  // Automatically move to next slide
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div>
      <span className="pl-15 my-10 pt-5 flex items-center" id="projects">
        <span className="shrink-0 pe-4 text-gray-900 text-5xl font-bold">
          Service We Provide
        </span>

        <span className="h-1 rounded-full flex-1 bg-gradient-to-l from-transparent to-[#ffd700]"></span>
      </span>
      <div className="flex items-center justify-center rounded-2xl">
        <div className="relative rounded-2xl  h-[70vh] w-[70vw] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
                slideIndex === index ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="relative z-10 flex items-center justify-start h-full text-white px-4">
                <div className="lg:max-w-3xl pl-4">
                  <p className="text-xl md:text-2xl text-gold font-bold pb-3">
                    {slide.text}
                  </p>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.heading}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;
