import React from "react";

const Carousel = () => {
  return (
    <div>
      <!-- Carousel Section -->
<section class="relative py-20 px-6 md:px-12 max-w-7xl mx-auto">
  <!-- Slides -->
  <div class="carousel relative overflow-hidden rounded-xl shadow-lg">
    <!-- Slide 1 -->
    <div class="carousel-item relative flex flex-col lg:flex-row items-center gap-6 transition-all duration-500">
      <!-- Left Content -->
      <div class="lg:w-1/2 text-center lg:text-left p-6">
        <h2 class="text-4xl lg:text-5xl font-bold mb-4 text-art-coral">Discover Our Pottery</h2>
        <p class="text-gray-700 mb-6">
          Explore unique handmade pottery pieces crafted with care and creativity. Perfect for your home or gifting.
        </p>
        <button class="btn btn-primary">Shop Now</button>
      </div>
      <!-- Right Image -->
      <div class="lg:w-1/2">
        <img src="https://images.unsplash.com/photo-1600185366250-18e7e1a2e2fa?auto=format&fit=crop&w=600&q=80" 
             alt="Pottery" class="rounded-lg shadow-lg w-full h-auto object-cover">
      </div>
    </div>

    <!-- Slide 2 -->
    <div class="carousel-item relative flex flex-col lg:flex-row items-center gap-6 transition-all duration-500 hidden">
      <!-- Left Content -->
      <div class="lg:w-1/2 text-center lg:text-left p-6">
        <h2 class="text-4xl lg:text-5xl font-bold mb-4 text-art-gold">Handmade Ceramics</h2>
        <p class="text-gray-700 mb-6">
          Each ceramic piece tells a story. Add elegance to your living space with our exclusive collection.
        </p>
        <button class="btn btn-primary">Explore More</button>
      </div>
      <!-- Right Image -->
      <div class="lg:w-1/2">
        <img src="https://images.unsplash.com/photo-1600185366250-18e7e1a2e2fa?auto=format&fit=crop&w=600&q=80" 
             alt="Ceramics" class="rounded-lg shadow-lg w-full h-auto object-cover">
      </div>
    </div>

    <!-- Controls -->
    <button class="absolute left-4 top-1/2 transform -translate-y-1/2 btn btn-circle btn-sm" onclick="prevSlide()">❮</button>
    <button class="absolute right-4 top-1/2 transform -translate-y-1/2 btn btn-circle btn-sm" onclick="nextSlide()">❯</button>
  </div>
</section>

<script>
  const slides = document.querySelectorAll(".carousel-item");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.add("hidden");
      if(i === index) slide.classList.remove("hidden");
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);
</script>

    </div>
  );
};

export default Carousel;
