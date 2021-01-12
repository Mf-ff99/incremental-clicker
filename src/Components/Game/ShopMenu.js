import styled from 'styled-components'
import React from 'react'
import { HashLink } from 'react-router-hash-link'


const UL = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 180px;
    min-width: 10%;
    // min-height: 800px;
    margin-left: 0;
    padding-left: 20px !important;
    /* z-index: ${({open}) => open ? 1000 : -1}; */
    visibility: ${({open}) => open ? '' : 'hidden !important'}; 

    li a {
        color: black !important;
        padding: 18px 10px;
        
    }

    li a:hover {
        border-bottom: none;
    }


    img {
        padding: 0;
        height: 90px;
         
    }
    
    a {
        color: black !important;
    }

    .logo-text-left a {
        width: 100px;
        display: flex;
        flex-wrap: wrap;

    }

    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 0;
    }

    .right-side-nav {
        right: 0;
        
    }

        display: flex;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
        background-color: white;
        border-top: 1px solid black;
        border-right: 1px solid black;
        border-bottom: 1px solid black;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        
        left: 0;
        height: fit-content;
        
        padding: 15px 15px 0 0;
        transition: .3s ease-in-out;

    a {
        color: black !important;
    }
        li {
            color: black;
            width: 190px !important;
            padding: 5px;
            /* display: flex; */
            /* justify-content: center; */
        }

        .logo {
            flex-direction: column;
            justify-content: center !important;
        }

    
`

const MobileNav = ({ open }, props) => {
    const items = [
        { name: 'Water Harvester',
          price: 10,
          
        },
        { name: 'OrangePicker',
            price: 25 },
        { name: 'StealthGrow',
        price: 50 },
    ]

    return (
        <UL open={open}>
                    {items.map((item) => 
                        <li className='shop-item'>{item.name} : {item.price}</li>
                    )}
            
        </UL>
    )

}

export default MobileNav