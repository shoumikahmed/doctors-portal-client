import React from 'react';
import Banner from './Banner';
import Info from './Info';
import appointment from '../../assets/images/appointment.png'
import Services from './Services';
import Service from './Service';
import SecondBanner from './SecondBanner';
import MakeAppointment from './MakeAppointment'
import Testimonials from './Testimonials'
import Footer from '../Shared/Footer'

const Home = () => {
    return (
        <div className='px-12'>
            <Banner bgImage={appointment}></Banner>
            <Info></Info>
            <Services></Services>
            <Service></Service>
            <SecondBanner></SecondBanner>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;