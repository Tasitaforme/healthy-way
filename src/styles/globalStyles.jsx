import { createGlobalStyle } from 'styled-components';
// import 'normalize.css';
import 'modern-normalize';
import PoppinsRegular from '../assets/fonts/Poppins-Regular.ttf';
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf';
import PoppinsSemiBold from '../assets/fonts/Poppins-SemiBold.ttf';
import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'),
        url(${PoppinsRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'),
        url(${PoppinsMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'),
        url(${PoppinsSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'),
        url(${PoppinsBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }
    
    body {
        font-family: Poppins;
        font-size: 14px;
        line-height: 1.43;
        background-color: var(--black-primary);
        color: var(--white);
        width: 100%;
        height: 100vh;
    }
    header {
        background-color: var(--black-secondary);
    }
    h1 {
        font-weight: 500;
        font-size: 30px;
        line-height: 1.2;
    }

    h2 {
        font-weight: 400;
        font-size: 22px;
        line-height: 1.45;
        color: var(--grey-light);
    }

    h3 {
        font-weight: 500;
        font-size: 18px;
        line-height: 1.33;
    }

   
`;
