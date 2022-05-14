import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className={`hero min-h-screen`}>
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={chair} className="max-w-md rounded-lg shadow-2xl m-4" />
                <div className="">
                    <h1 className="text-5xl font-bold ms-4">Your New Smile Starts Here</h1>
                    <p className="py-6 ms-4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Starts</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;