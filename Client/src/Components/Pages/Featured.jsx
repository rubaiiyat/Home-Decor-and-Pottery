const Featured = () => {
  return (
    <div className="bg-[#E9E9E9] px-4 md:px-28 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#415765] mb-10">
        Featured Collections
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
        {/* Card 1 */}
        <div className="bg-[#D9DFD7] rounded-2xl w-full max-w-96 shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <img
            src="https://i.ibb.co.com/1t8ZjqQ6/erasebg-transformed.png"
            alt="Artisan Ceramics"
            className="h-64 w-full object-contain"
          />
          <div className="p-5 text-center">
            <h3 className="text-xl font-semibold text-[#415765]">
              Artisan Ceramics
            </h3>
            <p className="text-sm text-[#5f6d74] mt-1">Dining Collection</p>
            <button className="mt-4 px-6 py-2 text-lg font-semibold text-white bg-[#415765] rounded-lg hover:bg-[#2f3d47] transition-colors">
              $10
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#E8D7D9] rounded-2xl w-full max-w-96 shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <img
            src="https://i.ibb.co.com/NdMFqH6C/erasebg-transformed-1.png"
            alt="Natural Clay"
            className="h-64 w-full object-contain"
          />
          <div className="p-5 text-center">
            <h3 className="text-xl font-semibold text-[#415765]">
              Natural Clay
            </h3>
            <p className="text-sm text-[#5f6d74] mt-1">Tableware Set</p>
            <button className="mt-4 px-6 py-2 text-lg font-semibold text-white bg-[#415765] rounded-lg hover:bg-[#2f3d47] transition-colors">
              $15
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#D7DFE8] rounded-2xl w-full max-w-96 shadow-md overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <img
            src="https://i.ibb.co.com/F10qBR8/erasebg-transformed-1.webp"
            alt="Handcrafted Pottery"
            className="h-64 w-full object-contain"
          />
          <div className="p-5 text-center">
            <h3 className="text-xl font-semibold text-[#415765]">
              Handcrafted Pottery
            </h3>
            <p className="text-sm text-[#5f6d74] mt-1">Home Collection</p>
            <button className="mt-4 px-6 py-2 text-lg font-semibold text-white bg-[#415765] rounded-lg hover:bg-[#2f3d47] transition-colors">
              $12
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
