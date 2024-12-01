import React, { useContext } from "react";
import { Context } from "../index";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  ADMIN_ROUTE,
  BUY_ROUTE,
  LIBRARY_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  MAINPAGE_ROUTE, 
  ABOUTBOOK_ROUTE
} from "../utilis/consts";
import { NavLink, useLocation } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";

const NavBar = observer(() => {
  const history = useHistory();
  const { user } = useContext(Context);
  const location = useLocation();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
      {/* <NavLink
          style={{ color: "white", textDecoration: "none" }}
          to={LIBRARY_ROUTE}
        >
          BookPoisk
        </NavLink> */}

    
         { location.pathname ===  LIBRARY_ROUTE ? (
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          to={MAINPAGE_ROUTE}
        >
          BookPoisk
        </NavLink>
        ) : (
          <NavLink
          style={{ color: "white", textDecoration: "none" }}
          to={LIBRARY_ROUTE}
        >
          BookPoisk
        </NavLink>
        )} 
        <Dropdown>
          Возможно будет дропдаун для меня но хз
        </Dropdown>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-light"
                id="dropdown-basic"
                style={{ marginLeft: "20px" }}
              >
                Пользователь
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => history.push(BUY_ROUTE)}>
                  Купленные книги
                </Dropdown.Item>
                <Dropdown.Item onClick={() => history.push(LOGIN_ROUTE)}>
                  Выйти
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <NavLink
              to={REGISTRATION_ROUTE}
              style={{ textDecoration: "none" }}
            >
              <Button variant={"outline-light"}>Регистрация</Button>
            </NavLink>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
