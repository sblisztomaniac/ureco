import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-ureco-dark flex items-center justify-center px-4">
      {/* Hero Content */}
      <div className="flex flex-col items-center gap-12 max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-addington font-normal text-red-600 leading-tight">
            India's ONLY Certified
            <br />
            Contrast Therapy Centre
          </h1>

          <p className="text-ureco-primary font-montserrat text-2xl font-normal">
            Cold Plunge | Sauna
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-7">
          {/* Reserve Button */}
          <div className="relative">
            <svg
              width="211"
              height="53"
              viewBox="0 0 211 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.166992 44.3047V0H202.23H210.511V8.28125V53H8.44824H0.166992V44.3047Z"
                fill="url(#paint0_linear_reserve)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_reserve"
                  x1="0.166992"
                  y1="26.5"
                  x2="210.511"
                  y2="26.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F3472C" />
                  <stop offset="1" stopColor="#741000" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-black font-addington text-3xl font-normal">
              Reserve
            </span>
          </div>

          {/* Become a Member Button */}
          <div className="flex items-center justify-center gap-2 px-8 py-3 bg-black bg-opacity-20 backdrop-blur-sm">
            <span className="text-white font-addington text-2xl font-medium">
              Become a Member
            </span>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform -rotate-90"
            >
              <path
                d="M4.04688 15.4999L26.7612 15.4999M26.7612 15.4999L22.9754 19.2856M26.7612 15.4999L22.9754 11.7142"
                stroke="white"
                strokeWidth="1.89286"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 mx-24">
        <div
          className="h-full"
          style={{
            background:
              "radial-gradient(ellipse at center, #F4552D 0%, #081920 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
