import styled from "styled-components";

export const Container = styled.header`

  width: min(1080px, 100%);
  height: 5rem;
  padding-bottom:1rem;
  margin: 0 auto;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid var(--color-grayish-blue);
  margin-bottom: 2rem;

`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;

  h1{
    color: var(--color-dark-blue);
    font-weight: 700;
    letter-spacing:0;
  }


  ul{
    display: flex;

    li{ 
      a{
        color: var(--color-grayish-blue);
        font-weight:700;

      }

    }

    /* todo li que tiver outro li do lado colocar margin left */
   li+li{
     margin-left: 1rem;
   }
  }

`

export const ShoppingCarAndAvatar = styled.div`
    
    display: flex;
    align-items: center;
    gap: 1rem;


    button{
      border: none;
      background: transparent;

      padding: 1rem;
    }

    .avatar{

      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;

      img{
        width: 100%;
        object-fit: fill;
      }
    }

`