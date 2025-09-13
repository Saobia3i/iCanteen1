import React from "react";

// Import images
import logo from "../../assets/logo.png"; // iCanteen logo
import dash from "../../assets/dash.jpg";
import bg from "../../assets/bg.jpg";
import burger from "../../assets/burger.jpg";
import fries from "../../assets/fries.jpg";
import pizza from "../../assets/pizza.jpg";
import smoothie from "../../assets/smoothie.jpg";
import aboutUs from "../../assets/about us.jpg";

const CustomerHome = () => {
  return (
    <div
      className="font-inter w-full"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}
      <header className="bg-white shadow-md fixed top-0 w-full z-50">
        <nav className="w-full flex justify-between items-center py-4 px-4 lg:px-20">
          <div className="flex items-center gap-2">
            <img src={logo} alt="iCanteen Logo" className="h-12 w-12 object-contain" />
            <span className="text-2xl lg:text-3xl font-bold text-[#212121]">iCanteen</span>
          </div>

          <ul className="hidden lg:flex gap-6 text-[#737373] text-[16px] font-medium">
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Specials</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <i className="fa-solid fa-magnifying-glass text-xl"></i>
            <i className="fa-solid fa-cart-shopping text-xl"></i>
            <button className="btn bg-[#FFB347] rounded-full font-bold flex items-center gap-2">
              Order Now
              <i className="fa-solid fa-arrow-right -rotate-45 text-white rounded-full bg-[#1C1C1C] p-2"></i>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-20 lg:h-24"></div>

      {/* Hero Section */}
      <section className="w-full text-center py-12 space-y-6 px-4 lg:px-20">
        <img src={dash} alt="Hero" className="mx-auto rounded-2xl shadow-md w-full lg:w-auto" />
        <h1 className="text-3xl lg:text-5xl font-extrabold text-[#212121] leading-snug">
          Fresh, Fast & Flavorful Snacks <br className="hidden sm:block" /> Delivered Right To You 🍕🍔🍟
        </h1>
        <p className="text-[14px] lg:text-[16px] text-[#494949] leading-relaxed mx-auto max-w-full lg:max-w-3xl">
          At <span className="font-bold">iCanteen</span>, we bring you the perfect blend of crispy, cheesy, and mouth-watering bites — <br className="hidden sm:block" />
          made fresh and delivered hot to your door.
        </p>
        <button className="btn bg-[#FFB347] rounded-full font-bold text-lg">Explore Menu</button>
      </section>

      {/* Menu Section */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12 px-4 lg:px-20 justify-items-center">
        {[{img: burger, title: "Burger", desc: "Juicy and cheesy."},
          {img: fries, title: "Fries", desc: "Crispy and golden."},
          {img: pizza, title: "Pizza", desc: "Hot and cheesy slices."},
          {img: smoothie, title: "Smoothie", desc: "Fresh fruit blends."}].map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-md rounded-2xl overflow-hidden w-full lg:w-auto">
            <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h2 className="font-bold text-xl">{item.title}</h2>
              <p className="text-[#737373] text-sm mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* About Us Section */}
      <section className="w-full bg-slate-100 py-12 lg:py-24 px-4 lg:px-20 flex justify-center">
        <div className="flex flex-col lg:flex-row justify-center gap-12 items-center w-full max-w-full">
          <div className="space-y-8 lg:space-y-12 w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-[#212121]">
              We cook with passion, <br /> serve with love
            </h2>
            <p className="text-[#494949] text-[14px] lg:text-[16px] leading-relaxed">
              At <span className="font-bold">iCanteen</span>, every dish tells a story — blending fresh ingredients, bold flavors, and a touch of homestyle comfort to bring you food that warms the soul.
            </p>
            <button className="btn bg-[#FFB347] rounded-full font-semibold text-lg">About Us</button>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={aboutUs} alt="About Us" className="rounded-2xl shadow-md w-full lg:w-auto" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#1C1C1C] text-[#E9E9E9] py-24 px-4 lg:px-20 text-center">
        <div className="mx-auto space-y-6 w-full max-w-full">
          <h2 className="flex items-center justify-center font-extrabold text-3xl gap-2">
            <img src={logo} alt="iCanteen Logo" className="h-12 w-12 object-contain" />
            iCanteen
          </h2>
          <p className="text-[#737373] text-lg mx-auto max-w-full lg:max-w-xl">
            Fresh bites, tasty delights, and flavors that bring people together 🍕🍔🥗 <br />
            Crafted with love, served with passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CustomerHome;
