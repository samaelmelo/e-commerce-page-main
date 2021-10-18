import React, { useEffect } from 'react'
import { Container, Navigation, ShoppingCarAndAvatar } from './styles'
import imgAvatar from '../../assets/images/avatar.png'
import imgIconCart from '../../assets/images/icon-cart.svg'

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
        </div>
      </ShoppingCarAndAvatar>
    </Container>
  )
}
