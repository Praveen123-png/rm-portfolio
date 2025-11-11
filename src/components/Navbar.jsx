function Navbar() {
  return (
    <>
      <header className="fixed bp block top-0 left-0 w-[100vw] z-20">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[8vh]">
            <div className="md:flex md:items-center md:gap-12">
              <a
                href="#"
                className="text-xl font-bold transition-colors ease-in text-white hover:text-[#D1D1C7]"
              >
                RM | Engineer • Entrepreneur • Exporter
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-10 text-sm">
                  <li>
                    <a
                      className="hover:text-white transition-colors ease-in text-xl font-bold text-[#D1D1C7]  transition-colors ease-in"
                      href="#about"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-white text-xl font-bold text-[#D1D1C7] transition-colors ease-in"
                      href="#services"
                    >
                      {" "}
                      Services{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="hover:text-white text-xl font-bold text-[#D1D1C7] transition transition-colors ease-in"
                      href="#exp"
                    >
                      {" "}
                      Experience{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="hover:text-white text-xl font-bold text-[#D1D1C7] transition transition-colors ease-in"
                      href="#projects"
                    >
                      {" "}
                      Projects{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="hover:text-white text-xl font-bold text-[#D1D1C7] transition transition-colors ease-in"
                      href="#contact"
                    >
                      {" "}
                      Contact{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
