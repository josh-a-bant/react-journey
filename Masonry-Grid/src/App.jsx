import "./App.css";

function App() {
  return (
    <>
      <div className="h-screen w-full max-w-6xl mx-auto pt-10">
        <Header />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 mask-b-from-50% ">
          <Colum>
            <Card
              src="/images/4.png"
              alt="shure"
              link="https://www.shure.com/en-IN"
            />
            <Card src="/images/11.png" alt="x" link="https://x.com/" />
            <Card
              src="/images/3.png"
              alt="shadcn"
              link="https://ui.shadcn.com/"
            />
          </Colum>
          <Colum>
            <Card
              src="/images/9.png"
              alt="wallmart"
              link="https://www.walmart.com/"
            />
            <Card
              src="/images/5.png"
              alt="aceternity"
              link="https://ui.aceternity.com/"
            />
            <Card
              src="/images/8.png"
              alt="nike"
              link="https://www.nike.com/in/"
            />
          </Colum>
          <Colum>
            <Card src="/images/6.png" alt="vercel" link="https://vercel.com/" />
            <Card
              src="/images/12.png"
              alt="apple"
              link="https://www.apple.com/in/"
            />
            <Card src="/images/7.png" alt="react" link="https://react.dev/" />
          </Colum>
          <Colum>
            <Card
              src="/images/2.png"
              alt="talwind"
              link="https://tailwindcss.com/"
            />
            <Card
              src="/images/10.png"
              alt="pixel"
              link="https://www.google.com/"
            />
            <Card
              src="/images/1.png"
              alt="instagram"
              link="https://www.instagram.com/"
            />
          </Colum>
        </div>
      </div>
    </>
  );
}

const Card = ({ src, alt, link }) => {
  return (
    <a
      className="overlay block my-2 rounded-lg overflow-hidden relative group"
      href={link}
      target="_blank"
    >
      <img src={src} alt={alt} className="" />
      <p className="absolute inset-0 z-20 text-white font-medium opacity-0 group-hover:opacity-100 flex justify-center items-center ">
        {link.split("https://")[1]}
      </p>
    </a>
  );
};

const Colum = ({ children }) => {
  return <div>{children}</div>;
};

const Header = () => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl lg:text-5xl tracking-tighter text-neutral-700">
        Masonry Grid is Awesome You Should Try It
      </h1>
      <p className="text-md md:text-lg lg:text-xl max-w-full text-neutral-500 mt-4">
        Masonry grids are one of the most popular design patterns in modern web
        development. They allow content of different sizes and lengths to sit
        together naturally without forcing them into strict rows or columns.This
        creates a smooth, flowing layout that feels less rigid and more dynamic.
      </p>
    </>
  );
};

export default App;
