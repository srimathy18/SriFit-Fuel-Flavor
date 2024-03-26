import { Nav, Form, Navbar, Button } from "react-bootstrap";
import HeroImage from "../../assets/images/hero-bg.jpg";
import { useState } from "react";
import AddRecipeForm from "../AddRecipeForm/AddRecipeForm";
const HeaderNav = function () {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="hero_area">
      <div className="bg-box">
        <img src={HeroImage} alt="Hero Background Image" />
      </div>
      <header className="header_section">
        <div className="container">
          <Navbar expand="lg" className="custom_nav-container">
            <Navbar.Brand href="index.html">
              <span>SriFit Fuel & Flavor</span>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarSupportedContent" />

            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="mx-auto">
                <Nav.Item>
                  <Nav.Link href="index.html">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="menu.html">Menu</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="about.html">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="book.html">Book Table</Nav.Link>
                </Nav.Item>
              </Nav>
              <div className="user_option">
                <a href="" className="user_link">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </a>
                <a className="cart_link" href="#">
                  {/* Your SVG for Cart */}
                </a>
                <Form>
                  <Button type="submit" className="nav_search-btn">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </Button>
                </Form>
                <Button
                  type="button"
                  href=""
                  className="order_online"
                  onClick={() => setIsOpen(true)}
                >
                  Add Recipe
                </Button>
                {/* <a href="" className="order_online">
                  Order Online
                </a> */}
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
      <AddRecipeForm
        state={{
          isOpen
        }}
        closeModal={function (): void {
          throw new Error("Function not implemented.");
        }}
        handleSubmit={function (name: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default HeaderNav;
