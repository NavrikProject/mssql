import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  LogoContainer,
  LogoImage,
  MenuBarContainer,
  MenuContainer,
  MenuItem,
  Nav,
  NavItem,
  RightbarContainer,
  SearchForm,
  ProfileImg,
  SearchBoxDiv,
  RightbarContainerMenu,
  RightbarContainerList,
  SearchBoxInput,
  FaSearchIcon,
} from "./JobNavbarElements.js";
import logo from "../../../images/logo-rm1.png";
import { logOut } from "../../../redux/userRedux.js";

const JobNavbar = ({ toggleMenuItems }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogoutHandler = () => {
    dispatch(logOut());
    navigate("/");
  };
  const user = useSelector((state) => state.user.currentUser);
  const type = useSelector((state) => state.user.currentUser.type);

  return (
    <Nav>
      <LogoContainer>
        <Link style={{ textDecoration: "none", color: "#111" }} to={`/${type}`}>
          <LogoImage src={logo} alt="brand " />
        </Link>
      </LogoContainer>
      <MenuContainer>
        <MenuItem>
          {/* redirect to home page */}
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "#111" }}
              to={`/${user?.type}`}
            >
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "#111" }}
              to="/courses"
            >
              Courses
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "#111" }}
              to="/trainers"
            >
              Instructor
            </Link>
          </NavItem>
        </MenuItem>
      </MenuContainer>
      <RightbarContainer>
        <RightbarContainerMenu>
          <RightbarContainerList>
            <SearchBoxDiv>
              <SearchForm>
                <SearchBoxInput placeholder="Search....."></SearchBoxInput>
                <FaSearchIcon />
              </SearchForm>
            </SearchBoxDiv>
          </RightbarContainerList>
          <RightbarContainerList>
            <Link
              style={{ textDecoration: "none", color: "#111" }}
              to={`/${user?.type}/profile/update/${user?.id}`}
            >
              Profile
            </Link>
          </RightbarContainerList>
          <RightbarContainerList onClick={onLogoutHandler}>
            <Link
              style={{ textDecoration: "none", color: "#111" }}
              to={`/login`}
            >
              Logout
            </Link>
          </RightbarContainerList>
        </RightbarContainerMenu>
        <ProfileImg src="https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </RightbarContainer>

      <MenuBarContainer onClick={toggleMenuItems}>
        <FaBars />
      </MenuBarContainer>
    </Nav>
  );
};
export default JobNavbar;
