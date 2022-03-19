import React, { useEffect, useState } from "react";

import {
  ReviewsSect,
  ReviewsSection,
  ReviewsTitle,
  ReviewsWrapper,
  LineAfter,
  Container,
  Image,
  ImgContainer,
  Wrapper,
  ReviewDescription,
  ReviewContainer,
  ReviewPersonTitle,
  Rating,
  SlideDiv,
  Slide,
} from "./ReviewsElements";
import "./styles.css";
const reviews = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1645528923001-581af59a419c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "lorem impus lsjadlas lsaldgla lsagljlk ;a sldioashg lasdlkg lknsldga oia dlsagoi",
    name: "Mahesh b ",
    courseName: "RPA Basics",
    rating: 5,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1645529324261-9f72a3bfe5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    description:
      "lorem impus lsjadlas lsaldgla lsagljlk ;a sldioashg lasdlkg lknsldga oia dlsagoi",
    name: "Mahesh b ",
    courseName: "RPA Advanced",
    rating: 5,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1645528098824-5644b1671fbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    description:
      "lorem impus lsjadlas lsaldgla lsagljlk ;a sldioashg lasdlkg lknsldga oia dlsagoi",
    name: "Mahesh b ",
    courseName: "RPA Advanced",
    rating: 5,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1645389418083-f709c6ef7a66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    description:
      " lorem impus lsjadlas lsaldgla lsagljlk ;a sldioashg lasdlkg lknsldga oia dlsagoilorem impus lsjadlas lsaldgla lsagljlk ;a sldioashg lasdlkg lknsldga oia dlsagoilorem impus lsjadlas lsaldgla lsagljlk ;a sldioashg lasdlkg lknsldga oia dlsagoi",
    name: "Mahesh b ",
    courseName: "RPA Advanced",
    rating: 5,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1645544311737-24c0f91685e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    description:
      "lorem impus lsjadlas lsaldgla lsagljlk ;a sldioashg lasdlkg lknsldga oia dlsagoi lorem impus lsjadlas lsaldgla lsagljlk ;a sldioashg lasdlkg lknsldga oia dlsagoi",
    name: "Mahesh b ",
    courseName: "RPA Advanced",
    rating: 5,
  },
];

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = React.useRef(null);
  const delay = 2500;
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <ReviewsSect>
      <ReviewsSection>
        <ReviewsWrapper>
          <ReviewsTitle>What our students Said</ReviewsTitle>
          <LineAfter />
          <Container>
            <Wrapper>
              <SlideDiv
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                {reviews.map((rev, id) => (
                  <Slide key={id}>
                    <ImgContainer>
                      <Image alt="review" src={rev.image} />
                    </ImgContainer>
                    <ReviewContainer>
                      <ReviewDescription>{rev.courseName}</ReviewDescription>
                      <ReviewPersonTitle>{rev.name}</ReviewPersonTitle>
                      <ReviewDescription>{rev.description}</ReviewDescription>
                      <Rating>
                        5 <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </Rating>
                    </ReviewContainer>
                  </Slide>
                ))}
              </SlideDiv>
            </Wrapper>
          </Container>
        </ReviewsWrapper>
      </ReviewsSection>
    </ReviewsSect>
  );
};

export default Reviews;
