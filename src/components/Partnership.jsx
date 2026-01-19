import { useEffect, useState } from "react";

const Partnership = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("partnership");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="partnership"
      className="relative py-24 sm:py-32 overflow-hidden bg-[#000101]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-modern opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Card */}
          <div
            className={`
              relative rounded-3xl overflow-hidden
              bg-gradient-to-br from-[#0a0d24] via-[#0d1233] to-[#0a0d24]
              border border-white/5
              p-8 sm:p-12 lg:p-16
              transition-all duration-1000
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(67,83,255,0.1),transparent_60%)]" />

            {/* Content Grid */}
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Code Logo Visual */}
              <div
                className={`
                flex justify-center lg:justify-start
                transition-all duration-700 delay-200
                ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }
              `}
              >
                <div className="relative">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-[#4C91C9]/20 blur-3xl rounded-full" />

                  {/* Logo Container */}
                  <div className="relative">
                    {/* Decorative lines */}
                    <div className="absolute -left-4 top-1/2 w-16 h-[1px] bg-gradient-to-r from-[#4C91C9]/50 to-transparent -translate-y-1/2" />
                    <div className="absolute -left-4 top-1/2 -translate-y-3 w-12 h-[1px] bg-gradient-to-r from-[#4C91C9]/30 to-transparent" />
                    <div className="absolute -left-4 top-1/2 translate-y-3 w-8 h-[1px] bg-gradient-to-r from-[#4C91C9]/20 to-transparent" />

                    {/* Main logo box */}
                    <div
                      className="
                      w-32 h-32 sm:w-40 sm:h-40
                      rounded-2xl
                      bg-gradient-to-br from-[#12163a] to-[#0d1030]
                      border border-white/10
                      shadow-[0_0_40px_rgba(67,83,255,0.2)]
                      flex items-center justify-center
                    "
                    >
                      <span className="text-5xl sm:text-6xl font-black text-[#4C91C9]">
                        &lt;/&gt;
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div
                className={`
                text-center lg:text-left
                transition-all duration-700 delay-400
                ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }
              `}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                  Software Development
                  <br />
                  Staffing:{" "}
                  <span className="text-[#4C91C9]">A Partnership</span>
                </h2>

                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  At DEV.co, we see software development and IT staffing as a
                  partnership. It's our job to help you achieve your goals,
                  whatever they may be. If you're interested in learning more
                  about our staffing process, or if you're ready for a free
                  quote on our IT staffing services, contact us today!
                </p>

                {/* CTA Button */}
                <button
                  className="
                  inline-flex items-center justify-center
                  px-8 py-4
                  bg-gradient-to-r from-[#FF4757] to-[#FF3344]
                  hover:from-[#FF5768] hover:to-[#FF4455]
                  rounded-xl
                  text-white font-bold text-base
                  shadow-[0_4px_20px_rgba(255,71,87,0.4)]
                  hover:shadow-[0_6px_30px_rgba(255,71,87,0.5)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  active:translate-y-0
                "
                >
                  Tell Us About Your Next Project
                </button>
              </div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4C91C9]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4C91C9]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
