import React from "react";
import {
  Crown,
  Star,
  Gift,
  Truck,
  Headphones,
  Unlock,
  Sparkles,
  Check,
  Shield,
  Clock,
  Calendar,
  Heart,
} from "lucide-react";

const Membership = () => {
  const plans = [
    {
      name: "Premium",
      price: "$99",
      period: "year",
      popular: true,
      features: [
        "All Basic features",
        "20% discount on all products",
        "Early access to new collections",
        "Free shipping on all orders",
        "Priority customer support",
        "Exclusive pottery workshops",
        "Monthly masterclasses",
        "Personalized recommendations",
      ],
    },
    {
      name: "Basic",
      price: "$12",
      period: "month",
      popular: false,
      features: [
        "10% discount on all products",
        "Early access to sales",
        "Free shipping on orders over $100",
        "Standard customer support",
        "Quarterly workshops",
        "Basic pottery guides",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Exclusive Discounts",
      description:
        "Enjoy members-only pricing with special discounts on our entire pottery collection",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Early Access",
      description:
        "Get 48-hour advance access to new collections and limited edition pieces",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Free Shipping",
      description:
        "Complimentary shipping on all orders with no minimum purchase required",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Priority Support",
      description: "24/7 dedicated customer support with faster response times",
    },
    {
      icon: <Unlock className="w-8 h-8" />,
      title: "Exclusive Content",
      description:
        "Access members-only tutorials, pottery tips, and design guides",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "VIP Events",
      description:
        "Invitations to exclusive pottery exhibitions and member-only events",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E9E9E9] to-[#F4F0ED] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-[#415765] to-[#5a6f7f] text-white px-6 py-2 rounded-full mb-6">
            <Crown className="w-5 h-5 mr-2" fill="currentColor" />
            <span className="font-medium">Premium Membership</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#415765] mb-4">
            Elevate Your Pottery Experience
          </h1>
          <p className="text-xl text-[#415765]/80 max-w-2xl mx-auto">
            Join our exclusive community of pottery enthusiasts and unlock a
            world of premium benefits, special privileges, and unforgettable
            experiences.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#F4F0ED] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#D9DFD7] group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#415765] to-[#5a6f7f] rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#415765] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#415765]/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Plans */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#415765] mb-4">
              Choose Your Plan
            </h2>
            <p className="text-[#415765]/80 max-w-2xl mx-auto">
              Select the membership that best fits your pottery journey. Both
              plans come with our satisfaction guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 border-2 transition-all duration-300 ${
                  plan.popular
                    ? "border-[#415765] bg-[#F4F0ED] shadow-xl scale-105"
                    : "border-[#D9DFD7] bg-[#F4F0ED] shadow-sm"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#415765] text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#415765] mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-[#415765]">
                      {plan.price}
                    </span>
                    <span className="text-[#415765]/70 ml-2">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-[#415765]/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#415765] text-white hover:bg-[#344553]"
                      : "bg-[#D9DFD7] text-[#415765] hover:bg-[#c8d0c5]"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="bg-[#F4F0ED] rounded-2xl p-8 shadow-sm border border-[#D9DFD7] max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#D9DFD7] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-[#415765]" />
            </div>
            <h2 className="text-2xl font-bold text-[#415765] mb-4">
              Satisfaction Guaranteed
            </h2>
            <p className="text-[#415765]/80 mb-6">
              We're confident you'll love your membership. If you're not
              satisfied within the first 30 days, we'll refund your payment in
              full, no questions asked.
            </p>
            <div className="flex items-center justify-center text-sm text-[#415765]/60">
              <Clock className="w-4 h-4 mr-2" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#415765] text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "Can I cancel my membership anytime?",
                answer:
                  "Yes, you can cancel your membership at any time. Your benefits will remain active until the end of your billing period.",
              },
              {
                question: "How do I access exclusive content?",
                answer:
                  "Once you become a member, you'll receive login credentials to access our members-only portal with all exclusive content.",
              },
              {
                question: "Are the discounts applicable to sale items?",
                answer:
                  "Yes, your member discounts stack with existing sales for even greater savings.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-[#F4F0ED] rounded-2xl p-6 shadow-sm border border-[#D9DFD7]"
              >
                <h3 className="font-semibold text-[#415765] mb-2">
                  {faq.question}
                </h3>
                <p className="text-[#415765]/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="w-16 h-16 bg-gradient-to-br from-[#415765] to-[#5a6f7f] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" fill="currentColor" />
          </div>
          <h2 className="text-3xl font-bold text-[#415765] mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-[#415765]/80 mb-8 max-w-2xl mx-auto">
            Thousands of pottery lovers are already enjoying premium benefits.
            Join them today and start your enhanced pottery journey.
          </p>
          <button className="bg-gradient-to-r from-[#415765] to-[#5a6f7f] text-white px-12 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300">
            Become a Member Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Membership;
