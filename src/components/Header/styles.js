import styled from 'styled-components'

export const Container = styled.header`
  width: min(1080px, 100%);
  height: 5rem;
  padding-bottom: 1rem;
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
  position: relative;
  
  .iconMenu{
    display:none;
  }


  

  h1 {
    color: var(--color-dark-blue);
    font-weight: 700;
    letter-spacing: 0;
  }

  ul {
    display: flex;

    .iconClose{
      display: none;
    }

    li {
      position: relative;

      &:before {
        position: absolute;
        content: '';
        width: 0%;
        height: 3px;
        background: var(--color-orange);
        bottom: -2.32rem;
        filter: opacity(0);
        transform: translateX(-3rem);
        transition: transform 0.3s ease;
      }

      a {
        color: var(--color-grayish-blue);
        font-weight: 400;
        transition: color 0.2s ease;

        &:hover {
          color: var(--color-dark-grayish-blue);
        }
      }
    }

    li:hover:before {
      width: 100%;
      transform: translateX(0);
      filter: opacity(1);
    }

    li.active {
      position: relative;

      a {
        color: var(--color-dark-grayish-blue);
      }

      &:before {
        position: absolute;
        content: '';
        width: 100%;
        height: 3px;
        filter: opacity(1);
        transform: translateX(0);
        background: var(--color-orange);
        bottom: -2.32rem;
        transition: transform 0.3s ease;
      }
    }

    /* todo li que tiver outro li do lado colocar margin left */
    li + li {
      margin-left: 1.5rem;
    }
  }


  @media (max-width: 720px){
      .iconMenu{
          display: block;
          cursor: pointer;
          padding: .5rem;
      }




      ul{
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        z-index: 2000;

        background: var(--color-light-grayish-blue);
        width: 20rem;
        height: 100vh; 
        padding-left: 1rem;

        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        gap: 1rem;

        

        transform: translateX(-100%);
        transition: .3s ease;


        .iconClose{
          display: inline-block;
          margin-block: 2rem;
          cursor: pointer;
          width: 2rem;
          padding: .5rem;
        }

        

        li{
          font-size: 1.4rem;
          outline: none;
          
          
          &::before{
            display: none;
          }
          
          a{
            color:black;
            font-weight: 700;

          }
        }


        li + li {
          margin: 0;
        }
      }

      ul.activeMenu{
          transform: translateX(0);
        }
    }
`

export const ShoppingCarAndAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > button {
    border: none;
    background: transparent;

    padding: 1rem;
    position: relative;

   .amount{
      position: absolute;
      top: .2rem;
      left: 1.5rem;
      width: 1.5rem;
      border-radius: .5rem;
      background: var(--color-orange);
      color: var(--color-white);
      font-weight: 700;
    }
  }

  .avatar {
    position: relative;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background: linear-gradient(-100deg, var(--color-orange) 0.6% , var(--color-pale-orange));
    cursor: pointer;
    padding: 2px;
    line-height: 0;  

    img {
      width: 100%;
      border-radius:50%;
    }
  }

  .avatar:hover .CartWrapper{
    visibility: visible;
    opacity:1;
  }


  .CartWrapper {
    position: absolute;
    width: 20rem;
    height: 12rem;
    left: -16rem;
    visibility: hidden;
    opacity:0;
    background: white;
    box-shadow: 1px 5px 10px 4px rgba(0, 0, 0, 0.2);

    display: flex;
    flex-direction: column;

    cursor: auto;

    transition: .3s ease;

    h4 {
      border-bottom: 1px solid var(--color-grayish-blue);
      line-height: 3rem;
      margin-left: 1rem;
    }

    .empty {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .full {
      width: 100%;
      padding: 1rem;
      display: flex;
      justify-content: space-between;

      .boxImage {
        width: 3.2rem;
        height: 3.2rem;
        img {
          border-radius: 0.24rem;
          width: 100%;
          object-fit: fill;
        }
      }


      .trashButton{
        border: none;
        background: transparent;
        line-height: none;
        padding-inline: .5rem;
      }


      .descritionOfProduct {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        line-height: 1.4rem;

        h3 {
          font-weight: 400;
          /* color: var(--color-dark-grayish-blue); */
        }
        h3,
        span {
          font-size: 0.8rem;
          color: var(color-dark-grayish-blue);
        }

        span {
          strong {
            font-weight: 700;
            color: var(--color-dark-blue);
          }
        }



      }



    }

    button {
      padding: 0;

    }




  }
`

export const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;

  .check {
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      width: 12rem;
      height: 2rem;
      color: var(--color-white);
      background: var(--color-orange);
      border-radius: 0.25rem;
      border: none;
    }
  }
`
