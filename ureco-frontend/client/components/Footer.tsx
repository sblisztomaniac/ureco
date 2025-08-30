import React from "react";

const Footer = () => {
  return (
    <div className="relative bg-ureco-dark">
      {/* Background decorative element */}
      <div className="absolute right-0 top-0 w-full h-full overflow-hidden">
        <svg
          className="absolute right-0 top-0 w-2/3 h-full opacity-20"
          viewBox="0 0 753 498"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M722.546 0.0126426C711.86 0.0126426 701.39 0.618863 691.172 1.79348C692.776 1.18723 694.38 0.593636 696.022 0.0126426C693.837 0.682048 691.412 1.3641 688.785 2.08403C631.405 9.20752 581.983 34.4933 545.57 73.0157C513.653 104.225 486.877 149.808 476.697 217.683C450.211 391.754 375.313 446.645 265.455 454.602C138.028 454.602 47.0897 373.996 47.0897 252.113C47.0897 198.851 64.3301 152.865 94.3018 117.967L268.41 292.076H197.163V336.08H343.788V191.059H299.822V261.296L126.661 88.1342C163.175 61.4969 210.324 46.4416 264.028 46.4416C285.095 46.4416 304.647 48.0583 322.872 51.8474C343.384 56.1164 362.241 63.1262 379.747 73.6978L405.904 36.4889C386.049 24.9449 362.418 15.4848 336.791 9.09383C313.513 3.28389 288.581 0 263.333 0C110.431 0 0.206055 107.446 0.206055 252.113H0.243983C0.243983 398.827 109.067 498 266.099 498C401.243 492.923 463.384 414.097 493.546 338.404C526.296 435.089 612.864 498 722.52 498C863.727 498 966.361 394.684 966.361 249.347C966.361 104.01 863.045 0 722.52 0L722.546 0.0126426ZM882.18 374.703L723.076 202.262H794.324V158.258H647.648V303.279H691.652V233.042L852.714 407.592C818.776 437.4 773.85 454.615 722.533 454.615C609.58 454.615 526.233 369.184 526.233 249.36C526.233 129.536 608.203 43.423 722.533 43.423C836.862 43.423 919.515 129.536 919.515 249.36C919.515 297.923 905.937 340.841 882.18 374.703Z"
            fill="url(#paint0_linear_footer)"
            fillOpacity="0.49"
          />
          <defs>
            <linearGradient
              id="paint0_linear_footer"
              x1="42.3699"
              y1="107.183"
              x2="630.812"
              y2="236.945"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3F2A2A" />
              <stop offset="1" stopColor="#151413" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-8">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6b2d0b4c6037d1b4265e00d5d31f1d98479eaaa9?width=472"
                alt="Ureco Logo"
                className="w-60 h-auto"
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.0548 15.4717C3.3843 9.80031 3.65564 5.51123 6.2498 3.56606L6.82455 3.13798C6.9712 3.03009 7.13802 2.95275 7.31512 2.91055C7.49222 2.86835 7.676 2.86216 7.85554 2.89234C8.03508 2.92252 8.20673 2.98846 8.3603 3.08624C8.51388 3.18402 8.64624 3.31165 8.74955 3.46156L10.197 5.54423C10.3907 5.82296 10.4744 6.16348 10.4321 6.50025C10.3898 6.83702 10.2244 7.14624 9.9678 7.3684L8.57447 8.5729C8.22613 8.87448 8.05563 9.3319 8.21238 9.76548C8.50205 10.5721 9.20513 11.9957 10.868 13.6576C12.5308 15.3205 13.9535 16.0236 14.7601 16.3141C15.1946 16.47 15.6521 16.3004 15.9536 15.9511L17.1581 14.5596C17.3803 14.303 17.6895 14.1377 18.0263 14.0954C18.3631 14.0531 18.7036 14.1368 18.9823 14.3305L21.0686 15.7788C21.2184 15.8818 21.3459 16.0138 21.4437 16.167C21.5414 16.3203 21.6074 16.4916 21.6377 16.6708C21.6679 16.85 21.6619 17.0335 21.6199 17.2103C21.5779 17.3871 21.5008 17.5537 21.3931 17.7001L20.9623 18.2804C19.0181 20.8727 14.7271 21.1431 9.0548 15.4717Z"
                    fill="#BEBEBE"
                  />
                </svg>
                <span className="text-ureco-text-muted font-montserrat text-lg">
                  +91 12345 87531
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_location)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11 6.1875C9.86081 6.1875 8.9375 7.11081 8.9375 8.25C8.9375 9.38919 9.86081 10.3125 11 10.3125C12.1392 10.3125 13.0625 9.38919 13.0625 8.25C13.0625 7.11081 12.1392 6.1875 11 6.1875ZM11 11.6875C9.10181 11.6875 7.5625 10.1489 7.5625 8.25C7.5625 6.35112 9.10181 4.8125 11 4.8125C12.8982 4.8125 14.4375 6.35112 14.4375 8.25C14.4375 10.1489 12.8982 11.6875 11 11.6875ZM11 0C6.44394 0 2.75 3.69394 2.75 8.25C2.75 11.6999 9.62844 22.0076 11 22C12.3503 22.0076 19.25 11.6531 19.25 8.25C19.25 3.69394 15.5561 0 11 0Z"
                      fill="#BEBEBE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_location">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-ureco-text-muted font-addington text-lg leading-relaxed">
                  priyadarshani co-op society, Khar West,
                  <br />
                  Mumbai, Maharashtra - 400052
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.47036 3.66699H16.529C16.9311 3.66698 17.278 3.66697 17.5652 3.68656C17.8675 3.7072 18.1699 3.75257 18.4688 3.87632C19.1425 4.15543 19.6779 4.69079 19.957 5.36461C20.0807 5.66338 20.1261 5.9658 20.1468 6.26814C20.1663 6.5553 20.1663 6.90224 20.1663 7.30433V14.6963C20.1663 15.0984 20.1663 15.4453 20.1468 15.7325C20.1261 16.0348 20.0807 16.3372 19.957 16.6361C19.6779 17.3098 19.1425 17.8453 18.4688 18.1243C18.1699 18.248 17.8675 18.2934 17.5652 18.3141C17.278 18.3337 16.9311 18.3337 16.529 18.3337H5.47035C5.06825 18.3337 4.72131 18.3337 4.43416 18.3141C4.13182 18.2934 3.8294 18.248 3.53063 18.1243C2.85681 17.8453 2.32144 17.3098 2.04234 16.6361C1.91859 16.3372 1.87321 16.0348 1.85258 15.7325C1.83299 15.4453 1.833 15.0984 1.83301 14.6963V7.30434C1.833 6.90225 1.83299 6.5553 1.85258 6.26814C1.87321 5.9658 1.91859 5.66338 2.04234 5.36461C2.32144 4.69079 2.85681 4.15543 3.53063 3.87632C3.8294 3.75257 4.13182 3.7072 4.43416 3.68656C4.72131 3.66697 5.06826 3.66698 5.47036 3.66699ZM3.95734 5.75495C4.29072 5.37395 4.86983 5.33534 5.25084 5.66872L10.396 10.1707C10.7416 10.4732 11.2577 10.4732 11.6033 10.1707L16.7485 5.66872C17.1295 5.33534 17.7087 5.37395 18.042 5.75495C18.3754 6.13595 18.3368 6.71507 17.9558 7.04844L12.8105 11.5505C11.7737 12.4577 10.2256 12.4577 9.1888 11.5505L4.04358 7.04844C3.66257 6.71507 3.62396 6.13595 3.95734 5.75495Z"
                    fill="#BEBEBE"
                  />
                </svg>
                <span className="text-ureco-text-muted font-addington text-lg">
                  contact@ureco.co.in
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-ureco-text-light font-addington text-xl font-semibold mb-4">
              Quick Links
            </h3>
            <div className="space-y-6">
              <a
                href="#"
                className="block text-ureco-primary font-addington text-xl hover:opacity-80 transition-opacity"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-ureco-primary font-addington text-xl hover:opacity-80 transition-opacity"
              >
                About
              </a>
              <a
                href="#"
                className="block text-ureco-primary font-addington text-xl hover:opacity-80 transition-opacity"
              >
                Services
              </a>
              <a
                href="#"
                className="block text-ureco-primary font-addington text-xl hover:opacity-80 transition-opacity"
              >
                Memberships
              </a>
              <a
                href="#"
                className="block text-ureco-primary font-addington text-xl hover:opacity-80 transition-opacity"
              >
                Reserve
              </a>
            </div>
          </div>

          {/* Packages */}
          <div>
            <h3 className="text-ureco-text-light font-addington text-xl font-semibold mb-4">
              Packages
            </h3>
            <div className="space-y-6">
              <a
                href="#"
                className="block text-ureco-primary font-addington text-xl hover:opacity-80 transition-opacity"
              >
                Contrast Therapy - Ice Bath
              </a>
              <a
                href="#"
                className="block text-ureco-primary font-addington text-xl hover:opacity-80 transition-opacity"
              >
                Thermal Therapy
              </a>
              <a
                href="#"
                className="block text-ureco-primary font-addington text-xl hover:opacity-80 transition-opacity"
              >
                Skin & Hair Treatments
              </a>
              <a
                href="#"
                className="block text-ureco-primary font-addington text-xl hover:opacity-80 transition-opacity"
              >
                Recovery Packages
              </a>
              <a
                href="#"
                className="block text-ureco-primary font-addington text-xl hover:opacity-80 transition-opacity"
              >
                Wellness Plans
              </a>
            </div>
          </div>

          {/* Our Socials */}
          <div>
            <h3 className="text-ureco-text-light font-addington text-xl font-semibold mb-4">
              Our Socials
            </h3>
            <div className="space-y-6">
              <a
                href="#"
                className="block text-ureco-primary font-addington text-xl hover:opacity-80 transition-opacity"
              >
                Instagram
              </a>
              <a
                href="#"
                className="block text-ureco-primary font-addington text-xl hover:opacity-80 transition-opacity"
              >
                Facebook
              </a>
              <a
                href="#"
                className="block text-ureco-primary font-addington text-xl hover:opacity-80 transition-opacity"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-0.5">
          <div
            className="h-full"
            style={{
              background:
                "radial-gradient(ellipse at center, #F4552D 0%, #081920 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
