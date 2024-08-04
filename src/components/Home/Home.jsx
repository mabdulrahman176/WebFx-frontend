import React from "react";
import Footer from './../Footer/Footer';
import HeroPage from "./HeroPage";
import Nav from './../Nav/Nav';
const Home = () => {
  return (
    <>
<Nav/>
<Footer/>
    <div className=" p-4 bg-cover bg-center h-auto w-full ">
      <div className="mt-8 text-center md:text-left">
        <h1 className="text-[#207de9] text-4xl">Welcome</h1>
      </div>
      <div>
        <HeroPage />
      </div>
    </div>
    </>
  );
};

export default Home;
