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
      position: relative;

      &:before{
        position: absolute;
        content: '';
        width: 0%;
        height: 3px;
        background: var(--color-orange);
        bottom: -2.32rem;
        filter: opacity(0);
        transform: translateX(-3rem);
        transition: transform .3s ease;
      }

      a{
        color: var(--color-grayish-blue);
        font-weight:400;
        transition: color .2s ease;

        &:hover{
          color: var(--color-dark-grayish-blue);

        }
      }

    }

    li:hover:before{
      width: 100%;
      transform: translateX(0);
      filter: opacity(1);
    }


    li.active{
      position: relative;

      a{
        color: var(--color-dark-grayish-blue);
      }

      &:before{
      position: absolute;
      content: '';
      width: 100%;
      height: 3px;
      filter: opacity(1);
      transform: translateX(0);
      background: var(--color-orange);
      bottom: -2.32rem;
      transition: transform .3s ease;

      }
    }

    /* todo li que tiver outro li do lado colocar margin left */
   li+li{
     margin-left: 1.5rem;
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