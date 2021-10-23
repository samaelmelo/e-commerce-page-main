import React, { useEffect } from 'react'
import { Container, Navigation, ShoppingCarAndAvatar } from './styles'
import { ContainerWrapper } from './styles'
import imgAvatar from '../../assets/images/avatar.png'
import imgIconCart from '../../assets/images/icon-cart.svg'
import { useCounter } from '../../Hook/useCounter'
import imgIconDelete from '../../assets/images/icon-delete.svg'
import { Images } from '../../services/datas'
import IconMenu from "../../assets/images/icon-menu.svg"
import IconClose from "../../assets/images/icon-close.svg"

export const Header = () => {
  const { amount, setAmount,value, setValue,total,setTotal,MinusOrPlus,setMinusOrPlus } = useCounter()
  

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


  const handleToggleMenu = () => {
    document.querySelector('ul').classList.toggle('activeMenu')
  }

  const handleClearAllProducts = () => {
    setAmount(0)
    setValue(125)
    setTotal(125)
    setMinusOrPlus(0)
  }

  return (
    <Container>
      <Navigation>
        <div className="iconMenu" onClick={handleToggleMenu}>
            <img src={IconMenu} alt="icone de menu" />
        </div>
        <h1>sneakers</h1>
        <ul >
          <div className='iconClose' onClick={handleToggleMenu}>
              <img src={IconClose} alt="icone de fechar" />
          </div>
          <li onClick={handleToggleMenu}>
            <a href="#collections">Collections</a>
          </li>
          <li onClick={handleToggleMenu}>
            <a href="#men">Men</a>
          </li>
          <li onClick={handleToggleMenu}>
            <a href="#woman">Woman</a>
          </li>
          <li onClick={handleToggleMenu}>
            <a href="#about">About</a>
          </li>
          <li onClick={handleToggleMenu}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Navigation>

      <ShoppingCarAndAvatar>
        <button>
          <img src={imgIconCart} alt="shooping car icon" />

          {amount > 0 ? <span className="amount">{amount}</span> : ''}
        </button>

        <div className="avatar">
          <img src={imgAvatar} alt="Photograph of a person" />

          <div className="CartWrapper">
            <h4>Cart</h4>

            {amount === 0 ? (
              <div className="empty">
                <p>Your cart is empty.</p>
              </div>
            ) : (
              <ContainerWrapper>
                <div className="full">
                    <div className="boxImage">
                      <img src={Images[0].miniature} alt="img" />
                    </div>

                    <div className="descritionOfProduct">
                      <h3>Fall Limited Edition Sneakers</h3>

                      <div>
                        <span>
                          {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD'
                          }).format(value)}
                          x {MinusOrPlus}
                          <strong>
                            {' '}
                            {new Intl.NumberFormat('en-US', {
                              style: 'currency',
                              currency: 'USD'
                            }).format(total)}
                          </strong>
                        </span>
                      </div>
                    </div>

                    <button className='trashButton' onClick={handleClearAllProducts}>
                      <img src={imgIconDelete} alt="lixo" />
                    </button>
                </div>

                <div className="check">
                  <button>Checkout</button>
                </div>
              </ContainerWrapper>
            )}
          </div>
        </div>
      </ShoppingCarAndAvatar>
    </Container>
  )
}
