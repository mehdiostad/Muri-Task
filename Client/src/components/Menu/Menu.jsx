import React from 'react'
import logo from "../../img/logo.png"
import "./Menu.css"
import WomanIcon from '@mui/icons-material/Woman';
import Man4Icon from '@mui/icons-material/Man4';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StorefrontIcon from '@mui/icons-material/Storefront';
const Menu = () => {
  return (
    <div className='menu'>
        <div className='logo'>
            <StorefrontIcon/>
            <h3>MURI SHOP</h3>
        </div>
        <div className="items">
            <div className='item'>
                <WomanIcon/>
                <h4>Women</h4>
            </div>
            <div className='item'>
                <Man4Icon/>
                <h4>Men</h4>
            </div>
            <div className='item'>
                <SportsHandballIcon/>
                <h4>Sport</h4>
            </div>
            <div className='item'>
                <ShoppingBagIcon/>
                <h4>Shopping Bag</h4>
            </div>
        </div>
    </div>
  )
}

export default Menu