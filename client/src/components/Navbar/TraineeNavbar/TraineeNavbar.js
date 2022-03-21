import React, { useEffect, useState } from "react";
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
  CartBox,
  FaSearchIcon,
  FaCartIcon,
  ProfileBoxRes,
  ProfileBoxRes1,
  CartQuantity1,
  ProfileImg1,
} from "./TraineeNavbarElements.js";
import logo from "../../../images/logo-rm1.png";
import { logOut } from "../../../redux/userRedux.js";
import axios from "axios";

const TraineeNavbar = ({ toggleMenuItems }) => {
  let navigate = useNavigate();
  const [traineeDetails, setTraineeDetails] = useState([]);

  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const type = useSelector((state) => state.user.currentUser.type);
  const dispatch = useDispatch();

  const onLogoutHandler = async () => {
    dispatch(logOut());
    navigate("/");
  };
  const token = user?.accessToken;
  useEffect(() => {
    const onImageGetHandler = async () => {
      const res = await axios.get(`/trainee/details/get/${user?.id}`, {
        headers: { authorization: "Bearer " + token },
      });
      setTraineeDetails(res.data);
      console.log(res.data);
    };
    onImageGetHandler();
  }, [user.id, token]);
  return (
    <Nav>
      <LogoContainer>
        <Link
          style={{ textDecoration: "none", color: "#ee6c4d" }}
          to={`/${type}`}
        >
          <LogoImage src={logo} alt="brand " />
        </Link>
      </LogoContainer>
      <MenuContainer>
        <MenuItem>
          {/* redirect to home page */}
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "#ee6c4d" }}
              to={`/${user?.type}`}
            >
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "#ee6c4d" }}
              to="/courses"
            >
              Courses
            </Link>
          </NavItem>
          <NavItem>
            <Link
              style={{ textDecoration: "none", color: "#ee6c4d" }}
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
            {user?.role === 1 && (
              <Link
                style={{ textDecoration: "none", color: "#ee6c4d" }}
                to={`/user/admin/dashboard`}
              >
                Admin
              </Link>
            )}
          </RightbarContainerList>
          <RightbarContainerList>
            <Link
              style={{ textDecoration: "none", color: "#ee6c4d" }}
              to={`/${user?.type}/profile/update/${user?.id}`}
            >
              Profile
            </Link>
          </RightbarContainerList>
          {/* <RightbarContainerList>
            <CartBox>
              <Link
                to={`/${user?.type}/cart`}
                style={{ textDecoration: "none", color: "#ee6c4d" }}
              >
                <FaCartIcon />
              </Link>
            </CartBox>
            <CartQuantity>{quantity}</CartQuantity>
          </RightbarContainerList> */}
          <RightbarContainerList onClick={onLogoutHandler}>
            <Link
              style={{ textDecoration: "none", color: "#ee6c4d" }}
              to={`/login`}
            >
              Logout
            </Link>
          </RightbarContainerList>
          {traineeDetails?.map((trainee) => (
            <Link
              style={{ textDecoration: "none", color: "#ee6c4d" }}
              to={`/${user?.type}/profile/update/${user?.id}`}
            >
              <ProfileImg src={`${trainee.trainee_image}`} alt="Profile" />
            </Link>
          ))}
        </RightbarContainerMenu>
      </RightbarContainer>
      <ProfileBoxRes>
        <ProfileBoxRes1>
          <CartBox>
            <Link
              to={`/${user?.type}/cart`}
              style={{ textDecoration: "none", color: "#ee6c4d" }}
            >
              <FaCartIcon /> <CartQuantity1>{quantity}</CartQuantity1>
            </Link>
          </CartBox>
          <Link
            style={{ textDecoration: "none", color: "#ee6c4d" }}
            to={`/${user?.type}/profile/update/${user?.id}`}
          >
            {traineeDetails?.map((trainee) => (
              <ProfileImg1 src={`${trainee.trainee_image}`} alt="Profile" />
            ))}
          </Link>
          <MenuBarContainer onClick={toggleMenuItems} logout={onLogoutHandler}>
            <FaBars />
          </MenuBarContainer>
        </ProfileBoxRes1>
      </ProfileBoxRes>
    </Nav>
  );
};
export default TraineeNavbar;
