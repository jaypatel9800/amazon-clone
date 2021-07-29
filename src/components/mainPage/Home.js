import React from "react";
import "./home.css";
import Product from "./product";
import Banner from "../../assets/homeBanner.jpg";
import MobilePhone from "../../assets/mobilePhone.webp";
import Leptop from "../../assets/leptopImage.jpg";
import Headphone from "../../assets/Headphone.jpg";
import watch from "../../assets/watch.jpg";
import Dot from "../../assets/amazonDot.jpg";
import camara from "../../assets/camara.jpg";
import waterPure from "../../assets/waterPurifier.jpg";
import cleaner from "../../assets/cleaner.jpg";
import tv from "../../assets/tv.jpg";
import eyerbuds from "../../assets/eyerbuds.jpg"

const Home = () => {
  return (
    <div className="home">
      <img className="home__image" src={Banner} alt="Banner" />
      <div className="home__row">
        <Product
          id={1}
          price={399.99}
          raiting={5}
          title="OnePlus 9R 5G (Carbon Black, 8GB RAM, 128GB Storage)"
          image={MobilePhone}
        />
        <Product
          id={2}
          price={549.97}
          raiting={4}
          title="Mi Notebook Horizon Edition 14"
          image={Leptop}
        />
      </div>
      <div className="home__row">
        <Product
          id={3}
          price={19.99}
          raiting={4}
          title="Bang & Olufsen Beoplay H9 3rd Gen Wireless Bluetooth Over-Ear Headphones"
          image={Headphone}
        />
        <Product
          id={4}
          price={39.99}
          raiting={5}
          title="FCUK series 2 Full touch Smartwatch with 1.69'' Large display"
          image={watch}
        />
        <Product
          id={5}
          price={22.49}
          raiting={4}
          title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
          image={Dot}
        />
      </div>
      <div className="home__row">
        <Product
          id={6}
          price={289.39}
          raiting={4}
          title="Canon EOS 3000D 18MP Digital SLR Camera (Black)"
          image={camara}
        />
        <Product
          id={7}
          price={89.99}
          raiting={3}
          title="Eureka Forbes AquaSure from Aquaguard Delight (RO+UV+MTDS) 7L water purifier"
          image={waterPure}
        />
        <Product
          id={8}
          price={36.47}
          raiting={4}
          title="Eureka Forbes Sure From Forbes 1200 Watts Insta Clean Vacuum Cleaner"
          image={cleaner}
        />
      </div>
      <div className="home__row">
        <Product
          id={9}
          price={125.46}
          raiting={4}
          title="OnePlus 108 cm (43 inches) Y Series Full HD LED Smart Android TV"
          image={tv}
        />
        <Product
          id={10}
          price={17.99}
          raiting={3}
          title="Noise Air Buds Truly Wireless Earbuds with Mic for Crystal Clear Calls, HD Sound, Smart Touch and 20 Hour Playtime - Jet Black"
          image={eyerbuds}
        />
      </div>
    </div>
  );
};

export default Home;
