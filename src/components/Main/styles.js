import styled from 'styled-components'

export const Container = styled.main`

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .containerImages{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   

    .mainImage{
      width: 100%;
      height: 80%;
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
      padding-inline:1.5rem;
      cursor: pointer;

      img{
        width: 80%;
        object-fit: cover;
        border-radius: 0.4rem;
      }
    }

  }

    .containerImages, .containerDescriptions{
      height: 30rem;
     
    }
    .containerImages + .containerDescriptions{
      border-left: 1px solid red;

    }
  
`

export const OtherImages = styled.div`
  display: flex;
  justify-content:center;
  gap: 2rem;
    
    .productSneakers{
      width: 5rem;
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
  border: 1px solid red;
  padding: 2rem;
`

export const Buttons = styled.div`
  display: flex;


  
`