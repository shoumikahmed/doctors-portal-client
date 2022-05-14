import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import market from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening Hours" bgClass=" bg-gradient-to-r from-secondary to-primary hover:from-primary  hover:to-secondary" img={clock}></InfoCard>
            <InfoCard cardTitle="Visit our Location" bgClass="bg-[#3A4256]" img={market}></InfoCard>
            <InfoCard cardTitle="Contact Us Now" bgClass=" bg-gradient-to-r from-secondary to-primary hover:from-primary  hover:to-secondary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;