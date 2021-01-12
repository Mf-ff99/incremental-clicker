import styled from 'styled-components'
import React from 'react'

const UL = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0);
box-shadow: 0 8px 32px 0 rgba(175, 180, 253, 0.37);
backdrop-filter: blur( 30.0px );
-webkit-backdrop-filter: blur( 4.0px );
border-radius: 10px;
    max-width: 300px;
    min-width: 10%;
    margin-left: 0;
    visibility: ${({ open }) => open ? '' : 'hidden !important'}; 
    display: flex;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
        margin-top: 230px;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        
        left: 0;
        height: fit-content;
        
        padding: 15px 15px 0 0;
        transition: .3s ease-in-out;
    
        
        li.shop-item {
            padding: 10px;
            cursor: pointer;
            border-radius: 10px;
            transition: .5s ease-in-out;
            margin-left: 10px;
            padding-left: 30px;

            &:hover {
                transition: .5s ease-in-out;
                color: whitesmoke;
                background-color: #333;
                border-radius: 8px;
            }
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

const MobileNav = ({ open, inventory, setWaterHarvesters }) => {
    
    
    const items = [
        {
            name: 'Water Harvester',
            price: 10,
            isBought: false,


        },
        {
            name: 'Carrot Picker Machine',
            price: 25,
            isBought: false,

        },
        {
            name: 'Stealth Grow',
            price: 50,
            isBought: false,

        },
        {
            name: 'A Bigger Bucket',
            price: 15,
            isBought: false,

        },
        {
            name: 'A Bigger Backpack',
            price: 10,
        },
        {
            name: 'A Carrot-Gathering Slave',
            price: 10,
            isBought: false,

        }
    ]

    const checkItemIsBought = () => {

    }

    const buyItem = (itemName) => {
        switch(itemName){
            case 'Water Harvester':
                setWaterHarvesters()
            default: 
                return;
        }
    }

    const checkItemCanBePurchased = (item) => {
        let i
        for(i = 0; i < items.length; i++) {
            if(item[i].name === item && inventory.carrots >= item[i].price) {
                // inventory.carrots - item[i].price
                // set functions for purchasing an item in game
            }
        }
    }

    return (
        <UL open={open}>
            {items.map((item) =>
                <li className='shop-item' onClick={() => buyItem(item.name)}>{item.name} : {item.price}</li>
            )}

        </UL>
    )

}

export default MobileNav