import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-D-5ff78a97-f4d3-4242-9344-c1f478aff592._CB428091778_QL85_V1_.jpg"
      ></img>
      <div className="home_row">
        <Product
          id="1231414"
          title="Skinnytaste Meal Prep: Healthy Make-Ahead Meals and Freezer Recipes to Simplify Your Life: A Cookbook"
          price={18.74}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61isyxh7HML._SX407_BO1,204,203,200_.jpg"
        />

        <Product
          id="1231414"
          title="Fire TV Stick 4K streaming device with Alexa built in, Dolby Vision, includes Alexa Voice Remote, latest release"
          price={49.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_UL320_SR320,320_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1231414"
          title="Signature by Levi Strauss & Co. Gold Label Women's Totally Shaping Pull-on Skinny Jeans"
          price={21.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51CYReTTtLL._AC_UL320_SR320,320_.jpg"
        />

        <Product
          id="1231414"
          title="Hanes Men's Ecosmart Fleece Sweatshirt"
          price={15.48}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81Of4J0bA9L._AC_UL320_SR272,320_.jpg"
        />
        <Product
          id="1231414"
          title="Please Like Me (But Keep Away) (Nothing Like I Imagined)"
          price={15.49}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91eJ6j2D4mL._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL270_SR180,270_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1231414"
          title="Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black"
          price={599.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41Kt6SFA37L._AC_US240_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
