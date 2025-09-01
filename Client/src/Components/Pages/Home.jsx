import React from "react";
import SliderComponent from "./SliderComponent";
import Featured from "./Featured";
import CategorySection from "./CategorySection";
import BestSellingProducts from "./BestSellingProducts";

const Home = () => {
  return (
    <div>
      <SliderComponent></SliderComponent>
      <Featured></Featured>
      <CategorySection></CategorySection>
      <BestSellingProducts></BestSellingProducts>
    </div>
  );
};

export default Home;
