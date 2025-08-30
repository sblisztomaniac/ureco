import React from "react";

const Services = () => {
  return (
    <div className="relative bg-ureco-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 py-24">
        {/* Section Title */}
        <div className="flex items-center gap-8 mb-16">
          <h2 className="text-5xl lg:text-6xl font-addington font-medium bg-gradient-to-r from-ureco-gold to-ureco-gold-dark bg-clip-text text-transparent">
            Wellness, Reimagined
          </h2>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-ureco-gold-accent to-transparent max-w-32"></div>
        </div>

        {/* Service Cards */}
        <div className="space-y-8">
          {/* Contrast Therapy Card */}
          <div className="relative h-96 lg:h-[480px] rounded-lg overflow-hidden group">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/b61703f4d1177c7611e0888749d69d18ddda0cd7?width=2292')`,
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <div className="max-w-2xl">
                <h3 className="text-white font-inter text-3xl lg:text-4xl font-normal mb-4">
                  Contrast Therapy - Ice Bath
                </h3>
                <p className="text-white font-inter text-sm lg:text-base font-normal mb-6 italic">
                  Involves hot and cold temperatures. You alternate traditional
                  or infrared sauna with cold plunge-in sessions.
                </p>

                {/* Reserve Now Link */}
                <div className="inline-flex flex-col">
                  <span className="text-white font-inter text-sm font-normal">
                    Reserve Now
                  </span>
                  <div className="w-16 h-px bg-white mt-1"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Skin & Hair Treatments Card */}
          <div className="relative h-96 lg:h-[480px] rounded-lg overflow-hidden group">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/43b115692912d33f9af1cf2157d8da4e4ceddf0a?width=2338')`,
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <div className="max-w-2xl">
                <h3 className="text-white font-inter text-3xl lg:text-4xl font-normal mb-4">
                  Skin & Hair Treatments
                </h3>
                <p className="text-white font-inter text-sm lg:text-base font-normal mb-6 italic">
                  Involves hot and cold temperatures. You alternate traditional
                  or infrared sauna with cold plunge-in sessions.
                </p>

                {/* Reserve Now Link */}
                <div className="inline-flex flex-col">
                  <span className="text-white font-inter text-sm font-normal">
                    Reserve Now
                  </span>
                  <div className="w-16 h-px bg-white mt-1"></div>
                </div>
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

export default Services;
