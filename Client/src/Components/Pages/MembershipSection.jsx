import { Link } from "react-router";
import {
  Star,
  Gift,
  Truck,
  Headphones,
  Unlock,
  Sparkles,
  Crown,
} from "lucide-react";

const MembershipSection = () => {
  const opportunities = [
    {
      icon: <Gift className="w-5 h-5 text-white" />,
      title: "Exclusive Discounts",
      desc: "Members-only pricing on our entire collection",
    },
    {
      icon: <Star className="w-5 h-5 text-white" />,
      title: "Early Access",
      desc: "48-hour advance access to new collections",
    },
    {
      icon: <Truck className="w-5 h-5 text-white" />,
      title: "Free Shipping",
      desc: "Complimentary shipping on all orders",
    },
    {
      icon: <Headphones className="w-5 h-5 text-white" />,
      title: "Concierge Support",
      desc: "Dedicated support line for premium members",
    },
    {
      icon: <Unlock className="w-5 h-5 text-white" />,
      title: "Master Classes",
      desc: "Exclusive pottery workshops and tutorials",
    },
  ];

  return (
    <section className="relative bg-[#E9E9E9] py-16 px-4 sm:px-6 lg:px-28 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#415765]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-[#D9DFD7]/30 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center justify-center bg-gradient-to-r from-[#415765] to-[#5a6f7f] text-white px-5 py-2 rounded-full mb-4 shadow-md text-sm sm:text-base">
          <Crown className="w-5 h-5 mr-2" fill="currentColor" />
          Premium Experience
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#415765] relative px-2">
          <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-amber-400 absolute -left-6 sm:-left-10 top-1 sm:top-2" />
          Become a Premium Member
          <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-amber-400 absolute -right-6 sm:-right-10 top-1 sm:top-2" />
        </h2>

        <p className="text-[#415765]/80 text-base sm:text-lg mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
          Elevate your pottery journey with our exclusive membership program.
          Enjoy{" "}
          <span className="font-semibold text-[#415765]">
            special privileges
          </span>{" "}
          crafted for pottery enthusiasts who value quality and perks.
        </p>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
          {opportunities.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center p-5 bg-[#D9DFD7] rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[#D9DFD7] hover:border-[#D9DFD7]/30 hover:-translate-y-1"
            >
              <div className="p-3 bg-gradient-to-br from-[#415765] to-[#5a6f7f] rounded-full mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="font-semibold text-[#415765] mb-1 sm:mb-2 text-center text-lg">
                {item.title}
              </h4>
              <p className="text-[#415765]/70 text-sm text-center leading-tight">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-[#D9DFD7] rounded-2xl p-4 sm:p-6 mb-10 shadow-sm border border-[#D9DFD7]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-[#415765]">
                2,500+
              </div>
              <div className="text-[#415765]/70 text-sm">Premium Members</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-[#415765]">
                98%
              </div>
              <div className="text-[#415765]/70 text-sm">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-[#415765]">
                24/7
              </div>
              <div className="text-[#415765]/70 text-sm">Priority Support</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6">
          <Link to={"/membership"}>
            <button className="px-6 py-3 bg-[#415765] text-white font-semibold rounded-full shadow hover:bg-[#2d4351] hover:cursor-pointer transition">
              Unlock Premium Benefits
            </button>
          </Link>
        </div>

        <p className="text-[#415765]/60 text-xs sm:text-sm mt-3">
          Cancel anytime • 30-day money-back guarantee
        </p>
      </div>
    </section>
  );
};

export default MembershipSection;
