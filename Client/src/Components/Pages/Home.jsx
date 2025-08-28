import React from "react";
import SliderComponent from "./SliderComponent";
import Featured from "./Featured";
import CategorySection from "./CategorySection";

const Home = () => {
  return (
    <div>
      <SliderComponent></SliderComponent>
      <Featured></Featured>
      <CategorySection></CategorySection>
    </div>
  );
};

export default Home;
