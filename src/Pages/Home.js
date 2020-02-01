import React from 'react';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

const HomeContainer = styled(Container)`
    height: 100%;
`
const HomeButton = styled(Button)`
    height: 50px;
`;

const Wrapper = styled.section`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const Home = () => {
    
    return (
        <HomeContainer>
            <Navbar expand="lg">
                <Navbar.Brand href="#home">Pointo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link  href="#home">Sign up</Nav.Link>
                        <Nav.Link  href="#link">Log in</Nav.Link>
                    </Nav>
                
                </Navbar.Collapse>
            </Navbar>
            <Wrapper>
                <HomeButton variant="danger" size="lg" >Wanna know more?</HomeButton>
            </Wrapper>
        </HomeContainer>
    );
}

export default Home;