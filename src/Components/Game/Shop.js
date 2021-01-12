import React, { useState } from 'react'
import styled from 'styled-components'
import MobileNav from './ShopMenu';

const StyledGearBurger = styled.div`
margin-top: 10px;
    /* width: 2rem;
    height: 2rem; */
    top: 15px;
    margin-left: 60px;
    /* margin-right: 10px; */
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
    z-index: 2000;
    /* float: right; */
    div {
        width: 2rem;
        height: .25rem;
        border: 1px solid black;
        /* border-radius: 10px; */
        background-color: ${({ open }) => open ? 'black' : '#333'};
        transform-origin: 1px;
        transition: all .3s;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        } 
        
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0%)'};
            
            opacity: ${({ open }) => open ? '0' : '1'};
        
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    @media (min-width: 768px) {
        /* display: none !important; */
    }
`;
const Shop = (props) => {
    const [open, setOpen] = useState(false)
       

    return (
        <>
            <StyledGearBurger open={open} onClick={() => setOpen(!open)}>
            {props.openShop ? <button className='shop-btn' type='click' onClick={() => props.setOpenShop(false)}>Close Shop</button> : ''}
            
            {!props.openShop ? <button className='shop-btn' type='click' onClick={() => props.setOpenShop(true)}>Shop ></button> : ''}
            
            </StyledGearBurger>
            <MobileNav setWaterHarvesters={props.setWaterHarvesters} inventory={props.inventory} open={open} />
        </>
    )
}

export default Shop