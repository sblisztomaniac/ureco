import React from "react";

const FAQ = () => {
  const faqItems = [
    {
      question: "What is contrast therapy?",
      answer:
        "this is some random set of text hovering over here and I don't know what shit is this so just bear with me for the while till I receive some real content so I can type it hereeeeee what shit is this so just bear with me for the while till I receive some",
      link: null,
    },
    {
      question: "Session durations, timings, availability",
      answer:
        "this is some random set of text hovering over here and I don't know what shit is this so just bear with me for the while till I receive some real content so I can type it",
      link: "Contact us",
    },
    {
      question: "What pricing options and packages do we offer?",
      answer:
        "this is some random set of text hovering over here and I don't know what shit is this so just bear with me for the while till I receive some real content so I can type it hereeeeee what shit is this so just bear with me for the while till I receive some",
      link: null,
    },
    {
      question: "What are our pre-booking requirements?",
      answer:
        "this is some random set of text hovering over here and I don't know what shit is this so just bear with me for the while till I receive some real content so I can type it",
      link: "Reserve Now",
    },
  ];

  return (
    <div className="relative bg-ureco-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 py-24">
        {/* Section Title */}
        <div className="flex items-center gap-8 mb-16">
          <h2 className="text-4xl lg:text-5xl font-addington font-medium bg-gradient-to-r from-ureco-gold to-ureco-gold-dark bg-clip-text text-transparent">
            Curious? We've Got You
          </h2>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-ureco-gold-accent to-transparent max-w-24"></div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="relative p-4 border border-ureco-border-gold bg-ureco-surface rounded-lg"
              style={{
                boxShadow: "0 0 16px rgba(220, 175, 107, 0.27)",
              }}
            >
              {/* Question */}
              <h3 className="text-ureco-gold-accent font-addington text-xl lg:text-2xl font-normal mb-4">
                {item.question}
              </h3>

              {/* Answer */}
              <p className="text-ureco-gold-medium font-addington text-lg font-light leading-relaxed mb-6">
                {item.answer}
              </p>

              {/* Link if exists */}
              {item.link && (
                <div className="inline-flex flex-col">
                  <span className="text-white font-inter text-base font-normal">
                    {item.link}
                  </span>
                  <div
                    className="h-0.5 bg-white mt-1"
                    style={{
                      width: item.link === "Contact us" ? "80px" : "96px",
                    }}
                  ></div>
                </div>
              )}
            </div>
          ))}
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

export default FAQ;
