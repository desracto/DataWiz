import React from "react";

function SchemaSelection2() {
    const [isMobile, setIsMobile]=React.useState(false)
  return (
    <div className="p-3 relative overflow-x-hidden">
      {/* adjust this svg On fro Top right corner to mid of the screen hight */}

      <img
        className="absolute -top-[790px] -left-[260px] md:-right-[430px] h-full -z-10"
        alt=""
        src="/bgdesign3.svg"
        //
      />


      <img
        className="absolute -top-[390px] -right-[460px] md:-right-[460px] h-full -z-10"
        alt=""
        src="/bgdesign1.svg"
        //
      />
      <img
        className="absolute bottom-0 md:translate-x-1/5 h-1/3 -z-10 "
        alt=""
        src="/backdesign2.svg"
      />
      <div className="h-[60px] flex items-center w-full justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/Logo.png"
            alt="Logo"
            className="w-[85.77p] h-[78.55 object-cover h-auto w-14 mr-2"
          />
          <span className="text-xl font-bold text-black font-poppins">
            Data
            <span className="text-xl font-normal">Wiz.</span>
          </span>
        </div>
        {/* 8e63c3 */}
        <button
          className="md:hidden rounded-md px-2 py-1 text-midnightblue  bg-[#d3c1ce] z-10"
          onClick={()=>setIsMobile(!isMobile)}
          // Add an event handler to toggle the mobile menu
        >
          <svg
            className="w-6 h-6 fill-blak"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            color="#663d75"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* Menu */}
        <div className="hidden md:flex justify-center items-center space-x- flex-grow">
          <a
            href="#"
            className="flex flex-col items-center hover:text-gray-300 no-underline mr-8"
          >
            <img
              src="/home-logo@2x.png"
              alt="Menu Icon 3"
              className="h-8 w-8"
            />
            <span className="text-center text-midnightblue font-gilroy-semibold">
              Home
            </span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center hover:text-gray-300 no-underline mx-8"
          >
            <img
              src="/animation-logo@2x.png"
              alt="Menu Icon 3"
              className="h-8 w-8"
            />
            <span className="text-center text-midnightblue font-gilroy-semibold">
              Animation
            </span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center hover:text-gray-300 no-underline mx-8"
          >
            <img
              src="/createquizzeslogo2-1@2x.png"
              alt="Menu Icon 3"
              className="w-6 h-8"
            />
            <span className="text-center text-midnightblue font-gilroy-semibold">
              Quizzes
            </span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center hover:text-gray-300 no-underline mx-8"
          >
            <img
              src="/faqs-logo@2x.png"
              alt="Menu Icon 3"
              className="h-8 w-8"
            />
            <span className="text-center text-midnightblue font-gilroy-semibold">
              FAQs
            </span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center hover:text-gray-300 no-underline ml-8"
          >
            <img
              src="/settings-logo.svg"
              alt="Menu Icon 3"
              className="h-8 w-10"
            />
            <span className="text-center text-midnightblue font-gilroy-semibold decoration-none">
              Settings
            </span>
          </a>
        </div>

        {/* Mobile Menu */}
        {isMobile ? (
            <div className="fixed top-0 left-0 bg-black/70 bottom-0 right-0">

          <div className="fixed left-0 top-0 bottom-0 bg-white p-3">
            <div className="flex items-center border-b">
              <img
                src="/image-14@2x.png"
                alt="Logo"
                className="w-[85.77p] h-[78.55 object-cover h-auto w-14 mr-2"
              />
              <span className="text-xl font-bold text-black font-poppins">
                Data
                <span className="text-xl font-normal">Wiz.</span>
              </span>
            </div>
            <div className="flex flex-col justify-center items-around w-[220px] gap-y-3 mt-6">
              <a
                href="#"
                className="flex flex-row !border-b border-[#757575] items-center hover:text-gray-300 no-underline"
              >
                <img
                  src="/home-logo@2x.png"
                  alt="Menu Icon 3"
                  className="h-8 w-8"
                />
                <span className="ml-5 text-center text-midnightblue font-gilroy-semibold">
                  Home
                </span>
              </a>
              <a
                href="#"
                className="flex flex-row !border-b border-[#757575] items-center hover:text-gray-300 no-underline"
              >
                <img
                  src="/animation-logo@2x.png"
                  alt="Menu Icon 3"
                  className="h-8 w-8"
                />
                <span className="ml-5 text-center text-midnightblue font-gilroy-semibold">
                  Animation
                </span>
              </a>
              <a
                href="#"
                className="flex flex-row !border-b border-[#757575] items-center hover:text-gray-300 no-underline"
              >
                <img
                  src="/createquizzeslogo2-1@2x.png"
                  alt="Menu Icon 3"
                  className="h-8 w-8"
                />
                <span className="ml-5 text-center text-midnightblue font-gilroy-semibold">
                  Quizzes
                </span>
              </a>
              <a
                href="#"
                className="flex flex-row !border-b border-[#757575] items-center hover:text-gray-300 no-underline"
              >
                <img
                  src="/faqs-logo@2x.png"
                  alt="Menu Icon 3"
                  className="h-8 w-8"
                />
                <span className="ml-5 text-center text-midnightblue font-gilroy-semibold">
                  FAQs
                </span>
              </a>
              <a
                href="#"
                className="flex flex-row !border-b border-[#757575] items-center hover:text-gray-300 no-underline"
              >
                <img
                  src="/settings-logo.svg"
                  alt="Menu Icon 3"
                  className="h-8 w-8 -ml-1.5"
                />
                <span className="ml-5 text-center text-midnightblue font-gilroy-semibold decoration-none">
                  Settings
                </span>
              </a>
            </div>
          </div>
          </div>
        ) : null}
      </div>
      <div className="flex w-full justify-center items-center h-[calc(170vh-200px)] mt-[60px] m:mt-20">
        <div className="flex w-full max-w-4xl flex-col">
          <div className="text-black mb-8">
            <div className="text-[2.5rem] mb-2 font-bold inline-block [text-shadow:0px_2px_2px_rgba(0,_0,_0,_0.25)] font-gilroy-semibold">
              Schema Selection
            </div>
            <div className="text-base font-gilroy-semibold flex items-center [text-shadow:0px_2px_2px_rgba(0,_0,_0,_0.25)]">
              Begin your journey into the world of data manipulation and SQL
              query visualization by selecting from our five diverse range of
              pre-designed schemas.
            </div>
          </div>
          <div className="flex flex-col w-auto md:min-h-[760px] max-h-xl bg-[#d3c1ce] p-4 md:p-10 rounded-3xl shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 ">
              <button className="flex transform translate-y-[-8px] items-center justify-center p-3 rounded-full shadow-lg bg-gold cursor-pointer font-gilroy-semibold">
                SCHEMA 1
              </button>
              <button className="flex transform translate-y-[-8px] items-center justify-center p-3 rounded-full shadow-lg bg-gold cursor-pointer font-gilroy-semibold">
                SCHEMA 2
              </button>
              <button className="flex transform translate-y-[-8px] items-center justify-center p-3 rounded-full shadow-lg bg-gold cursor-pointer font-gilroy-semibold">
                SCHEMA 3
              </button>
              <button className="flex transform translate-y-[-8px] items-center justify-center p-3 rounded-full shadow-lg bg-gold cursor-pointer font-gilroy-semibold">
                SCHEMA 4
              </button>
              <button className="flex transform translate-y-[-8px] items-center justify-center p-3 rounded-full shadow-lg bg-gold cursor-pointer font-gilroy-semibold">
                SCHEMA 5
              </button>
            </div>
            <div className="bg-[#f6edf3] p-6 !flex flex-grow h-full my-6 shadow-xl rounded-3xl min-h-[140px]" >
              
              {/* How can I fix this div as box and size will be according to the size of outer div even this div have no any thing in it */}
            </div>

            <div className="flex justify-center items-center">
              <button className="flex items-center justify-center p-3 rounded shadow-lg bg-gold min-w-[136px] cursor-pointer font-gilroy-semibold">
                SELECT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchemaSelection2;
