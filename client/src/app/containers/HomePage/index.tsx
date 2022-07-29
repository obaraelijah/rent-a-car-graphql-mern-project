import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { BookCard } from '../../components/bookC ard';
import { Footer } from '../../components/footer';
import { Marginer } from '../../components/marginer';
import { Navbar } from '../../components/navbar/index'
import { AboutUs } from './aboutUs';
import { BookingSteps } from './bookingSteps';
import { TopCars } from './topCars';
import { TopSection } from './topSection'


const PageContainer = styled.div`
  ${tw `
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;


export function Homepage() {
    return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer  direction='vertical' margin="4em"/>
      <BookCard />
      <Marginer  direction='vertical' margin="10em"/>
      <BookingSteps />
      <Marginer  direction='vertical' margin="8em"/>
      <AboutUs />
      <Marginer  direction='vertical' margin="8em"/>
      <TopCars />
      <Footer />
    </PageContainer>
    )
};