import Carousel from "../../components/carousel";
import MediumBanners from "../../components/mediumBanners";
import TopBar from "../../components/topBar";
import HighlightIcon from "../../assets/svgs/highlight-icon.svg";
import { Title, Products } from "./style";
import ProductList from "../../components/productList";

const Home = () => {
  return (
    <>
      <Carousel />
      <TopBar />
      <MediumBanners />
      <Products>
        <Title>
          <img src={HighlightIcon} alt="icon" />
          <h2> Produtos em destaque </h2>
        </Title>
        <ProductList/>
      </Products>
    </>
  );
};

export default Home;
