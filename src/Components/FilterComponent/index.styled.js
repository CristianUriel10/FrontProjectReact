import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 7% 5% 66% 7%;
    margin-left: 10%;
    margin-right: 5%;
    color: rgb(131, 131, 131);
    .selectedOptions{
        display: flex;
        align-items: center;
    }
    .containerSelected{
        background-color: white;
        padding: 1px 4px 2px 4px;
        height: auto;
        margin-left: 7px;
        border-radius: 14px;
    }

    .clearButton{
        cursor: pointer;
    }
    svg {
        margin: 15px;
    }
    i{
        margin-left: 5px;
        color: rgb(250, 225, 203);
        cursor: pointer;
    }
    .dropdown {
        position: relative;
        display: inline-block;
      }
      
      .dropdown-content {
        margin-top: -10px;
        display: none;
        grid-template-columns: 60% 40%;
        position: absolute;
        background-color: #f9f9f9;
        width: 360px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        z-index: 1;
      }
      
      .dropdown:hover .dropdown-content {
        display: grid;
      }

      .checked {
        color: orange;
      }

      .containerStars{
          padding: 15px;
          padding-left: 0;
      }

      .containerStars:hover{
          cursor: pointer;
          background: rgb(180, 180, 180);
      }
      .containerStyle:hover{
        cursor: pointer;
        background: rgb(180, 180, 180);
      }
      .active{
        background: rgb(180, 180, 180);
      }
    }
`