import styled, { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle`

  :root{
    --color-orange: hsl(26, 100%, 55%);
    --color-pale-orange: hsl(25, 100%, 94%);

    --color-dark-blue: hsl(220, 13%, 13%);
    --color-dark-grayish-blue: hsl(219, 9%, 45%);
    --color-grayish-blue: hsl(220, 14%, 75%);
    --color-light-grayish-blue: hsl(223, 64%, 98%);
    --color-white: hsl(0, 0%, 100%);
    
  }

 /* Black (with 75% opacity for lightbox background): hsl(0, 0%, 0%)  */

  *{
    padding: 0;
    margin: 0;
    box-sizing:border-box;
    text-decoration: none;
    list-style: none;
  }

  a{ 
    display:inline-block;
  }

  html{
    @media (max-width:1080px){
      font-size: 93.75%;  // (93,75 / 100) * 16px = 15px
    } 

    
    @media (max-width: 720px){
      font-size: 87.5%; // ( 87,5 / 100) * 16 = 14px
    }
  }

  body{
    -webkit-font-smoothing: antialiased;
    background: var(---color-white);
  }


  body, input, textarea, button{
    font-family: 'Kumbh Sans', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }


  button{
    cursor: pointer;
    
  }

  [disabled]{
    opacity:0.6;
    cursor: not-allowed;
  }




`



export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  
  padding: 1rem 2rem;

`