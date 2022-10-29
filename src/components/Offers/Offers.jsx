import React, { useEffect } from 'react'

import { offers } from '../../constants/text.js';
import Offer from './Offer/Offer.jsx';
// import { getOffers } from '../../actions/offers.js';

const Offers = ({ setNavbarBg }) => {

    // const { offers, isLoading } = useSelector((state) => state.offers); 

    useEffect(() => {
        //     dispatch(getOffers());
        setNavbarBg('bg-primary')
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="ss:pt-52 pt-40 w-full caret-transparent">
            <div className="ss:w-[480px] w-2/3 mx-auto text-center font-bold text-primary ss:text-5xl text-4xl border-b-4 pb-4 border-secondary">Featured Offers</div>
            <p className="text-center text-lg text-primary mt-10 mb-8 px-5">Discover a world of possibilities at Chandra. Featuring a wide variety of hotels and resorts in top destinations, we give you the best offers guaranteed.</p>

            <div className="w-4/5 mx-auto flex flex-wrap justify-center items-center">
                {offers.map((offer) => (
                    <Offer offer={offer} />
                ))}
            </div>
            <div className='my-20'></div>
        </div>
    )
}

export default Offers