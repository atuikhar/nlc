import React from 'react';

import { Box, styled } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import About from '@/components/About';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import { photos } from '@/common/utils/appConstants';
import useResponsive from '@/common/hooks/useResponsive';

export const HeroWrapper = styled(Box)(({ theme }) => ({
  height: '80dvh',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: theme.spacing(4.5),
  [theme.breakpoints.down('md')]: {
    height: '30dvh',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

const FluidWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(0, 0, 5, 0),
  [theme.breakpoints.up('xl')]: {
    width: '70%',
  },
  [theme.breakpoints.down('md')]: {
    minHeight: '30dvh',
  },
}));

export default function Home(): React.ReactElement {
  const isDesktop = useResponsive('up', 'md');
  return (
    <>
      <Helmet>
        <title>Home | Ngariching Living Center</title>
      </Helmet>
      <Box display="flex" justifyContent="center" bgcolor="white">
        <FluidWrapper>
          <Header />
          <Box flex={1}>
            <Carousel
              stopAutoPlayOnHover={false}
              navButtonsAlwaysVisible
              interval={8000}
              indicators={false}
              animation="slide"
              changeOnFirstRender={true}
              height={isDesktop ? '80dvh' : '30dvh'}
            >
              {photos?.map((ele, i) => (
                <HeroWrapper
                  sx={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${ele?.img})`,
                  }}
                  key={i}
                />
              ))}
            </Carousel>
            <About />
          </Box>
        </FluidWrapper>
      </Box>
    </>
  );
}
