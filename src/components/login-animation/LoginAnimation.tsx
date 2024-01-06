import React from 'react';
import { Box, keyframes, styled } from '@mui/material';

import {
    WorldHeart,
    RestaurantPlate,
    RestaurantMenu,
    RestaurantFork,
    KitchenCabinet,
    FoodDonation,
    CharityFood,
} from '@/theme/signupAnimations';

interface OthersProps { }

const LoginAnimation: React.FC<OthersProps> = React.memo(() => {

    const Logo = styled(Box)(() => ({
        overflow: 'hidden',
        padding: '60px 0',
        background: 'transparent',
        whiteSpace: 'nowrap',
        position: 'relative',
        margin: '37px auto'
    }));

    const AnimatedSvg = styled(Box)(() => ({
        height: '50px',
        margin: '0 40px'

    }));

    const AnimatedContainer = styled(Box)(() => ({
        display: 'inline-flex',
        animation: `52s ${slide} infinite linear`

    }));

    const slide = keyframes`
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    `;

    return (
        <Logo>
            <AnimatedContainer>
                <AnimatedSvg>
                    <WorldHeart />
                </AnimatedSvg>
                <AnimatedSvg>
                    <RestaurantPlate />
                </AnimatedSvg>
                <AnimatedSvg>
                    <RestaurantMenu />
                </AnimatedSvg>

                <AnimatedSvg>
                    <WorldHeart />
                </AnimatedSvg>
                <AnimatedSvg>
                    <RestaurantPlate />
                </AnimatedSvg>
                <AnimatedSvg>
                    <RestaurantMenu />
                </AnimatedSvg>
                <AnimatedSvg>
                    <CharityFood />
                </AnimatedSvg>

            </AnimatedContainer>


            <AnimatedContainer>
                <AnimatedSvg>
                    <RestaurantFork />
                </AnimatedSvg>
                <AnimatedSvg>
                    <KitchenCabinet />
                </AnimatedSvg>
                <AnimatedSvg>
                    <FoodDonation />
                </AnimatedSvg>
                <AnimatedSvg>
                    <CharityFood />
                </AnimatedSvg>

                <AnimatedSvg>
                    <RestaurantFork />
                </AnimatedSvg>
                <AnimatedSvg>
                    <KitchenCabinet />
                </AnimatedSvg>
                <AnimatedSvg>
                    <FoodDonation />
                </AnimatedSvg>

            </AnimatedContainer>

        </Logo>
    );
});

export default LoginAnimation;
