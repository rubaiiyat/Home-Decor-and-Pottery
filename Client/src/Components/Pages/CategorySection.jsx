import {
  FaLeaf,
  FaGem,
  FaMugHot,
  FaSeedling,
  FaCube,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router";

const categories = [
  { name: "Clay made pottery", icon: <FaLeaf />, color: "#4C8479" },
  { name: "Stoneware", icon: <FaGem />, color: "#275150" },
  { name: "Porcelain", icon: <FaMugHot />, color: "#AABAA3" },
  { name: "Terra Cotta", icon: <FaSeedling />, color: "#46685F" },
  { name: "Ceramics & Architectural", icon: <FaCube />, color: "#4C8479" },
  { name: "Home decor pottery", icon: <FaHome />, color: "#275150" },
];

export default function Categories() {
  // function to generate slug URL
  const generateSlug = (name) =>
    "/category/" + name.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");

  return (
    <section className="py-16 px-6 bg-[#F4F0ED] text-center">
      <div className="max-w-5xl mx-auto">
        {/* Title + Description */}
        <h2 className="text-3xl font-bold mb-3">
          Choose Your Product Category
        </h2>
        <p className="text-gray-600 mb-10">
          Explore our collection of pottery and ceramics, carefully crafted to
          match your lifestyle and décor.
        </p>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={"/shop" + generateSlug(cat.name)}
              className="flex flex-col items-center group transition-transform duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-3" style={{ color: cat.color }}>
                {cat.icon}
              </div>
              <span className="font-medium text-gray-800 group-hover:text-black">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
