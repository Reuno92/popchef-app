import {FC} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Nav, Navbar} from 'react-bootstrap';

const Header: FC<any> = () => {

    return (
        <header>
            <Navbar bg="light" expand="lg" className="container-fluid">
                <LinkContainer to={"/"} >
                    <Navbar.Brand>PopChef Test</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-collapsed-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/page">
                            <Nav.Link>Page</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;