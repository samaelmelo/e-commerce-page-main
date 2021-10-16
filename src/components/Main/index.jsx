import React from 'react';
import {Container, OtherImages, ContainerDescriptions, Buttons} from './styles'
import {Images} from "../../services/datas"
import minus from "../../assets/images/icon-minus.svg"
import plus from "../../assets/images/icon-plus.svg"
import cart from "../../assets/images/icon-cart.svg"
 
export const Main = () => {

  const imageProductOne  = Images[0].img
  
  return (

    <>

      <Container> 
        <div className="containerImages">

            <div className="mainImage">
                <img src={imageProductOne} alt="foto" />
            </div>

            <OtherImages>
                { Images && Images.map( (item, index) => (
                  <div key={index} className="productSneakers">
                        <img src={item.miniature} alt={item.alt} />
                  </div>
                ))}
            </OtherImages>

        </div>

        <ContainerDescriptions>
            <span>sneakers company</span>
            <h1>Fall limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

            <div className='amount'>
              <strong>
                {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(125)}
              </strong>
              <span>50%</span>

              <div className="discount">
                <span style={{textDecoration: 'line-through'}}>{new Intl.NumberFormat('en-US',{style:'currency', currency: 'USD'}).format(250)}</span>
              </div>
            </div>

            <Buttons>
                  <div className="bntRemoveOrAdd">
                    <button>
                      <img src={minus} alt="minus" />
                    </button>
                    <span>0</span>
                    <button>
                        <img src={plus} alt="next" />
                    </button>
                  </div>
                  
                  <div className="AddToCart">
                      <button>
                          <img src={cart} alt="" />
                          Add to cart
                      </button>
                  </div>
            </Buttons>


        </ContainerDescriptions>


      </Container>

    </>
  );
};
