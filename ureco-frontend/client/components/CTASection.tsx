import React from "react";

const CTASection = () => {
  return (
    <div className="relative h-[525px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 35, 59, 0.42), rgba(10, 35, 59, 0.42)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        {/* Title */}
        <h2 className="text-white font-addington text-5xl lg:text-7xl font-medium text-center mb-16 max-w-4xl">
          Access the <span className="text-ureco-primary">Inner Sanctum</span>
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Become a Member Button */}
          <div className="flex items-center justify-center gap-2 px-8 py-3 bg-black bg-opacity-20 backdrop-blur-sm">
            <span className="text-white font-addington text-xl lg:text-2xl font-medium">
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

          {/* Contact us Button */}
          <div className="flex items-center justify-center gap-2 px-8 py-3 bg-black bg-opacity-20 backdrop-blur-sm">
            <span className="text-white font-addington text-xl lg:text-2xl font-medium">
              Contact us
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

export default CTASection;
