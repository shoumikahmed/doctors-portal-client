import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const SecondBanner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row ">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl m-4" />
                <div className="m-20">
                    <h1 className="text-5xl font-bold ms-4">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 ms-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Now</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;