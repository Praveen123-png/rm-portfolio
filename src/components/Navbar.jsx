function Navbar() {
  return (
    <>
      <header className="fixed block top-0 left-0 bg-p w-[100vw] z-20">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[8vh]">
            <div className="md:flex md:items-center md:gap-12">
              <h1 className="text-xl font-bold text-white">
                RM | Engineer • Entrepreneur • Exporter
              </h1>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-10 text-sm">
                  <li>
                    <a
                      className="text-xl font-bold text-white transition hover:text-g"
                      href="#"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-xl font-bold text-white transition hover:text-g"
                      href="#"
                    >
                      {" "}
                      Experience{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-xl font-bold text-white transition hover:text-g"
                      href="#"
                    >
                      {" "}
                      Projects{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-xl font-bold text-white transition hover:text-g"
                      href="#"
                    >
                      {" "}
                      Services{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-xl font-bold text-white transition hover:text-g"
                      href="#"
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
