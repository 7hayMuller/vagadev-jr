import { Container } from "./style";
import OutridersBanner from "../../assets/img/product-outriders.png";
import DonkeyKongBanner from "../../assets/img/product-donkey-kong.png";
import CyberpunkBanner from "../../assets/img/product-cyberpunk2077.png";
import Product from "./product";

const ProductList = ({setBagTotal, bagTotal}) => {
  const products = [
    {
      imagePath: OutridersBanner,
      title: "Outriders",
      price: "200,00",
    },
    {
      imagePath: CyberpunkBanner,
      title: "Cyberpunk 2077",
      price: "200,00",
    },
    {
      imagePath: DonkeyKongBanner,
      title: "Donkey Kong Country Tropical Freeze",
      price: "200,00",
    },
  ];

  return (
    <Container>
      <li>
        {products.map((product, index) => (
          <ul key={index}> 
              <Product product={product} setBagTotal={setBagTotal} bagTotal={bagTotal} />
          </ul>
        ))}
      </li>
    </Container>
  );
};

export default ProductList;
