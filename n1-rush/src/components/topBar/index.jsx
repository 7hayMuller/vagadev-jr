import { Container, LeftSide, RightSide, Menu } from "./style";
import icon_hamburguer from "../../assets/svgs/icon_hamburguer.svg";
import logo from "../../assets/svgs/logo.svg";
import line from "../../assets/svgs/line.svg";
import search from "../../assets/svgs/search-solid.svg";
import shopBag from "../../assets/svgs/shopping-bag-solid.svg";
import paperPlane from "../../assets/svgs/paper-plane.svg";
import Badge from "../badge";
import MenuPopUp from "../popUpMenu";
import React from "react";

const TopBar = ({ bagTotal }) => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <Container>
      <LeftSide>
        <Menu>
          <img src={icon_hamburguer} alt="menu" onClick={ () => {showMenu ? setShowMenu(false) : setShowMenu(true)} } />
          <MenuPopUp showMenu={showMenu} />
        </Menu>
        <img src={logo} alt="logo N1" />
      </LeftSide>
      <RightSide>
        <img src={paperPlane} alt="paper-plane" />
        <h6> CONTATO </h6>
        <img src={line} alt="line" />
        <img src={search} alt="search" />
        <h6> BUSCAR </h6>
        <img src={line} alt="line" />
        <div>
          <img src={shopBag} alt="shop" />
          <Badge quantity={bagTotal} />
        </div>
      </RightSide>
    </Container>
  );
};

export default TopBar;
