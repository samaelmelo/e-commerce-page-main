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
      position:relative;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      border:2px solid var(--color-orange);
      cursor: pointer;


      img{
        width: 100%;
        object-fit: fill;
      }

    }
`


export const CartWrapper = styled.div`

    position: absolute;
    width: 20rem;
    height: 12rem;
    left: -12rem;

    background:white;
    box-shadow: 1px 5px 10px  4px rgba(0,0,0,.2);
    
    display: flex;
    flex-direction: column;

    h4{
      border-bottom: 1px solid var(--color-grayish-blue);
      line-height:3rem;
      margin-left:1rem;
     
    }

    .empty{
      width:100%;
      height:100%;
      display: flex;
      justify-content:center;
      align-items:center;
    }

    .full{
      width:100%;
      padding: 1rem;
      display: flex;
      justify-content: space-between;


      .boxImage{
        width:4rem;
        height:4rem;
        /* margin-right:1rem; */
        img{
          width: 100%;
          object-fit: fill;
        }
      }


      .descritionOfProduct{
        border:1px solid red;
        display: flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
      }
    }



    p{
      text-align:center;
      
    }

  button{
   border: 1px solid red;
  }
`