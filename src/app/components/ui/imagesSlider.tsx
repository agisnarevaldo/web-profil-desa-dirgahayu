"use client";
import {cn} from "@/lib/utils";
import {motion, AnimatePresence} from "framer-motion";
import React, {useEffect, useState} from "react";
import {Icon} from "@iconify/react";

export const ImagesSlider = ({
                                 images,
                                 texts, // Added texts prop
                                 children,
                                 overlay = true,
                                 overlayClassName,
                                 className,
                                 autoplay = true,
                                 direction = "up",
                             }: {
    images: string[];
    texts: string[]; // Define the type for texts
    children: React.ReactNode;
    overlay?: React.ReactNode;
    overlayClassName?: string;
    className?: string;
    autoplay?               : boolean;
    direction?: "up" | "down";
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [loadedImages, setLoadedImages] = useState<string[]>([]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        loadImages();
        if (autoplay) {
            const interval = setInterval(handleNext, 5000); // Adjust the interval as needed
            return () => clearInterval(interval);
        }
    }, []);

    const loadImages = () => {
        setLoading(true);
        const loadPromises = images.map((image) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = image;
                img.onload = () => resolve(image);
                img.onerror = reject;
            });
        });

        Promise.all(loadPromises)
            .then((loadedImages) => {
                setLoadedImages(loadedImages as string[]);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    };

    const slideVariants = {
        initial: {
            scale: 0,
            opacity: 0,
            rotateX: 45,
        },
        visible: {
            scale: 1,
            rotateX: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.645, 0.045, 0.355, 1.0],
            },
        },
        upExit: {
            opacity: 1,
            y: "-150%",
            transition: {
                duration: 1,
            },
        },
        downExit: {
            opacity: 1,
            y: "150%",
            transition: {
                duration: 1,
            },
        },
    };

    const areImagesLoaded = loadedImages.length > 0;

    const handleClick = () => {
        const targetElement = document.getElementById("about");
        if (targetElement) {
            targetElement.scrollIntoView({behavior: "smooth"});
        }
    };

    return (

        <div id="home" className={cn(
            "overflow-hidden h-full w-full relative flex items-center justify-center",
            className
        )}
             style={{
                 perspective: "1000px",
             }}
        >
            <div className="relative flex flex-col z-50 justify-center h-screen">
                <motion.p
                    className="font-bold text-3xl md:max-w-xl md:h-1/2 mx-auto md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-t from-neutral-50 to-secondary py-4">
                    {texts[currentIndex]}
                </motion.p>
                <button
                    onClick={handleClick}
                    className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 group">
                    <span className="inline-block">Explore <span
                        className="inline-block transition-transform duration-300 group-hover:translate-x-1 ">✈️</span></span>
                    <div
                        className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent"/>
                </button>


                {children}
            </div>
            {areImagesLoaded && children}
            {areImagesLoaded && overlay && (
                <div
                    className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
                />
            )}
            {areImagesLoaded && (
                <AnimatePresence initial={false}>
                    <motion.img
                        key={loadedImages[currentIndex]}
                        src={loadedImages[currentIndex]}
                        initial="initial"
                        animate="visible"
                        exit={direction === "up" ? "upExit" : "downExit"}
                        variants={slideVariants}
                        className="absolute inset-0 object-cover w-full h-full"
                    />
                </AnimatePresence>

            )}
            {overlay && (
                <div
                    className={cn("absolute inset-0", overlayClassName)}
                    aria-hidden="true"
                >
                    {overlay}
                </div>
            )}

            <button onClick={handlePrevious} className="absolute z-50 left-4 top-1/2 text-white">
                <Icon icon="ep:arrow-left-bold"/>
            </button>
            <button onClick={handleNext} className="absolute z-50 right-4 top-1/2 text-white">
                <Icon icon="ep:arrow-right-bold"/>
            </button>
        </div>


    );
};