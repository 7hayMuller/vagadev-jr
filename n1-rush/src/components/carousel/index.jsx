import React from "react";
import MortalKombatBanner from "../../assets/img/principal_banner_desktop.jpg";
import Control from "./control";
import { Slider, Details, Price, Container } from "./style";

const Carousel = () => {
  const [page, setPage] = React.useState(1);

  const images = [
    {
      imagePath: MortalKombatBanner,
      title: "Mortal Kombat",
      price: "R$ 299,99",
      description:
        "Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.",
    },
    {
      imagePath: MortalKombatBanner,
      title: "Mortal Kombat",
      price: "R$ 299,99",
      description:
        "Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.",
    },
    {
      imagePath: MortalKombatBanner,
      title: "Mortal Kombat",
      price: "R$ 299,99",
      description:
        "Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.",
    }

  ];

  return (
   
    <>
      <Container>
      {images.map((image, index) => {
        return (
          <Slider key={index} id={`image-${index+1}`}>
            <img src={image.imagePath} alt={image.title} />
            <Details>
              <h3>{image.title}</h3>
              <Price>
                <h1> {image.price.split(",")[0]} </h1>
                <small> ,{image.price.split(",")[1]} </small>
              </Price>
              <p> {image.description} </p>
            </Details>
          </Slider>
        );
      })}
      </Container>
      <Control
        page={page}
        setPage={setPage}
        totalPages={images.length}
        image={images[page - 1]}
      />
   </>
  );
};

export default Carousel;
