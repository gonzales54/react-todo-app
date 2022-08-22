import { Navbar, Container, NavLink, Nav} from "react-bootstrap";

const header = () => {
    return(
        <header>
            <Navbar bg="light" expand="lg" variant="light" className="px-2 mb-5">
                <Container fluid>
                    <Navbar.Brand href="#" className="h1 mb-0">Todo App</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink href="#">Home</NavLink>
                    </Nav>
                </Container>
            </Navbar>            
        </header>

    );
}

export default header;