function Skills() {
  return (
    <>
      <div className="flex py-10 items-center justify-center flex-col space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="text-4xl tg font-extrabold">Frontend</div>
          <div className="grid md:grid-cols-3 gap-5 text-2xl">
            <div className="js">JavaScript</div>
            <div className="angular">Angular</div>
            <div className="html">HTML</div>
            <div className="css">CSS</div>
            <div className="ts">TypeScript</div>
            <div className="bootstrap">Bootstrap</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="text-4xl tg font-extrabold">Backend</div>
          <div className="grid md:grid-cols-3 gap-5 text-2xl">
            <div className="js">NodeJS</div>
            <div className="angular">NGRX & RXJX</div>
            <div className="html">ASP Dotnet Core</div>
            <div className="css">C#</div>
            <div className="ts">SQL</div>
            <div className="bootstrap">PostgreSQL</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
