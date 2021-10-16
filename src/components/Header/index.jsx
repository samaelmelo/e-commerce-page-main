import React from 'react';
import { Container, Navigation, ShoppingCarAndAvatar } from './styles';
import imgAvatar from "../../assets/images/avatar.png"
import imgIconCart from "../../assets/images/icon-cart.svg"

export const Header = () => {

 

  return (
    <Container>
      <Navigation>
        <h1>sneakers</h1>

        <ul>
          <li><a href="/">Collections</a></li>
          <li><a href="/">Men</a></li>
          <li><a href="/">Woman</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </Navigation>


      <ShoppingCarAndAvatar>
        <button>
            <img src={imgIconCart} alt="shooping car icon"/>
        </button>

        <div className='avatar'>
            <img src={imgAvatar} alt="Photograph of a person" />
        </div>
      </ShoppingCarAndAvatar>

    </Container>
  );
};
