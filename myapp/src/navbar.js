import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
    return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container style={{ backgroundColor: "black", height: "3rem", textAlign:"left", display:"flex", alignItems:"center" }}>
                <Navbar.Brand style={{color:"white", textDecoration:"none", paddingLeft:"1rem"}} href="/mascotas">Adóptame</Navbar.Brand>
            </Container>
        </Navbar>
    </>
    );
}

export default NavBar;