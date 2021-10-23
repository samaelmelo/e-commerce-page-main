import styled from 'styled-components'

export const Container = styled.main`
  width: min(1080px, 100%);
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin: 0 auto;



  .containerImages {
    height: 30rem;
    width: 100%;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem; 

    transition: .3s ease;

    @media (max-width: 660px){
      /* width: 80%; */

    }


    .mainImage {
      width: 100%;
      height: 80%;
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
      /* padding-inline: 1.5rem; */
      cursor: pointer;

      img {
        width: 100%;
        /* object-fit: cover; */
        border-radius: 0.4rem;
      }
    }
  }

  
  @media (max-width: 860px){
        width: 100%;
        display: flex;
        flex-direction: column;
        



        .containerImages{
          margin: 0 auto;
          padding-inline: 9rem;

          
        }
    }

    @media (max-width: 560px){
      .containerImages{
        padding-inline:3rem;
      }
    }
`

export const OtherImages = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;


  .productSneakers {
    max-width: 5.22rem;
    position: relative;
    cursor: pointer;
    border-radius: 0.5rem;

    @media (max-width: 620px){
        max-width: 4.22rem;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      transition: background 0.3s ease;
    }

    img {
      max-width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      object-fit: fill;
    }
  }

  .productSneakers:hover:before {
    background-color: #fff;
    filter: opacity(0.7);
    border-radius: 0.5rem;
  }

  .productSneakers.active:before {
    background-color: #fff;
    filter: opacity(0.7);
    border: 3px solid var(--color-orange);
    border-radius: 0.5rem;
  }


 
`

export const ContainerDescriptions = styled.section`
  height: 30rem;
  padding-inline: 2rem;

  .center {
    /* margin: 0 auto; */
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;

    & > strong:first-child {
      color: var(--color-orange);
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.7rem;
      display: inline-block;
    }

    h1 {
      text-transform: capitalize;
      line-height: 2.3rem;
      color: var(--color-dark-blue);
      font-weight: 700;
    }

    p {
      font-size: 1rem;
      font-weight: 500;
      color: var(--color-dark-grayish-blue);
    }
  }
`

export const Amount = styled.div`
  display: flex;
  align-items: center;
  

  strong {
    font-size: 1.4rem;
    margin-right: 1rem;
    color: var(--color-dark-blue);
  }

  strong + span {
    background-color: var(--color-pale-orange);
    color: var(--color-orange);
    font-weight: 700;
    font-size: 0.9rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
`

export const Discount = styled.div`
  span {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--color-grayish-blue);
  }
`

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  min-width: 22rem;




  
  
  .bntRemoveOrAdd {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 30%;
    height: 2.7rem;

    border-radius: 0.25rem;
    background: var(--color-light-grayish-blue);
    box-shadow: 2px 5px 9px rgba(0,0,0,0.1);

    button {
      padding: 0.5rem;
      display: flex;
      align-items: center;
      border: none;
      background: transparent;
    }

  }



  .addToCart {
    min-width: 50%;
    height: 2.7rem;
    display: flex;

    button {
      width: 100%;
      background: var(--color-orange);
      border: none;
      border-radius: 0.25rem;
      color: var(--color-white);
      font-weight: 700;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      box-shadow:2px 5px 9px 2px #f2c8a9;
      transition: 0.2s ease;

      &:hover {
        filter: brightness(0.95);
      }

      img {
        color: var(--color-white);
        width: 1.1rem;
      }
    }
  }



  @media (max-width: 720px){
    flex-direction: column;
    width: 100% !important; 
    min-width: 50%;


    .bntRemoveOrAdd {
      width: 100%;
    }

    .addToCart {
    width: 100%;
    }    
  }
`
