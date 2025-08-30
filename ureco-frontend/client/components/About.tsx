import React from "react";

const About = () => {
  return (
    <div className="relative bg-ureco-dark">
      {/* Background decorative element */}
      <div className="absolute right-0 top-0 w-full h-full overflow-hidden">
        <svg
          className="absolute right-0 top-1/4 w-1/2 h-3/4 opacity-20"
          viewBox="0 0 765 599"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M868.838 0.0152067C855.986 0.0152067 843.391 0.744375 831.101 2.15722C833.031 1.42801 834.96 0.714033 836.935 0.0152067C834.307 0.820376 831.39 1.64076 828.23 2.50669C759.214 11.0749 699.768 41.489 655.97 87.8242C617.58 125.363 585.373 180.191 573.128 261.832C541.271 471.206 451.183 537.23 319.044 546.801C165.774 546.801 56.3922 449.846 56.3922 303.245C56.3922 239.181 77.1291 183.867 113.179 141.892L322.599 351.312H236.902V404.24H413.264V229.807H360.381V314.289L152.101 106.009C196.021 73.9691 252.732 55.8605 317.328 55.8605C342.668 55.8605 366.185 57.805 388.107 62.3626C412.778 67.4974 435.46 75.9289 456.516 88.6445L487.978 43.8893C464.096 30.004 435.672 18.6252 404.848 10.9382C376.849 3.9499 346.861 0 316.492 0C132.579 0 0 129.237 0 303.245H0.0456201C0.0456201 479.714 130.939 599 319.819 599C482.372 592.893 557.116 498.08 593.394 407.036C632.787 523.329 736.912 599 868.808 599C1038.65 599 1162.1 474.731 1162.1 299.918C1162.1 125.105 1037.83 0 868.808 0L868.838 0.0152067ZM1060.85 450.697L869.476 243.283H955.173V190.354H778.75V364.787H831.679V280.305L1025.41 490.257C984.585 526.109 930.547 546.816 868.823 546.816C732.962 546.816 632.711 444.058 632.711 299.933C632.711 155.808 731.306 52.2296 868.823 52.2296C1006.34 52.2296 1105.76 155.808 1105.76 299.933C1105.76 358.346 1089.42 409.968 1060.85 450.697Z"
            fill="url(#paint0_linear_about)"
            fillOpacity="0.49"
          />
          <defs>
            <linearGradient
              id="paint0_linear_about"
              x1="50.7151"
              y1="128.921"
              x2="758.5"
              y2="285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3F2A2A" />
              <stop offset="1" stopColor="#151413" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-24 py-24">
        <div className="flex flex-col lg:flex-row items-start gap-20">
          {/* Video Placeholder */}
          <div className="w-full lg:w-1/3 aspect-[9/16] bg-gray-800 rounded-lg">
            {/* Placeholder for video content */}
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">▶</div>
                <p className="text-lg">Video Content</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Temperature Indicator */}
            <div className="flex items-center gap-4">
              <div className="flex items-baseline">
                <span className="text-ureco-primary font-addington text-6xl font-normal">
                  4
                </span>
                <span className="text-ureco-primary font-addington text-6xl font-normal">
                  °c
                </span>
              </div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-ureco-primary to-transparent max-w-32"></div>
            </div>

            {/* Main Title */}
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-7xl font-addington font-semibold leading-tight">
                <span className="text-ureco-text-dark">Precision </span>
                <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                  Temperature
                </span>
                <br />
                <span className="text-ureco-text-dark">Therapy for Peak </span>
                <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                  Performance
                </span>
              </h2>

              <p className="text-3xl font-addington font-light bg-gradient-to-r from-gray-300 to-gray-600 bg-clip-text text-transparent">
                India's only Certified thermalist
              </p>
            </div>

            {/* Description */}
            <p className="text-ureco-text-dark font-addington text-xl leading-relaxed max-w-4xl">
              Precision Temperature Therapy for "Peak Performance" effectively
              combines scientific credibility with premium positioning.
              "Precision" emphasizes controlled, medical-grade treatment that
              builds trust, while "Peak Performance" focuses on optimal results
              rather than basic recovery. This title appeals to high-achieving
              clients seeking measurable outcomes, differentiating your luxury
              contrast therapy service from standard wellness centers by
              highlighting both scientific authority and exclusive
              results-driven experiences
            </p>

            {/* Statistics */}
            <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
              <div className="flex items-center gap-4">
                <span className="text-ureco-text-dark font-crimson text-6xl lg:text-7xl font-normal">
                  1000+
                </span>
                <span className="text-ureco-text-dark font-addington text-xl font-medium">
                  Ice - baths.
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-ureco-text-dark font-crimson text-6xl lg:text-7xl font-normal">
                  500+
                </span>
                <span className="text-ureco-text-dark font-addington text-xl font-medium">
                  satisfied customers.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="h-0.5 mx-24">
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

export default About;
