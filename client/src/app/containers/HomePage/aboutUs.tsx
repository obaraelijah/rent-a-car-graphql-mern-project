import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `};
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `};
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} alt="" />
      </CarContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Our Rental Deals</Title>
        <InfoText>
        With 3 stations located across 2 car rental locations in Kenya, planning your journey couldn't be easier with Europcar. Find a wide range of brand new economy and luxury car models available across Kenya, with both short and long term car hire options available. We pride ourselves on providing world class service, catering to a range of customer needs, with car rental deals available all year round. So whether you are looking for car rental in Kenya on a budget, or you want to rent a luxury car for a special event, Europcar will have the rental car for you.
        Friendly service, new cars and low prices are part of our every day offer. Whether you are hiring a car for business or pleasure, or you need a car or van, Europcar has the right hire car at Kenya for you.
        Europcar is looking forward to serving you at its car hire branch: Kenya. Remember to always bring your driving license, valid credit card and additional proof of identity (such as a passport if you are hiring abroad).
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}