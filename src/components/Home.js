import React, { useEffect } from "react";
import { Card } from "flowbite-react";
import NavBar from "./utils/navBar";
import { Element } from 'react-scroll';

const Home = () => {
  useEffect(() => {
    document.title = "Lark Solutions - Home";
  }, []);

  return (
    <div className="bg-gray-800 min-h-screen">
      <NavBar />
      <div className="pt-24"> {/* Add padding-top to ensure content is not hidden behind the fixed Navbar */}
        <Element name="services" className="flex flex-col items-center justify-center mt-36 sm:mt-0 lg:h-screen">
          <h1 className="text-center text-2xl font-bold sm:text-md md:text-lg lg:text-6xl text-white">
            Let us solve your <span className="underline">problems!</span>
          </h1>
          <a href="https://www.facebook.com/larktechsolutions">
            <p className="mt-2 sm:mt-4 text-xs font-bold sm:text-md md:text-lg lg:text-2xl text-blue-500">🐦‍⬛ @larktechsolutions</p>
          </a>
        </Element>
      </div>
    </div>
  );
}

export default Home;
