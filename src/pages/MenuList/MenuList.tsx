import { useState, useEffect } from "react"
import '../../components/CardsPage/CardsPage'
import InfoCard from "../../components/InfoCard/InfoCard";
import { API } from "../../utils/api";
import './MenuList.scss'


const MenuList = () => {
    const [cards, setCards] = useState([{ code: '', description: '', name: '', price: 1.00 },]);

    useEffect(() => {
        async function fetchData() {
            try {
                // const res = await axios.get('http://localhost:3000/products');
                const res = await API.get('http://localhost:3000/products');
                console.log(res)
                setCards(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="MenuList">
            <div>List of Products</div>
            <div>
                <div className='CardsPage' key='CardPage'>
                    {
                        cards.map(element =>
                            <div className='CardsPage__quarterPercent' key={element.code}>
                                <InfoCard element={element} keyString={element.code + element.name}></InfoCard>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default MenuList
