import styled from 'styled-components'

export const Container = styled.main`
  width: min(1080px, 100%);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin:0 auto;

  .containerImages{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:.5rem;
   

    .mainImage{
      width: 100%;
      height: 80%;
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
      padding-inline:1.5rem;
      cursor: pointer;

      img{
        width: 100%;
        object-fit: cover;
        border-radius: 0.4rem;
      }
    }

  }

    .containerImages, .containerDescriptions{
      height: 30rem;
     
    }
    /* .containerImages + .containerDescriptions{
      border-left: 1px solid red;

    } */
  
`

export const OtherImages = styled.div`
  display: flex;
  justify-content:center;
  gap: 2rem;
    
    .productSneakers{
      width: 5.22rem;
      position: relative;
      cursor: pointer;
      
      &:before{
        content: '';
        /* background-color: red; */
        position: absolute;
        top:0;
        bottom:0;
        right: 0;
        left: 0;
        transition: .3s ease;
        
      }

      img{
        width: 100%;
        border-radius: 0.3rem;
      }
    }

    .productSneakers:hover:before{
      background-color: #fff;
      filter: opacity(.5)

    }

`


export const ContainerDescriptions = styled.div`
  height: 30rem;
  /* border: 1px solid red; */
  padding:0 4rem 2rem 2rem;
  
  .center{
    width:100%;
    height:100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    gap: 1rem;
    padding-block: 2rem;


    
  & > strong:first-child{
    color: var(--color-orange);
    text-transform: uppercase;
    letter-spacing:2px;
    font-size: .7rem;
    display: inline-block;
  }

  h1{
    text-transform: capitalize;
    line-height: 2.3rem;
    color: var(--color-dark-blue);
    font-weight: 700;
  }

  p{
    font-size: .8rem;
    font-weight: 500;
    color: var(--color-dark-grayish-blue);

  }

  
  }
`



export const Amount = styled.div`
  display: flex;
  align-items:center;

   strong{
    font-size: 1.4rem;
    margin-right: 1rem;
    color: var(--color-dark-blue);
  }

  strong + span{
    background-color: var(--color-pale-orange);
    color: var(--color-orange);
    font-weight: 700;
    font-size: .8rem;
    padding: .25rem .5rem;
    border-radius: .25rem;
  }

`

export const Discount = styled.div`

  
span{
      font-size: .8rem;
      font-weight: 700;
      color: var(--color-grayish-blue)
      
    }
`



export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  

  .bntRemoveOrAdd{
    display: flex;
    align-items:center;
    justify-content:space-between;
    width:30%;
    height: 2.7rem;


    border-radius: .25rem;
    background: var(--color-light-grayish-blue);


    button{
      padding: .5rem;
      display: flex;
      align-items:center;
      border: none;
      background: transparent;
    }
  }



  .addToCart{
    width: 50%;
    height: 2.7rem;
    display: flex;


    button{
      width: 100%;
      background: var(--color-orange);
      border: none;
      border-radius:.25rem;
      color: var(--color-white);
      font-weight: 700;

      display: flex;
      align-items:center;
      justify-content:center;
      gap: 1rem;

      box-shadow: 1px 5px 8px rgba(0,0,0,0.33);
      transition: .2s ease;


      &:hover{
        filter: brightness(.95);
      }

      img{
        color: var(--color-white);
        width: 1.1rem;
      }
    }
  }
`
