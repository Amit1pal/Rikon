import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const NewArrivals = () => {
    const newArrivals = [
        { _id: "1", name: "Stylish Jacket", price: 120, images: [{ url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket" }] },
        { _id: "2", name: "Casual Shirt", price: 90, images: [{ url: "https://picsum.photos/500/500?random=2", altText: "Casual Shirt" }] },
        { _id: "3", name: "Classic Jeans", price: 150, images: [{ url: "https://picsum.photos/500/500?random=3", altText: "Classic Jeans" }] },
        { _id: "4", name: "Formal Suit", price: 250, images: [{ url: "https://picsum.photos/500/500?random=4", altText: "Formal Suit" }] },
        { _id: "5", name: "Trendy Sneakers", price: 80, images: [{ url: "https://picsum.photos/500/500?random=5", altText: "Trendy Sneakers" }] }
    ];

    return (
        <section className="container mx-auto text-center mb-10 sm:p-5 sm:px-5 px-5 relative">
            <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
            <p className="text-lg text-gray-600 mb-8">
                Discover the latest styles straight off the runway, freshly added to keep your wardrobe on trend.
            </p>

            {/* Navigation Arrows at the Top */}
            <div className="flex justify-end space-x-3 mb-10 mt-5 relative w-36 ml-auto ">
                <button className="swiper-button-prev p-3 bg-white text-black shadow-md">
                    <FiChevronLeft />
                </button>
                <button className="swiper-button-next p-3 bg-white text-black shadow-md">
                    <FiChevronRight />
                </button>
            </div>

            {/* Swiper Slider */}
            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                className="overflow-hidden"
            >
                {newArrivals.map((product) => (
                    <SwiperSlide key={product._id} className="relative">
                        <img
                            src={product.images[0]?.url}
                            alt={product.images[0]?.altText || product.name}
                            className="w-full h-[250px] object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                            <Link to={`/product/${product._id}`} className="block">
                                <h4 className="font-medium">{product.name}</h4>
                                <p className="mt-1">${product.price}</p>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default NewArrivals;
