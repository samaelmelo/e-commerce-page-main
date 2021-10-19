import React, { useEffect } from 'react'
import { Container, Navigation, ShoppingCarAndAvatar } from './styles'
import { CartWrapper } from './styles'
import imgAvatar from '../../assets/images/avatar.png'
import imgIconCart from '../../assets/images/icon-cart.svg'
import { useCounter } from '../../Hook/useCounter'
import imgIconDelete from "../../assets/images/icon-delete.svg"
import {Images} from "../../services/datas"


export const Header = () => {
  useEffect(() => {
    const preventDefault = () => {
      const ancs = document.querySelectorAll('ul li a')
      const arrayAncs = Array.from(ancs)

      ancs.forEach(item =>
        item.addEventListener('click', ev => {
          for (let i = 0; i < arrayAncs.length; i++) {
            arrayAncs[i].offsetParent.className = ''
          }
          ev.preventDefault()
          ev.target.offsetParent.className = 'active'
        })
      )
    }

    preventDefault()
  }, [])

  const {amount, setMount} = useCounter()

  return (
    <Container>
      <Navigation>
        <h1>sneakers</h1>

        <ul>
          <li>
            <a href="#collections">Collections</a>
          </li>
          <li>
            <a href="#men">Men</a>
          </li>
          <li>
            <a href="#woman">Woman</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Navigation>

      <ShoppingCarAndAvatar>
        <button>
          <img src={imgIconCart} alt="shooping car icon" />
        </button>

        <div className="avatar">
          <img src={imgAvatar} alt="Photograph of a person" />



          <CartWrapper>
            <h4>Cart</h4>
            
            {amount === 0 ? 
            <div className='empty'>
              <p>Your cart is empty.</p>
            </div>
            :
            <div className='full'>
              <div className='boxImage'>
                <img src={Images[0].miniature} alt="img" />
              </div>
              
              <div className='descritionOfProduct'>
                <h3 >Fall Limited Edition Sneakers</h3>

                <div>
                   <span>
                       {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD'
                    }).format(125)}
                      x 3<strong> {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD'
                    }).format(375)}</strong>
                  </span> 
                </div>
              </div>

              <button>
                  <img src={imgIconDelete} alt ='lixo'/>
              </button>

            </div>

          }

          </CartWrapper>

        </div>
      </ShoppingCarAndAvatar>
    </Container>
  )
}
