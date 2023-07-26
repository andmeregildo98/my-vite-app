import { useEffect, useState } from 'react';
import { IProduct } from '../../interfaces/IProduct';
import './Home.scss';
import { API } from '../../utils/api';
import addButton from '../../assets/add-round-button.svg';


const Home = () => {

    const baseCard: Array<IProduct> = [];
    const baseCart: Array<IProduct> = [];

    const [cart, setCart] = useState(baseCart);
    const [cards, setCards] = useState(baseCard);

    useEffect(() => {
        async function fetchData() {
            try {
                // const res = await axios.get('http://localhost:3000/products');
                const res = await API.get('http://localhost:3000/products');
                // console.log(res)
                setCards(res.data);
            } catch (err) {
                // console.log(err);
            }
        }
        fetchData();
    }, []);


    const actionAddProduct = (product: IProduct) => {
        console.log(product);
        setCart([...cart, product]);
    }

    const actionAddProduct2 = () => {
        console.log('Hola');
    }

    const renderProductRow = (product: IProduct) => {
        return (
            <div className='Home__row'>
                <div><img src="" alt="Image Product" /></div>
                <div>
                    <div className='Home__row__name'>{product.name}</div>
                    <div>{product.description}</div>
                </div>
                <div><img className='Home__row__image' onClick={ e => actionAddProduct(product)} src={addButton} alt="" /></div>
            </div>
        )
    }

    const renderChartElementRow = (product: IProduct) => {
        return (
            <div className='Home__row'>
                <div><img src="" alt="Image Product" /></div>
                <div>
                    <div className='Home__row__name'>{product.name}</div>
                    <div>{product.description}</div>
                </div>
                <div><img className='Home__row__image' onClick={ e => actionAddProduct(product)} src={addButton} alt="" /></div>
            </div>
        )
    }

    
    return (
        <div>
            <div className='Home'>
                <div className='Home__leftSide'>
                    {
                        cards!.map(element => renderProductRow(element))
                    }

                </div>
                <div className='Home__rightSide'>
                    {
                        cart!.map(element => renderChartElementRow(element))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
