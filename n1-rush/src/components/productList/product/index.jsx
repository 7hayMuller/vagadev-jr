import {Container , Image, Info, Line} from './style';
import Button from "../../button";

const Product = ({product}) => {
    return (
        <Container>
            <Image>
                <img src={product.imagePath} alt={product.title}/>
            </Image>
            <Line/>
            <Info>
                <small> {product.title} </small>
                <h6> {`R$ ${product.price}`} </h6> 
                <Button/>
            </Info>
        </Container>
    )

}

export default Product;