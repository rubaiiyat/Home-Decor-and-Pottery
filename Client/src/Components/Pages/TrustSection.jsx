import { Truck, Lock, RotateCcw } from "lucide-react";

export default function TrustSection() {
  return (
    <div className="container mx-auto px-6 lg:px-28 py-16 bg-[#F4F0ED]">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#415765] mb-3">
          Why Shop With Us?
        </h2>
        <p className="text-[#415765]/80 max-w-2xl mx-auto">
          We’re committed to giving you the best shopping experience — from fast
          delivery to secure checkout and hassle-free returns.
        </p>
      </div>

      {/* Trust Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 hover:cursor-pointer">
        <div className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-[#F4F0ED] to-[#E9E9E9] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#D9DFD7] group">
          <div className="p-3 bg-white rounded-full mb-4 shadow-md group-hover:bg-[#415765] transition-colors duration-300">
            <Truck className="w-8 h-8 text-[#415765] group-hover:text-[#F4F0ED] transition-colors duration-300" />
          </div>
          <h3 className="font-semibold text-lg text-[#415765] mb-2">
            Free Shipping
          </h3>
          <p className="text-[#415765]/80">
            Get your order delivered at no extra cost
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-[#F4F0ED] to-[#E9E9E9] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#D9DFD7] group">
          <div className="p-3 bg-white rounded-full mb-4 shadow-md group-hover:bg-[#415765] transition-colors duration-300">
            <Lock className="w-8 h-8 text-[#415765] group-hover:text-[#F4F0ED] transition-colors duration-300" />
          </div>
          <h3 className="font-semibold text-lg text-[#415765] mb-2">
            Secure Payment
          </h3>
          <p className="text-[#415765]/80">
            Your payment information is protected
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-[#F4F0ED] to-[#E9E9E9] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#D9DFD7] group">
          <div className="p-3 bg-white rounded-full mb-4 shadow-md group-hover:bg-[#415765] transition-colors duration-300">
            <RotateCcw className="w-8 h-8 text-[#415765] group-hover:text-[#F4F0ED] transition-colors duration-300" />
          </div>
          <h3 className="font-semibold text-lg text-[#415765] mb-2">
            Easy Returns
          </h3>
          <p className="text-[#415765]/80">
            Hassle-free returns within 30 days
          </p>
        </div>
      </div>
    </div>
  );
}
