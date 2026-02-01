import React from "react";
import HeroImage from '../assets/heroImage.png'

const Hero = () => {
    return (
        <section className="">
            <div className="xl:max-w-7xl w-full mx-auto xl:px-6 py-5 md:py-20 sm:flex sm:flex-row items-center sm:gap-6 justify-between  flex-col-reverse">

                {/* Left Content */}
                <div className="sm:w-1/2 w-full mx-auto ">
                    <div className="text-center ">
                        <h1 className="md:text-2xl text-xl xl:text-4xl font-bold leading-tight text-center">
                            Your Reliable <span className="text-yellow-400">Trading Partner</span><br />
                            for Quality Supplies Across India
                        </h1>

                        <p className="sm:mt-4 mt-2 text-sm md:text-lg text-gray-200 text-center">
                            Supplying Quality. Delivering Trust Nationwide.
                        </p>
                    </div>


                    {/* Highlights */}

                    <ul className="sm:mt-6 mt-2 md:space-y-3 text-gray-100 flex flex-col items-center justify-center">
                        <li className="text-sm sm:text-lg">✔ Stationery & Housekeeping Products</li>
                        <li className="text-sm sm:text-lg">✔ Industrial Spare Parts & Machinery</li>
                        <li className="text-sm sm:text-lg">✔ Custom Labels & Stickers</li>
                        <li className="text-sm sm:text-lg">✔ Fast & Trusted Delivery</li>
                    </ul>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row  gap-4 items-center justify-center pr-4">
                        <a
                            href="#contact"
                            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
                        >
                            Contact Us
                        </a>

                        <a
                            href="#products"
                            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition"
                        >
                            View Products
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-1/2 hidden sm:block">
                    <img
                        src={HeroImage}
                        alt="Trading Supplies"
                        className="rounded-xl shadow-2xl"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;
