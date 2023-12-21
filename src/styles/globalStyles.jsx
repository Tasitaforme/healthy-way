import { createGlobalStyle } from 'styled-components';
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

    input[type='radio'] {
        height: 12px;
        width: 12px;
        position: relative;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: none;
    }

    input[type='radio']:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--black-secondary);
        border: 1px solid var(--grey-light);
    }

    input[type='radio']:checked:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #e3ffa8;
        border: none;
        transform: translate(-50%, -50%);
        visibility: visible;
    }

    input {outline: none;}
    input:-webkit-autofill {
        -webkit-box-shadow: inset 0 0 0 50px var(--black-secondary) !important; 
        -webkit-text-fill-color: var(--white);
}

`;
