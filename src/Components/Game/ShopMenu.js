import styled from 'styled-components'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementWater, decrementCarrot, incrementCarrotMaxCounter, incrementWaterMaxCounter, incrementCarrot, decrementWater } from '../../Actions/index'


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
        margin-top: 800px;
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
    const dispatch = useDispatch()

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
    const waterMaxCounter = useSelector(state => state.waterMaxCounter)
    const waterCounter = useSelector(state => state.waterCounter)
    const carrotMaxCounter = useSelector(state => state.carrotMaxCounter)
    const carrotReducer = useSelector(state => state.carrotReducer)
    
    const buyItem = (itemName) => {
        switch (itemName) {
            case 'Water Harvester':
                if (carrotReducer > 9) {
                    console.log('water counter', waterCounter)
                    dispatch(decrementCarrot(10))
                    if (waterCounter < waterMaxCounter) {
                        setInterval(function () {
                            dispatch(incrementWater(.5))
                        }, 5000)
                    } else if (waterCounter === waterMaxCounter) {
                        clearInterval()
                    }
                }
                break;

            case 'A Bigger Backpack':
                if (carrotReducer > 9) {
                    dispatch(decrementCarrot(10))
                    dispatch(incrementCarrotMaxCounter(100))
                }
                break;
            case 'A Bigger Bucket':
                if (carrotReducer > 14) {
                    dispatch(decrementCarrot(14))
                    dispatch(incrementWaterMaxCounter(30))
                }
                break;
            case 'Carrot Picker Machine':
                if (carrotReducer > 10) {
                    dispatch(decrementCarrot(10))
                }
                const carrotGatherer = setInterval(carrotPicker, 4000)
                
                
                return;
                default:
                    return;
                }
                
                function carrotPicker() {
                    if (carrotReducer < carrotMaxCounter && waterCounter > 2) {
                        console.log('dispatched', carrotReducer, carrotMaxCounter, waterCounter)
                        dispatch(incrementCarrot(3))
                        dispatch(decrementWater(.5))
                    }
                    if(carrotReducer > carrotMaxCounter) {
                        console.log('interval cleared')
                        clearInterval(this.carrotGatherer)
                    }
         }

    }

const checkItemCanBePurchased = (item) => {
    let i
    for (i = 0; i < items.length; i++) {
        if (item[i].name === item && inventory.carrots >= item[i].price) {
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