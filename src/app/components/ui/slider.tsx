// components/ImageSlider.js
import { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
    {
        url: "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "First Image Text"
    },
    {
        url: "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Second Image Text"
    },
    {
        url: "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Third Image Text"
    }
];

export const ImageSlider = ({

                            }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative">
            <motion.img
                key={images[currentIndex].url}
                src={images[currentIndex].url}
                alt="Slider image"
                className="w-full h-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />
            <p className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
                {images[currentIndex].text}
            </p>
            <button onClick={handleNext} className="absolute top-1/2 right-0 p-2 bg-white">
                Next
            </button>
        </div>
    );
}
