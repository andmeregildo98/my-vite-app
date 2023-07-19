import React from 'react'
import './InfoCard.scss'
import { IProduct } from '../../interfaces/IProduct'

interface InfoCardProps {
    element: IProduct;
    keyString: string;
}

const InfoCard = (props: InfoCardProps) => {

    const transformPriceFromNumber = (value: number): string => {
        const transformedWithCurrency = value % 2 ? transformPriceFromNumberCents(value) : transformPriceFromNumberExact(value);
        return transformedWithCurrency;
    }
    
    const transformPriceFromNumberExact = (value: number): string => {
        
        const transformedPrice = `USD ${value}.00`
        return transformedPrice;
    }

    const transformPriceFromNumberCents = (value: number): string => {
        
        const transformedPrice = `USD ${value}`
        return transformedPrice;
    }


    return (
        <div className='InfoCard'>
            <div className='InfoCard__header' key={props.keyString}>
                <div className='InfoCard__title'>{props.element.name}</div>
                <div>
                    <div className='InfoCard__code'>{props.element.code}</div>
                </div>
            </div>
            <div className='InfoCard__body'>
                <div className='InfoCard__price'>{transformPriceFromNumber(props.element.price)}</div>
                <div className='InfoCard__description'>{props.element.description}</div>
            </div>
            <div className='InfoCard_footer'>
                <button className='InfoCard__buttonAdd'>Add to cart</button>
            </div>

        </div>
    )
}



export default InfoCard
