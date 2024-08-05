    import {Icon} from "@iconify/react";
    import Link from "next/link";

    const toTop = () => {
        const targetElement = document.getElementById('home');
        if (targetElement) {
            targetElement.scrollIntoView({behavior: 'smooth'});
        }
    }

    export default function ButtonTop () {
        return (
            <button onClick={toTop} className="bg-bg rounded-full p-3 fixed bottom-4 right-4 shadow-lg">
                <Icon className="text-white text-xl font-semibold" icon="iconamoon:arrow-up-1-bold" />
            </button>
        )
    }