import { useEffect, useRef, useState } from 'react';
import './Navbar.scss';
import moreOptions from '../../../assets/more-options.svg';
import moreOptionsVertical from '../../../assets/more-options-vertical.svg';

const Navbar = () => {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);

        };
    }, []);

    const showMoreOptions = () => {
        return (<div className='Navbar__routes'>
            <a href="/products">Products</a>
            <a href="/create">New product</a>
            <a href="/Info">Info</a>
            <a href="/Contaact">Contact</a>
        </div>);
    }

    const showMoreOptionsButton = () => {
        return (<div className='Navbar__optionsButton'>
            <img src={moreOptionsVertical} alt="More options" />
        </div>);
    }

    const renderDimensions = () => {
        return(
            <div style={{ color: 'white' }}>
                {windowSize[0] + ',' + windowSize[1]}
            </div>
        )
    }

    return (
        <div className='Navbar'>
            <div className='Navbar__title'>
                <a className='Navbar__titleText' href="/">AppList</a>
            </div>
            {false && renderDimensions()}
            {windowSize[0] <= 650 ? showMoreOptionsButton() : showMoreOptions()}
        </div>
    )
}

export default Navbar
