import React, { useState } from 'react'
import { Images } from '../../services/datas'

import { Container, OtherImages, ContainerDescriptions } from './styles'
import { Buttons, Amount,Discount} from './styles'

import minus from '../../assets/images/icon-minus.svg'
import plus from '../../assets/images/icon-plus.svg'
import cart from '../../assets/images/icon-cart.svg'

export const Main = () => {
  
  const [imageMain, setImageMain] = useState(Images[0].img)
  const [value, setValue] = useState(0)

  const changeImageMiniatureOfDefault = (ev,item) => {
    const divs = document.querySelectorAll('.productSneakers')
    divs.forEach( div => {
        div.className = 'productSneakers'
    })    
    ev.target.className = 'productSneakers active'
   
    return item.miniature ? setImageMain(item.img) : ''
  }

  return (
    <>
      <Container>
        <div className="containerImages">
          <div className="mainImage">
            <img src={imageMain} alt="foto" />
          </div>

          <OtherImages>
            {Images &&
              Images.map((item, index) => (
                <div
                  key={index}
                  className="productSneakers"
                  onClick={(ev) => changeImageMiniatureOfDefault(ev,item) }
                >
                  <img src={item.miniature} alt={item.alt} />
                </div>
              ))}
          </OtherImages>
        </div>

        <ContainerDescriptions>
          <div className="center">
            <strong>sneaker company</strong>
            <h1>Fall limited Edition Sneakers</h1>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>

            <Amount>
              <strong>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                }).format(125)}
              </strong>

              <span>50%</span>
            </Amount>

            <Discount>
              <span style={{ textDecoration: 'line-through' }}>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD'
                }).format(250)}
              </span>
            </Discount>

            <Buttons>
              <div className="bntRemoveOrAdd">
                <button onClick={() => setValue(value < 1 ? value : value - 1)}>
                  <img src={minus} alt="minus" />
                </button>
                <strong>{value}</strong>
                <button onClick={() => setValue(value + 1)}>
                  <img src={plus} alt="next" />
                </button>
              </div>

              <div className="addToCart">
                <button>
                  <img src={cart} alt="" />
                  Add to cart
                </button>
              </div>
            </Buttons>
          </div>
        </ContainerDescriptions>
      </Container>
    </>
  )
}
