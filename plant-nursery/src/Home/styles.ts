import styled from "styled-components"
import React from 'react';

export const HomeContainer = styled.main`
  
    
   .home-banner-container{
     position: relative;
   }

   .home-banner-ImageContainer{
     position: absolute;
     top: -100px;
     right: -170px;
     z-index: -2;
     max-width: 850px;
   }
     
   .home-hero-container{
      position: relative;
      display: flex;
      padding-top: 3rem;
   }

   .home-hero-ImageContainer{
     position: absolute;
     top: 0;
     right: 0;
     bottom: 0;
     z-index: -2;
   }

   .card-section{
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 64px;
     background-color: ${(props) => props.theme['white']};
     margin-top: 13rem;
   }

   .list{
     
   }

   .card-section > div > h2{
     font-family: Elsie Swash Caps;
   }

   


   .hero-image{
        margin-right: 40px;
        rotate: 270deg;
   }

   .plant-image{
       
        width: 80%;
        height: 50%;
   }

   .hero-content{
        display: flex;
        flex-direction: column;
        margin-left: 7rem;
        width: 450px;

   }

   h1{
        font-family: Elsie Swash Caps;
        font-size: 3rem;
        font-weight: black;
        margin-bottom: 24px;
   }

   span{
    margin-bottom: 8px;
   }

   p, span{
    font-family: MontSerrat;
    font-size: 0.75rem;
   }

   p{
     margin-bottom: 32px;
   }

   input{
        width: 200px;
        padding: calc(1rem + 1px);   
        border: none;
        font-family: Montserrat;
        font-size: 0.5rem;


   }


   .button-newsletter{
        width: 184px;
        height: 100%;
        padding: 25px;   
        background-color: ${(props) => props.theme['yellow-100']} ;
        color: ${(props) => props.theme['white']};
        border: none;
        font-family: Montserrat;
        font-size: 0.5rem;
        cursor: pointer;

   }


   

`

export const CardsTitle = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 2rem;

   h2{
      font-family: Elsie Swash Caps;
    

    }
    span{
      font-family: Montserrat;
    }
`
export const CardsContainer = styled.section`
   
     display: grid;
     grid-template-columns: 400px 400px 400px;
     justify-content: center;
    
`

export const FooterSection = styled.footer`
      text-align: center;
      font-size: 0.75rem;
      background-color: ${(props) => props.theme['yellow-100']};
      
      ul{
        display: flex;
        justify-content: center;
        list-style-type: none;
        gap: 32px;
      }

  
    
`