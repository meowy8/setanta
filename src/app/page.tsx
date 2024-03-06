import NavBar from "./components/NavBar";

const WomenSection = () => {
  return (
    <section
      id="women"
      className="h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(/images/pexels-konstantin-mishchenko-1926769.jpg)`,
      }}
    >
      <h1 className="text-5xl relative top-[350px] left-[350px] drop-shadow-lg">
        Women
      </h1>
    </section>
  );
};

const MenSection = () => {
  return (
    <section
      id="men"
      className="h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(/images/pexels-teddy-tavan-4890733.jpg)` }}
    >
      <h1 className="text-5xl relative bottom-[300px] right-[150px]">Men</h1>
    </section>
  );
};

const AccessoriesSection = () => {
  return (
    <section
      id="accessories"
      className="h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(/images/pexels-rfstudio-3819624.jpg)` }}
    >
      <h1 className="text-5xl relative bottom-[300px] left-[70px]">
        Accessories
      </h1>
    </section>
  );
};

const HomeSection = () => {
  return (
    <section
      id="home"
      className="h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(/images/pexels-ksenia-chernaya-11741419.jpg)`,
      }}
    >
      <h1 className="text-5xl relative bottom-[220px]">Home</h1>
    </section>
  );
};

const FooterSection = () => {
  return (
    <section
      id="footer"
      className="h-screen w-full flex flex-col items-center justify-center bg-white"
    >
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl relative left-1/3">Women</h1>
        <h1 className="text-5xl relative">Men</h1>
        <h1 className="text-5xl relative left-1/3">Accessories</h1>
        <h1 className="text-5xl">Home</h1>
      </div>
      <footer className="mt-96 flex gap-6">
        <span>Cookie Settings</span>
        <span>Terms and Conditions</span>
        <span>Privacy Policy</span>
      </footer>
    </section>
  );
};

export default function Home() {
  return (
    <main className="overflow-hidden relative ovo">
      <NavBar />
      <WomenSection />
      <MenSection />
      <AccessoriesSection />
      <HomeSection />
      <FooterSection />
    </main>
  );
}
