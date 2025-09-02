Live Link: https://home-decor-pottery.netlify.app/

# Home Decor Pottery

A modern web application for showcasing and managing pottery products, built using **Tailwind CSS**, **React** and **Express Js** .

## Features

1. **Category-based Product Listing**  
   - The home page displays a list of product categories.  
   - Clicking on a category shows all products belonging to that category.

2. **Top Rated Products**  
   - Products with the highest ratings are highlighted and displayed on the home page.

3. **Authenticated Access for Product Details**  
   - Only authenticated users can view detailed information about a product.

4. **Add Products (Authenticated Users Only)**  
   - Users must be logged in to add new products to the platform.

5. **Edit/Delete Own Products**  
   - Authenticated users can update or delete **only the products they have added**.

6. **Restricted Access to Auth Pages**  
   - Logged-in users cannot access the registration or login pages.

7. **Secure Product Access**  
   - Users cannot access or manipulate other users' products using product IDs.

8. **Automatic Author Display**  
   - The author’s name is automatically displayed for products added by a user and **cannot be changed** manually.

## Technologies & Libraries Used

- **Frontend:** React, Tailwind CSS  
- **Backend:** Express Js
- **Icons:** React Icons, Lucide-React  
- **Slider / Carousel:** Swiper  
- **Alerts & Notifications:** SweetAlert2, React Toast  
- **Authentication:** Firebase
- **Database:** MongoDB
