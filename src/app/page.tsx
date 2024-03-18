import Link from "next/link";
import HomeSearchBar from "./components/HomeSearchBar";
import { useEffect } from "react";
import { db } from "./firebase";
import { collection, doc, setDoc } from "firebase/firestore";

const WomenSection = () => {
  return (
    <Link href="/women">
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
    </Link>
  );
};

const MenSection = () => {
  return (
    <Link href="/men">
      <section
        id="men"
        className="h-screen w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(/images/pexels-teddy-tavan-4890733.jpg)`,
        }}
      >
        <h1 className="text-5xl relative bottom-[300px] right-[150px]">Men</h1>
      </section>
    </Link>
  );
};

const AccessoriesSection = () => {
  return (
    <Link href="/accessories">
      <section
        id="accessories"
        className="h-screen w-full flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(/images/pexels-rfstudio-3819624.jpg)` }}
      >
        <h1 className="text-5xl relative bottom-[300px] left-[70px]">
          Accessories
        </h1>
      </section>
    </Link>
  );
};

const HomeSection = () => {
  return (
    <Link href="/home">
      <section
        id="home"
        className="h-screen w-full flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(/images/pexels-ksenia-chernaya-11741419.jpg)`,
        }}
      >
        <h1 className="text-5xl relative bottom-[220px]">Home</h1>
      </section>
    </Link>
  );
};

const FooterSection = () => {
  return (
    <section
      id="footer"
      className=" h-screen w-full flex flex-col items-center justify-center bg-white"
    >
      <div className="relative top-20 flex flex-col gap-8">
        <Link href="/women" className="text-5xl relative left-1/3 ">
          Women
        </Link>
        <Link href="/men" className="text-5xl relative right-1/3">
          Men
        </Link>
        <Link href="/accessories" className="text-5xl relative left-1/3">
          Accessories
        </Link>
        <Link href="/home" className="text-5xl relative right-1/3">
          Home
        </Link>
      </div>
      <footer className="mt-96 flex gap-6 relative top-[150px]">
        <span>Cookie Settings</span>
        <span>Terms and Conditions</span>
        <span>Privacy Policy</span>
      </footer>
    </section>
  );
};

export default function HomePage() {

  return (
    <main className="overflow-hidden relative">
      <HomeSearchBar />
      <div className="ovo">
        <WomenSection />
        <MenSection />
        <AccessoriesSection />
        <HomeSection />
        <FooterSection />
      </div>
    </main>
  );
}
