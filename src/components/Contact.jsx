import React from "react";

function Contact() {
  return (
    <div
      className="p-20 mt-30"
      style={{
        translate: "none",
        rotate: "none",
        scale: "none",
        transform: "translate3d(0px, -120.588px, 0px)",
      }}
    >
      <div className="relative flex h-full w-full flex-col items-center justify-between rounded-md bg-[linear-gradient(0deg,_#65238c,_#210b2c)] bg-cover border border-white/10 shadow-lg backdrop-blur-xl p-[var(--space-md)]">
        {/* Heading */}
        <h2 className="pt-10 text-center font-semibold uppercase">
          <div className="text-8xl text-[#D1D1C7] flex">
            Let's Make <br /> It Happen
          </div>
        </h2>

        {/* Contact Form */}
        <section
          id="Contact"
          className="sm:w-[36rem] w-full mx-auto my-10 px-6 sm:px-10 xl:px-14 py-12 rounded-2xl backdrop-blur-xl bg-[rgba(209,209,199,0.05)] border border-[rgba(255,255,255,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
        >
          <h2 className="text-center text-white font-medium mb-8">Say Hello</h2>

          <form className="space-y-4 gform text-[#D1D1C7]">
            <input
              type="text"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
              name="hp"
            />

            {/* Name input */}
            <div>
              <input
                type="text"
                placeholder="Drop a name"
                className="w-full placeholder:font-[400] font-normal text-[length:var(--text-base)] rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-[var(--color-text-bg)] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
                name="name"
              />
              <p className="text-red-400 text-sm mt-1 h-5 transition-all duration-300 opacity-0 invisible"></p>
            </div>

            {/* Email input */}
            <div className="relative">
              <input
                type="email"
                placeholder="Wanna hear back? Add your email"
                className="w-full placeholder:font-[400] text-[length:var(--text-base)] font-normal rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-[var(--color-text-bg)] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
                name="email"
              />
              <p className="text-red-400 text-sm mt-1 transition-all duration-300 opacity-0 invisible">
                Placeholder
              </p>
            </div>

            {/* Message input */}
            <div>
              <textarea
                name="message"
                placeholder="Say hello or drop a note..."
                rows="5"
                required
                className="w-full placeholder:font-[400] font-normal rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-[var(--color-text-bg)] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition resize-none"
              ></textarea>
              <p className="text-red-400 text-sm mt-1 h-5 transition-all duration-300 opacity-0 invisible"></p>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-xl font-semibold tracking-wide transition-all duration-100 bg-white text-black hover:bg-[#ffd700] active:scale-[0.98] active:shadow-inner"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Contact;
