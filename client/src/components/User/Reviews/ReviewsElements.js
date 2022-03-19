import styled from "styled-components";
export const ReviewsSect = styled.section`
  height: auto;
  background-color: #2d3039;
  width: 100%;
  border: 20px solid #eea255;
`;
export const ReviewsSection = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 50px 0px;
`;
export const ReviewsWrapper = styled.div``;
// page title
export const ReviewsTitle = styled.h1`
  color: #fff;
  font-size: 37px;
  font-weight: 700;
  text-align: center;
`;
export const LineAfter = styled.div`
  margin-bottom: 50px;
  &::before {
    content: "";
    width: 180px;
    height: 4px;
    display: block;
    margin: 0 auto;
    background-color: #9926f0;
  }
  &::after {
    content: "";
    width: 50px;
    height: 4px;
    padding-top: 0.1rem;
    margin: 0 auto;
    display: block;
    background-color: #9926f0;
  }
`;
export const Container = styled.div``;

export const SlideDiv = styled.div`
  white-space: nowrap;
`;
export const Wrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 50vw;
  height: auto;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 10px 0;
`;
export const ReviewDescription = styled.p``;
export const ReviewPersonTitle = styled.h1`
  padding-top: 10px;
  margin: 0;
`;
export const Rating = styled.div`
  color: gold;
`;
export const Slide = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 40px;
  display: inline-block;
`;

export const ImgContainer = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;
`;
export const ReviewContainer = styled.div`
  width: 70%;
  padding: 20px;
  text-align: center;
  margin: 0 auto;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;
