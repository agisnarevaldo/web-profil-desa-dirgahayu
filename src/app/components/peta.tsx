"use client";

import { useState, useRef } from "react";
import { Icon } from "@iconify/react";

interface FullScreenImageProps {
    src: string;
    alt: string;
    className?: string;
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({ src, alt, className }) => {
    const [isFullScreen, setIsFullScreen] = useState(false);
    const imageRef = useRef<HTMLDivElement>(null);

    const toggleFullScreen = () => {
        const element = imageRef.current;

        if (!isFullScreen) {
            if (element?.requestFullscreen) {
                element.requestFullscreen();
            } else if ((element as any)?.mozRequestFullScreen) {
                (element as any).mozRequestFullScreen();
            } else if ((element as any)?.webkitRequestFullscreen) {
                (element as any).webkitRequestFullscreen();
            } else if ((element as any)?.msRequestFullscreen) {
                (element as any).msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if ((document as any).mozCancelFullScreen) {
                (document as any).mozCancelFullScreen();
            } else if ((document as any).webkitExitFullscreen) {
                (document as any).webkitExitFullscreen();
            } else if ((document as any).msExitFullscreen) {
                (document as any).msExitFullscreen();
            }
        }

        setIsFullScreen(!isFullScreen);
    };

    return (
        <div className={className} ref={imageRef} style={{ position: "relative" }}>
            <img src={src} alt={alt} style={{ width: "100%", height: "auto" }} />
            <button
                onClick={toggleFullScreen}
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "rgba(0, 0, 0, 0.5)",
                    border: "none",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                <Icon icon={isFullScreen ? "mingcute:fullscreen-exit-line" : "mingcute:fullscreen-line" } />
            </button>
        </div>
    );
};

export default FullScreenImage;
