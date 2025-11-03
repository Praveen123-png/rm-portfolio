import { useEffect, useState } from "react";

function HeroSlider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      image: "/images/DM.png",
      //   heading: "Digital Marketing",
      //   text: "We help your business grow online — by reaching the right audience, boosting your visibility, and turning visitors into loyal customers.",
    },
    {
      image: "/images/2.jpg",
      //   heading: "Fresh, Crispy, Delightful",
      //   text: "From murukku to laddus, enjoy snacks that are perfectly crunchy and irresistibly flavorful.",
    },
    {
      image: "/images/DM1.jpg",
      //   heading: "Celebrate Every Moment",
      //   text: "Whether it's festivals, family gatherings, or daily treats, Palagaara Petti adds joy to every occasion.",
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
        <div className="relative rounded-2xl  h-[80vh] w-[80vw] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
                slideIndex === index ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="relative z-10 flex items-center justify-start h-full text-white px-4">
                <div className="max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {slide.heading}
                  </h1>
                  <p className="text-xl md:text-2xl">{slide.text}</p>
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
