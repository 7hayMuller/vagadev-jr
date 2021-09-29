import Carousel from "../../components/carousel";
import MediumBanners from "../../components/mediumBanners";
import TopBar from "../../components/topBar";
import HighlightIcon from "../../assets/svgs/highlight-icon.svg";
import { Title, Products, App } from "./style";
import ProductList from "../../components/productList";
import Footer from "../../components/footer";
import React from "react";


const Home = () => {

  const [bagTotal, setBagTotal] = React.useState(0);
  
  return (
    
    <App>
      <Carousel />
      <TopBar bagTotal={bagTotal}/>
      <MediumBanners />
      <Products>
        <Title>
          <img src={HighlightIcon} alt="icon" />
          <h2> Produtos em destaque </h2>
        </Title>
        <ProductList setBagTotal={setBagTotal} bagTotal={bagTotal}/>
      </Products>     
      <Footer/> 
    </App>
  );
};

export default Home;
