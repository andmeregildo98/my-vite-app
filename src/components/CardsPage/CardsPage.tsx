import React from 'react'
import InfoCard from '../InfoCard/InfoCard'
import './CardsPage.scss'
import { IProduct } from '../../interfaces/IProduct'

const cards: Array<IProduct> = [
    {code: '00001',description: 'This is a sample description of Card 01',name: 'Card number 01', price: 200.00},
    {code: '00002',description: 'This is a description of the second card number 02',name: 'Card number 02', price: 199.99},
    {code: '00003',description: 'This is a long paragraph created to validate the responsive properties of the InfoCard component at Card 03',name: 'Card number 03', price: 350.00},
    {code: '00004',description: 'Description of Card 04',name: 'Card number 04', price: 499.99},
    {code: '00005',description: 'Extense description of Card 05 to check the responsive property of the Frontend.',name: 'Card number 05', price: 50.00}
]

const CardsPage = () => {
    return (
        <div className='CardsPage' key='CardPage'>
            {
                cards.map(element => 
                    <div className='CardsPage__quarterPercent' key= {element.code}>
                        <InfoCard element={element} keyString={element.code + element.name}></InfoCard>
                    </div>
                )
            }
        </div>
    )
}

export default CardsPage
