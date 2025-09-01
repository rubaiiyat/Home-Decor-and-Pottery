import React from "react";
import SliderComponent from "./SliderComponent";
import Featured from "./Featured";
import CategorySection from "./CategorySection";
import BestSellingProducts from "./BestSellingProducts";
import TrustSection from "./TrustSection";
import MembershipSection from "./MembershipSection";

const Home = () => {
  return (
    <div>
      <SliderComponent></SliderComponent>
      <Featured></Featured>
      <CategorySection></CategorySection>
      <BestSellingProducts></BestSellingProducts>
      <TrustSection></TrustSection>
      <MembershipSection></MembershipSection>
    </div>
  );
};

export default Home;
