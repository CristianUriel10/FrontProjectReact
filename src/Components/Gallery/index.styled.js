import styled from 'styled-components';

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 10% 40% 40% 10%;
    height: calc(100vh - 54px);
    .LeftIcon{
        padding: 25%;
        color: rgb(127, 127, 127);
        display: grid;
        grid-template-rows: 33% 33% 33%;
    }
    .Gallery1{
        padding: 5%;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;
        height: calc(100vh - 200px);
        background-color: white;
        border-right: solid black 1px;
    }
    .Gallery1 img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .Gallery1 img:nth-child(1) {
        grid-row-start: 1;
        grid-row-end: 1;
        grid-column-start: 1;
        grid-column-end: 3;
    }
    .Gallery1 img:nth-child(2) {
        grid-row-start: 2;
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 1;
    }
    .Gallery1 img:nth-child(3) {
        grid-row-start: 2;
        grid-row-end: 2;
        grid-column-start: 2;
        grid-column-end: 2;
    }
    .Gallery2{
        padding: 5%;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;
        height: calc(100vh - 200px);
        background-color: white;
        border-right: solid black 1px;
    }
    .Gallery2 img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .Gallery2 img:nth-child(1) {
        grid-row-start: 1;
        grid-row-end: 1;
        grid-column-start: 1;
        grid-column-end: 1;
    }
    .Gallery2 img:nth-child(2) {
        grid-row-start: 1;
        grid-row-end: 1;
        grid-column-start: 2;
        grid-column-end: 2;
    }
    .Gallery2 img:nth-child(3) {
        grid-row-start: 2;
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 3;
    }
`