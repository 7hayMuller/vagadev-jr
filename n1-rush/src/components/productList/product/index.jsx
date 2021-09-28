import { useState } from "react";
import { Container, Image, Info, Line } from "./style";
import Button from "../../button";
import Modal from "../../modal";

const Product = ({ product, setBagTotal,bagTotal }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container>
        <Image>
          <img src={product.imagePath} alt={product.title} />
        </Image>
        <Line />
        <Info>
          <small> {product.title} </small>
          <h6> {`R$ ${product.price}`} </h6>
          <Button setOpen={setOpen} setBagTotal={setBagTotal} bagTotal={bagTotal}/>
        </Info>
      </Container>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
};

export default Product;
