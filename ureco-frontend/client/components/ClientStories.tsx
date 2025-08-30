import React from "react";

const ClientStories = () => {
  return (
    <div className="relative bg-ureco-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 py-24">
        {/* Section Title */}
        <div className="flex items-center gap-8 mb-16">
          <h2 className="text-5xl lg:text-6xl font-addington font-medium bg-gradient-to-r from-ureco-gold to-ureco-gold-dark bg-clip-text text-transparent">
            Client Stories
          </h2>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-ureco-gold-accent to-transparent max-w-32"></div>
        </div>

        {/* Client Images Grid */}
        <div className="flex gap-7 overflow-x-auto">
          {/* Image 1 */}
          <div className="relative min-w-[300px] lg:min-w-[410px] h-[600px] lg:h-[728px] rounded-lg overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3592681936645f2703a688f1d4d401ddb1c9ec86?width=834"
              alt="Client story 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-400 bg-opacity-22"></div>
          </div>

          {/* Image 2 */}
          <div className="relative min-w-[300px] lg:min-w-[410px] h-[600px] lg:h-[728px] rounded-lg overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b6d1b39d8e5ac57fc07ac22da6f8ca7cbc10687a?width=846"
              alt="Client story 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-400 bg-opacity-10"></div>
          </div>

          {/* Image 3 */}
          <div className="relative min-w-[300px] lg:min-w-[410px] h-[600px] lg:h-[728px] rounded-lg overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/91ae76dff89475dc9b26b22f4ecb9143698d5484?width=868"
              alt="Client story 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-400 bg-opacity-10"></div>
          </div>

          {/* Image 4 */}
          <div className="relative min-w-[300px] lg:min-w-[410px] h-[600px] lg:h-[728px] rounded-lg overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3b16b5d86af3a0eb5b1a0e2cd1ac5a285c3af61b?width=850"
              alt="Client story 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-400 bg-opacity-10"></div>
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

export default ClientStories;
