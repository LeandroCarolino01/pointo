import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

const NavLink = styled(Nav.Link)`
    color: white !important;
    &.active {
        color: red !important;
    } 
    &:hover {
        color:blue !important;
    }
`
const Logo = styled(Navbar.Brand)`
    color: white !important;
`

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const HomeContainer = styled(Container)`
  height: 100%;
  width: 100%;
  z-index: 100;
`;
const HomeButton = styled(Button)`
  height: 50px;
  z-index: 100;
`;

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -100;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navbar expand="lg">
        <Logo href="#home">Pointo</Logo>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink href="#home">Sign up</NavLink>
            <NavLink href="#link">Log in</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Wrapper>
        <Video autoPlay muted loop>
          <source src="../../background.mp4" type="video/mp4" />
        </Video>
        <HomeButton variant="danger" size="lg">
          Wanna know more?
        </HomeButton>
      </Wrapper>
    </HomeContainer>
  );
};

export default Home;
